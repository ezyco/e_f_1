<template>
    <div class="px-[4vw] w-full" >
        <div class="pl-[3vw] bg-white saira rounded-xl flex justify-between text-[4vw] h-[27.4vw] w-full cursor-pointer">
            <div class="py-[3vw] w-[45.2vw] flex flex-col justify-between" >
               <div> {{ foodTitle }}</div>
               <div>{{ foodPrice }}</div>
            </div>
     <img :src="imageUrl" class="h-full bg-cover rounded-xl">
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
            type:String,
            required:true,
        }
    }
}
</script>