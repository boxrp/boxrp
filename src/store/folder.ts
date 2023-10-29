import { atom } from "nanostores";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "@store/firebase";
import { $uid } from "./user";

const $folders = atom<Folder[]>([]);

// Wait for the user to be loaded
$uid.listen((uid) => {
    if (uid) {
        getFolders(uid);
    }
});

const foldersRef = collection(db, "folders");
const listsRef = collection(db, "lists");

async function getFolders(uid: string) {
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
    $folders.set(Object.values(folders));
}

interface Folder {
    id: string;
    label: string;
    icon?: string;
    lists: {
        id: string;
        label: string;
        icon?: string;
        status?: number;
    }[];
}

export { $folders };
