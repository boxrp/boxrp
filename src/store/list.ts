import { atom, computed } from "nanostores";
import { doc, getDoc, collection, query, onSnapshot, Unsubscribe } from "firebase/firestore";
import { db } from "@store/firebase";
import { subscribe } from "./subscribe";
import { List } from "./types";

const $list = atom<List | undefined>(undefined);
const $group = atom<string>("");
const $groups = computed($list, list => {
    const groups: Record<string, string> = {};
    if (list) {
        // Filter the schema down to just the groupable fields and add their labels to the groups object
        Object.entries(list.schema).filter(([, field]) => field.groupable).forEach(([key, field]) => { groups[key] = field.label; });
    }
    return groups;
});
const $currentGroupOptions = computed([$list, $group], (list, group) => {
    return {
        options: list?.schema[group]?.options,
        colors: list?.schema[group]?.colors,
    };
});

type ListItem = Record<string, any>;

const $items = atom<ListItem[]>([]);

// Group the items into columns by the current group
const $groupedItems = computed([$items, $group], (items, group) => {
    const columns: Record<string, ListItem[]> = {};
    items.forEach(item => {
        const value = item[group];
        if (!columns[value]) {
            columns[value] = [];
        }
        columns[value].push(item);
    });
    return columns;
});








// Trigger getList when a list route changes
subscribe("list", (params) => {
    fetchList(params.id);
    fetchListItems(params.id);
});

// Get a list from Firestore
async function fetchList(id: string) {
    const document = await getDoc(doc(db, "lists", id));
    const data = document.data();
    if (data) {
        const list: List = { id: document.id, ...data } as any as List;
        $list.set(list);
        //TODO: fix hack
        $group.set("F");
    }
}

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

export { $list, $group, $groups, $currentGroupOptions, $items, $groupedItems, fetchList, type ListItem };
