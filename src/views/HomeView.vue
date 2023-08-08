<script setup>
import normalFilter from '../components/normalFilter.vue';
import marticle from '../components/article.vue';
import articleSkeleton from '../components/articleSkeleton.vue';
import {ref, onMounted, nextTick} from 'vue'

import {useArticlesStore} from '../stores/articles'
import {useLSidebarStore} from '../stores/lSidebar'

const articlesStore = useArticlesStore()
const lSidebarStore = useLSidebarStore()

lSidebarStore.fetchTags()

onMounted(async() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(handleIntersection , options);
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
            // Cuộn từ trên xuống
            articlesStore.fetchArticles()
            }
        });
}
    await nextTick()
    const skeleton = document.getElementById('user-skeleton')
    observer.observe(skeleton);
})


</script>

<template>
	<div class="flex w-full">
		<div class="flex-1 p-[1rem]">
			<normal-filter></normal-filter>
			<div class="w-full">
                <template v-for="article in articlesStore.articles">
                    <marticle :article="article"></marticle>
                    <span class="block w-full h-[1px] bg-green-200 my-[1rem]"></span>
                </template>

                <article-skeleton ></article-skeleton>
                <template v-if="articlesStore.articles.length==0">

                    <span class="block w-full h-[1px] bg-green-200 my-[1rem]"></span>
                    <article-skeleton ></article-skeleton>
                </template>

			</div>
		</div>
		<div class="w-[20rem] max-lg:hidden relative pr-[1rem]">
			<div
				class="mx-[1rem] mt-[1rem] rounded-[1rem] bg-green-50 p-[1rem] sticky top-[5rem]"
			>
				<span class="text-ntext font-black"
					>Giới thiệu về tác giả</span
				>
                <div class="w-full my-[1rem]">
                    <img class="rounded-[20rem] w-[6rem] h-[6rem] bg-green-300 mx-auto" src="https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7" alt="">
                </div>
                <span class="text-ntext w-full block">
                    <span class="font-black">
                        Tên: 
                    </span>
                   &nbsp Anonymous
                </span>
                <span class="text-ntext w-full block">
                    <span class="font-black">
                        Email: 
                    </span>
                   &nbsp anonymous@gmail.com
                </span>
                <span class="text-ntext w-full block">
                    <span class="font-black">
                        Giới thiệu: 
                    </span>
                    &nbsp Chưa cập nhật
                </span>
				<!-- <template v-for="(v, i) in Array(5)" :key="i">
					<a
						href=""
						class="flex hover:bg-green-100 py-[1rem] px-[0.5rem]"
					>
						<svg
							class="w-[1.5rem] h-[1.5rem]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<g clip-path="url(#clip0_473_19)">
								<path
									d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM8.016 8.633a1.616 1.616 0 00-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 011.018-.732 3.45 3.45 0 011.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 00-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 00-.591.565zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996z"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_473_19">
									<path d="M0 0h20v20H0z"></path>
								</clipPath>
							</defs>
						</svg>
						<span class="ml-[0.5rem]">R place: {{ i }}</span>
					</a>
				</template> -->
			</div>
		</div>
	</div>
</template>
