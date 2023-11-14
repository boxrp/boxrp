import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "@store/firebase";
import { useUserStore } from "./user-store";
import { Space } from "./types";

const spacesRef = collection(db, "spaces");

export const useSpaceStore = defineStore("space", () => {

    const $spaces = ref<Space[]>([]);
    const $edit = ref({
        selected: "",
    });

    async function fetchSpaces(uid: string) {
        const spaces: Record<string, Space> = {};
        // Get the spaces
        const spaceQuery = query(spacesRef, where("uid", "==", uid), orderBy("order"));
        const spaceSnapshot = await getDocs(spaceQuery);
        for (const spaceDoc of spaceSnapshot.docs) {
            spaces[spaceDoc.id] = { id: spaceDoc.id, lists: [], ...spaceDoc.data() } as any as Space;
            // Get the lists
            const listRef = collection(db, "spaces", spaceDoc.id, "lists");
            //const qry = query(listRef, where("space", "in", Object.keys(spaces)), orderBy("label"));
            const listQuery = query(listRef, orderBy("label"));
            const listSnapshot = await getDocs(listQuery);
            for (const listDoc of listSnapshot.docs) {
                const { label } = listDoc.data();
                spaces[spaceDoc.id].lists.push({ id: listDoc.id, label });
            }
        }
        $spaces.value = Object.values(spaces);
    }

    // Watch for changes to the user, and fetch their spaces when it does, i.e. login
    const userStore = useUserStore();
    watch(
        () => userStore.user,
        (user) => {
            if (user) {
                fetchSpaces(user.uid);
            }
        }
    );

    return { fetchSpaces, spaces: $spaces, edit: $edit };
});
