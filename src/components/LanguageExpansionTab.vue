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
      <div class="bg-white saira w-full h-full rounded-t-[4vw]">
        <div
          class="w-full px-[3vw] flex justify-around items-center rounded-t-[4vw] py-[2vw] drop-shadow-md bg-white"
        >
          <div class="m-auto basis-1/4 text-center text-black"></div>
          <div
            class="m-auto basis-2/4 text-center text-black saira font-bold text-[4vw]"
          >
            Language
          </div>
          <div class="m-auto basis-1/4 text-center text-black flex justify-end">
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
        <div class="px-[3vw] mt-[3vw] pb-[5vw]">
          <div class="mx-auto h-[11vw] w-[77vw]">
          <input class="w-full h-full bg-[#F5F5F5] rounded-[2.3vw] outline-none p-[3vw] pl-[10vw]" type="text">
      <svg class="translate-y-[-9vw] translate-x-[2vw]" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.172" cy="11.4459" r="7.77438" stroke="#0A0A0A" stroke-width="1.59507"/>
<path d="M17.1946 16.7671L23.0266 22.5985" stroke="#0A0A0A" stroke-width="1.59507" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
        <div class="mx-auto h-[110vw] scroll-container overflow-x-scroll w-[77vw]">
         <div @click="changeChosenOption(index)" v-for="(lang, index) in languages" :key="index" :class="{'flex my-[3vw] w-full rounded-[2.3vw] bg-white drop-shadow-lg h-[11.2vw] space-x-4 justify-start items-center p-[4vw]':true,'border-2 border-[#1B7B4A]' : chosenOption===index}">
          <div :class="{'w-[6vw] flex justify-center items-center h-[6vw] rounded-full border-2 border-[#D8D8D8]':true, 'border-[#1B7B4A]' : chosenOption === index}">
            <div v-if="chosenOption === index" class="w-[3.5vw] h-[3.5vw] bg-[#24A5E7] rounded-full">

            </div>
          </div>
          <div>
            {{ lang }}
          </div>

         </div>

        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        closeTime: 300,
        focusedImage: 0,
        chosenOption: 0,
      };
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
      languages:{
            type:Array[String],
            default: () => [], 
            required:true,
        },
    },
    methods: {
      closeTab() {
        this.$emit("close-language-select-tab");
        // console.log(this.imageUrl[0]);
        setTimeout(() => {}, this.closeTime);
      },
      changeChosenOption(index) {
        this.chosenOption = index;
        this.$emit("change-lang",index);
      },
    },
  };
  </script>
  
  <style scoped>
  .saira {
    font-family: "Saira", sans-serif;
  }
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
  .image-show {
    animation-name: show-image;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-direction: forwards;
    animation-timing-function: ease-in-out;
  }
  .image-hide {
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
    100% {
      opacity: 100%;
    }
  }
  @keyframes hide-image {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }
  </style>
  