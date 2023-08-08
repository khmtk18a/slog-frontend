<script setup>
    import {useLSidebarStore} from '../stores/lSidebar'

    const lSidebarStore = useLSidebarStore()

    lSidebarStore.fetchSumaryView()
</script>
<template>
    <div class="w-full flex justify-center relative flex-col items-center px-[1rem]">
        <div class="w-[25rem] ">
        <div class="w-full rounded-[1rem] bg-green-100 py-[2rem] flex flex-col items-center mt-[2rem]">
            <span class="block w-full text-[#0F172A] text-[1.2rem] font-black text-center  mb-[1rem]"> Tác giả</span>
            <img class="w-[6rem] h-[6rem] rounded-[6rem] bg-green-300" src="https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7" alt="">
           <div class="mt-[1rem] pl-[1rem]">
            <span class="text-[1rem] block w-full ">
                <span class="text-[#0F172A] font-bold">Tên: </span>
                <span class="text-[1rem]">Chưa cập nhật</span>
            </span>
            <span class="text-[1rem] block w-full my-[0.5rem]">
                <span class="text-[#0F172A] font-bold">Email: </span>
                <span class="text-[1rem]">Chưa cập nhật</span>
            </span>
            <span class="text-[1rem] block w-full">
                <span class="text-[#0F172A] font-bold">GIới thiệu: </span>
                <span class="text-[1rem]">Chưa cập nhật</span>
            </span>
           </div>
        </div>
        <div class="w-full flex text-[#0F172A] font-bold mt-[1rem]">
            <span class="flex-1 flex flex-col text-center">
                <span class="block w-full ">
                    Số lượng bài viết
                </span>
                <span class="block w-full">
                    100
                </span>
            </span>
            <span class="flex-1 flex flex-col text-center">
                <span class="block w-full ">
                    Số lượng bài viết
                </span>
                <span class="block w-full">
                    100
                </span>
            </span>
        </div>
    </div>
    <div class="w-full relative">
            <label for="articleTitle" class="text-ttext font-[500] text-[1.2rem]">Tên:</label>
            <input v-model="articleTitle" type="text" id="articleTitle" name="articleTitle" class="w-full text-ntext border-[2px]  p-[0.5rem]" 
            >
        </div>
        <div class="w-full relative">
            <label for="articleTitle" class="text-ttext font-[500] text-[1.2rem]">Email :</label>
            <input v-model="articleTitle" type="text" id="articleTitle" name="articleTitle" class="w-full text-ntext border-[2px]  p-[0.5rem]" 
            >
        </div>
        <div class="w-full relative">
            <label for="articleTitle" class="text-ttext font-[500] text-[1.2rem]">Giới thiệu :</label>
            <input v-model="articleTitle" type="text" id="articleTitle" name="articleTitle" class="w-full text-ntext border-[2px]  p-[0.5rem]" 
            >
        </div>
        <button @click="handleUploadArticle" class="w-full mt-[1rem] py-[0.5rem] font-[500] hover:bg-green-200 active:bg-green-400 bg-green-300 text-[1.2rem] text-ntext rounded-[1rem]">Cập nhật lại</button>

    </div>
        
    
</template>