import { defineStore } from "pinia";
import { ref, computed } from "vue";
// import { doc, getDoc, collection, query, onSnapshot, Unsubscribe } from "firebase/firestore";
// import { db } from "@store/firebase";
// import { List, ListItem } from "./types";
import { Schema } from "./schema";
import { useListStore } from "./list-store";

export const useSchemaStore = defineStore("schema", () => {
    const listStore = useListStore();
    // const $list = ref<List | undefined>(undefined);

    const $schema = computed(() => {
        return listStore.list ? new Schema(listStore.list.fields) : undefined;
    });

    return { schema: $schema };
});
