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
    icon?: string;
    uid: string;
    org: string;
    schema: Field[];
    folder?: string
    time?: boolean;
}

interface Field {
    id: string;
    label: string;
    type: 
        "name" | "status" | "assigned" | "created" | "completed" | "start" | "due" |
        "select" | "text" | "text area" | "date" | "today" | "number" |  "money" | "boolean" | "email" | "label" | "address" | "accounts" | "progress" | "phone" | "priority" | "rating" | "website" | "relationship" | "formula";
    required?: boolean;
    max?: number;
    min?: number;
    relationship?: string;
    options?: Option[];
}

interface Option {
    id: string;
    label: string;
    color?: string;
}


export { $list, $label, getList };




