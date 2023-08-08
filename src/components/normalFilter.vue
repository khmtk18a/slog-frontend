<script setup>
import { onMounted, ref, watch } from 'vue';
import queue from '../assets/svg/queue.vue';
import miniQueue from '../assets/svg/miniQueue.vue';
import {useArticlesStore} from '../stores/articles'

const articlesStore = useArticlesStore()

const sortBox = ref(false)
const sortBy = ref("Hot")
const sortBoxRef = ref()
const viewTypeBox = ref(false)




function handleOpenSortBox(){
    sortBox.value = !sortBox.value
    sortBoxRef.value.focus()
}

function  handleCloseSortBox(event) {
}

</script>


<template>
	<div class="flex items-center relative h-[3rem] text-ntext">
		<span>Sắp xếp theo: </span>
		<button
			class="flex items-center ml-[0.5rem] px-[0.5rem] focus:bg-green-200 active:bg-green-300 py-[0.5rem] hover:bg-green-100 rounded-[1rem]"
			@click="handleOpenSortBox"
		>
			<i class="pi pi-icons pi-sun"></i>
			<span class="mx-[0.25rem]">{{ sortBy }}</span>
			<i class="pi pi-icons pi-angle-down"></i>
		</button>
		<span class="block h-[1px] flex-1 bg-green-200"></span>
        <button class="flex p-[0.5rem] hover:bg-green-200 rounded-[1rem]" @click="viewTypeBox=!viewTypeBox"> 
            <queue v-if="articlesStore.viewType == 0"></queue>
            <mini-queue v-if="articlesStore.viewType == 1"></mini-queue>
            <span class="pi pi-icons pi pi-angle-down ml-[0.25rem]"></span>
        </button>
        <div v-if="viewTypeBox" class="absolute w-[10rem] z-[20] right-0 top-[3rem] h-[10rem] bg-white shadow-xl rounded-[1rem]">
            <span class="text-ttext font-black block pl-[1rem] py-[1rem]">Hiện thị</span>
            <button class="w-full pl-[1rem] py-[0.5rem] hover:bg-green-200 flex active:bg-green-400" @click="()=>{articlesStore.viewType = 0; viewTypeBox = false}">
                <queue :class="{'bg-black text-white':articlesStore.viewType==0}" class="mr-[0.5rem] "></queue>
                <span>Card</span>
            </button>
            <button class="w-full pl-[1rem] py-[0.5rem] hover:bg-green-200 flex active:bg-green-400" @click="()=>{articlesStore.viewType = 1; viewTypeBox = false}">
                <mini-queue :class="{'bg-black text-white':articlesStore.viewType==1}" class="mr-[0.5rem]"></mini-queue>
                <span>Classic</span>
            </button>
         </div>
		<div
			ref="sortBoxRef"
			class="absolute w-[12rem] bg-white shadow-lg rounded-[0.5rem] top-[3rem] left-[47.5px] z-30 text-ttext"
			:class="{ hidden: !sortBox }"
			tabindex="1"
			@blur="handleCloseSortBox"
			@click="
				(e) => {
					sortBy = e.target.textContent;
					sortBox = false;
				}
			"
		>
			<ul>
				<li>
					<button
						class="w-full p-[0.75rem] hover:bg-green-100 text-left"
						description="sort-select"
					>
						<span>Top</span>
					</button>
				</li>
				<li>
					<button
						class="w-full p-[0.75rem] hover:bg-green-100 text-left"
					>
						<span>New</span>
					</button>
				</li>
				<li>
					<button
						class="w-full p-[0.75rem] hover:bg-green-100 text-left"
					>
						<span>Hot</span>
					</button>
				</li>
				<li>
					<button
						class="w-full p-[0.75rem] hover:bg-green-100 text-left"
					>
						<span>Best</span>
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>