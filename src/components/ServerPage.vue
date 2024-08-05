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
   <ExpansionTab
   :title="'Server Activation'"
   :close-event-name="'close-server'"
   @close-server="closeItem" :isOpen="isExpanded" v-if="showExpansionTab">
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
            <div class="px-[10vw] mt-[3vw]">
              <div class=" bg-[#1B7B4A] rounded-[6.15vw] h-[14.1vw] flex justify-center items-center inter text-white">
            <div>Continuation</div>
           </div>
            </div>
            <div class="h-[9vw] w-full"></div>
        </div>
  
  </ExpansionTab>
   <div class="w-full flex justify-center">
    <div class="absolute mx-auto w-[76vw] bottom-[40vw]  text-center p-[3vw] bg-[#1B7B4A] rounded-full text-[5.1vw] text-white " @click="chooseItem()">
            Buy Server
        </div>
   </div>
 
  </div>
</template>
<script>
import ExpansionTab from "./ExpansionTab.vue";
export default{
    name:"ServerPage",
    components:{
        ExpansionTab
    },
    data(){
        return{
            showExpansionTab:false,
            isExpanded:false,
            closeExpansionTabTime:300,
            daysLeft:10,
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
    changeChosenOption(index){
this.chosenOption = index;
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