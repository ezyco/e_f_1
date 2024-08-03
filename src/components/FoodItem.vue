<template>
    <div v-if="hasImage" class="px-[4vw]  w-full" >
        <div class="pl-[3vw] bg-white saira rounded-xl flex justify-between text-[4vw] h-[27.4vw] w-full cursor-pointer">
            <div class="flex flex-col">
                <div class="py-[3vw] w-[45.2vw] flex flex-col justify-between" >
               <div> {{ foodTitle }}</div>
               <div>{{ foodPrice }}</div>
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
     <img :src="imageUrl" class="h-full w-[41vw] bg-cover rounded-xl object-cover">
    </div>
    </div>
    <div class="px-[4vw] w-full"  v-else>
        <div class="p-[2vw] bg-white saira rounded-[2vw] flex justify-between text-[4vw] w-full cursor-pointer">
            <div> {{ foodTitle }}</div>
            <div>{{ foodPrice }}</div>
                </div>
    </div>
    
</template>

<script>

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
    computed:{
        hasImage(){
             return this.imageUrl.length > 0;
        }
    }
}
</script>