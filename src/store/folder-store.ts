import { defineStore } from 'pinia'
import { ref } from 'vue';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "@store/firebase";
import { $uid } from "./user";
import { Folder } from "./types";

// Wait for the user to be loaded
$uid.listen((uid) => {
    if (uid) {
        useFolderStore().getFolders(uid);
    }
});

const foldersRef = collection(db, "folders");
const listsRef = collection(db, "lists");

export const useFolderStore = defineStore('folder', () => {

    const folders = ref<Folder[]>([]);
  
    async function getFolders(uid: string) {
        const foldersMap: Record<string, Folder> = {};
        // Get the folders
        let qry = query(foldersRef, where("uid", "==", uid), orderBy("order"));
        let snapshot = await getDocs(qry);
        snapshot.forEach((doc) => {
            foldersMap[doc.id] = { id: doc.id, lists: [], ...doc.data() } as any as Folder;
        });
        // Get the lists
        qry = query(listsRef, where("folder", "in", Object.keys(foldersMap)), orderBy("label"));
        snapshot = await getDocs(qry);
        snapshot.forEach((doc) => {
            const { folder, label, icon } = doc.data();
            foldersMap[folder].lists.push({ id: doc.id, label, icon });
        });        
        folders.value = Object.values(foldersMap);
    }

    return { getFolders, folders }
  })