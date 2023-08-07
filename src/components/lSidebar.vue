<script setup>
import { ref,reactive } from 'vue';
import { useLSidebarStore } from '../stores/lSidebar';

const lSidebarStore = useLSidebarStore()

const isHover = ref(false)

</script>

<template>
	<div
		class="fixed w-[100vw] h-full top-[4rem] left-[20rem] bg-[rgba(0,0,0,0.2)] z-[100] lg:hidden "
		v-if="lSidebarStore.open"
		@click="lSidebarStore.open = false"
	></div>
	<div
		class="fixed lsidebar-transition w-[20rem] bg-white z-[50] overflow-y-auto normal-scrollbar h-[calc(100vh-4rem)] border-r-[1px] border-green-200 "
		:class="{
			'overflow-y-hidden': !isHover,
			'max-lg:left-0': lSidebarStore.open,
			'max-lg:left-[-20rem]': !lSidebarStore.open,
		}"
		@mouseenter="isHover = true"
		@mouseleave="isHover = false"
	>
		<ul>
			<li v-for="(item, i) in lSidebarStore.items" :key="i">
				<template v-if="item.type == 'button'">
					<a
						:href="item.route"
						class="w-full flex pl-[2rem] py-[1rem] text-ntext hover:bg-green-100"
					>
						<i
							v-if="item.icon"
							:class="'pi pi-icons text-[1.5rem] ' + item.icon"
						></i>
						<span class="ml-[1rem]">
							{{ item.label }}
						</span>
					</a>
				</template>
				<template v-if="item.type == 'line'">
					<span
						class="max-lg:w-full w-[90%] mx-auto h-[1px] bg-green-200 block"
					></span>
				</template>
				<template v-if="item.type == 'title'">
					<span
						class="font-black ml-[1.5rem] block text-ntext my-[1rem]"
					>
						{{ item.label }}
					</span>
				</template>
				<template v-if="item.type == 'menu'">
					<div class="w-full">
						<button
							class="w-full relative items-center flex pl-[2rem] py-[1rem] text-ntext hover:bg-green-100"
							@click="item.open = !item.open"
						>
							<i
								v-if="item.icon"
								:class="
									'pi pi-icons text-[1.5rem] ' + item.icon
								"
							></i>
							<span class="ml-[1rem]">
								{{ item.label }}
							</span>
							<i
								class="pi pi-icons pi-chevron-down absolute left-[18rem]"
								style="transition: transform ease 0.3s"
								:class="{ 'transform rotate-180': item.open }"
							></i>
						</button>
						<ul
							class="w-full flex flex-col pl-[2rem]"
							:class="{ hidden: !item.open }"
						>
							<template
								v-for="(childItem, idx) in item.child"
								:key="idx"
							>
								<a
									:href="childItem.route"
									class="flex-1 block pl-[2rem] py-[1rem] font-black text-ntext hover:bg-green-100"
								>
									{{ childItem.label }}</a
								>
							</template>
						</ul>
					</div>
				</template>
			</li>
		</ul>
	</div>
</template>