import { db } from "./firebase.js";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

console.log("Connected to Firebase");

const uid = "q8JJV5WzR4rNdJxjGuqFVhHDWTpU";
const spaces = [
    { label: "CRM", icon: "face", order: 2 },
    { label: "Jobs", order: 1 },
    { label: "Accounting", icon: "account_balance", order: 3 },
    { label: "CMS", icon: "cloud_upload", order: 4 },
    { label: "Stock", icon: "inventory_2", order: 5 },
]

// Folders
const fref = collection(db, 'spaces');

for (const space of spaces) {
    space["uid"] = uid;
    const ref = await addDoc(fref, space);
    space.id = ref.id;
    console.log("Space", space.id)
}

const crm = spaces[0];
const lists = ["Leads", "Deals", "Contacts", "Accounts"];
for (const list of lists) {
    const lref = collection(db, 'lists');
    let ref = await addDoc(lref, { label: list, uid: uid, org: uid, space: crm.id });
    console.log("List", ref.id)
}

const jobs = spaces[1];

const list = {
    label: 'Active Jobs',
    uid: uid,
    org: uid,
    space: jobs.id,
    fields: [
        { id: "name", label: "Job", type: "name", required: true },
        { id: "B", label: "Description", type: "text" },
        { id: "start", label: "Start Date", type: "start" },
        { id: "due", label: "Finish", type: "due" },
        { id: "assigned", label: "Who", type: "accounts", max: 1 },
        { 
            id: "status", label: "Status", type: "status", groupable: true, required: true, defaultOption: "P", defaultGroup: true,
            options: [ { id: "P", value: "Pending", color: "#5f55ee" }, { id: "I", value: "In Progress", color: "#4466ff" }, { id: "C", value: "Completed", color: "#1090e0" } ],
        },
        { id: "G", label: "Materials", type: "boolean", groupable: true },
        { id: "H", label: "Drawings", type: "boolean", groupable: true },
    ],
};

const lref = collection(db, 'lists');
let ref = await addDoc(lref, list);
console.log("List", ref.id)
const iref = collection(ref, 'list-items');

const items = [
    {
        name: "Wild Waves Theme & Water Park",
        B: "Design, develop, and build a new water slide complex.",
        start: 1700006400,
        due: 1707264000,
        assigned: "John Doe",
        status: "I",
        G: true,
        H: false
    },
    {
        name: "Great Wolf Lodge Grand Mound",
        B: "Install new wave pool technology.",
        start: 1700611200,
        due: 1707868800,
        assigned: "Jane Doe",
        status: "P",
        G: false,
        H: false
    },
    {
        name: "Seattle Center Armory",
        B: "Build a new indoor water park.",
        start: 1701216000,
        due: 1708473600,
        assigned: "Peter Smith",
        status: "C",
        G: false,
        H: false
    },
    {
        name: "Federal Way Aquatic Center",
        B: "Renovate the existing swimming pool and add a new water slide.",
        start: 1701820800,
        due: 1709078400,
        assigned: "Mary Jones",
        status: "I",
        G: true,
        H: true
    },
    {
        name: "Bellevue Downtown Park",
        B: "Construct a new splash pad for children.",
        start: 1702425600,
        due: 1709683200,
        assigned: "Susan Brown",
        status: "P",
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