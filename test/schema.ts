import { SchemaField, } from "../src/store/schema";
import { Field } from "../src/store/types";

const field: Field = {
    id: "name",
    label: "Name",
    type: "name",
};

console.log(field);

const sf = new SchemaField(field);

console.log(sf);