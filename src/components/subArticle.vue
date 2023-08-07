<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(['subArticle'])
const router = useRouter()
</script>
<template>
    <div class="w-full pr-[1rem]">
            <div class="flex justify-between text-ntext flex-col">
			<span class="flex items-center w-full">
                    <a
                    @click.prevent="console.log('click')"
				href="/"
				class="rounded-[2rem] text-ntext h-[2rem] w-full flex items-center hover:text-green-500  z-[20]"
			>
				<img
					class="w-[2rem] h-full bg-green-100 rounded-[2rem] mr-[0.5rem]"
					:src="props.subArticle.contributor.avatar"
					alt=""
				/>
                <span>{{ props.subArticle.contributor.name }}</span>

			</a>
			</span>
            <a :title="props.subArticle.title" class="hover:underline text-ntext block font-[500] my-[0.5rem] text-[1rem]" :href="`/article/${props.subArticle.id}`">{{ props.subArticle.title }}</a>
            <span class="text-ntext text-[0.9rem]">{{ props.subArticle.rate }} rates &nbsp&nbsp•&nbsp&nbsp  {{ props.subArticle.comments }} comments</span>
        </div>
    </div>
</template>