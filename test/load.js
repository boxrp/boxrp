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
const fref = collection(db, 'folders');
const lref = collection(db, 'lists');

for (const folder of folders) {
    folder["uid"] = uid;
    let ref = await addDoc(fref, folder);
    folder["id"] = ref.id;
    console.log("Folder", ref.id)
}

const list = {
    label: 'Active Jobs',
    uid: uid,
    org: uid,
    folder: folders[1].id,
    schema: [
        {id: "site", label: "Job", type: "name", required: true},
        {id: "description", label: "Description", type: "text"},
        {id: "start_date", label: "Start Date", type: "start"},
        {id: "finish", label: "Finish", type: "due"},
        {id: "who", label: "Who", type: "accounts", max: 1},
        {id: "status", label: "Status", type: "status"},
        {id: "materials", label: "Materials", type: "boolean"},
        {id: "drawings", label: "Drawings", type: "boolean"},
    ],
};
let ref = await addDoc(lref, list);
console.log("List", ref.id)
const iref = collection(ref, 'list-items');

const items = [
    {
      "site": "Wild Waves Theme & Water Park",
      "description": "Design, develop, and build a new water slide complex.",
      "start_date": "2023-11-15",
      "finish": "2024-02-07",
      "who": "John Doe",
      "status": "In Progress",
      "materials": true,
      "drawings": false
    },
    {
      "site": "Great Wolf Lodge Grand Mound",
      "description": "Install new wave pool technology.",
      "start_date": "2023-11-22",
      "finish": "2024-02-14",
      "who": "Jane Doe",
      "status": "Pending",
      "materials": true,
      "drawings": false
    },
    {
      "site": "Seattle Center Armory",
      "description": "Build a new indoor water park.",
      "start_date": "2023-11-29",
      "finish": "2024-02-21",
      "who": "Peter Smith",
      "status": "Completed",
      "materials": true,
      "drawings": false
    },
    {
      "site": "Federal Way Aquatic Center",
      "description": "Renovate the existing swimming pool and add a new water slide.",
      "start_date": "2023-12-06",
      "finish": "2024-02-28",
      "who": "Mary Jones",
      "status": "In Progress",
      "materials": true,
      "drawings": false
    },
    {
      "site": "Bellevue Downtown Park",
      "description": "Construct a new splash pad for children.",
      "start_date": "2023-12-13",
      "finish": "2024-03-06",
      "who": "Susan Brown",
      "status": "Pending",
      "materials": true,
      "drawings": false
    }
  ]
  
  
for (const item of items) {
    let ref = await addDoc(iref, item);
    console.log("Item", ref.id)
}




console.log("done");
process.exit();

// https://github.com/oven-sh/bun/issues/887