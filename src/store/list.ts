import { defineStore } from "pinia";
import { ref } from "vue";

const useListStore = defineStore("list", () => {
    const folders = ref(0);

    return { folders };
});

export { useListStore };
