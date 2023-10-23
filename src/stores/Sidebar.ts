import { defineStore } from "pinia";
import { ref, computed } from "vue";

const useSidebarStore = defineStore("sidebar", () => {
    const folders = ref(FOL);
    // const doubleCount = computed(() => count.value * 2);
    // function increment() {
    //     count.value++;
    // }

    return { folders };
});

interface NavItem {
    id: string;
    icon?: string;
    label: string;    
    children?: NavItem[];
}

const staticNavItems: Record<string, NavItem[]> = {
    top: [
        { id: "home", icon: "home", label: "Home" },
        { id: "tasks", icon: "task_alt", label: "Tasks" },
    ],
    bottom: [
        { id: "settings", icon: "settings", label: "Settings" },
        { id: "logout", icon: "logout", label: "Logout" },
    ],
};

const FOL: NavItem[] = [
    { id: "1", icon: "folder", label: "CRM", children: [ {id:"10", icon: "format_list_bulleted", label: "Active Jobs"} ] },
    { id: "2", icon: "folder", label: "Jobs" },
]



export { useSidebarStore, staticNavItems, type NavItem }