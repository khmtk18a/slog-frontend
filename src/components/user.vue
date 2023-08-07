<script setup>
import { useAuthStore } from '../stores/auth';
import {ref} from 'vue'
const authStore = useAuthStore()
const menu = ref(false)

</script>
<template>
    <div class="mr-[1rem] relative">
        <template v-if="Object.keys(authStore.userInfo).length != 0">
            <button @click="menu = !menu" class="w-[2.75rem] h-[2.75rem] rounded-[2rem] border-[2px] border-green-300 relative">
                <img  class="w-full h-full rounded-[2rem]" :src="authStore.userInfo.picture.data.url" alt="">
                <i class="pi pi-icons pi-chevron-down absolute bottom-0 mx-auto text-ntext translate-x-[-50%] text-[0.8rem]"></i>
            </button>
            <div v-if="menu" class="py-[1rem] absolute w-[15rem] h-[20rem] bg-white shadow-lg right-0 rounded-[1rem] border-[1px] px-[0.5rem]">
                <ul>
                    <li>
                        <button class="py-[0.5rem] w-full hover:bg-green-200 active:bg-green-400 text-ntext text-left pl-[0.5rem]" >
                            <i class="pi pi-icons pi-user mr-[0.5rem]"></i>
                            <span>

                                Trang cá nhân
                            </span>
                        </button>
                    </li>
                    <li>
                        <button class="py-[0.5rem] w-full hover:bg-green-200 active:bg-green-400 text-ntext text-left pl-[0.5rem]" >
                            <i class="pi pi-icons pi-book mr-[0.5rem]"></i>
                            <span>Quản lý bài</span>
                         </button>
                    </li>
                    <li>
                        <button @click="authStore.logoutByGoogle()" class="py-[0.5rem] w-full hover:bg-green-200 active:bg-green-400 text-ntext text-left pl-[0.5rem]" > 
                            <i class="pi pi-icons pi-sign-out mr-[0.5rem]"></i>
                            <span>Đăng xuất</span>    
                        </button>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>