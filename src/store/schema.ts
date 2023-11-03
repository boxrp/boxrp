import { Field, List, Option, ListItem } from "./types";

interface SchemaList extends List {
    schema: Schema;
}

// https://stackoverflow.com/questions/53128744/typescript-automatically-get-interface-properties-in-a-class
interface SchemaField extends Field { }
class SchemaField {
    private optionsCache: Map<string, Option>;
    
    constructor(field: Field) {
        Object.assign(this, field);
        this.optionsCache = field.options ? new Map(field.options.map(option => [option.id, option])) : new Map();
    }

    get isDate() {
        return types[this.type]?.date || false;
    }

    get isGroupable() {
        return types[this.type]?.group || false;
    }

    option(id: string) {
        return this.optionsCache.get(id);
    }

    // Group a list of ListItem by this field
    group(items: ListItem[]) {
        const other: ListItem[] = [];
        const fieldKey = this.id;
        const optionKeys: [string, ListItem[]][] = Array.from(this.optionsCache.keys()).map(key => [ key, []])
        const groups: Map<string, ListItem[]> = new Map(optionKeys);
        for (const item of items) {
            const key = item[fieldKey];
            (groups.get(key) || other).push(item);
        }
        return Array.from(groups.keys()).map(key => { 
            return {
                option: this.option(key),
                items: groups.get(key)
            }
        });
    }

}

class Schema {
    constructor(fields?: Field[]) {
        this.fields = fields ? fields.map(field => new SchemaField(field)) : [];
    }

    fields: SchemaField[];

    // Get the fields that can be grouped on
    get groupable() {
        return this.fields.filter(field => field.isGroupable);
    }

    find(id: string) {
        return this.fields.find(field => field.id === id);
    }

}

export { type SchemaList, Schema, SchemaField };


const types: Record<string, { date: boolean, group: boolean }> = {
    "name": { date: false, group: false },
    "status": { date: false, group: true },
    "assigned": { date: false, group: true },
    "created": { date: true, group: true },
    "completed": { date: true, group: true },
    "start": { date: true, group: true },
    "due": { date: true, group: true },
    "select": { date: false, group: true },
    "text": { date: false, group: false },
    "text area": { date: false, group: false },
    "date": { date: true, group: true },
    "today": { date: true, group: true },
    "number": { date: false, group: false },
    "money": { date: false, group: false },
    "boolean": { date: false, group: true },
    "email": { date: false, group: false },
    "label": { date: false, group: true },
    "address": { date: false, group: false },
    "accounts": { date: false, group: false },
    "progress": { date: false, group: false },
    "phone": { date: false, group: false },
    "priority": { date: false, group: true },
    "rating": { date: false, group: true },
    "website": { date: false, group: false },
    "relationship": { date: false, group: false },
    "formula": { date: false, group: false }
};

