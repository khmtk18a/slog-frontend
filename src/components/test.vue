<script setup>
import { useRouter } from 'vue-router';
import {ref} from 'vue'
const contentBoxRef = ref()

const router =useRouter()
const props = defineProps(['article'])
const isLarge = ref(true)


</script>


<template>
	<div
		class="w-[100%] hover:bg-green-50 rounded-[1rem] p-[1rem] relative"
		@click="router.push('/article')"
	>
		<div class="flex justify-between text-ntext">
			<span>
				<span class="font-black">Someone</span>
				<span class="mx-[0.5rem]">•</span>
				<span>15 h. ago</span>
			</span>
			<button class="text-red-500">Báo cáo</button>
		</div>
		<div ref="contentBoxRef" class="max-h-[20rem] overflow-y-hidden">
			<span class="text-ttext block font-black text-[1.2rem]"
				>How can i become a good man.</span
			>
			I 32m and my wife 36f have been together 5 years. We have zero
			infidelity issues and I never had any relations with her emotional
			or otherwise before her and her ex divorced. I help coparent and I
			have never had a bad word between myself and her ex. In fact I've
			scolded their children for talking bad on their father in my
			presence. However a couple weeks ago we were having a party for one
			of the kids having come in the top 10 of national competition here
			in the USA. We were talking to my stepson about his achievement and
			how when he's successful he's gonna be such a catch. They're dad
			spoke up and said ya you will have your pick just like your old man!
			You won't have to settle for a used up hole like wife. Speaking of
			which how you liking that wallowed out thing OP. I was at a loss for
			words, not only did this come out of left field, but it pissed me
			off immensely. I wanted to best the shit out of the man, but he is a
			leg amputee(diabetes) and I had a bunch of children there. So I
			reacted with the only thing I could without fucking up my
			relationship with step kids and looking like a bully. I used a
			comeback I'd heard years ago. I told him to be honest I was worried
			about that at first but after the first inch the other nine felt
			brand new! I'm gonna be honest the rage filled his face was
			intoxicating. I also was really wanting to throw down, but when one
			of his family member (a female cousin I think) started laughing at
			my comeback. He tucked his head in shame and eventually slinked to
			his car and just left. A few days later he took a large amount of
			pain medication and didn't make it. I found out later from my wife
			he had a very small member and apparently he had , been intimate
			with female cousin when they were teenagers. Hence why she bust out
			laughing. They say hindsight is 20/20 and seeing how upset my step
			kids are I feel bad like I caused this. I had to defend her in some
			way maybe if I had just yelled about how inappropriate saying that
			was or scolded him like a child this wouldn't have happened. Am I
			the asshole or was this just karma or happenstance. Honestly don't
			know where to go from here. Just trying to help kids through this
			without them feeling like I'm trying to take their fathers place or
			something.
		</div>
		<div
			class="relative h-[4rem] mt-[-4rem] px-[1rem] w-full h-boxshadow"
			v-if="isLarge"
		></div>
		<a href="/#" class="block mb-[1rem] text-blue-500" v-if="isLarge"
			>Xem toàn bộ</a
		>
		<span class="flex text-ntext">
			<span
				class="bg-green-100 flex items-center rounded-[1rem] px-[1rem] py-[0.25rem]"
			>
				<a href="">
					<i class="pi pi-icons pi-angle-double-up"></i>
				</a>
				<span class="mx-[0.25rem]">5001</span>
				<a href="">
					<i class="pi pi-icons pi-angle-double-down"></i>
				</a>
			</span>
			<a
				href="#/"
				class="block mx-[1rem] bg-green-100 px-[1rem] py-[0.25rem] rounded-[1rem]"
			>
				<i class="pi pi-icons pi-comments"></i>
				<span class="ml-[0.5rem]">200</span>
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