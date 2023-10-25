import { db } from "./firebase.js";
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 

console.log("Connected to Firebase");

const fc = collection(db, 'folders');

const uid = "WHMbuKa1gMN3rHWwApglte6aB4B7";
const folders = [
    {label: "Accounting"}, 
    {label: "CRM", views: [{label: "System Gates"}, {label: "Custom Gates"}, {label: "Commercial Panels & Fencing"}]}, 
    {label: "Jobs"}]

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