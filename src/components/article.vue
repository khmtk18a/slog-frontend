<script setup>
import { useRouter } from 'vue-router';
import {ref} from 'vue'
import {useArticlesStore} from '../stores/articles'

const articlesStore = useArticlesStore()

const contentBoxRef = ref()

const router =useRouter()
const props = defineProps(['article'])

function handleRateArticle(value) {
    console.log('handleRateArticle: ',value)
}

</script>


<template>
	<div
		class="w-[100%] hover:cursor-pointer hover:bg-green-50 rounded-[1rem] p-[1rem] relative"
		
	>
        <a class="absolute w-full h-full top-0 left-0 z-[10]" @click.self="router.push(`/article/${props.article.id}`)"></a>
		<div class="flex justify-between text-ntext">
			<span class="flex items-center">
                    <a
                    @click.prevent="console.log('click')"
				href="/"
				class="rounded-[2rem]  h-[2rem] flex items-center hover:text-green-500 font-black z-[20]"
			>
				<img
					class="w-full h-full bg-green-100 rounded-[2rem] mr-[0.5rem]"
					:src="props.article.contributor.avatar"
					alt=""
				/>
                <span>{{ props.article.contributor.name }}</span>

			</a>
				<span class="mx-[0.5rem]">•</span>
				<span>{{ props.article.createAt }} h. ago</span>
			</span>
			<button class="text-red-500">
                <i class="pi pi-icons pi-ellipsis-v"></i>
            </button>
            <!-- <div class=" w-[10rem] h-[20rem] bg-green-100">

            </div> -->
		</div>
		<div ref="contentBoxRef" class="max-h-[25rem] overflow-y-hidden mt-[0.5rem]" >
			<span class="text-ttext block font-black text-[1.2rem]"
				>{{ props.article.title }}</span
			>
			<span v-if="articlesStore.viewType==0">

                {{ props.article.content }}
            </span>
		</div>
		<div
			class="relative h-[4rem] mt-[-4rem] px-[1rem] w-full h-boxshadow"
			v-if="props.article.isHiden && articlesStore.viewType==0"
		></div>
		<a  @click.prevent="router.push(`/article/${props.article.id}`)" class="block mb-[1rem] text-blue-500" v-if="props.article.isHiden && articlesStore.viewType==0"
			>Xem toàn bộ</a
		>
		<span class="flex text-ntext z-[20]">
			<span
				class="bg-green-100 flex items-center rounded-[1rem] px-[1rem] py-[0.25rem] z-[20]"
			>
				<button href="" class="hover:bg-green-200 active:bg-green-300" @click.prevent="handleRateArticle(1)">
					<i class="pi pi-icons pi-arrow-down "></i>
                </button>
				<span class="mx-[0.25rem]">{{ props.article.rate }}</span>
				<button href="" class="hover:bg-green-200 active:bg-green-300" @click.prevent="handleRateArticle(-1)">
					<i class="pi pi-icons pi-arrow-up"></i>
                </button>
			</span>
			<a
				href="#/"
				class="block mx-[1rem] bg-green-100 px-[1rem] py-[0.25rem] rounded-[1rem]"
			>
				<i class="pi pi-icons pi-comments"></i>
				<span class="ml-[0.5rem]">{{ props.article.comments }}</span>
			</a>
		</span>
	</div>
</template>


<style scoped>
	.h-boxshadow {
		background-image: linear-gradient(
			to top,
			rgb(255, 255, 255),
			rgba(255, 255, 255, 0)
		);
	}
</style>