import { defineStore } from "pinia";
import { ref } from "vue";

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
    {
        id: "1",
        icon: "location_away",
        label: "CRM",
        children: [
            { id: "10", icon: "format_list_bulleted", label: "System Gates" },
            { id: "11", icon: "format_list_bulleted", label: "Custom Gates" },
            { id: "12", icon: "format_list_bulleted", label: "Commercial Fencing & Panels" },
        ],
    },
    { id: "2", icon: "folder", label: "Jobs", children: [{ id: "100", icon: "format_list_bulleted", label: "Active Jobs" }] },
    {
        id: "3",
        icon: "account_balance",
        label: "Accounting",
        children: [
            { id: "10", icon: "format_list_bulleted", label: "Contacts" },
            { id: "10", icon: "format_list_bulleted", label: "Invoices" },
            { id: "11", icon: "format_list_bulleted", label: "Bills" },
            { id: "12", icon: "format_list_bulleted", label: "Purchase Orders" },
        ],
    },
];

export { useSidebarStore, staticNavItems, type NavItem };
