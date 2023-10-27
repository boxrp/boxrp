import { atom } from "nanostores";
import { collection, query, onSnapshot, Unsubscribe } from "firebase/firestore";
import { db } from "@store/firebase";

const $items = atom<ListItem[]>([]);
let unsubscribe: Unsubscribe | undefined;

function getListItems(id: string) {
    // Unsubscribe from any previous list
    if (unsubscribe) {
        unsubscribe();
    }
    const itemsRef = collection(db, "lists", id, "list-items");
    const q = query(itemsRef);
    unsubscribe = onSnapshot(q, (snapshot) => {
        const items: ListItem[] = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
                id: doc.id,
                fields: data.fields
            });
        });
        $items.set(items);
        console.log("Items update", id);
    });
}

interface ListItem {
    id: string;
    fields: Record<string, any>
}

export { $items, getListItems };




