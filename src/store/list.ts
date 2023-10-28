import { atom } from "nanostores";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@store/firebase";
import { subscribe } from "./subscribe";
import { getListItems } from "./list-item";

const $list = atom<List | undefined>(undefined);

// Trigger getList when a list route changes
subscribe("list", (params) => {
    getList(params.id);
    getListItems(params.id);
});

// Get a list from Firestore
async function getList(id: string) {
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
    options?: Record<string, string | { label: string, color?: string}>;
}

export { $list, getList, type List, type Field };




