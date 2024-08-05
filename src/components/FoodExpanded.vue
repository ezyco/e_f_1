<template>
  <div
    @click="closeTab"
    :class="{
      'w-full h-full  flex flex-col justify-end fixed top-0 z-40 bg-[rgba(23,23,23,0.5)]  backdrop-blur-sm': true,
      'bg-show': isOpen,
      'bg-hide': !isOpen,
    }"
  ></div>
  <div
    :class="{
      'w-full z-50  fixed rounded-t-[4vw] pt-1 bg-[#1B7B4A]': true,
      
      'drawer-open': isOpen,
      'drawer-close': !isOpen,
    }"
  >
    <div class="bg-white w-full h-full rounded-t-[4vw]">
      <div
        class="w-full px-[3vw] flex justify-around items-center rounded-t-[4vw] py-[2vw] drop-shadow-md bg-white"
      >
        <div class="m-auto basis-1/3 text-center text-black"></div>
        <div
          class="m-auto basis-1/3 text-center text-black font-bold text-[4vw]"
        >
          Deatils
        </div>
        <div class="m-auto basis-1/3 text-center text-black flex justify-end">
          <svg
            @click="closeTab"
            class="cursor-pointer"
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3635 10.52L11.2405 15.643"
              stroke="#1B7B4A"
              stroke-width="1.41358"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.3651 15.6459L11.2378 10.5176"
              stroke="#1B7B4A"
              stroke-width="1.41358"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.4367 3.20215H9.16883C5.93914 3.20215 3.91431 5.48891 3.91431 8.72501V17.4572C3.91431 20.6933 5.92952 22.9801 9.16883 22.9801H18.4356C21.676 22.9801 23.6923 20.6933 23.6923 17.4572V8.72501C23.6923 5.48891 21.676 3.20215 18.4367 3.20215Z"
              stroke="#1B7B4A"
              stroke-width="1.41358"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="px-[3vw] pb-[5vw]">
        <div v-if="imageUrl.length > 0" class="h-[63vw] mt-[4vw] w-full">
          <div
            v-for="(image, index) in imageUrl"
            :key="index"
            class="w-full rounded-lg overflow-hidden"
          >
            <div class="overflow-hidden absolute rounded-xl w-full h-[63vw]">
              <img v-show="mainImg[index]" @load="onMainImageLoad(index)"
              :src="image" :class="{'h-[63vw] pr-[6vw] w-[100vw] rounded-xl':true,'image-hide':focusedImage !== index,
  'image-show' :focusedImage === index}" />
     <div class="w-full h-full rounded-[1vw]  bg-[#c1ebff79] flex justify-center items-center" v-show="!loaded[index]">
            <LoadingSpinner/>
          </div>
            </div>
          </div>
        </div>

        <!-- put the images slider here : -->
        <div
          v-if="imageUrl.length > 1"
          class=" space-x-[2vw] h-[16vw] pr-[3vw] mt-[2vw] overflow-x-auto whitespace-nowrap w-[97vw]  scroll-container"
        >
        <div v-for="(image, index) in imageUrl"  :key="index" class="h-full inline-block w-[24.6vw] rounded-[1vw]">
          <img 
            v-show="loaded[index]"
            :src="image"
            @load="onImageLoad(index)"
            @click="changeFocusedImage(index)"
            class="h-full rounded-[1vw] object-cover"
          />
          <div v-show="!loaded[index]" class="w-full h-full  bg-[#c1ebff79] flex justify-center items-center ">
            <LoadingSpinner/>
          </div>
        </div>
         
       
        </div>
        <div class="text-[5vw] font-medium mt-[4vw]">{{ foodTitle }}</div>
        <div class="mt-[4vw] font-light  text-justify">
          {{ description }}
        </div>
        <div
          class="w-full m-auto flex justify-between items-center text-[4.5vw]  font-light px-[2vw] mt-[2vw]"
        >
        <div v-if="isSuggested" class="text-[#FF0000] flex justify-end items-center space-x-[2vw] font-medium">
          <div>
            <img class="bg-cover w-[9vw] h-[9vw]" src="https://s3-alpha-sig.figma.com/img/d29e/1fa0/d96692890ed498accf4018ee8e2d863e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a0fZQUmeI82xaevy6tT5N13gRum540QzNn0vyqpzyQzqH63pzgiUF4y871UVjCiWxq9Cj~HhIrqhL6rNb3fkdCchSP0UACnuaZsz616JU5llLF2v0GGFDJPrDCMsviJWYQNUeBRQgrt4q4O-UtUnh0ujm4vFaKX4Zkjc-APH-KfKHTOXE1S3-LI9jXYyEjsXSzSyv-g8WualwRBFzm-6EP8N3tQ7-yN65wz-bW5HankqH-CjAmIdLwblu93N8k1rcV7EgQjXGobjr0iBL6YOob5iZayAp0qusdPAPnqB6nDTjS71dXX0NBud~HkybeGsqEYT-JH~~TM9Zjwek4HbPA__" alt="">
          </div>
          <div>
            Suggested
          </div>
        </div> 
        <div>{{ foodPrice }}</div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';
export default {
  data() {
    return {
      closeTime: 300,
      focusedImage: 0,
      loaded:[],
      mainImg:[],
    };
  },
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
      type: Array[String],
      default: () => [],
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
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeTab() {
      this.$emit("close-tab");
      // console.log(this.imageUrl[0]);
      setTimeout(() => {}, this.closeTime);
    },
    changeFocusedImage(index) {
      this.focusedImage = index;
    },
    onImageLoad(index){
      this.loaded[index] = true;
    },
    onMainImageLoad(index){
      this.mainImg[index] = true;
    }
  },
  components:{
    LoadingSpinner,
  },
  watch: {
    imageUrl(newValue) {
      this.loaded = [];
      for(let a=0;a < newValue.length;a++){
        this.loaded.push(false)
        this.mainImg.push(false)
      }
    }
  },
};
</script>

<style scoped>
.drawer-open {
  animation-name: open-animation;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
}
.drawer-close {
  animation-name: close-animation;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
}
@keyframes close-animation {
  0% {
    bottom: 0;
  }
  100% {
    bottom: -100%;
  }
}
@keyframes open-animation {
  0% {
    bottom: -100%;
  }
  100% {
    bottom: 0;
  }
}

@keyframes show-bg {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
@keyframes hide-bg {
  0% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
}
.bg-show {
  animation-name: show-bg;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
}
.bg-hide {
  animation-name: hide-bg;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
}
.scroll-container::-webkit-scrollbar {
  height: 0px;
}

.scroll-container::-webkit-scrollbar-thumb {
  border-radius: 0px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
}
.image-show{
    animation-name: show-image;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
}
.image-hide{
    animation-name: hide-image;
  animation-duration: 150ms;
  animation-fill-mode: forwards;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes show-image {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 0%;
  }
  100%{
    opacity: 100%;
  }
}
@keyframes hide-image {
  0% {
    opacity: 100%;
  }
  100%{
    opacity: 0%;
  }
}
</style>
