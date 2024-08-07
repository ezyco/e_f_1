<template>
   <div >
    <div v-if="hasImage" class="px-[4vw]  w-full" >
        <div class="pl-[3vw] rounded-xl flex justify-between text-[4vw] h-[27.4vw] w-full cursor-pointer" :style="itemBackgroundColor">
            <div class="flex flex-col">
                <div class="py-[3vw] w-[45.2vw] flex flex-col justify-between" >
               <div :style="itemTextColor" class="h-[12vw]"> {{ foodTitle }}</div>
           <div class="w-full h-[5vw]"></div>
           <div class="flex justify-between items-center">
           <div class="flex items-center space-x-[2vw]">
            <div :style="itemTextColor">{{ foodPrice }}</div>
            <div>  {{ currencies[chosenCurrency] }}</div>
           </div>
               <div class="text-red-600 text-right flex space-x-[1vw] w-full justify-end items-center" v-if="isSuggested"> 
                <div>
                    <img class="w-[5.6vw] h-[5.6vw] bg-cover" src="https://s3-alpha-sig.figma.com/img/d29e/1fa0/d96692890ed498accf4018ee8e2d863e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a0fZQUmeI82xaevy6tT5N13gRum540QzNn0vyqpzyQzqH63pzgiUF4y871UVjCiWxq9Cj~HhIrqhL6rNb3fkdCchSP0UACnuaZsz616JU5llLF2v0GGFDJPrDCMsviJWYQNUeBRQgrt4q4O-UtUnh0ujm4vFaKX4Zkjc-APH-KfKHTOXE1S3-LI9jXYyEjsXSzSyv-g8WualwRBFzm-6EP8N3tQ7-yN65wz-bW5HankqH-CjAmIdLwblu93N8k1rcV7EgQjXGobjr0iBL6YOob5iZayAp0qusdPAPnqB6nDTjS71dXX0NBud~HkybeGsqEYT-JH~~TM9Zjwek4HbPA__" alt="">
                </div>
                <div>
                    Suggested
                </div>
            </div>
           </div>
            </div>
            </div>
     <img @load="onImageLoad" v-show="isLoaded" :src="imageUrl" :class="{'h-full w-[41vw] bg-cover rounded-xl object-cover transition-all duration-300':true,'hide-img':!isLoaded,'show-img':isLoaded}">
     <div v-show="!isLoaded" :src="imageUrl" class="h-full flex justify-center items-center w-[41vw] bg-[#c1ebff79] rounded-xl ">
        <div>
            <LoadingSpinner/>
        </div>
     </div>
    </div>
    </div>
    <div class="px-[4vw] w-full"  v-else>
        <div class="p-[2vw] bg-white  rounded-[2vw] flex justify-between text-[4vw] w-full cursor-pointer">
            <div :style="itemTextColor"> {{ foodTitle }}</div>
            <div :style="itemTextColor">{{ foodPrice }}</div>
                </div>
    </div>
   </div>
    
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';
export default{
    props:{
        foodTitle:{
            type:String,
            required:true,
        },
        foodPrice:{
            type:String,
            required:true,
        },
        imageUrl:{
            type:Array[String],
            default: () => [], 
            required:true,
        },
        isSuggested:{
            type:Boolean,
            required:true,
        }
    },
    data(){
        return{
            currencies:["$","T","£","€","no price","₿","AED"],
            isLoaded:false,
        }
    },
    methods:{
        onImageLoad(){
            this.isLoaded = true;
        }
    },
    computed:{
        hasImage(){
             return this.imageUrl.length > 0;
        },
        itemBackgroundColor(){
          return 'background-color:' +  this.$store.getters.itemBackgroundColor ;
        },
        itemTextColor(){
          return 'color:' + this.$store.getters.itemTextColor;
        },
        chosenCurrency(){
            return this.$store.getters.chosenCurrency
        },
    },
    components:{
        LoadingSpinner,
    }
}
</script>

<style scoped>
.hide-img{
    opacity: 0;
}

.show-img{
    animation-name: show-image;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-direction: forwards;
    animation-timing-function: ease-in-out;
}
@keyframes show-image {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
</style>