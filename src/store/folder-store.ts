import { defineStore } from 'pinia'
import { ref, watch } from 'vue';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "@store/firebase";
import { useUserStore } from "./user-store";
import { Folder } from "./types";

const foldersRef = collection(db, "folders");
const listsRef = collection(db, "lists");

export const useFolderStore = defineStore('folder', () => {

    const $folders = ref<Folder[]>([]);
    const $edit = ref({
        selected: "",
    });
  
    async function fetchFolders(uid: string) {
        const folders: Record<string, Folder> = {};
        // Get the folders
        let qry = query(foldersRef, where("uid", "==", uid), orderBy("order"));
        let snapshot = await getDocs(qry);
        snapshot.forEach((doc) => {
            folders[doc.id] = { id: doc.id, lists: [], ...doc.data() } as any as Folder;
        });
        // Get the lists
        qry = query(listsRef, where("folder", "in", Object.keys(folders)), orderBy("label"));
        snapshot = await getDocs(qry);
        snapshot.forEach((doc) => {
            const { folder, label, icon } = doc.data();
            folders[folder].lists.push({ id: doc.id, label, icon });
        });        
        $folders.value = Object.values(folders);
    }

    // Watch for changes to the user, and fetch their folders when it does, i.e. login
    const userStore = useUserStore();
    watch(() => userStore.user, (user) => {
        if (user) {
            fetchFolders(user.uid);
        }
    });

    return { fetchFolders, folders: $folders, edit: $edit }
  });