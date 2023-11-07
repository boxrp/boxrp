interface ViewDefinition {
    viewActions: Action[];
    search: boolean;
    tabs: Tab[];
    primaryAction: Action;
    secondaryAction: Action;
}

interface Action {
    id: string;
    label: string;
    icon: string;
}

interface Tab {
    id: string, 
    actions: Action[] 
    filters: string[]
}

const standardViewActions: Action[] = [
    { id: 'share', label: 'Share', icon: 'share' },
    { id: 'export', label: 'Export', icon: 'exit_to_app' },
    { id: 'customise', label: 'Customise', icon: 'settings' }
];

const lines = { id: 'lines', label: 'Grid Lines', icon: 'border_inner' };
const wrap = { id: 'wrap', label: 'Wrap Text', icon: 'format_text_wrap' };
const promote = { id: 'promote', label: 'Move Up', icon: 'upgrade' };
const demote = { id: 'demote', label: 'Move Down', icon: 'upgrade' };
const del = { id: 'delete', label: 'Delete', icon: 'delete' };

const standardFilters = ["group", "filter", "assigned", "closed"];

const standardTabs: Tab[] = [
    { id: 'grid', actions: [lines, wrap, promote, demote, del], filters: standardFilters },
    { id: 'board', actions: [lines, wrap, promote, demote, del], filters: standardFilters },
    { id: 'calendar', actions: [lines, wrap, promote, demote, del], filters: standardFilters },
    { id: 'timeline', actions: [lines, wrap, promote, demote, del], filters: standardFilters },
];

const standardDefinition: ViewDefinition = {
    viewActions: standardViewActions,
    search: true,
    tabs: standardTabs,
    primaryAction: { id: 'add', label: 'Add', icon: 'add' },
    secondaryAction: { id: 'filter', label: 'Filter', icon: 'filter_list' }
};

export { type ViewDefinition, standardDefinition}
