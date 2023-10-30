import { db } from "./firebase.js";
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 

console.log("Connected to Firebase");

const uid = "q8JJV5WzR4rNdJxjGuqFVhHDWTpU";
const folders = [
    {label: "CRM", order: 2},
    {label: "Jobs", order: 1},
    {label: "Accounting", order: 3}, 
]

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
    schema: {
        A: {label: "Job", type: "name", required: true},
        B: {label: "Description", type: "text"},
        C: {label: "Start Date", type: "start"},
        D: {label: "Finish", type: "due" },
        E: {label: "Who", type: "accounts", max: 1},
        F: {label: "Status", type: "status", groupable: true, required: true, defaultOption: "P", defaultGroup: true,
            options: {  "P": "Pending",     "I": "In Progress",     "C": "Completed" },
            colors: {   "P": "#d6d3d1",     "I": "#dbeafe",         "C": "#dcfce7" }
        },
        G: {label: "Materials", type: "boolean", groupable: true},
        H: {label: "Drawings", type: "boolean", groupable: true},
    },
};
let ref = await addDoc(lref, list);
console.log("List", ref.id)
const iref = collection(ref, 'list-items');

list.label = "Quotes";
list.schema.A.label = "Quote";
await addDoc(lref, list);

const items = [
    {
      A: "Wild Waves Theme & Water Park",
      B: "Design, develop, and build a new water slide complex.",
      C: 1700006400,
      D: 1707264000,
      E: "John Doe",
      F: "I",
      G: true,
      H: false
    },
    {
      A: "Great Wolf Lodge Grand Mound",
      B: "Install new wave pool technology.",
      C: 1700611200,
      D: 1707868800,
      E: "Jane Doe",
      F: "P",
      G: false,
      H: false
    },
    {
      A: "Seattle Center Armory",
      B: "Build a new indoor water park.",
      C: 1701216000,
      D: 1708473600,
      E: "Peter Smith",
      F: "C",
      G: false,
      H: false
    },
    {
      A: "Federal Way Aquatic Center",
      B: "Renovate the existing swimming pool and add a new water slide.",
      C: 1701820800,
      D: 1709078400,
      E: "Mary Jones",
      F: "I",
      G: true,
      H: true
    },
    {
      A: "Bellevue Downtown Park",
      B: "Construct a new splash pad for children.",
      C: 1702425600,
      D: 1709683200,
      E: "Susan Brown",
      F: "P",
      G: true,
      H: true
    }
  ]
  
  
for (const item of items) {
    let ref = await addDoc(iref, item);
    console.log("Item", ref.id)
}




console.log("done");
process.exit();

// https://github.com/oven-sh/bun/issues/887