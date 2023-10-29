import { atom } from "nanostores";
import { collection, query, onSnapshot, Unsubscribe } from "firebase/firestore";
import { db } from "@store/firebase";

const $items = atom<Record<string, any>[]>([]);
let unsubscribe: Unsubscribe | undefined;

async function getListItems(listId: string) {
    // Unsubscribe from any previous list
    if (unsubscribe) {
        unsubscribe();
    }
    const itemsRef = collection(db, "lists", listId, "list-items");
    const q = query(itemsRef);
    unsubscribe = onSnapshot(q, (snapshot) => {
        const items: Record<string, any>[] = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            items.push({ id: doc.id, ...data });
        });
        $items.set(items);
    });
}

export { $items, getListItems };
