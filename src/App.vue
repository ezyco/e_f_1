<template>
  <div class="overflow-x-hidden">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div :class=" {'h-0 pl-[5vw] w-full overflow-hidden':true,
  'mt-0' :!isSticky,}
" >
        <div :class="
        {
          'bg-white w-[95%] h-[10vw] p-[1vw] saira cursor-pointer rounded-l-md select-none whitespace-nowrap scroll-container space-x-[1vw] overflow-x-scroll flex' :true,
          'fixed top-0  z-50' : isSticky,
          'absolute top-[80vw] z-50' : !isSticky,
        }
        " ref="stickyDiv">
          <div v-for="(item,index) in categories" :key="index"
          :class="{
      'text-[4vw] p-[1vw] rounded-sm drop-shadow-md transition-colors duration-200': true,
      'bg-[#FDFFFE] text-black': chosenCategory !== index,
      'bg-[#409D7E] text-white': chosenCategory === index
    }"
    @click="changeCategory(index)"
    >{{ item }} </div>

        </div>
      </div>
  <div class="overflow-x-hidden bg-[#0D2B33]">
    <img :src="imageUrl" class="object-fit w-full h-full" />
    <div id="curve" class="w-full h-[33vw] bg-no-repeat translate-y-[-20vw]">
      <img
        :src="logoUrl"
        class="w-[27.4vw] h-[27.4vw] rounded-full object-cover m-auto translate-y-[2vw]"
      />
    </div>
    <div class=" w-full translate-y-[-21vw] py-[2vw]">
      <div class="text-center mx-auto text-white saira text-[4vw]">{{ cafeName }}</div>
      <div class="m-[5vw] w-full overflow-hidden " >
     
      </div>
      <!-- list section -->
       <div v-if="!isSticky" class="w-full h-[5vw]"></div>
       <FoodItem class="my-[1vw]" v-for="(item,index) in data" :key="index" :foodTitle="item.title" :foodPrice="item.price" :imageUrl="item.imageUrl"/>
    </div>
  </div>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<FooterComponent class="pb-[4vw]"/>
  </div>
</template>

