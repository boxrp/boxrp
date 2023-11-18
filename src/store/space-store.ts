import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { collection, query, where, orderBy, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "@store/firebase";
import { useUserStore } from "./user-store";
import { Space } from "./types";
import { useRoute } from "vue-router";

const spacesRef = collection(db, "spaces");

export const useSpaceStore = defineStore("space", () => {
    const $spaces = ref<Space[]>([]);
    const $space = ref<Space | undefined>(undefined);

    async function fetchSpace(id: string) {
        console.log("Fetch space", id);
        const document = await getDoc(doc(db, "spaces", id));
        const data = document.data();
        if (data) {
            $space.value = { id: document.id, ...data } as any as Space;
        }
    }

    async function fetchSpaces(uid: string) {
        const spaces: Record<string, Space> = {};
        // Get the spaces
        const spaceQuery = query(spacesRef, where("uid", "==", uid), orderBy("order"));
        const spaceSnapshot = await getDocs(spaceQuery);
        for (const spaceDoc of spaceSnapshot.docs) {
            spaces[spaceDoc.id] = { id: spaceDoc.id, lists: [], ...spaceDoc.data() } as any as Space;
        }
        // Get the lists
        const listRef = collection(db, "lists");
        const listQuery = query(listRef, where("space", "in", Object.keys(spaces)), orderBy("label"));
        const listSnapshot = await getDocs(listQuery);
        for (const listDoc of listSnapshot.docs) {
            const { space, label } = listDoc.data();
            spaces[space].lists.push({ id: listDoc.id, label });
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
    // Watch for changes in the route that trigger a new list load
    // This must be done at the end of the store definition so that the state has been initialized
    const route = useRoute();
    watch(
        () => route.params.id,
        (newId, oldId) => {
            if (route.name === "space" && newId !== oldId) {
                fetchSpace(newId as string);
            }
        },
        { immediate: true }
    );
    return { fetchSpaces, spaces: $spaces, space: $space };
});
