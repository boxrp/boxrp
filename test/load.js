import { db } from "./firebase.js";
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 

console.log("Connected to Firebase");

const uid = "q8JJV5WzR4rNdJxjGuqFVhHDWTpU";
const folders = [
    {label: "CRM", order: 2, lists: [{label: "Contacts", icon: "person"}, {label: "System Gates", icon: "filter_list"}, {label: "Custom Gates", icon: "filter_list"}, {label: "Commercial Panels & Fencing", icon: "filter_list"}]}, 
    {label: "Jobs", order: 1, lists: [{label: "Quotes"}, {label: "Active Jobs"}]},
    {label: "Accounting", order: 3, lists: [{label: "Invoices", icon: "draft"}, {label: "Purchase Orders", icon: "draft"}]}, 
]

// Folders
const fcol = collection(db, 'folders');
const vcol = collection(db, 'lists');

for (const folder of folders) {
    for (const view of folder.lists) {
        view["uid"] = uid;
        let ref = await addDoc(vcol, view);
        view["id"] = ref.id;
    }

    folder["uid"] = uid;
    let ref = await addDoc(fcol, folder);
}

console.log("done");


// https://github.com/oven-sh/bun/issues/887