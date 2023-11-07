import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { doc, getDoc, collection, query, onSnapshot, Unsubscribe } from "firebase/firestore";
import { db } from "@store/firebase";
import { List, ListItem, Field } from "./types";
import { useRoute } from "vue-router";
import { Schema } from "./schema";

export const useListStore = defineStore("list", () => {
    const $list = ref<List | undefined>(undefined);
    const $items = ref<ListItem[]>([]);
    const $group = ref<string | undefined>(undefined);

    // Watch for changes in the route that trigger a new list load
    const route = useRoute();
    watch(
        () => route.params.id,
        (newId, oldId) => {
            if (route.name === "list" && newId !== oldId) {
                fetchList(newId as string);
                fetchListItems(newId as string);
            }
        },
        { immediate: false }
    );

    async function fetchList(id: string) {
        console.log("Fetch list", id);
        const document = await getDoc(doc(db, "lists", id));
        const data = document.data();
        if (data) {
            $list.value = { id: document.id, ...data } as any as List;
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
        $group.value = group;
    }

    const $grouped = computed(() => {
        if ($group.value) {
            const field = $schema.value?.fields.find((field) => field.id === $group.value);
            return field ? field.group($items.value) : [];
        }
        return [];
    });

    const $schema = computed(() => {
        return $list.value ? new Schema($list.value.fields) : undefined;
    });

    return { fetchList, fetchListItems, list: $list, items: $items, setGroup, group: $group, grouped: $grouped, schema: $schema };
});
