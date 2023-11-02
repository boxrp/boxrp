import { atom, computed } from "nanostores";
import { doc, getDoc, collection, query, onSnapshot, Unsubscribe } from "firebase/firestore";
import { db } from "@store/firebase";
import { subscribe } from "./subscribe";
import { List, ListItem, Option } from "./types";
import { SchemaList, Schema, SchemaField } from "./schema";

// Trigger getList when a list route changes
subscribe("list", (params) => {
    fetchList(params.id);
    fetchListItems(params.id);
});

/**
 * List
 */

// The current last data
const $list = atom<SchemaList | undefined>(undefined);
// The id of the field that is the current group
const $group = atom<SchemaField | undefined>(undefined);


// Get a list from Firestore
async function fetchList(id: string) {
    const document = await getDoc(doc(db, "lists", id));
    const data = document.data();
    if (data) {
        const list: List = { id: document.id, ...data } as any as List;
        const schema = new Schema(list.fields);
        $list.set({...list, schema} as SchemaList);     
        $group.set(schema.find("status"));
    }
}

/**
 * List Items
 */


const $items = atom<ListItem[]>([]);

// Group the items into columns by the current group
const $grouped = computed([$items, $group], (items, groupField) => {
    return groupField ? groupField.group(items) : [];
});



// Get the items from firestore
let unsubscribe: Unsubscribe | undefined;
async function fetchListItems(listId: string) {
    // Unsubscribe from any previous list
    if (unsubscribe) {
        unsubscribe();
    }
    const itemsRef = collection(db, "lists", listId, "list-items");
    const q = query(itemsRef);
    unsubscribe = onSnapshot(q, (snapshot) => {
        const items: ListItem[] = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            items.push({ id: doc.id, ...data });
        });
        $items.set(items);
    });
}

export { $list, $group, $items, $grouped, fetchList, type ListItem };
