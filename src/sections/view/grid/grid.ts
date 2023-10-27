import { Field } from "@store/list";

function columns(schema: Field[]) {
    const columns = [];
    for (const field of schema) {
        columns.push(fields[field.type] || MIN);
    }
    console.log(columns);
    return columns.join(" ");
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
    "formula": STANDARD
};

export { columns };