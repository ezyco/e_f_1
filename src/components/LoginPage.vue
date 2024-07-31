<template>
    <div class="bg-white">
        <div class="w-full flex justify-center items-center h-[85.7vw]">
        <img v-if="signUpMode==='web2'" class="w-full h-[85.7vw] object-cover" src="https://s3-alpha-sig.figma.com/img/f119/c4ba/080684b5abb42346eb0feb9658ad9de0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Usd-qQ2PRU3-nXz1KkI3CrGvYHS9E4o82BX9wZImXpvSm-anbalPuCgzpoW1-beh3SQnL4JAH284JwVg5gVVbcsNMjJYJIr22ktJYWgYm8k3PhOoFEuYKmTPz3~D9n0TcdSvRCM8uLr1SvXtv-DChzBI5c6cpX7zCphUMqTj3GLF1qfT5evDDUR9UFisbqgfeBdW0h5HofUINJx~4X3-N4RDM6SU1CBdwA9duvliW2bLFkzifTko6309XslPLHaE6eZutj019yG-jx0xBrhqIcijBEXf2m1uLz0nUAfaR8b93ozXA3yLEwhh8WmVaA5n3LG-RuJsAPxwFimzC42aAA__">
    <img v-if="signUpMode==='web3'" class="w-[81.5vw] h-[81.5vw] object-cover" src="https://s3-alpha-sig.figma.com/img/3dc0/b6b3/762091c17763a9be24d09ddd3eec4f23?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQ3nTlJupjMWhoPijD9qjejWF2OqKX38pKj7NZjjf6xgXIhUSHYjmqw2Us4zr-JRu9UUlcz7xSwykeHtz1FuP5jdAqMnHG1CnNmfaU5c~kjbfAzyUs7rD8FSnYkD3w9XXNWJuj5xrjf7PXIo3cSUkXzZd4L8keI-BTAqiFDONJntTkpd9j5s86X695XPTlFFS5XMqdBq7YbNc~pAdCI-LlMdEOeqIEfh9AB-iWpM7kMr1Bhk3Zke8sDPFnKj7EcHNU0Ek-COVBkpJxDL5o-04g3TiejIQ1TQbzUwiXHZkWAFS51nrnqIyZ8AcZVD2MgQUwt8ekX7E2V28z~yjluLIg__">
    </div>
    <div class="w-full px-[12.8vw]">
        <div class="w-full flex justify-between items-center">
           <div @click="setLoginMethod('web2')" class=" basis-1/2 flex justify-center items-center inter font-semibold text-[6.5vw]">SignUp</div>
           <div @click="setLoginMethod('web3')" class=" basis-1/2 flex justify-center items-center inter font-semibold text-[6.5vw]">SignUp</div>
        </div>
        <div class="w-full">
            <div :class="lineBarStyle"></div>
        </div>
        <div class="w-full flex justify-between items-center">
           <div @click="setLoginMethod('web2')" class=" basis-1/2 flex justify-center items-center inter font-semibold text-[3.8vw]">Web 2</div>
           <div @click="setLoginMethod('web3')" class=" basis-1/2 flex justify-center items-center inter font-semibold text-[3.8vw]">Web 3</div>
        </div>
    </div>
    <div class="w-[200vw] flex transition-all duration-300" :style="loginItemPosition">
        <div class="basis-1/2 flex flex-col px-[12.8vw] pt-[3vw]">
          <input type="text" placeholder="Email" class="outline-none rounded-[1vw] p-[2vw] my-[1vw] border-2 focus:border-2 border-[#CFCFCF] w-full h-[11.5vw] focus:border-[#1B7B4A]">
          <input type="text" placeholder="Password" class="outline-none rounded-[1vw] p-[2vw] my-[1vw] border-2 focus:border-2 border-[#CFCFCF] w-full h-[11.5vw] focus:border-[#1B7B4A]">
          <div class="w-full h-[14.3vw] bg-[#1B7B4A] rounded-[6.15vw] mt-[30vw] mb-[2vw] text-white flex justify-center items-center roboto font-medium">
            <div>Login</div>
          </div>
          <div class="w-full h-[14.3vw] bg-[#1B7B4A] rounded-[6.15vw] my-[2vw] text-white flex justify-center items-center space-x-[3vw] roboto font-medium">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.38 15.8526C30.38 14.7535 30.2814 13.6967 30.0982 12.6821H15.5V18.6778H23.8418C23.4825 20.6153 22.3905 22.2569 20.7489 23.356V27.2451H25.7582C28.6891 24.5467 30.38 20.573 30.38 15.8526Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4998 30.9998C19.6848 30.9998 23.1934 29.6119 25.758 27.2446L20.7487 23.3555C19.3607 24.2855 17.5853 24.8351 15.4998 24.8351C11.4628 24.8351 8.04571 22.1085 6.82685 18.4448H1.64844V22.4607C4.19889 27.5264 9.44071 30.9998 15.4998 30.9998Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.82704 18.4445C6.51704 17.5145 6.34091 16.5211 6.34091 15.4995C6.34091 14.4779 6.51704 13.4845 6.82704 12.5545V8.53857H1.64864C0.598864 10.6311 0 12.9983 0 15.4995C0 18.0006 0.598864 20.3679 1.64864 22.4604L6.82704 18.4445Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4998 6.16477C17.7755 6.16477 19.8187 6.94682 21.425 8.48273L25.8707 4.03705C23.1864 1.53591 19.6778 0 15.4998 0C9.44071 0 4.19889 3.47341 1.64844 8.53909L6.82685 12.555C8.04571 8.89136 11.4628 6.16477 15.4998 6.16477Z" fill="white"/>
</svg>

            <div>Sign in with Google</div>
          </div>
        </div>
        <div class="basis-1/2 flex flex-col px-[12.8vw] pt-[3vw]">
            <TonConnectButton class="mt-[80vw]" :style="{ float: 'right' }"/>
        </div>
    </div>
    </div>
<!--  -->
</template>


<script>
 import { TonConnectButton } from '@townsquarelabs/ui-vue';
export default{
    name:'LoginPage',
    components: {
    TonConnectButton
  },
  data(){
    return{
        signUpMode:'web2',
        email:'',
        password:''
    }
  },
  methods:{
    setLoginMethod(method){
        this.signUpMode = method;
    }
  },
  computed:{
    lineBarStyle(){
        if(this.signUpMode ==='web2'){
return "bg-[#1B7B4A] w-[35vw] h-1 rounded-full relative translate-x-[0vw] transition-all duration-300 my-[2vw]"
        }else{
return "bg-[#188CE0] w-[35vw] h-1 rounded-full relative translate-x-[38vw] transition-all duration-300 my-[2vw]"
        }
    },
    loginItemPosition(){
        return this.signUpMode==='web2' ? 'transform:translateX(0vw)': 'transform:translateX(-100vw)'
    }
  }
}
</script>
<style>
button{
    width: 74.4vw;
    height:14.1vw !important;
    display: flex !important;
    justify-content: center !important;
}
</style>