<script setup>
    const props = defineProps(['isChild'])
</script>
<template>
	<div class="flex-1 mt-[1rem]" :class="{ 'ml-[3rem]': props.isChild }">
		<span class="flex">
			<a
				href="/"
				class="rounded-[2rem] w-[2rem] h-[2rem] bg-gray-200 block"
			>
				<img
					class="w-full h-full"
					src="https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7"
					alt=""
				/>
			</a>
			<span class="font-black ml-[1rem]">Someone</span>
			<span class="mx-[0.5rem]">•</span>
			<span>15 h. ago</span>
		</span>
		<div class="ml-[3rem]">
			uple weeks ago we were having a party for one of the kids having
			come in the top 10 of national competition here in the USA. We were
			talking to my stepson about his achievement and how when he's
			successful he's gonna be such a catch. They're dad spoke up and said
			ya you will have your pick just like your old man! You won't have to
			settle for a used up hole like wife. Speaking of which how you
			liking that wallowed out thing OP. I was at a loss for words, not
			only did this come out of left field, but it pissed me off
			immensely. I wanted to best the shit out of the man, but he is a leg
			amputee(diabetes) and I had a bunch of children there. So I reacted
			with the only thing I could without fucking up my relationship with
			step kids and looking like a bully. I used a comeback
		</div>
		<span class="flex text-ntext ml-[2rem] mt-[0.25rem]">

			<a
				href="#/"
				class="block mx-[0.5rem] hover:bg-[rgba(0,0,0,0.1)] px-[1rem] py-[0.25rem] rounded-[1rem]"
			>
				<i class="pi pi-icons pi-comment"></i>
				<span class="ml-[0.5rem]">Phản hồi</span>
			</a>
			<a
				href="#/"
				class="block hover:bg-[rgba(0,0,0,0.1)] px-[1rem] py-[0.25rem] rounded-[1rem]"
			>
				<i class="pi pi-icons pi-flag"></i>
				<span class="ml-[0.5rem]">Báo cáo</span>
			</a>
		</span>

		<slot></slot>
	</div>
</template>