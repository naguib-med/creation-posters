import {defineStore} from 'pinia'

export const useDrawerPanStore = defineStore('pan', {
    state: () => ({
        drawer: true,
        drawer2: false,
        drawer3: false,
        drawer4: false,
        drawer5: false,
        drawer6: false,
    }),

    actions: {
        setDrawer(val) {
            this.drawer = val;
        }
    }

})