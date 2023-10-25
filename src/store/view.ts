import { atom } from "nanostores";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@store/firebase";

const $view = atom<View | undefined>(undefined);
const $label = atom<string>("");

async function getView(id: string, label: string) {
    $label.set(label);
    const view = await getDoc(doc(db, "views", id));
    $view.set({ id: view.id, ...view.data() } as any as View);
    console.log(view.data());
}

interface View {
    id: string;
    label: string;
}

export { $view, $label, getView };