<script setup>
import { useBaseStore } from '../stores/base';
import { useAuthStore } from '../stores/auth';
const baseStore = useBaseStore()
const authStore = useAuthStore()



</script>
<template>
    <div class="fixed w-[100vw] h-[100vh] top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[100] flex">
        <div class="relative w-[25rem] h-[30rem] bg-white m-auto rounded-[1rem] flex items-center flex-col p-[1rem]">
            <button class="absolute right-[1rem]" @click="authStore.authOpen = false">
                <i class="pi pi-icons pi-times text-red-500 text-[1.5rem]"></i>
            </button>
            <span class="block text-center font-black w-full text-ttext text-[1.2rem] ">Đăng nhập</span>
            <div class="w-full mt-[1rem] flex-1  flex items-center">
                
                <button @click="authStore.loginByFacebook()" class="text-white w-full  mx-auto px-[1rem] py-[0.5rem] rounded-[0.5rem] bg-blue-500">Đăng nhập bằng facebook</button>
            </div>
        </div>
    </div>
</template>