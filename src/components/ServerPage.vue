<template>
  <div class="bg-white">
    <div class="w-full h-full saira">
    <img class="w-full mt-[5vw] h-[100vw] object-contain" src="https://s3-alpha-sig.figma.com/img/119c/7f3e/f7389830fb645e38cadb02e96cd0387b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mxUQYIy5afgrAQsm2ny6euoRHL~NKHZ-QSDLuNOSqHOBWA-izzPJ1WRi09BS2ZEsa0kBKOD7rheV7VJVUfTSY6mwWJVRiOGk2eXVaAkd69mFIifYGWii~FWKzfsV3NwLGMYszOoWBF7YMWvI1WusOp1-1~hi57W71fSNXLSXZgLF-5aKjBAMEG95mTbw-js~rnj1iDGhA59Ny~bSK1n~V94x5mu0qvAxECwKXMmXvKQoY5OtTePTPampHZVSaF8CRIAGRt-wDk5X9ZqGKCQjlOqbb4xi6xMvCGcC4R75pW57dFwcKWL1SjN3grj8qere4rTzACaT7o1IxtUN5X0Qkw__">
     <div class="mx-auto py-[5vw] px-[10vw] overflow-visible">
        <div class="w-full h-[11vw] bg-white rounded-[2.5vw] drop-shadow-md px-[3vw] flex justify-between items-center">
            <div v-if="serverState==='green'" class="flex justify-center items-center space-x-[2vw]">
                <div class="h-[3vw] w-[3vw] bg-[#3EEB3B]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#04C900]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#089B05]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#04C900]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#04C900]"></div>
            </div>
            <div v-else-if="serverState==='yellow'" class="flex justify-center items-center space-x-[2vw]">
                <div class="h-[3vw] w-[3vw] bg-[#FFC700]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#FFB800]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#FFB800]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#FFF500]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#FFF500]"></div>
            </div>
            <div v-else  class="flex justify-center items-center space-x-[2vw]">
                <div class="h-[3vw] w-[3vw] bg-[#FD4C00]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#FF2E00]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#FF774D]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#FF4D00]"></div>
                <div class="h-[3vw] w-[3vw] bg-[#FF4D00]"></div>
            </div>
     <div class="text-[#1B7B4A] text-[3vw]">99.2%</div>
        </div>
        <div class="w-full saira text-right text-[3vw] mt-[1vw] font-bold text-[#1B7B4A]">
     seven days
        </div>
       
     </div>
    
   </div>
   <ServerExpansionTab @close-tab="closeItem" :isOpen="isExpanded" v-if="showExpansionTab"/>
   <div class="w-full flex justify-center">
    <div class="absolute mx-auto w-[76vw] bottom-[40vw]  text-center p-[3vw] bg-[#1B7B4A] rounded-full text-[5.1vw] text-white " @click="chooseItem()">
            Buy Server
        </div>
   </div>
 
  </div>
</template>
<script>
import ServerExpansionTab from "@/components/ServerExpansionTab.vue";
export default{
    name:"ServerPage",
    components:{
        ServerExpansionTab,
    },
    data(){
        return{
            showExpansionTab:false,
            isExpanded:false,
            closeExpansionTabTime:300,
            daysLeft:10,
        }
    },
    computed:{
        serverState(){
          if(this.daysLeft > 7){
            return "green"
          }else if(this.daysLeft<7 && this.daysLeft >3){
            return "yellow"
          }else{
            return "red"
          }
        }
    },
    methods:{
        closeItem(){
      this.isExpanded = false;
      setTimeout(() => {
        this.showExpansionTab = false;
      }, this.closeExpansionTabTime);
    },
    chooseItem(){
     this.isExpanded = true;
     this.showExpansionTab = true;
    },
    }
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
.saira {
  font-family: "Saira", sans-serif;
}</style>