
interface Folder {
    id: string;
    label: string;
    icon?: string;
    lists: {
        id: string;
        label: string;
        icon?: string;
        status?: number;
    }[];
}

interface NavItem {
    label: string;
    icon?: string;
}

interface List {
    id: string;
    label: string;
    icon?: string;
    uid: string;
    org: string;
    fields: Field[];
    folder?: string;
    time?: boolean;
}

interface Field {
    id: string;
    label: string;
    type:
        | "name"
        | "status"
        | "assigned"
        | "created"
        | "completed"
        | "start"
        | "due"
        | "select"
        | "text"
        | "text area"
        | "date"
        | "today"
        | "number"
        | "money"
        | "boolean"
        | "email"
        | "label"
        | "address"
        | "accounts"
        | "progress"
        | "phone"
        | "priority"
        | "rating"
        | "website"
        | "relationship"
        | "formula";
    required?: boolean;
    max?: number;
    min?: number;
    relationship?: string;
    options?: Option[];

    // // Calculated
    // cached?: {
    //     options?: Record<string, Option>
    // }
}

interface Option {
    id: string;
    value: string;
    color?: string;
    default?: boolean;
}

export { type Folder, type List, type Field, type NavItem, type Option }