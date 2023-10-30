import { atom, computed } from "nanostores";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@store/firebase";
import { subscribe } from "./subscribe";
import { getListItems } from "./list-item";
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


// Trigger getList when a list route changes
subscribe("list", (params) => {
    fetchList(params.id);
    getListItems(params.id);
});

// Get a list from Firestore
async function fetchList(id: string) {
    const document = await getDoc(doc(db, "lists", id));
    const data = document.data();
    if (data) {
        const list: List = { id: document.id, ...data } as any as List;
        $list.set(list);
        $group.set("F");
    }
}



export { $list, $group, $groups, $currentGroupOptions, fetchList };
