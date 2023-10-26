import { db } from "./firebase.js";
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 

console.log("Connected to Firebase");

const uid = "q8JJV5WzR4rNdJxjGuqFVhHDWTpU";
const folders = [
    {label: "CRM", order: 2},
    {label: "Jobs", order: 1},
    {label: "Accounting", order: 3}, 
]

// const folders = [
//     {label: "CRM", order: 2, lists: [{label: "Contacts", icon: "person"}, {label: "System Gates", icon: "filter_list"}, {label: "Custom Gates", icon: "filter_list"}, {label: "Commercial Panels & Fencing", icon: "filter_list"}]}, 
//     {label: "Jobs", order: 1, lists: [{label: "Quotes"}, {label: "Active Jobs"}]},
//     {label: "Accounting", order: 3, lists: [{label: "Invoices", icon: "draft"}, {label: "Purchase Orders", icon: "draft"}]}, 
// ]

// Folders
const fcol = collection(db, 'folders');
const lcol = collection(db, 'lists');

for (const folder of folders) {
    folder["uid"] = uid;
    let ref = await addDoc(fcol, folder);
    folder["id"] = ref.id;
}

const list = {
    label: 'Active Jobs',
    uid: uid,
    org: uid,
    folder: folders[1].id,
    schema: [
        {id: "A", label: "Job", type: "name", required: true},
        {id: "C", label: "Description", type: "text"},
        {id: "D", label: "Start Date", type: "start"},
        {id: "E", label: "Finish", type: "due"},
        {id: "F", label: "Who", type: "accounts", max: 1},
        {id: "G", label: "Status", type: "status"},
        {id: "H", label: "Materials Available", type: "boolean"},
        {id: "I", label: "Drawings", type: "boolean"},
    ],
};
let ref = await addDoc(lcol, list);


console.log("done");
process.exit();

// https://github.com/oven-sh/bun/issues/887