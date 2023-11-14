<template>
    <div class="flex flex-col h-full">
        <ListHeader label="Setup Folders & Lists" icon="bookmark_manager" :definition="definition" />
        <section class="flex-1 overflow-auto">
            <div>
                <GridHeader :fields="fields" :layout="layout" />
                <GridBody :schema="schema" :items="items" :layout="layout" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useFolderStore } from "@store/folder-store";
    import { ViewDefinition, standardDefinition } from "@store/list-view-definition";
    import ListHeader from "@sections/list/ListHeader.vue";
    import GridHeader from "@sections/list/grid/GridHeader.vue";
    import GridBody from "@sections/list/grid/GridBody.vue";
    import { Field } from "@store/types";
    import { Schema } from "@store/schema";

    const store = useFolderStore();
    const layout = "44px 32px 256px 1fr";

    const definition: ViewDefinition = {
        search: false,
        tabs: standardDefinition.tabs?.slice(0, 1)
    }

    const fields: Field[] = [
        { id: "icon", label: "", type: "icon" },
        { id: "label", label: "Name", type: "text" },
        { id: "share", label: "Sharing", type: "text" },
    ];
    const schema = new Schema(fields);

    // Map the Folders to a ListItem
    const items = computed(() => store.folders.map((item) => ({ 
        id: item.id, 
        icon: "folder",
        label: item.label, 
        children: (item.lists || []).map((list) => ({ 
            id: list.id, 
            icon: "format_list_bulleted", 
            label: list.label,
        }))
    })));

</script>

