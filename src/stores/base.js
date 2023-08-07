import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', {
    state: () => {
        return {
            authOpen: false,
            items: []
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {


    },
})
