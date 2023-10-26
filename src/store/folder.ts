import { atom } from "nanostores";
import { collection as col, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@store/firebase";
import { $uid } from "./user";

const $folders = atom<Folder[]>([]);

// Wait for the user to be loaded
$uid.listen((uid) => {
    if (uid) {
        getFolders(uid);
    }
});

function getFolders(uid: string) {
    const qry = query(col(db, "folders"), where("uid", "==", uid), orderBy("order"));
    // Listen for updates
    onSnapshot(qry, (snapshot) => {
        const folders: Folder[] = [];
        snapshot.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() };
            folders.push(data as any as Folder);
        });
        $folders.set(folders);
    });
}

interface Folder {
    id: string;
    label: string;
    icon?: string;
    lists: {
        id: string;
        label: string;
        status?: number;
    }[];
}

export { $folders };
