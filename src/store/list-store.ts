import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import { doc, getDoc, collection, query, onSnapshot, Unsubscribe } from "firebase/firestore";
import { db } from "@store/firebase";
import { List, ListItem } from "./types";
import { Schema, SchemaList, SchemaField } from "./schema";

export const useListStore = defineStore('list', () => {

    const $list = ref<SchemaList | undefined>(undefined);
    const $items = ref<ListItem[]>([]);  
    const $group = ref<SchemaField | undefined>(undefined); 

    async function fetchList(id: string) {
        console.log("Fetch list", id);
        const document = await getDoc(doc(db, "lists", id));
        const data = document.data();
        if (data) {
            const list: List = { id: document.id, ...data } as any as List;
            const schema = new Schema(list.fields);
            $list.value = { ...list, schema };
            // TODO: Make this configurable
            setGroup("status");
        }
    }

    let unsubscribe: Unsubscribe | undefined;
    async function fetchListItems(id: string) {
        console.log("Fetch list items", id);
        // Unsubscribe from any previous list
        if (unsubscribe) {
            unsubscribe();
        }
        const itemsRef = collection(db, "lists", id, "list-items");
        const q = query(itemsRef);
        unsubscribe = onSnapshot(q, (snapshot) => {
            const items: ListItem[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                items.push({ id: doc.id, ...data });
            });
            $items.value = items;
        });
    }

    function setGroup(group: string) {
        $group.value = $list.value?.schema.find(group);
    }

    const $grouped = computed(() => {
        return $group.value ? $group.value.group($items.value) : undefined;
    });    

    return { fetchList, fetchListItems, list: $list, items: $items, setGroup, group: $group, grouped: $grouped }
});
