<script setup>

import {  RouterView } from 'vue-router'
import lSidebar from './components/lSidebar.vue';
import { useLSidebarStore } from './stores/lSidebar';
import auth from './components/auth.vue';
import { useAuthStore } from './stores/auth';
import user from './components/user.vue';

const lSidebarStore = useLSidebarStore()
const authStore = useAuthStore()

authStore.checkLoginStatus()

</script>

<template>
    <auth v-if="authStore.authOpen"></auth>
	<div
		class="fixed z-30 top-0 bg-white w-[100vw] h-[4rem] border-b-[1px] border-green-200 flex justify-between items-center px-[1rem]"
	>
		<span class="flex items-center">
			<button
				class="pl-[1rem] lg:hidden"
				@click="lSidebarStore.open = !lSidebarStore.open"
			>
				<i class="pi pi-icons pi-bars text-[1.5rem] text-ttext"></i>
			</button>
			<a href="/" class="ml-[1rem]">
				<h1 class="text-[2rem] font-[900]">Logo</h1>
			</a>
		</span>
		<span class="relative py-[10px]">
			<input
				placeholder="Tìm kiếm..."
				class="text-[1rem] pl-[2.5rem] text-ntext bg-green-100 py-[0.5rem] pr-[1rem] border-0 w-[30rem] rounded-full"
			/>
			<i
				class="pi pi-icons pi-search absolute text-[1rem] text-ntext top-[50%] translate-y-[-50%] left-[1rem]"
			></i>
		</span>
		<button
			class="mr-[1rem] rounded-[7px] bg-green-300 text-ntext py-[0.5rem] px-[1rem] text-[1rem] hover:bg-green-200 active:bg-green-400"
        @click="authStore.authOpen = true"
        v-if="!authStore.isLogined"    
        >
			Đăng nhập 
		</button>
        <user v-if="authStore.isLogined"></user>
	</div>
	<l-sidebar></l-sidebar>
	<div
		class="w-[calc(100vw-20rem)] mt-[4rem] relative left-[20rem] max-lg:left-0 max-lg:w-[100vw]"
	>
		<RouterView />
	</div>
	<!-- <r-sidebar></r-sidebar> -->
</template>

<style scoped>
</style>
