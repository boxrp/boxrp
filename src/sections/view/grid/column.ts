import { Field, List } from "@store/types";

function columns(list: List): Column[] {
    const columns: Column[] = [];
    for (const id of Object.keys(list.schema)) {
        const field = list.schema[id];
        columns.push({
            id,
            ...field,
            width: widths[field.type],
        });
    }
    return columns;
}

interface Column extends Field {
    id: string;
    width: string;
}

const MIN = "80px";
const DATE = "120px";
const STANDARD = "240px";
const FILL = "1fr";

const widths = {
    "name": FILL,
    "status": FILL,
    "assigned": FILL,
    "created": DATE,
    "completed": DATE,
    "start": DATE,
    "due": DATE,
    "select": FILL,
    "text": FILL,
    "text area": FILL,
    "date": DATE,
    "today": DATE,
    "number": STANDARD,
    "money": STANDARD,
    "boolean": MIN,
    "email": FILL,
    "label": FILL,
    "address": FILL,
    "accounts": FILL,
    "progress": FILL,
    "phone": FILL,
    "priority": FILL,
    "rating": STANDARD,
    "website": FILL,
    "relationship": FILL,
    "formula": STANDARD,
};

export { columns, type Column };