<script>
import FoodItem from "@/components/FoodItem.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  data(){
return {
  imageUrl:'https://s3-alpha-sig.figma.com/img/49a5/8da9/6fecacf4c93a55192defce713f23a4d7?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dOpfTH9PkxLU8j4wbgx8vIQCkDUpn9oWxV1L8Pb7YZXNO7nbv-di7MdKZ4rB2Nr34tWd6ibM8WDFYOMtxay0s932bTXTfhB2Fu3QP1Jb5rfwpAeIFXaQ0Yc6kFxkG14lsAlxbLpmXBtWaqW3lzBjJYijbxW7lHej~tJFFY1qIW4TyN1XEjmc6YmHPdncCwdADiAzEfUgs0T9SXiDLll2uGloc8JvWHvtcC-k37wTOBTH9UHnJLl3zDl--qgdJGoF98bnj3pyb8htAW5hyIZB-OANZfqulDIkipOGwNRbSQTDnJ0MItTmjCkxxMG24NpdIYcw2hE13stVWmA0h09ahA__',
  logoUrl:'https://s3-alpha-sig.figma.com/img/b090/4af3/2c97085e4e414fc8fc0cfb87d129ee7b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNtpqtnk7r6qg~NIgm8vPK61aPdGnOhMJsPAT-OI67sfEWh1l0xVmpDF8wN8wVFVYuXhCkXZc6ZFXo-lyGhefCPx8fMKWadONkB7Q6yvPsZ6XAnSaNvNcm3to-4Cl80J9XtEF-iBNrosyTlEj8ISIWMQEenEmwVzuUvtfKHHrH7rTWWuwFe8r1JvSeVNDas5ZpGGoI5xFVwDluFbJ~OU7OGi4Q0wYKrR23NCE0rA1kTNxYuKlh1nfxcE22DLS8zFZRwVZGja5tyvNAr41JBJaboW~AR7l6GUyOSB1YcgwM2gDNX8wgVYbYVjATmqU00CQ5XTtcml-pqeMBsmengzLA__',
  cafeName:'Top time cafe',
  categories:['khalta special blue yogurt','snacks','ice cream and sweets','fruit and candy','drinks'],
  chosenCategory: 0,
  isSticky: false,
  originalOffsetTop: 0,
  data:[
    {
      title:'Khalta cheetos with special blue yogurt',
      price :'15 AED',
      imageUrl:'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJKB6ebRr9kCX8~4cZhTVPt~B3Zdr641K99Upr7dWD0ssCjsgt-uklWnxkRkJCBNUc4B1qKCH7DPDYLzNLPA~juFvktCuJNmWdJA2To~opsUylfuMGNiJWEiWlr2PUchHBKBn9R2AD1qvnE4B3GHDHtFOj61Rf1M6IqxbJfDZeoqcwNG27D5T3kB88CxA56fDJEPhRhfPRDn30AgWQC4B~yJBTdn2TKxBxA8lhb5P9VYf5rVQF8VNqTQDkRtQ4tsxbhIzE1txQWaUPneMH-~Va1img0OJ5p1Vz5dDdWZWENGZqpL2WFlCUb3wtV8fLNgQishg1BGmBpSLkZRW4clCQ__',
    },
    {
      title:'Khalta blue taxis with special blue yogurt',
      price :'20 AED',
      imageUrl:'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJKB6ebRr9kCX8~4cZhTVPt~B3Zdr641K99Upr7dWD0ssCjsgt-uklWnxkRkJCBNUc4B1qKCH7DPDYLzNLPA~juFvktCuJNmWdJA2To~opsUylfuMGNiJWEiWlr2PUchHBKBn9R2AD1qvnE4B3GHDHtFOj61Rf1M6IqxbJfDZeoqcwNG27D5T3kB88CxA56fDJEPhRhfPRDn30AgWQC4B~yJBTdn2TKxBxA8lhb5P9VYf5rVQF8VNqTQDkRtQ4tsxbhIzE1txQWaUPneMH-~Va1img0OJ5p1Vz5dDdWZWENGZqpL2WFlCUb3wtV8fLNgQishg1BGmBpSLkZRW4clCQ__',
    },
    {
      title:'Khalta red taxis with special blue yogurt',
      price :'15 AED',
      imageUrl:'https://s3-alpha-sig.figma.com/img/e6b7/460a/1495008e61e130e5b58595e7c8a16e1a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cV6HSOa1caGyIAq4K-GG8BdBzXUG-n-ANmfRpKB7yyd6bDWhY~GV2yrQHFGnbJoyuZ2HHX5Q1o5OUzWYRehxVGexwo89Jxkvo5epSML7dorTvNAK1TE82orLDPy8GfuCBxdw1wBn~eqXs0m0A22YL5zmdVZ1u4bIe1~3nBe-~KXh5hnBzCnnuE0EEGEl1tZxW7au25MwTfdBsf4Guw3bAu~xVB1D1jrBfFUqohDvwTY5AY2~8HbLRHH~B4yvQjhOCGc6jZoHvxyigmA5qdhrfd1m8pGK85C7SVEnMleBNLt3Lme531akJBthuainFz6qEazjSkcLzJK7SOgG9BY67A__'
    },
    {
      title:'Khalta doritos blue with special blue yogurt',
      price :'25 AED',
      imageUrl:'https://s3-alpha-sig.figma.com/img/4ee6/86a7/c8bee80fd6b483d8348b0cbe05c5bb71?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZ34bSZS0zFOIujM0Nz8qcyvUoCY52HHwW2b025vZsHYaZ85thfRh~0uWpslyU-Syt-zqExwFtDyFaneSTo407BTfOVG52p7F7wdgquGVNk7sSb82xFdyD3PujrfpUbUdUkKPdu5xk10mxNooLZOYzq3wRL~2pGxUENTM-Rhv32EK9NDtO~4dAV9yS-6vmQ88CSJND-66vL6-eXqdnd4tpsZSYfOqTcddiTe6oEbu26MWB4UeDbaUX5VLZUweiVIs~YLDR3toGC4mrorKPL7TdczE~kWXuZNIXI4jLSIgmg61N0dBhyHKFsgZ40rHCYZd-wVKQDetOfOyCIQ~L-o-g__',
    },
    {
      title:'Khalta doritos red with special blue yogurt',
      price :'15 AED',
      imageUrl:'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
    },
    {
      title:'Khalta oman chips with special blue yogurt',
      price :'30 AED',
      imageUrl:'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJKB6ebRr9kCX8~4cZhTVPt~B3Zdr641K99Upr7dWD0ssCjsgt-uklWnxkRkJCBNUc4B1qKCH7DPDYLzNLPA~juFvktCuJNmWdJA2To~opsUylfuMGNiJWEiWlr2PUchHBKBn9R2AD1qvnE4B3GHDHtFOj61Rf1M6IqxbJfDZeoqcwNG27D5T3kB88CxA56fDJEPhRhfPRDn30AgWQC4B~yJBTdn2TKxBxA8lhb5P9VYf5rVQF8VNqTQDkRtQ4tsxbhIzE1txQWaUPneMH-~Va1img0OJ5p1Vz5dDdWZWENGZqpL2WFlCUb3wtV8fLNgQishg1BGmBpSLkZRW4clCQ__',
    },
    {
      title:'Khalta cheetos with special blue yogurt',
      price :'15 AED',
      imageUrl:'https://s3-alpha-sig.figma.com/img/cb24/8cfe/1433213955b4fc602c4d1cbfc3ed21c9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JSVuJJBOIYxl7~u9dyJC3RTPwrT8A6yxJBm0-V5uhYQ0jcmBCzcKVXxIoKn-LIrLKlvaeznow3OE1CzyuGZ3qP8ZZ0-MoaZp5dehpWwEnap7Wm4nWxMKocM~M5jH7hhfy7-L0WkqH2gAslh6ACZ2WbtfELffI8jfqMm9aCbjzNCQnbNOFCtC6B6jP4y-zThcPh4QpqdjzmCElul~o7Ekxg1vJBsWpkLTyymDL5TkHtLAPUz654gHwq6HN7679VA-LrMLz-Mpqk35DVvsac6CjdMTvoxban1edrmN8fpvEYJpyNW7W-bR18OOTIqUHP368rAjsDvIpEF5pNViY3sCkw__',
    },
  ],
}
  },
  methods:{
    changeCategory(index){
      this.chosenCategory = index;
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > this.originalOffsetTop - 40) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  components:{
    FoodItem,
    FooterComponent,
  },
  mounted() {
    this.originalOffsetTop = this.$refs.stickyDiv.offsetTop;

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
#curve {
  background-image: url("@/assets/Vectors/Asset 1.svg");
}
.saira {
  font-family: "Saira", sans-serif;
}
 /* Optional: Style for a more consistent scroll experience */
 .scroll-container::-webkit-scrollbar {
      height: 0px;
    }

    .scroll-container::-webkit-scrollbar-thumb {
      border-radius: 0px;
    }

    .scroll-container::-webkit-scrollbar-thumb:hover {
    }

html{
  overflow-x: hidden;
}
</style>
