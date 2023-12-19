interface ViewDefinition {
    viewActions?: Action[];
    search?: boolean;
    tabs?: Tab[];
    primaryAction?: Action;
    secondaryAction?: Action;
}

interface Action {
    id: string;
    label: string;
    icon: string;
}

interface Tab {
    id: string;
    icon: string;
    actions: Action[];
}

const standardViewActions: Action[] = [
    { id: "share", label: "Share", icon: "share" },
    { id: "export", label: "Export", icon: "exit_to_app" },
    { id: "customise", label: "Customise", icon: "settings" },
];

const add = { id: "add", label: "Add", icon: "add" };
const wrap = { id: "wrap", label: "Wrap Text", icon: "format_text_wrap" };
const promote = { id: "promote", label: "Move Up", icon: "vertical_align_top" };
const demote = { id: "demote", label: "Move Down", icon: "vertical_align_bottom" };
const del = { id: "delete", label: "Delete", icon: "delete" };
const schema = { id: "schema", label: "Fields", icon: "splitscreen_add" };

const standardTabs: Tab[] = [
    { id: "grid", icon: "table", actions: [add, wrap, promote, demote, del, schema] },
    { id: "board", icon: "view_kanban", actions: [add, promote, demote, del] },
    { id: "calendar", icon: "calendar_month", actions: [add, promote, demote, del] },
    { id: "timeline", icon: "view_timeline", actions: [add, promote, demote, del] },
    { id: "form", icon: "assignment", actions: [add, wrap, demote, del] },
];

const standardDefinition: ViewDefinition = {
    viewActions: standardViewActions,
    search: true,
    tabs: standardTabs,
    primaryAction: { id: "add", label: "Add", icon: "add" },
    secondaryAction: { id: "filter", label: "Filter", icon: "filter_list" },
};

export { type ViewDefinition, type Tab, type Action, standardDefinition };
