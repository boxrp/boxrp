import { defineStore } from "pinia";
import { ref } from "vue";

export const useListUiStore = defineStore("listui", () => {
    const $schemaDialog = ref(false);

    function action(action: string, id?:string) {
        $schemaDialog.value = true;
    }    

    return {schemaDialog: $schemaDialog, action };
});

