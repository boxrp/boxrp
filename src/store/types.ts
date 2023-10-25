export interface NavItem {
    id: string;
    icon?: string;
    label: string;
    children?: NavItem[];
}

export interface List {
    id: string;
    label: string;
    parent?: string;
    owner: string;
    org: string;
    public?: boolean;
    order?: number;
    icon?: string;
    archived?: number;
    created: number;
    schema: ListSchema;
}

interface ListSchema {}
