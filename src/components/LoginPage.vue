<template>
    <img v-if="signUpMode==='web2'" class="w-full h-[85.7vw] object-cover" src="https://s3-alpha-sig.figma.com/img/f119/c4ba/080684b5abb42346eb0feb9658ad9de0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Usd-qQ2PRU3-nXz1KkI3CrGvYHS9E4o82BX9wZImXpvSm-anbalPuCgzpoW1-beh3SQnL4JAH284JwVg5gVVbcsNMjJYJIr22ktJYWgYm8k3PhOoFEuYKmTPz3~D9n0TcdSvRCM8uLr1SvXtv-DChzBI5c6cpX7zCphUMqTj3GLF1qfT5evDDUR9UFisbqgfeBdW0h5HofUINJx~4X3-N4RDM6SU1CBdwA9duvliW2bLFkzifTko6309XslPLHaE6eZutj019yG-jx0xBrhqIcijBEXf2m1uLz0nUAfaR8b93ozXA3yLEwhh8WmVaA5n3LG-RuJsAPxwFimzC42aAA__">
    <img v-if="signUpMode==='web3'" class="w-full h-[85.7vw] object-cover" src="https://s3-alpha-sig.figma.com/img/3dc0/b6b3/762091c17763a9be24d09ddd3eec4f23?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQ3nTlJupjMWhoPijD9qjejWF2OqKX38pKj7NZjjf6xgXIhUSHYjmqw2Us4zr-JRu9UUlcz7xSwykeHtz1FuP5jdAqMnHG1CnNmfaU5c~kjbfAzyUs7rD8FSnYkD3w9XXNWJuj5xrjf7PXIo3cSUkXzZd4L8keI-BTAqiFDONJntTkpd9j5s86X695XPTlFFS5XMqdBq7YbNc~pAdCI-LlMdEOeqIEfh9AB-iWpM7kMr1Bhk3Zke8sDPFnKj7EcHNU0Ek-COVBkpJxDL5o-04g3TiejIQ1TQbzUwiXHZkWAFS51nrnqIyZ8AcZVD2MgQUwt8ekX7E2V28z~yjluLIg__">
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
<!-- <TonConnectButton/> -->
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
    }
  }
}
</script>