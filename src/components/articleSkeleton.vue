<template>
    <div id="user-skeleton" class="w-[100%]  bg-green-50 rounded-[1rem] p-[1rem] relative">
        <div class="flex justify-between text-ntext">
            <div class="flex items-center">
                <div class="w-[2rem] h-[2rem] rounded-[2rem] bg-green-100 shine"></div>
                <div class="w-[5rem] h-[1.5rem] ml-[0.5rem] rounded-[1rem] bg-green-100 shine"></div>
                <span class="mx-[0.5rem]">•</span>
                <div class="w-[3rem] h-[1.5rem] rounded-[1rem] bg-green-100 shine"></div>
            </div>
            <div class="w-[4rem] h-[1.5rem] bg-green-100 shine rounded-[1rem]"></div>
           
			<!-- <span class="flex items-center">
                    <a
                    @click.prevent="console.log('click')"
				href="/"
				class="rounded-[2rem]  h-[2rem] flex items-center hover:text-green-500 font-black z-[20]"
			>
				<img
					class="w-full h-full bg-green-100 shine rounded-[2rem] mr-[0.5rem]"
					src="https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7"
					alt=""
				/>
                <span>Someone</span>
                
			</a>
				<span class="mx-[0.5rem]">•</span>
				<span>15 h. ago</span>
			</span>
			<button class="text-red-500">Báo cáo</button> -->
		</div>
        <div class="mt-[0.5rem] w-full h-[20rem] bg-green-100 shine rounded-[1rem]"></div>
    </div>
</template>

<style scoped>
.shine{
    background-image: linear-gradient(to left, rgb(220 252 231 )  1%, white, rgb(220 252 231 ) );
    background-size: 300% 100%;
  background-position: right bottom;
  transition: all 3s cubic-bezier(0.4, 0, 1, 1);
}
@keyframes slideIn {
  0% {
    background-position: 300% 0;
  }
  100% {
    background-position: 150% 0;
  }
}

.shine {
  animation: slideIn 3s ease-in-out infinite;
}
</style>