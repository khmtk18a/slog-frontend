import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            authOpen: false,
            data: false,
            isLogined: false,
            items: [],
            authResponse: {},
            userInfo: {}
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        checkLoginStatus() {
        },
        fetchUserInfor() {
            this.isLogined = true
            this.authOpen = false
        }
        ,
        loginByGoogle() {

        },
        logoutByGoogle() {
        }
    },
})
