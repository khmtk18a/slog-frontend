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
            FB.getLoginStatus((response) => {   // Called after the JS SDK has been initialized.
                if (response.status == "connected") {

                    this.authResponse = response.authResponse
                    this.fetchUserInfor()
                }

            });
        },
        fetchUserInfor() {
            this.isLogined = true
            this.authOpen = false
            FB.api('/me', { fields: 'name,email,picture' }, (response) => {
                this.userInfo = { ...response }

            })
        }
        ,
        loginByFacebook() {
            FB.login(response => {
                if (response.authResponse) {
                    this.fetchUserInfor()
                } else {
                    console.log('User cancelled login or did not fully authorize.')
                }
            })
        },
        logoutByFacebook() {
            FB.logout(response => {
                this.isLogined = false
                console.log(response)
            })
        }
    },
})
