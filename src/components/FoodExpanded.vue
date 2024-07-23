<template>
  <div @click="nemifahmam" class="w-full h-full flex flex-col justify-end fixed top-0 z-50 bg-[rgba(23,23,23,0.5)] backdrop-blur-sm">
    <div class=" w-full bg-white">
        <div class="m-auto text-center text-black">{{ foodTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foodTitle: {
      type: String,
      required: true,
    },
    foodPrice: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isSuggested: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods:{
    nemifahmam(){

    }
  }
};
</script>
