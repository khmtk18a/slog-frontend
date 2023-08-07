<script setup>
import {useArticlesStore} from '../stores/articles'
import {useLSidebarStore} from '../stores/lSidebar'
import comment from '../components/comment.vue'
import subArticle from '../components/subArticle.vue'
import { useRoute } from 'vue-router'
import {ref } from 'vue'
const articlesStore = useArticlesStore()
const lSidebarStore = useLSidebarStore()

lSidebarStore.fetchArticleViewItems()
const route = useRoute()
articlesStore.fetchArticle(route.params.id)
articlesStore.fetchSubArticles()

const isHover = ref(false)
const viewAll = ref(false)
const sortBox = ref(false)
const sortBy = ref("New")
</script>


<template>
    <div class="w-full flex max-md:flex-col relative">
        <div class="md:flex-1  max-md:w-full p-[1rem]">
           <div class="w-full">
            <div class="flex justify-between text-ntext">
			<span class="flex items-center">
                    <a
                    @click.prevent="console.log('click')"
				href="/"
				class="rounded-[2rem]  h-[2rem] flex items-center hover:text-green-500 font-black z-[20]"
			>
				<img
					class="w-full h-full bg-green-100 rounded-[2rem] mr-[0.5rem]"
					:src="articlesStore.article.contributor.avatar"
					alt=""
				/>
                <span>{{ articlesStore.article.contributor.name }}</span>

			</a>
				<span class="mx-[0.5rem]">•</span>
				<span>{{ articlesStore.article.createAt }} h. ago</span>
			</span>
			<button class="text-red-500">Báo cáo</button>
		</div>
		<div ref="contentBoxRef" class="overflow-y-hidden mt-[0.5rem]" :class="{'max-h-[25rem]':!viewAll}">
			<span class="text-ttext block font-black text-[1.2rem]"
				>{{ articlesStore.article.title }}</span
			>
			{{ articlesStore.article.content }}
		</div>
		<div
			class="relative h-[4rem] mt-[-4rem] px-[1rem] w-full h-boxshadow"
			v-if="articlesStore.article.isHiden && !viewAll"
		></div>
		<button  @click.prevent="viewAll = true" class="block  text-blue-500" v-if="articlesStore.article.isHiden && !viewAll"
			>Xem toàn bộ</button
		>
		<span class="flex text-ntext z-[20] mt-[0.5rem]">
			<span
				class="bg-green-100 flex items-center rounded-[1rem] px-[1rem] py-[0.25rem] z-[20]"
			>
				<button href="" class="hover:bg-green-200 active:bg-green-300" @click.prevent="handleRateArticle(1)">
					<i class="pi pi-icons pi-angle-double-up "></i>
                </button>
				<span class="mx-[0.25rem]">{{ articlesStore.article.rate }}</span>
				<button href="" class="hover:bg-green-200 active:bg-green-300" @click.prevent="handleRateArticle(-1)">
					<i class="pi pi-icons pi-angle-double-down"></i>
                </button>
			</span>
			<a
				href="#/"
				class="block mx-[1rem] bg-green-100 px-[1rem] py-[0.25rem] rounded-[1rem]"
			>
				<i class="pi pi-icons pi-comments"></i>
				<span class="ml-[0.5rem]">{{ articlesStore.article.comments }}</span>
			</a>
		</span>
           </div>
           <div class="w-full pt-[1rem]">
            <div class="flex items-center relative h-[3rem] text-ntext">
			<span>Sắp xếp theo: </span>
			<button
				class="flex items-center ml-[0.5rem] px-[0.5rem] focus:bg-gray-100 py-[0.5rem] hover:bg-gray-100 rounded-[1rem]"
				@click="sortBox = !sortBox"
			>
				<i class="pi pi-icons pi-sun"></i>
				<span class="mx-[0.25rem]">{{ sortBy }}</span>
				<i class="pi pi-icons pi-angle-down"></i>
			</button>
			<span class="block h-[1px] flex-1 bg-green-200"></span>
			<span class="font-black ml-[0.5rem]">6.9k comments</span>
			<div
				class="absolute w-[12rem] bg-white shadow-lg rounded-[0.5rem] top-[3rem] left-[47.5px] z-10 text-ttext"
				:class="{ hidden: !sortBox }"
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
							class="w-full p-[0.75rem] hover:bg-gray-100 text-left"
						>
							<span>Top</span>
						</button>
					</li>
					<li>
						<button
							class="w-full p-[0.75rem] hover:bg-gray-100 text-left"
						>
							<span>New</span>
						</button>
					</li>
					<li>
						<button
							class="w-full p-[0.75rem] hover:bg-gray-100 text-left"
						>
							<span>Hot</span>
						</button>
					</li>
					<li>
						<button
							class="w-full p-[0.75rem] hover:bg-gray-100 text-left"
						>
							<span>Best</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
            <div class="w-full relative flex">
				<input
					type="text"
					class="border-[2px] p-[1rem] outline-none rounded-[1rem] w-full focus:border-green-300"
					placeholder="Comment here"
				/>
				<button
					class="absolute right-[1.5rem] top-[50%] translate-y-[-50%]"
				>
					<i class="pi pi-icons pi-send text-[1.5rem] text-green-300"></i>
				</button>
			</div>
            <span class="block h-[1px] flex-1 bg-green-200 my-[1rem]"></span>
			<comment
				><comment :is-child="true">
					<comment :is-child="true"></comment></comment
			></comment>
			<comment></comment>
			<comment></comment>
		</div>
        </div>
        <div class="w-[25rem]  max-md:w-full">
            <div :class="{'overflow-y-hidden': !isHover}" 		
            @mouseenter="isHover = true"
            @mouseleave="isHover = false" 
            class="w-[90%] m-[1rem] sticky top-[5rem] md:h-[calc(100vh-8rem)] overflow-y-auto  normal-scrollbar mr-[2rem]">
                <span class="text-ntext text-[1.2rem] md:sticky top-[0rem] bg-white z-40 font-black my-[1rem] block">Bài viết liên quan</span>
                <ul>
                    <template v-for="subArticle in articlesStore.subArticles">
                        <li>
                            <sub-article :sub-article="subArticle"></sub-article>
                        </li>   
                        <span
						class="max-lg:w-full w-[100%] my-[1rem] mx-auto h-[1px] bg-green-200 block"
					></span>
                    </template>
                </ul>
            </div>
        </div>
        </div>
</template>