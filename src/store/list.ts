import { atom } from "nanostores";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@store/firebase";

const $list = atom<List | undefined>(undefined);
const $label = atom<string>("");

async function getList(id: string, label: string) {
    $label.set(label);
    const list = await getDoc(doc(db, "lists", id));
    $list.set({ id: list.id, ...list.data() } as any as List);
}

interface List {
    id: string;
    label: string;
}

export { $list, $label, getList };