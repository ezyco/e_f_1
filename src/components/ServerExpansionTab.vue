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
        <div class="px-[3vw] pb-[5vw]">
            <img class="mx-auto w-[30vw] h-[30vw]" src="https://s3-alpha-sig.figma.com/img/57fc/697b/4f7969d0c39dc99531ba9c57172deb2b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFl6hkTFTucZ4O6EcTdo1EsCUHfLVgNKEU-sfKE6uC7GS-kPN25eb5~HW1g2aZ0wMHoegO087kOpIKmrsPk3muk3p-MTehyrpDVk0amhlLkT-NZVRODrQJ5wmcez0qK05IclIaR8tUMdKAy46NoBhqv4V2y5uWQIybjtdzZsKs~6CFsNNdPTMvzrDNW2F9Y8uEWnqBO~xdKTwLPoJYVuNvadjMbTspA5rWskzUkHTNHoXktraph2AXPKHYtdoEksiqOROI4Oof7ktv~1I0k6WMLcCGatWOWbyEbIgevAWmFZiZGc00kaugyuGqa-RkADqniY-ty-Rc1zO~I8XLqrFA__">
        
            <div class="w-full text-right px-[10vw] mt-[1vw] text-[3vw] text-[#1B7B4A] font-bold">One Year</div>
            <div class="w-full" v-for="(price,index) in pricings" :key="index">
                <div class="w-full mt-[3vw] flex justify-center saira">
                <div class="h-[12vw] w-[76vw] flex justify-between bg-white drop-shadow-lg items-center p-[4vw]" @click="changeChosenOption(index)">
                   <div class="saira font-medium">{{ price.price }}</div>
                   <div class="rounded-full flex justify-center items-center h-[6vw] w-[6vw] border-[#D8D8D8] border-2 p-[1vw]">
                      <div v-if="index === chosenOption" class="rounded-full h-full w-full bg-[#24A5E7]"></div>
                   </div>
                </div>
            </div>
            <div class="w-full text-right px-[10vw] mt-[1vw] text-[3vw] text-[#1B7B4A] font-bold">{{ price.period }}</div>
            </div>
                <div class="w-full mt-[3vw] flex justify-center saira">
                <a href="https://t.me/Ezymnu" class="h-[12vw] w-[76vw] flex justify-between bg-white drop-shadow-lg items-center p-[4vw]">
                   <div class="saira font-medium">Activation in chat</div>
                   <div class="rounded-full flex justify-center items-center h-[6vw] w-[6vw] bg-gradient-to-r rotate-90 from-[#37BBFE] to-[#007DBB]">
                    <svg class="-rotate-90 w-[4.3vw] h-[3.8vw]"  viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4493 1.97009C16.571 1.18344 15.8231 0.562533 15.1236 0.869633L1.19271 6.98603C0.691131 7.20626 0.727823 7.96607 1.24804 8.13171L4.12091 9.04661C4.66928 9.22123 5.26297 9.13089 5.74181 8.80011L12.219 4.32522C12.4143 4.19025 12.6272 4.468 12.4603 4.63999L7.79789 9.44693C7.34562 9.91326 7.43537 10.7035 7.97945 11.0446L13.1995 14.318C13.785 14.6851 14.5382 14.3164 14.6476 13.6088L16.4493 1.97009Z" fill="white"/>
</svg>

                   </div>                
                </a>
            </div>
            <div class="w-full text-right px-[10vw] mt-[1vw] text-[3vw] text-[#1B7B4A]  font-bold">Support</div>
           
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
  