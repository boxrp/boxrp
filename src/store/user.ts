import { atom } from "nanostores";
import { getCurrentUser } from "vuefire";
import { collection as col, query, where } from "firebase/firestore";
import { db } from "@store/firebase";
import { useCollection } from "vuefire";

const $uid = atom<string | undefined>(undefined);

// Wait for the user to be loaded
getCurrentUser().then((user) => {
    console.log("uid", user?.uid);
    $uid.set(user?.uid);
});

function getFolders(uid: string) {
    return useCollection(query(col(db, "folder"), where("uid", "==", uid)));
}

export { $uid, getFolders };
