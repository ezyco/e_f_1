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
          Currency
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
        <div
        style="background-color: #F4F4F5;"  class="w-full border-[1px] border-[#F4F4F5]  rounded-[2vw] space-x-[4vw] p-[3vw]"
        >
          <div class="flex w-full justify-between items-center">
            <div @click="changeChosenOption(0)">
              <div class="flex space-x-2 items-center">
                <div
                  class="rounded-full border-[1px] border-[#959595] w-[3vw] h-[3vw] p-[0.4vw] bg-white flex items-center justify-center"
                >
                  <div
                    class="w-full h-full rounded-full bg-[#3CAD41]"
                    style="background-color: #3cad41"
                    v-if="chosenOption === 0"
                  ></div>
                </div>
                <div>
                  <svg
                    width="3.5vw"
                    height="7vw"
                    viewBox="0 0 12 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.03942 0.682336V4.14588H5.33604V0.682336H7.03942ZM6.83501 19.2265V22.2585H5.14299V19.2265H6.83501ZM9.10619 15.638C9.10619 15.1838 9.00399 14.775 8.79958 14.4116C8.59517 14.0482 8.25828 13.7151 7.78891 13.4123C7.31953 13.1095 6.69117 12.8293 5.90383 12.5719C4.94994 12.2767 4.12474 11.9171 3.42825 11.4931C2.73933 11.0692 2.2056 10.543 1.82707 9.91467C1.45611 9.28631 1.27063 8.52546 1.27063 7.63213C1.27063 6.70095 1.47125 5.89847 1.87249 5.22469C2.27373 4.55091 2.84153 4.03232 3.57588 3.66893C4.31022 3.30554 5.17327 3.12385 6.16502 3.12385C6.93722 3.12385 7.62614 3.24119 8.23179 3.47588C8.83743 3.703 9.34845 4.04368 9.76483 4.49791C10.1888 4.95215 10.5105 5.50858 10.7301 6.16723C10.9572 6.82587 11.0708 7.58671 11.0708 8.44976H8.98127C8.98127 7.94253 8.92071 7.47694 8.79958 7.05298C8.67845 6.62903 8.49676 6.26186 8.2545 5.95146C8.01224 5.6335 7.71699 5.39124 7.36874 5.22469C7.02049 5.05056 6.61925 4.9635 6.16502 4.9635C5.52909 4.9635 5.00293 5.07328 4.58655 5.29282C4.17774 5.51237 3.87491 5.82276 3.67808 6.22401C3.48124 6.61768 3.38283 7.0757 3.38283 7.59807C3.38283 8.08258 3.48124 8.50654 3.67808 8.86993C3.87491 9.23331 4.20802 9.56263 4.6774 9.85789C5.15434 10.1456 5.8092 10.4295 6.64196 10.7096C7.61857 11.02 8.44755 11.3871 9.1289 11.8111C9.81025 12.2275 10.3288 12.7423 10.6847 13.3555C11.0405 13.9611 11.2184 14.7144 11.2184 15.6153C11.2184 16.5919 10.9988 17.4171 10.5597 18.0909C10.1206 18.7571 9.50365 19.2643 8.70873 19.6126C7.91382 19.9608 6.98264 20.135 5.91519 20.135C5.27169 20.135 4.63576 20.0479 4.0074 19.8738C3.37904 19.6996 2.81125 19.4158 2.30402 19.0221C1.79679 18.6208 1.39176 18.0947 1.08894 17.4436C0.786115 16.785 0.634703 15.9787 0.634703 15.0248H2.7469C2.7469 15.6683 2.83774 16.202 3.01944 16.626C3.2087 17.0424 3.45853 17.3755 3.76893 17.6253C4.07932 17.8676 4.42 18.0417 4.79095 18.1477C5.16948 18.2461 5.54423 18.2953 5.91519 18.2953C6.59654 18.2953 7.1719 18.1893 7.64128 17.9773C8.11823 17.7578 8.48162 17.4474 8.73145 17.0462C8.98127 16.6449 9.10619 16.1755 9.10619 15.638Z"
                      fill="#767676"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div @click="changeChosenOption(1)">
              <div class="flex space-x-2 items-center">
                <div
                  class="rounded-full border-[1px] border-[#959595] w-[3vw] h-[3vw] p-[0.4vw] bg-white flex items-center justify-center"
                >
                  <div
                    class="w-full h-full rounded-full bg-[#3CAD41]"
                    style="background-color: #3cad41"
                    v-if="chosenOption === 1"
                  ></div>
                </div>
                <div>
                  <svg
                    width="3.5vw"
                    height="4.3vw"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.87902 0.362324V16.8965H5.7214V0.362324H7.87902ZM13.1936 0.362324V2.15655H0.418203V0.362324H13.1936Z"
                      fill="#767676"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div @click="changeChosenOption(2)">
              <div class="flex space-x-2 items-center">
                <div
                  class="rounded-full border-[1px] border-[#959595] w-[3vw] h-[3vw] p-[0.4vw] bg-white flex items-center justify-center"
                >
                  <div
                    class="w-full h-full rounded-full bg-[#3CAD41]"
                    style="background-color: #3cad41"
                    v-if="chosenOption === 2"
                  ></div>
                </div>
                <div>
                  <svg
                    width="4.1vw"
                    height="4.6vw"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7464 6.25004C12.7464 3.71724 10.6658 1.63672 8.13304 1.63672C5.60023 1.63672 2.52468 3.26495 3.88154 8.05919C3.88154 8.05919 6.14298 15.8385 1.80103 19.7282C1.80103 19.7282 9.03761 15.5672 17.1788 19.6377"
                      stroke="#6B6C6E"
                      stroke-width="1.80915"
                    />
                    <path
                      d="M0.987061 12.4917H11.7515"
                      stroke="#6B6C6E"
                      stroke-width="1.80915"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div @click="changeChosenOption(3)">
              <div class="flex space-x-2 items-center">
                <div
                  class="rounded-full border-[1px] border-[#959595] w-[3vw] h-[3vw] p-[0.4vw] bg-white flex items-center justify-center"
                >
                  <div
                    class="w-full h-full rounded-full bg-[#3CAD41]"
                    style="background-color: #3cad41"
                    v-if="chosenOption === 3"
                  ></div>
                </div>
                <div>
                  <svg
                    width="3.5vw"
                    height="4.1vw"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3795 15.2585C13.2072 16.5983 11.6999 17.352 10.0252 17.352C6.42446 17.352 3.57739 13.7513 3.57739 9.22945C3.57739 4.79138 6.50819 1.44189 10.0252 1.44189C11.6999 1.44189 13.1234 1.94432 14.2957 3.20037"
                      stroke="#6B6C6E"
                      stroke-width="1.67474"
                    />
                    <path
                      d="M1.14893 7.21924H11.1136"
                      stroke="#6B6C6E"
                      stroke-width="1.67474"
                    />
                    <path
                      d="M0.311768 10.6528H10.2765"
                      stroke="#6B6C6E"
                      stroke-width="1.67474"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div @click="changeChosenOption(4)">
            <div class="flex space-x-2 items-center">
              <div
                class="rounded-full border-[1px] border-[#959595] w-[3vw] h-[3vw] p-[0.4vw] bg-white flex items-center justify-center"
              >
                <div
                  class="w-full h-full rounded-full bg-[#3CAD41]"
                  style="background-color: #3cad41"
                  v-if="chosenOption === 4"
                ></div>
              </div>
              <div>no price</div>
            </div>
          </div>  
        </div>
          <div class="w-full flex items-center space-x-[10vw] ml-0 mt-[4vw]" style="margin-left: 0px !important;">
        
          <div @click="changeChosenOption(5)">
            <div class="flex space-x-2 items-center">
              <div
                class="rounded-full border-[1px] border-[#959595] w-[3vw] h-[3vw] p-[0.4vw] bg-white flex items-center justify-center"
              >
                <div
                  class="w-full h-full rounded-full bg-[#3CAD41]"
                
                  v-if="chosenOption === 5"
                ></div>
              </div>
              <div>
                <svg
                  width="6.1vw"
                  height="6.1vw"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4248 10.7341C16.9803 10.2006 17.3707 9.51869 17.5495 8.76953C17.7282 8.02037 17.6877 7.23561 17.4328 6.50883C17.1779 5.78205 16.7194 5.14391 16.1118 4.6705C15.5043 4.19708 14.7735 3.90837 14.0065 3.83879V2.3604C14.0065 2.16666 13.9295 1.98085 13.7925 1.84385C13.6555 1.70685 13.4697 1.62988 13.2759 1.62988C13.0822 1.62988 12.8964 1.70685 12.7594 1.84385C12.6224 1.98085 12.5454 2.16666 12.5454 2.3604V3.82135L11.0844 3.82122V2.3604C11.0844 2.16666 11.0074 1.98085 10.8704 1.84385C10.7334 1.70685 10.5476 1.62988 10.3539 1.62988C10.1601 1.62988 9.97431 1.70685 9.83731 1.84385C9.70031 1.98085 9.62335 2.16666 9.62335 2.3604V3.82113L8.16186 3.821H6.70073C6.50699 3.821 6.32118 3.89796 6.18418 4.03496C6.04718 4.17196 5.97021 4.35777 5.97021 4.55152C5.97021 4.74526 6.04718 4.93107 6.18418 5.06807C6.32118 5.20507 6.50699 5.28203 6.70073 5.28203H7.43125V17.7009H6.70073C6.50699 17.7009 6.32118 17.7778 6.18418 17.9148C6.04718 18.0518 5.97021 18.2376 5.97021 18.4314C5.97021 18.6251 6.04718 18.8109 6.18418 18.9479C6.32118 19.0849 6.50699 19.1619 6.70073 19.1619H8.16168L9.62335 19.162V20.6234C9.62335 20.8171 9.70031 21.0029 9.83731 21.1399C9.97431 21.2769 10.1601 21.3539 10.3539 21.3539C10.5476 21.3539 10.7334 21.2769 10.8704 21.1399C11.0074 21.0029 11.0844 20.8171 11.0844 20.6234V19.1621L12.5454 19.1622V20.6234C12.5454 20.8171 12.6224 21.0029 12.7594 21.1399C12.8964 21.2769 13.0822 21.3539 13.2759 21.3539C13.4697 21.3539 13.6555 21.2769 13.7925 21.1399C13.9295 21.0029 14.0065 20.8171 14.0065 20.6234V19.1623L14.737 19.1623C15.7501 19.1623 16.7319 18.8114 17.5154 18.1692C18.299 17.527 18.8358 16.6332 19.0348 15.6399C19.2337 14.6465 19.0824 13.6149 18.6065 12.7205C18.1307 11.8261 17.3598 11.1242 16.4248 10.7341ZM16.198 7.8393C16.1973 8.51718 15.9276 9.16707 15.4483 9.6464C14.969 10.1257 14.3191 10.3954 13.6412 10.3961H8.89229V5.28212L10.349 5.28221C10.3506 5.28226 10.3522 5.28248 10.3539 5.28248C10.3555 5.28248 10.3571 5.28226 10.3588 5.28221L13.2754 5.28244L13.2759 5.28248L13.2765 5.28244L13.6412 5.28248C14.3191 5.28324 14.969 5.55286 15.4483 6.03219C15.9276 6.51153 16.1973 7.16142 16.198 7.8393ZM14.7371 17.7013L8.8923 17.701V11.8572H14.737C15.512 11.8571 16.2552 12.165 16.8032 12.713C17.3512 13.261 17.6591 14.0042 17.6591 14.7792C17.6591 15.5542 17.3513 16.2974 16.8033 16.8454C16.2553 17.3934 15.5121 17.7013 14.7371 17.7013Z"
                    fill="#767676"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div  @click="changeChosenOption(6)">
            <div class="flex space-x-2 justify-start items-center">
              <div
                class="rounded-full border-[1px] border-[#959595] w-[3vw] h-[3vw] p-[0.4vw] bg-white flex items-center justify-center"
              >
                <div
                  class="w-full h-full rounded-full bg-[#3CAD41]"
                 
                  v-if="chosenOption === 6"
                ></div>
              </div>
              <div>AED</div>
            </div>
          </div>
          </div>
        </div>
        <div class="w-full h-[18vw] bg-white"></div>
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
      pricings: [
        {
          price: "13.632 TON",
          period: "1 year",
        },
        {
          price: "6.964 TON",
          period: "6 month",
        },
        {
          price: "3.834 TON",
          period: "1 month",
        },
        {
          price: "Free",
          period: "7 days",
        },
      ],
    };
  },
  props: {
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
    changeChosenOption(index) {
      this.chosenOption = index;
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
