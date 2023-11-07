import { Field } from "@store/types";

function width(fields: Field[]) {
    return fields.map(field => widths[field.type]).join(" ") || "";
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

export { width };
