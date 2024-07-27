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
            Server Activation
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
         <div class="w-full border-[1px] border-[#F4F4F5] rounded-[2vw] space-x-[4vw] p-[3vw] flex justify-between items-center">
         <div class="inline-block" @click="changeChosenOption(0)">
            <div class="flex space-x-2 items-center">
                <div class="rounded-full border-[1px] border-[#959595] w-[3vw] h-[3vw] p-[0.4vw] bg-white  flex items-center justify-center">
                    <div class="w-full h-full rounded-full bg-[#3CAD41]" style="background-color: #3CAD41;" v-if="chosenOption===0"></div>
                </div>
                <div >
                    <svg width="3.5vw" height="7vw" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.03942 0.682336V4.14588H5.33604V0.682336H7.03942ZM6.83501 19.2265V22.2585H5.14299V19.2265H6.83501ZM9.10619 15.638C9.10619 15.1838 9.00399 14.775 8.79958 14.4116C8.59517 14.0482 8.25828 13.7151 7.78891 13.4123C7.31953 13.1095 6.69117 12.8293 5.90383 12.5719C4.94994 12.2767 4.12474 11.9171 3.42825 11.4931C2.73933 11.0692 2.2056 10.543 1.82707 9.91467C1.45611 9.28631 1.27063 8.52546 1.27063 7.63213C1.27063 6.70095 1.47125 5.89847 1.87249 5.22469C2.27373 4.55091 2.84153 4.03232 3.57588 3.66893C4.31022 3.30554 5.17327 3.12385 6.16502 3.12385C6.93722 3.12385 7.62614 3.24119 8.23179 3.47588C8.83743 3.703 9.34845 4.04368 9.76483 4.49791C10.1888 4.95215 10.5105 5.50858 10.7301 6.16723C10.9572 6.82587 11.0708 7.58671 11.0708 8.44976H8.98127C8.98127 7.94253 8.92071 7.47694 8.79958 7.05298C8.67845 6.62903 8.49676 6.26186 8.2545 5.95146C8.01224 5.6335 7.71699 5.39124 7.36874 5.22469C7.02049 5.05056 6.61925 4.9635 6.16502 4.9635C5.52909 4.9635 5.00293 5.07328 4.58655 5.29282C4.17774 5.51237 3.87491 5.82276 3.67808 6.22401C3.48124 6.61768 3.38283 7.0757 3.38283 7.59807C3.38283 8.08258 3.48124 8.50654 3.67808 8.86993C3.87491 9.23331 4.20802 9.56263 4.6774 9.85789C5.15434 10.1456 5.8092 10.4295 6.64196 10.7096C7.61857 11.02 8.44755 11.3871 9.1289 11.8111C9.81025 12.2275 10.3288 12.7423 10.6847 13.3555C11.0405 13.9611 11.2184 14.7144 11.2184 15.6153C11.2184 16.5919 10.9988 17.4171 10.5597 18.0909C10.1206 18.7571 9.50365 19.2643 8.70873 19.6126C7.91382 19.9608 6.98264 20.135 5.91519 20.135C5.27169 20.135 4.63576 20.0479 4.0074 19.8738C3.37904 19.6996 2.81125 19.4158 2.30402 19.0221C1.79679 18.6208 1.39176 18.0947 1.08894 17.4436C0.786115 16.785 0.634703 15.9787 0.634703 15.0248H2.7469C2.7469 15.6683 2.83774 16.202 3.01944 16.626C3.2087 17.0424 3.45853 17.3755 3.76893 17.6253C4.07932 17.8676 4.42 18.0417 4.79095 18.1477C5.16948 18.2461 5.54423 18.2953 5.91519 18.2953C6.59654 18.2953 7.1719 18.1893 7.64128 17.9773C8.11823 17.7578 8.48162 17.4474 8.73145 17.0462C8.98127 16.6449 9.10619 16.1755 9.10619 15.638Z" fill="#767676"/>
</svg>

                </div>
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
        chosenOption:0,
        pricings:[
            {
                price : "13.632 TON",
                period:"1 year"
            },
            {
                price : "6.964 TON",
                period:"6 month"
            },
            {
                price : "3.834 TON",
                period:"1 month"
            },
            {
                price : "Free",
                period:"7 days"
            },
        ],
      };
    },
    props:{
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
      changeChosenOption(index){
this.chosenOption = index;
      }
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
  