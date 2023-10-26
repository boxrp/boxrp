import { atom } from "nanostores";
import { getCurrentUser } from "vuefire";

const $uid = atom<string | undefined>(undefined);

// Wait for the user to be loaded
getCurrentUser().then((user) => {
    console.log("uid", user?.uid);
    $uid.set(user?.uid);
});

interface User {
    id: string;
    uid: string;
    email: string;
    name: string;
}

export { $uid };
