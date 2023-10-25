import { atom } from "nanostores";
import { collection as col, query, where, onSnapshot } from "firebase/firestore";
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
    const qry = query(col(db, "folders"), where("uid", "==", uid));
    // Listen for updates
    onSnapshot(qry, (snapshot) => {
        const folders: Folder[] = [];
        snapshot.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() };
            console.log(data);
            folders.push(data as any as Folder);
        });
        $folders.set(folders);
    });
}

interface Folder {
    id: string;
    label: string;
    icon?: string;
    views: {
        id: string;
        label: string;
        status?: number;
    }[];
}

export { $folders };
