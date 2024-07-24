<template>
    <div v-if="hasImage" class="px-[4vw]  w-full" >
        <div class="pl-[3vw] bg-white saira rounded-xl flex justify-between text-[4vw] h-[27.4vw] w-full cursor-pointer">
            <div class="flex flex-col">
                <div class="py-[3vw] w-[45.2vw] flex flex-col justify-between" >
               <div> {{ foodTitle }}</div>
               <div>{{ foodPrice }}</div>
               <div class="text-red-600 text-right" v-if="isSuggested"> Suggested </div>
            </div>
            </div>
     <img :src="imageUrl" class="h-auto bg-cover rounded-xl">
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