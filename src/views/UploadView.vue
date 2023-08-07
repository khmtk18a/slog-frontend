<script setup>
import {ref, onMounted, nextTick, computed} from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLSidebarStore } from '../stores/lSidebar';
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import {toast} from 'vue3-toastify';

const lSidebarStore = useLSidebarStore()

lSidebarStore.fetchUploadViewItems()


onMounted(()=>{
    ClassicEditor
    .create( document.querySelector( '#editor' ), {
        ckfinder:{
            uploadUrl:'http://192.168.1.16:3000/upload',
            baseUrl:'http://192.168.1.16:3000'
        }} ).then(
            (newEditor)=>{
                window.editor = newEditor
            }
            )
            .catch( error => {
                console.error( error );
            } );
            
        })

const spinner = ref(false)
const articleTitle = ref()
const tagInputRef = ref()
const tags = ref([])
const tagsRef = ref()


const articleRules = computed(() =>{
     return {
        articleTitle: {
             required,
             minLength: minLength(1),
            },
        } 
})

const $v1 = useVuelidate(articleRules, { articleTitle })

async function handleUploadArticle(){
    const isValid = await $v1.value.$validate()
    if(isValid){

        spinner.value = true 
        setTimeout(()=>{
            spinner.value = false
            toast.success("Tải bài viết lên thành công.", {autoClose: 2000}) 
        }, 2000)
    } else {
        toast.error("Tiêu đề không hợp lệ.")
    }
}

async function handleAddTag(){
    console.log(tagInputRef.value)
    tags.value.push(tagInputRef.value.value)
    tagInputRef.value.value = ''
    await nextTick()

    tagInputRef.value.style.paddingLeft = `${tagsRef.value.offsetWidth}px`
}

async function handleRemoveTag(removeTag){
    tags.value = tags.value.filter(tag=>tag!=removeTag)
    await nextTick()
      tagInputRef.value.style.paddingLeft = `${tagsRef.value.offsetWidth}px` 
}

</script>

<template>
    <div class="w-full bg-green-50 p-[2rem] relative">
        <div class="absolute w-full h-[calc(100vh-4rem)] top-0 z-40 left-0 bg-[rgba(0,0,0,0.1)] flex" v-if="spinner">
            <i class="pi pi-spin pi-spinner m-auto text-[5rem] text-green-300"></i>
        </div>
		<div class="w-full relative">
            <label for="articleTitle" class="text-ttext font-[500] text-[1.2rem]">Tiêu đề :</label>
            <input v-model="articleTitle" type="text" id="articleTitle" name="articleTitle" class="w-full text-ntext border-[2px]  p-[0.5rem]" 
            :class="{'border-red-500':$v1.articleTitle.$error }"
            >
        </div>
        <div class="w-full mt-[1rem] relative">
            <label for="tag" class="text-ttext font-[500] text-[1.2rem]">Thể loại:</label>
            <input ref="tagInputRef" @keypress.enter="handleAddTag" type="text" id="tag" name="tag" class="w-full text-ntext border-[2px]  p-[0.5rem]">
            <div class="absolute flex bottom-[0.5rem] pl-[0.5rem]" ref="tagsRef">
                <template v-for="tag in tags">
                    <span class=" bg-green-100 pl-[1rem] mx-[0.25rem]  text-ntext rounded-[1rem] flex items-center">
                        <span>
                            {{  tag}}
                        </span>
                        <button @click="handleRemoveTag(tag)" class="ml-[0.25rem] flex hover:bg-red-500 text-ntext p-[0.5rem] rounded-[1rem]">
                            <i class="pi pi-icons pi-times-circle my-auto"></i>
                        </button>
                    </span>
                </template>
            </div>
        </div>
        <div class="w-full my-[1rem] ">
            <span class="text-ttext font-[500] text-[1.2rem]">Nội dung</span>
            <div id="editor" >
                
            </div>
        </div>
        <button @click="handleUploadArticle" class="w-full py-[0.5rem] font-[500] hover:bg-green-200 active:bg-green-400 bg-green-300 text-[1.2rem] text-ntext rounded-[1rem]">Tải lên</button>
	</div>
</template>


<style >
.ck-editor__editable {
    min-height: calc(100vh - 27rem);
}
</style>