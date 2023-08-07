<script setup>
import { onMounted, ref } from 'vue';
const sortBox = ref(false)
const sortBy = ref("Hot")

const sortBoxRef = ref()

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