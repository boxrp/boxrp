// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useFolderStore } from '../../src/store/folder-store';
import { describe, beforeEach, it, expect } from 'vitest';

const UID = "q8JJV5WzR4rNdJxjGuqFVhHDWTpU";

describe('Folder Store', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it('Gets folders', async () => {
        const store = useFolderStore();
        await store.getFolders(UID);
        expect(store.folders.length).toBe(3)
    })

})