
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

interface List {
    id: string;
    label: string;
    icon?: string;
    uid: string;
    org: string;
    schema: Record<string, Field>;
    folder?: string;
    time?: boolean;
}

interface Field {
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
    options?: Record<string, string>;
    colors?: Record<string, string>;
    groupable?: boolean;
    defaultOption?: string;
    defaultGroup?: boolean;
}


export { type Folder, type List, type Field }