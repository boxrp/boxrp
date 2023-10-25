import { db } from "./firebase.js";
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 

console.log("Connected to Firebase");

const uid = "q8JJV5WzR4rNdJxjGuqFVhHDWTpU";
const views = [{label: "System Gates"}, {label: "Custom Gates"}, {label: "Commercial Panels & Fencing"}];
const folders = [{label: "Accounting"}, {label: "CRM"}, {label: "Jobs"}]

// Views
const vc = collection(db, 'views');
for (const view of views) {
    view["uid"] = uid;
    let ref = await addDoc(vc, view);
    view["id"] = ref.id;
    console.log(ref.id);
}
// Folders
folders[1]["views"] = views;
const fc = collection(db, 'folders');
for (const folder of folders) {
    folder["uid"] = uid;
    let ref = await addDoc(fc, folder);
    // const vc = collection(ref, 'views');
    // for (const list of views[folder.label] || []) {
    //     list["uid"] = uid;
    //     await addDoc(vc, list);
    // }
    console.log(ref.id);
}

// https://github.com/oven-sh/bun/issues/887