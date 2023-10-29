import { Field, List } from "@store/list";

function columns(list: List): Column[] {
    const columns: Column[] = [];
    for (const field of list.schema) {
        columns.push({
            ...field,
            width: fields[field.type],
        });
    }
    return columns;
}

interface Column extends Field {
    width: string;
}

const MIN = "80px";
const DATE = "120px";
const STANDARD = "240px";
const FILL = "1fr";

const fields = {
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
