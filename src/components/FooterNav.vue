<template>
  <div class="rounded-[3vw] saira w-full fixed drop-shadow-lg h-[24vw] bottom-0 p-[4vw]">
    <div
      class="w-full h-full bg-white rounded-[3vw] flex justify-between  items-center"
    >
     <div class="h-full basis-1/5 flex justify-center items-center" @click="changeRoute(0)">
        <div :class="{'flex justify-center items-center transition-all duration-200':true,'w-[13vw] h-[13vw] bg-[#1B7B4A] rounded-full translate-y-[-6vw]' : chosenRoute===0}" >
        <svg  :class="{'scale-[1] fill-[#CCCCCC]' : chosenRoute !==0 , 'scale-[1.2] fill-[#FFFFFF]': chosenRoute===0}"
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6205 22.1362H7.87045C7.62045 22.1362 7.40379 22.0439 7.22045 21.8594C7.03712 21.675 6.92879 21.4444 6.89545 21.1677L6.59545 18.5944C6.37879 18.5021 6.17479 18.3915 5.98345 18.2623C5.79145 18.1332 5.60379 17.9948 5.42045 17.8473L3.24545 18.8434C3.01212 18.9356 2.77879 18.9449 2.54545 18.8711C2.31212 18.7973 2.12879 18.6405 1.99545 18.4007L0.145455 14.8312C0.0121212 14.5914 -0.0295455 14.3332 0.0204545 14.0565C0.0704545 13.7798 0.195455 13.5584 0.395455 13.3924L2.27045 11.8152C2.25379 11.686 2.24545 11.5613 2.24545 11.4411V10.694C2.24545 10.5744 2.25379 10.4501 2.27045 10.321L0.395455 8.74378C0.195455 8.57776 0.0704545 8.3564 0.0204545 8.07969C-0.0295455 7.80299 0.0121212 7.54474 0.145455 7.30493L1.99545 3.73548C2.11212 3.47722 2.29112 3.31563 2.53245 3.25069C2.77445 3.1865 3.01212 3.20052 3.24545 3.29275L5.42045 4.28888C5.60379 4.1413 5.79545 4.00295 5.99545 3.87383C6.19545 3.7447 6.39545 3.63402 6.59545 3.54178L6.89545 0.968457C6.92879 0.691755 7.03712 0.46117 7.22045 0.276702C7.40379 0.0922339 7.62045 0 7.87045 0H11.6205C11.8705 0 12.0871 0.0922339 12.2705 0.276702C12.4538 0.46117 12.5621 0.691755 12.5955 0.968457L12.8955 3.54178C13.1121 3.63402 13.3165 3.7447 13.5085 3.87383C13.6998 4.00295 13.8871 4.1413 14.0705 4.28888L16.2455 3.29275C16.4788 3.20052 16.7121 3.19129 16.9455 3.26508C17.1788 3.33887 17.3621 3.49567 17.4955 3.73548L19.3455 7.30493C19.4788 7.54474 19.5205 7.80299 19.4705 8.07969C19.4205 8.3564 19.2955 8.57776 19.0955 8.74378L17.2205 10.321C17.2371 10.4501 17.2455 10.5744 17.2455 10.694V11.4411C17.2455 11.5613 17.2288 11.686 17.1955 11.8152L19.0705 13.3924C19.2705 13.5584 19.3955 13.7798 19.4455 14.0565C19.4955 14.3332 19.4538 14.5914 19.3205 14.8312L17.4705 18.373C17.3371 18.6128 17.1498 18.7744 16.9085 18.8578C16.6665 18.9404 16.4288 18.9356 16.1955 18.8434L14.0705 17.8473C13.8871 17.9948 13.6955 18.1332 13.4955 18.2623C13.2955 18.3915 13.0955 18.5021 12.8955 18.5944L12.5955 21.1677C12.5621 21.4444 12.4538 21.675 12.2705 21.8594C12.0871 22.0439 11.8705 22.1362 11.6205 22.1362ZM9.79545 14.9419C10.7621 14.9419 11.5871 14.5637 12.2705 13.8074C12.9538 13.0511 13.2955 12.138 13.2955 11.0681C13.2955 9.99816 12.9538 9.08504 12.2705 8.32873C11.5871 7.57241 10.7621 7.19425 9.79545 7.19425C8.81212 7.19425 7.98279 7.57241 7.30745 8.32873C6.63279 9.08504 6.29545 9.99816 6.29545 11.0681C6.29545 12.138 6.63279 13.0511 7.30745 13.8074C7.98279 14.5637 8.81212 14.9419 9.79545 14.9419Z"
            :class="{' fill-[#CCCCCC]' : chosenRoute !==0 , ' fill-[#FFFFFF]': chosenRoute===0}"
            />
        </svg>
      </div>
     </div>
      <router-link to="/edit" class="h-full basis-1/5 flex justify-center items-center" @click="changeRoute(1)">
        <div :class="{'flex justify-center items-center transition-all duration-200':true,'w-[13vw] h-[13vw] bg-[#1B7B4A] rounded-full translate-y-[-6vw]' : chosenRoute===1}" >
        <svg :class="{'scale-[1] fill-[#CCCCCC]' : chosenRoute !==1 , 'scale-[1.2] fill-[#FFFFFF]': chosenRoute===1}"
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.7862 11.9535L18.2069 9.13116L19.0869 8.16824C19.3094 7.92474 19.5926 7.80299 19.9366 7.80299C20.2805 7.80299 20.5637 7.92474 20.7862 8.16824L21.6662 9.13116C21.8887 9.37466 22 9.68457 22 10.0609C22 10.4372 21.8887 10.7471 21.6662 10.9906L20.7862 11.9535ZM10.9241 19.9225V17.1002L17.3572 10.0609L19.9366 12.8832L13.5034 19.9225H10.9241ZM0 13.2817V10.6254H8.49655V13.2817H0ZM0 7.96901V5.31268H13.3517V7.96901H0ZM0 2.65634V0H13.3517V2.65634H0Z"
            :class="{' fill-[#CCCCCC]' : chosenRoute !==1 , ' fill-[#FFFFFF]': chosenRoute===1}"
            />
        </svg>
      </div>
      </router-link>
     <router-link to="/" class="h-full basis-1/5 flex justify-center items-center" @click="changeRoute(2)">
        <div :class="{'flex justify-center items-center transition-all duration-200':true,'w-[13vw] h-[13vw] bg-[#1B7B4A] rounded-full translate-y-[-6vw]' : chosenRoute===2}" >
        <svg :class="{'scale-[1] fill-[#CCCCCC]' : chosenRoute !==2 , 'scale-[1.5] fill-[#FFFFFF]': chosenRoute===2}"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM16 16H2V4H16V16ZM10.5 10C10.5 10.83 9.83 11.5 9 11.5C8.17 11.5 7.5 10.83 7.5 10C7.5 9.17 8.17 8.5 9 8.5C9.83 8.5 10.5 9.17 10.5 10ZM9 6C6.27 6 3.94 7.66 3 10C3.94 12.34 6.27 14 9 14C11.73 14 14.06 12.34 15 10C14.06 7.66 11.73 6 9 6ZM9 12.5C7.62 12.5 6.5 11.38 6.5 10C6.5 8.62 7.62 7.5 9 7.5C10.38 7.5 11.5 8.62 11.5 10C11.5 11.38 10.38 12.5 9 12.5Z"
            :class="{' fill-[#CCCCCC]' : chosenRoute !==2 , ' fill-[#FFFFFF]': chosenRoute===2}"

          />
        </svg>
      </div>
     </router-link>
    <router-link to="/server" class="h-full basis-1/5 flex justify-center items-center" @click="changeRoute(3)">
        <div :class="{'flex justify-center items-center transition-all duration-200':true,'w-[13vw] h-[13vw] bg-[#1B7B4A] rounded-full translate-y-[-6vw]' : chosenRoute===3}" >
        <svg :class="{'scale-[1] fill-[#CCCCCC]' : chosenRoute !==3 , 'scale-[1.5] fill-[#FFFFFF]': chosenRoute===3}"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9168 19.9375C12.2965 19.9375 12.6043 19.6297 12.6043 19.25C12.6043 18.8703 12.2965 18.5625 11.9168 18.5625V19.9375ZM19.4793 11.9167C19.4793 12.2964 19.7871 12.6042 20.1668 12.6042C20.5465 12.6042 20.8543 12.2964 20.8543 11.9167H19.4793ZM9.16683 3.4375H12.8335V2.0625H9.16683V3.4375ZM2.521 11.9167V11H1.146V11.9167H2.521ZM2.521 11V10.0833H1.146V11H2.521ZM11.9168 18.5625H9.16683V19.9375H11.9168V18.5625ZM19.4793 10.0833V11H20.8543V10.0833H19.4793ZM1.146 11.9167C1.146 13.6257 1.14454 14.9767 1.28637 16.0316C1.43086 17.1063 1.7353 17.9762 2.4213 18.6622L3.39357 17.6899C3.00563 17.302 2.7731 16.7706 2.64911 15.8484C2.52245 14.9064 2.521 13.6646 2.521 11.9167H1.146ZM9.16683 18.5625C7.41891 18.5625 6.17713 18.561 5.23511 18.4344C4.31286 18.3104 3.78151 18.0779 3.39357 17.6899L2.4213 18.6622C3.10731 19.3482 3.97717 19.6526 5.05189 19.7972C6.10683 19.939 7.45778 19.9375 9.16683 19.9375V18.5625ZM12.8335 3.4375C14.5814 3.4375 15.8232 3.43896 16.7653 3.56561C17.6874 3.6896 18.2188 3.92213 18.6068 4.31008L19.5791 3.3378C18.893 2.65181 18.0231 2.34736 16.9484 2.20287C15.8935 2.06104 14.5425 2.0625 12.8335 2.0625V3.4375ZM20.8543 10.0833C20.8543 8.37428 20.8558 7.02334 20.714 5.9684C20.5694 4.89367 20.265 4.02381 19.5791 3.3378L18.6068 4.31008C18.9947 4.69802 19.2272 5.22936 19.3512 6.15161C19.4779 7.09363 19.4793 8.33542 19.4793 10.0833H20.8543ZM9.16683 2.0625C7.45778 2.0625 6.10683 2.06104 5.05189 2.20287C3.97718 2.34736 3.10731 2.65181 2.4213 3.3378L3.39357 4.31008C3.78151 3.92213 4.31286 3.6896 5.23511 3.56561C6.17713 3.43896 7.41891 3.4375 9.16683 3.4375V2.0625ZM2.521 10.0833C2.521 8.33542 2.52245 7.09363 2.64911 6.15161C2.7731 5.22936 3.00563 4.69802 3.39357 4.31008L2.4213 3.3378C1.7353 4.02381 1.43086 4.89367 1.28637 5.9684C1.14454 7.02334 1.146 8.37428 1.146 10.0833H2.521ZM1.8335 11.6875H20.1668V10.3125H1.8335V11.6875ZM19.4793 11V11.9167H20.8543V11H19.4793Z"
           :class="{' fill-[#CCCCCC]' : chosenRoute !==3 , ' fill-[#FFFFFF]': chosenRoute===3}"
          />
          <path
            d="M12.375 6.875H16.5"
            :class="{' stroke-[#CCCCCC]' : chosenRoute !==3 , ' stroke-[#FFFFFF]': chosenRoute===3}"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M5.5 16.0418V14.2085"
            :class="{' stroke-[#CCCCCC]' : chosenRoute !==3 , ' stroke-[#FFFFFF]': chosenRoute===3}"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M5.5 7.79183V5.9585"
            :class="{' stroke-[#CCCCCC]' : chosenRoute !==3 , ' stroke-[#FFFFFF]': chosenRoute===3}"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M8.25 16.0418V14.2085"
            :class="{' stroke-[#CCCCCC]' : chosenRoute !==3 , ' stroke-[#FFFFFF]': chosenRoute===3}"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M8.25 7.79183V5.9585"
            :class="{' stroke-[#CCCCCC]' : chosenRoute !==3 , ' stroke-[#FFFFFF]': chosenRoute===3}"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M17.7222 15.4781C17.9134 15.4066 18.119 15.3676 18.3333 15.3676C18.5433 15.3676 18.7452 15.405 18.9331 15.4739M18.9331 15.4739C19.651 15.737 20.1667 16.4591 20.1667 17.3089C20.1667 18.3809 19.3459 19.25 18.3333 19.25H15.125C14.3656 19.25 13.75 18.5982 13.75 17.7942C13.75 16.9901 14.3656 16.3382 15.125 16.3382C15.2161 16.3382 15.3052 16.3477 15.3915 16.3655M18.9331 15.4739C18.8311 14.5041 18.0543 13.75 17.1111 13.75C16.0986 13.75 15.2778 14.6191 15.2778 15.6911C15.2778 15.9283 15.318 16.1555 15.3915 16.3655M15.3915 16.3655C15.5725 16.4032 15.7408 16.4785 15.8889 16.5834"
            :class="{' stroke-[#CCCCCC]' : chosenRoute !==3 , ' stroke-[#FFFFFF]': chosenRoute===3}"
            stroke-width="1.25"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </router-link>
   <div class="h-full basis-1/5 flex justify-center items-center" @click="changeRoute(4)">
    <div :class="{'flex justify-center items-center transition-all duration-200':true,'w-[13vw] h-[13vw] bg-[#1B7B4A] rounded-full translate-y-[-6vw]' : chosenRoute===4}" >
        <svg :class="{'scale-[1] fill-[#CCCCCC]' : chosenRoute !==4 , 'scale-[1.5] fill-[#FFFFFF]': chosenRoute===4}"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.16279 7.93023C7.16279 5.811 8.88077 4.09302 11 4.09302C13.1192 4.09302 14.8372 5.811 14.8372 7.93023C14.8372 10.0495 13.1192 11.7674 11 11.7674C8.88077 11.7674 7.16279 10.0495 7.16279 7.93023ZM11 5.62791C9.72846 5.62791 8.69767 6.65869 8.69767 7.93023C8.69767 9.20177 9.72846 10.2326 11 10.2326C12.2715 10.2326 13.3023 9.20177 13.3023 7.93023C13.3023 6.65869 12.2715 5.62791 11 5.62791Z"
            :class="{' fill-[#CCCCCC]' : chosenRoute !==4 , ' fill-[#FFFFFF]': chosenRoute===4}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM11 1.53488C5.77256 1.53488 1.53488 5.77256 1.53488 11C1.53488 13.6048 2.58707 15.9638 4.28959 17.6752C4.47418 16.6795 4.83687 15.7406 5.56484 14.9857C6.65375 13.8564 8.39496 13.3023 10.9999 13.3023C13.6049 13.3023 15.3462 13.8564 16.4351 14.9857C17.163 15.7407 17.5257 16.6795 17.7103 17.6753C19.4129 15.9639 20.4651 13.6048 20.4651 11C20.4651 5.77256 16.2274 1.53488 11 1.53488ZM16.3145 18.8334C16.2102 17.5933 15.9409 16.6845 15.3302 16.0511C14.6656 15.3619 13.4342 14.8372 10.9999 14.8372C8.56567 14.8372 7.3343 15.3619 6.66973 16.0511C6.05897 16.6845 5.78969 17.5933 5.68544 18.8334C7.20049 19.8632 9.02996 20.4651 11 20.4651C12.97 20.4651 14.7994 19.8633 16.3145 18.8334Z"
            :class="{' fill-[#CCCCCC]' : chosenRoute !==4 , ' fill-[#FFFFFF]': chosenRoute===4}"
            
          />
        </svg>
      </div>
   </div>
    </div>
    <div class="flex -translate-y-[7vw] w-full h-12  justify-between items-start">
        <div :class="{'text-[#1B7B4A] basis-1/5 transition-all duration-200 text-center':true,'text-[0vw]': chosenRoute!==0,'text-[3vw]':chosenRoute===0}">Settings</div>
        <div :class="{'text-[#1B7B4A] basis-1/5 transition-all duration-200 text-center':true,'text-[0vw]': chosenRoute!==1,'text-[3vw]':chosenRoute===1}">Edit</div>
        <div :class="{'text-[#1B7B4A] basis-1/5 transition-all duration-200 text-center':true,'text-[0vw]': chosenRoute!==2,'text-[3vw]':chosenRoute===2}">Preview</div>
        <div :class="{'text-[#1B7B4A] basis-1/5 transition-all duration-200 text-center':true,'text-[0vw]': chosenRoute!==3,'text-[3vw]':chosenRoute===3}">Server</div>
        <div :class="{'text-[#1B7B4A] basis-1/5 transition-all duration-200 text-center':true,'text-[0vw]': chosenRoute!==4,'text-[3vw]':chosenRoute===4}">Profile</div>
    </div>
  </div>
</template>

<script>
export default{
    data(){
        return{
            chosenRoute:2,
        }
    },
    methods:{
        changeRoute(index){
                this.chosenRoute = index;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
.saira {
  font-family: "Saira", sans-serif;
}
</style>
