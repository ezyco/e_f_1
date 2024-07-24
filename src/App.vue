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
          'fixed top-0  z-20' : isSticky,
          'absolute top-[80vw] z-20' : !isSticky,
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
       <div class="flex w-fit duration-200" :style="listPosition">
       
       <div v-for="(category,index)  in categories" :key="index"  class="w-[100vw] min-h-[80vw] justify-center ">
        <FoodItem   :class="{'my-[1vw] scale-100':true,'scale-0 h-0' : index !== enabledList && index !== chosenCategory}" v-for="(item,secondIndex) in sortedItems(categories[index])" @click="chooseItem(secondIndex)" :key="secondIndex" :foodTitle="item.title" :foodPrice="item.price" :isSuggested="item.isSuggested" :imageUrl="item.imagesUrl[0]"/>
       </div>
       </div>
    </div>
  </div>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<FoodExpanded @close-tab="closeItem" :isOpen="isExpanded"  :foodTitle="chosenItem.title" :isSuggested="chosenItem.isSuggested"  :imageUrl="chosenItem.imagesUrl" :foodPrice="chosenItem.price" :description="chosenItem.description" v-if="showExpansionTab"/>
<FooterComponent  class="pb-[4vw]"/>
<FooterNav />
  </div>
</template>

<script>
import FoodItem from "@/components/FoodItem.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FoodExpanded from "@/components/FoodExpanded.vue";
import FooterNav from "@/components/FooterNav.vue";
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
  chosenIndex:0,
  closeExpansionTabTime:300,
  showExpansionTab:false,
  isExpanded:false,
  listXPosition:100,
  enabledList:0,
  switchAnimationLength:200,
  items:[
    {
      title:'Khalta cheetos with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
  'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
  'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
  'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
  'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
  'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
  'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
  'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',

],
      category:'khalta special blue yogurt',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta blue taxis with special blue yogurt',
      price :'20 AED',
      isSuggested: true,
      imagesUrl:[
        'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',
        'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',
        'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',
        'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',
        'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',

          
      ],
             category:'khalta special blue yogurt',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta red taxis with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
        'https://s3-alpha-sig.figma.com/img/a77b/8256/79eb601f20b29aab0bc30318c4c765b6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRTu5bSDHDQWgB9hskHAYoypcOnU7TmXBYntr0ZORAq8NtCaar0C~mrZiYToZuxv9RrwIWAP5giUDWJcft6t-NpCqbklx0Ref67knQGGyCMDSu9GtlTcU2nN-3NySjh0SOCJovkZs0iz1gXBxwWkWGKRGdxbTcHaA5gUU86L2mpAr26iivp47n1U-gKAMoiYBvMZ~vZhA~8g1mMegPmojIZHeF3BM~BPSi2HWzzb0GabtjV1Ic-RsMUSx0tfY2n628eKoGCgVw1OEjNB9mNVggFQNx8FjU~jivLGgTLQJjnpmh9WcJQZWJ7yrNOtvJMArLR3QzYPgkTXyy-YmfFWvg__'
     ],
     category:'khalta special blue yogurt',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta doritos blue with special blue yogurt',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
        'https://s3-alpha-sig.figma.com/img/4ee6/86a7/c8bee80fd6b483d8348b0cbe05c5bb71?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0yi8HPerM96FqrcpdjaOMQLPbnqAy1swm~FvoPMa82pdRA8~6ziyhcVvt6wO8hXqX-fH1MNaDZhNORTI6pfeqJwLpCEpJjKg~X1nv8wHrXPJw-MV~fgPP3QLMZdcgWdDL92AZ48ym0XQNRQa8vMq52ECl424Lga3P04qlFDljsURuFvmtSFu-QKwyf800QDnn5ldqyzIt5KODDSVc7PrdK~9lCenuCECQ4zi~IMJ9C4M0KgCUlPEYYTIVkNhfU7b3OD4e7hTHuVYnS~yrKh1uKC~Hhw4yovHMsKIVVs2I633Wf3hpyAt7aJjUF8XsB~LXvdm2LkaIVC98~5ou6-2g__'

        ],
        category:'khalta special blue yogurt',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta doritos red with special blue yogurt',
      price :'',
      isSuggested: false,
      imagesUrl:[
        'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDQgsc9zpBQa9KEOvHdSnmrYMnlx5SYso~jd5a3bdx0uJPGCx2xK8NOYsP6zwJPNLBq3iHomiaZ95auj1xGC8iNxx89XzFWrwwtYR6mTYcVbNgoC0DUIHZui0tjCeUATFF0a9jB-cUIsz22GWq12WPGCAZ0RXTzoQz0nSRfVBZbQCff0keVS6rcL2ckpvby4WhdT-FR52iWADe7JMsmY5uuTG~b4oJdkUAn0c3T3silnDZwixaRzP2SLdgA~Sj4E46-1psszEVGNdjuGFLfcYLclZUkomQ7kRzPVC-4AcvOvMNmx-3nCzTE9PpvkqKGdf1LD~JkJjDuZYzTYxx~pYw__'

       ],
       category:'khalta special blue yogurt',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
     
    },
    {
      title:'Khalta amwaj chips ',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
        'https://s3-alpha-sig.figma.com/img/cb24/8cfe/1433213955b4fc602c4d1cbfc3ed21c9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oecdfwiO-8wSQEVN4mKw2Vj9KtrBe0vkadWUHaX1SyJjf~ohT-ZDcCmqnl0HF1bnwoTj2fypovX99j5z2JrP2LliH7AA7Dg1BmlsPf5G6SBSeMHbt2uAu9FSAp3B-gwWBDN~wxHRgPUJt04yhuaVbRz3apyMiSlhff0M8lCmEujWph0zpeUdrVd5Gxb1ddSJWDmXGYTST6R7~Xq6Q~pppRr0QmuDfkP1jMt9l01mExPV-~1-abkYqt-aEMHrZ253ou6XBxUhz~7auHZ1JistTThBAqDs9lwak~SzjDbffSXQhSNBTzb1XthQTHq7WM6Mg2JavleuPCt~J7~uEbYSmw__'
       ],
       category:'khalta special blue yogurt',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta amwaj chips with blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
        'https://s3-alpha-sig.figma.com/img/6be6/9a80/d9ec9a8c620f18d137776b7f9584a030?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CDLa--3O9wUg7n9V7ckxtdTx2xfPXVKGNHIpLPPIo9neJ2VQ5ecA1A9kOyOeoQH2oPUDXlGoKSNxhNM49k7Zb6kOnAFYMHVT3mjMKM76E02B5dR75swOSYJoQMYYS1PLSWK3UHL9y4ovNK4IDK-3lHJt25vEgCgVvIryyTPG-W4RZswq7J72ZEKmioHNRMi2nrHF9nNWPJCIyhCYdWBPaVmbvSpbKtWQxKVQ0MQXe62bL2zI6vZucR7T0TWdN7S0JUBCLhHSuhxkd2jtlTvr3eVuiYdwh3XhpIyrEje8SPqvs9Qtgn5mNeOorU9ZTD0hk-LzpnllBCdXkeRn3TrRBg__'
      ],
      category:'khalta special blue yogurt',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Pink korean noodles',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
        'https://s3-alpha-sig.figma.com/img/91c4/e1c1/9c172fb2e64fd6f33c0ba5f73962ad4f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fl6sWNS0v2QJfHW~MnPxU-NmcwxIFkJy7SN~xQ9N122r7YkWYbeNMlppWdExIl4ni31ISCc7MeJZWvUsDYAmzi~TBdikdRHm~q1hm9vV9G3pMmeFGtCXlWv-0xRbdY21~pV4DwAes65GNyen~ChvWVu-tccIFPfIJBLWxF0RjphQzlxON8kzXAaNP9Cj3l-8IXRO~wg1P5yiYeScbk9Z4CJfIlt7qA4iBByLl-iZxQZ-c-6eWzIUtgMbtpmajoHWiwjucwZbPd5K2yB19wTnc051ZK4sR7FVajEfSBmc9P5OPZSD0G1CzeEZ-KIc7T4wEvFRsfr9OWVxZUKBPRTLiw__',        
            ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Pink korean noodles small',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/c7ea/cad8/ab69ddd9b3b405723825959e6d56f533?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=abu2DIEyppNfC9Hioj6YVS3hdT285PsyG-dD-PP543xAWFWUiVIGhDEdvAfvo7ygqAxC9LgdXqE3-bMTibxDUnXZSqU5zAYFJDqMEgIDm-sFNR7c3ht9ci0I8x7KjLUDun8~Eqf6GKGw0y24872Apjib7uc2dri5X4Kj-~xGcGOuTFISG3aI7-Aqrsa7bantoRtLdJoCdOBzpkgpiV6DSK27ETUnuiqL8Wz4LmZiZamQmeCTxrwj~luz1qDQU7mxsBJ4aEiALrP4CwXdJO6mAl~4Zijnq0dORFnfI61hEO5YbF5BpDZOyRNPRLiLBrhfrQHpLpsDSpK241UpDpJWjw__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Pink korean noodles with cheetos',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/671b/8c7a/c5c6641128a28c6d9cdb8ae4e1213032?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jwophNDkM0UFZnqQH6hqaLdnn8w~x8OsyJs3oA81qVzJGzHIRXKuGaz-7pVsmfwqKB9qfeoXKDiS1oLYEr4qPCa-7eUiCDZS8ZlObKBIPXCt3CWpbUL95-dJwNNK~vIvlMZAa2RA6mIaNBArMleiSn~gp7hZ71n68ccfwCTidLkVjyI7gQNjZgrNlwBmqZHp3eVGTwfIhtCprjdksTZ4-AcPhDQOnepvrJOEI0nhjvJjdfn-CJ21lgHzC9CSRgV8rheXEUeesHledL0PpC-Ax8RQaNcD2gEvI5X4vx5ClypNtdW1g-S~tPIUMS-xhEfCdSPnJKmzZIvie4MkkFq2Yg__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Pink korean noodles with cheetos small size',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/671b/8c7a/c5c6641128a28c6d9cdb8ae4e1213032?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jwophNDkM0UFZnqQH6hqaLdnn8w~x8OsyJs3oA81qVzJGzHIRXKuGaz-7pVsmfwqKB9qfeoXKDiS1oLYEr4qPCa-7eUiCDZS8ZlObKBIPXCt3CWpbUL95-dJwNNK~vIvlMZAa2RA6mIaNBArMleiSn~gp7hZ71n68ccfwCTidLkVjyI7gQNjZgrNlwBmqZHp3eVGTwfIhtCprjdksTZ4-AcPhDQOnepvrJOEI0nhjvJjdfn-CJ21lgHzC9CSRgV8rheXEUeesHledL0PpC-Ax8RQaNcD2gEvI5X4vx5ClypNtdW1g-S~tPIUMS-xhEfCdSPnJKmzZIvie4MkkFq2Yg__'
            ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Vegetables andomi',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/8794/20c8/bd3be8e9b218f55e0e6c7c06d3b6d79b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RjgPKDwFs~wxnC9o-MruGcjRyms2p7MN-NAJHa6tXIG20cNanB5Vsa8f7I5A6zybJJ6ENSkH1xPHybKlmSEJqaibO29qVTtOIk4MUWM43OYqdMBoFfgI0pPRqqR6Gt9IZ259sMWgs2yzM8InGNJpeAxDPWssecO26129XMtJkDbuqbttCpAj7fEiU1QNk0YPj4F0RjeixS9V6k3NAt0Z2t4Ru8S96wzvSfm-SSzOKok6O~IFeR8YMTnDuLfJQFnjwvO-EygDeTEVGpGCBeFgQA1VuKz-OV16M~hDlZhFObYoNrhNtrbbSFsh6R4XbJQ0sxKxibvcYv2IeM0oDkHRBg__'
            ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Vegetables andomi small size',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/e483/01a7/4566e0c1c43075d9eb281fabdcf50061?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U8wf~WbwX2aPEMKc0pNDnpL1XEm~DY2zChmPL4GbVNPGPAJSXV2N2aS~fLK5nF0dydEaCFX7-o7QJFeJApkxdwdfdXnd-Rkiu~p3PqTrIA9DKiqIozRdc6IDTI3kt8QnsrgcvDAwibUNNHQdHGq6fFHahX4CvEKrqiiTfFtreJfyuA~wxyw-PiALOWkcVp1brrm9e7cEL7JjNAtkptE59ZSjwycfvD~gW9QzYypM7f4sAn3uecBdSD7qHLsEAeoNrM9GyrVrtuHiomoRKMH6FjSY44vwRPEDzKJivvveF211I0s9jfX1PONBxr43a5hlRUGssdSEC0quQKTcduW68A__'
            ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Curry andomi',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
   'https://s3-alpha-sig.figma.com/img/8a1f/9d2e/2af849eb074b25c8b82a1e115acc4921?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRr12EAGXjDh2f-FahhSkD5ZkVOqGdoA53JAWHOvVzrCcBNhLNa8l6~0mcSwEpB335qDQhYhXVYBkaFCEVDs2cGd8~xS3iA2rhNmR0WUSMLUGepvTOcacmGTh4lXKz7gJ1cjetOA~Lrpfk8iBz6rA638RefOAR49f2vnP6WFwBh8JuhRn2xNlIJd~Z8ThzaCqdJU24W62t7WsbM4UFcqIQnXHSnVLC1HUVsXmgZyiAEvK0TWIuyTt0yDeHBStJELCrHcJo1Kx~mjI5YZUY5Xph1halyL2Wdau-HmXE5A9Z~FBvFp5eFFmP1y1jiEUOVPrRMepUCnFynzUBYNRBNwOg__'
 ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Curry andomi small size',
      price :'23 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/8a1f/9d2e/2af849eb074b25c8b82a1e115acc4921?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRr12EAGXjDh2f-FahhSkD5ZkVOqGdoA53JAWHOvVzrCcBNhLNa8l6~0mcSwEpB335qDQhYhXVYBkaFCEVDs2cGd8~xS3iA2rhNmR0WUSMLUGepvTOcacmGTh4lXKz7gJ1cjetOA~Lrpfk8iBz6rA638RefOAR49f2vnP6WFwBh8JuhRn2xNlIJd~Z8ThzaCqdJU24W62t7WsbM4UFcqIQnXHSnVLC1HUVsXmgZyiAEvK0TWIuyTt0yDeHBStJELCrHcJo1Kx~mjI5YZUY5Xph1halyL2Wdau-HmXE5A9Z~FBvFp5eFFmP1y1jiEUOVPrRMepUCnFynzUBYNRBNwOg__'

    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Black korean noodles',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/0525/1204/7a164a745fc8b6668bd59023f52c4c93?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YbpwBq0TlJZE22SqGOaRf4zr19LENVG91hnKsoo5hUkF3d7F9Ye0kLhTFHFQiwBxpW7Nc~3MYjZqCjXAhAm4G3a886HLqNlojACwcI65NXmhPimLLnyik61TcBrVv-dNOGaEPuasUhjxvWdN4WS5RZ9s160vwY6ElgslMn2I861EVka8B1odRX4GnmPiZcCG-S6c9qz4yHXOZXXbgKgpVX1-Zg6sORf2xV6jv0DRMcIxnCUxnY4l6OjWmh-lE4CSwiTJWDRRVdys2-csnZOwWglRelYMTkGzP77E6iumokL~gqUrXJNWOUIMQpZrGWtF107Nh4ttyU7c6cwrFmA2TQ__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Yellow korean noodles',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/b1f6/55b9/b08e30869e80f2d0c53749c317410bc9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cz10KZE2Ui30e8kVxYk9vTmvqSxwpcd2vAO0dV80R~4AiEbY0ZNYoF6Q-PUzEz0R5Q5yrJR9A~~2BjDgwYB9Cd1uHb2RrwhAnUm2sadlTFVev5feESF3V3iz0Ll~Wht38XDOMiOkNxRjlvLHCQ9o~LzNLP~plHxgPcB~wTqU2V9sks9V5GD3scEWYxPwwNxgX5Dstmgy7lTPOa6Fpp3cqjfiOwup-k4sbBUSmm4A6ZLUcoa8JSxyly3Zc15yVWkEUnh5QfqRvREO-WVcquvKPpGQ9CHirWBQX0~XXmQqfMeaHYtMp5VrE1Jl3JsIyPpm5pSNqweiey-s46UZ28moXw__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Fatta warqa anab',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/10bc/600e/92eecd11d9ce7e713d001cb80bdbf3b1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E98y9xyOmUelEtWbPOHK1RMnyBYiu2HX5ZFDx3tPOlOlpPQsKh3QX0I3p5hSJ5DPhAT6I2LI0RfrYdjaXvF~uB~pF~-3EyeZjsyBp4CUKCfXirwnGhbgNw80uNE9LNZNbTkpcm0hwP8XiRCS3ayuoTWmSuEg5~8u-JMKDcq9faZYReQZfDDRz0IbvzQXd5MElatmmEEs0UKt2-7b7HKEZlEHOXMZhesF8o-E5yCmQygSVmFYPrhbdz5xnS94Y1Z6EmccJyiZtSQ0GIhRCYUGw1U3gmSUHW8ScAeBOzfiKkDiwZpzavkKBh2l-bYxyAoMWjnN4qkkuPEkfbU3atK-ew__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sweet corn',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/05da/3977/bad9c74d3ddefc22b21856faec882b14?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p8NlAn0sdpufl8gCLzmK738IFATmStvPzuMyl3qkLlels87DJMHEhbyidl~l1S61eh8R~CJPqG89gIRC23qLZiDvSFMhC-~U~EitihWlUkg1P2muvGZHg1fG7Xh5WLFAcIOboKBmmriLf-Ac5q98hoyA-9N~c4rNHzpg9EXA28072cM3UGM4clbEAI5cNotd9FYIjtRT5KGhEDJsSOEjy-S-P-gx4fNUaRnf22cH18Irjf-oUdxbH~YwG1W0hxEQmuZJ0~2e2Zh18KfIaAHQrGuZOUbahvywit7Fj-FUj8KNHH4F7t21BpdXXjaYxsy~baWIKHiG2~1UZw0Vc30iLg__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sweet corn with cheetos',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/a7b6/bb48/433d1a2c8d3d9a7f6e7c569f9604ef18?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lmx5PAHPVrYlmvCBaAy5FCHfiazmb0j8OSgwX6ZsOmwPnuSYP59PARTVzsWNVu3eNaMvC1TrTZv1Uud1SQ~KrK-CLMT9FB~BqXnB~qfQCXBfb14ekAh-S6lZPX2EEFMzMhj149EbQOYSi5MqfN6U1lgSfd5q74D9LA40biwPX6tZRS3N1snapEQbTHUtIJeOMBNbFuOHaPyThHvvdR0s0p94bFjC68CO-WvkGao80fnVJOku4tTRZzpyWiI9DnIwDNp5-5yC2Ta2VxmKcQQtcreL3XC8l01SmIMBFzhQfGWVHoPCTYgY0eO6pLe~x7dS1oXTAltPJYj7J5ulqQZLkw__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sweet corn  with blue yogurt  and oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/04f6/04fb/a2e8eb77de960dee8e9ce508eb619d38?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibneG2aZa7ErF2Sxu-PVnyqMspNhxCJc3hmabyKGcwFU8jqiyzIhX8PblQBiXhMiszIpBSJLyvNo2t5HeA7cYv1B1ejI55dA6dX54vT0rt~R1jpaWO5Y5dbj~Kmj3UrBcYwWGNz8nVXLnnW~8U1L44Dz5VnKpI2B7FOyPaW65zSYD29~XBtETDFlTxGa1~aJro6r151~dnZ4AxdpDMIyUSnW8Zk~mtbMsVXZ1hQIj72fOwcnFQSK4kXiJWY5vQh7X7zef-JsGntNJDqpH-CADwtGEve9OSqUQci2q2tbCbABzW-7Y2UNugJk5EjK7yXTi1m2y4vmXUaFro~88DsKwA__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Pink korean noodles with sausage',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/90de/7e63/cb5fe8bed26695f91e1465030ac6b18e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WJ0NM5~~zS7KcfA1XJjE2pQLEVCHzoHIIBIKnGD-~ba3UJ0Mc80PHXzLKh~f40OHc66bBHt4wPRzkSrt6IsewDt5~VQdZXzCF5OXxLuHQChjmKlszg9rWbqObLarX8Xk3LR5Li5Yb6vsbfp3sR92bisEYZlABVIi9gAI96CQXwVJZ7LtMM7xj~HsKh8YpItvO10nuJiqrIfvrOFxpECG1HUb-pazrmkrvl~~VTHi5meZoFYiJJDhtMd2oy-Aqw7thueKY6n13vGyoYVCIH8jy0Js87zgFxE0Vecaz1TzgKtC4sKCQ9dDxzW5-epiLtaB8rmna3RYlH79SdkTarrRHA__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Trend Fatta waraq anab  with oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/3f4f/7da7/780806af59f9c5b539392e8b01e49ea0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XS5zhNIeHLAPH08rkgbC6g~eZqMknk-S6Bqp8NjUmVLPn0X6lY5ErdhocQowVzWtpYeQpVPpbrUBLXWFtCrBST7q9KGK7vFNMfzJhl5APvsY4y1Xr16mpsIzAofC0gQ9BpceDar0jGGDVOvb9FHBE0dAUyCZpGn-BAj1ecAejWahuIjqMfG9qZLp510UUenS5M1Ktm~N3EHKdOJEge48xXbCOGQJb1MlvV2hjLjqdrbg2LOBHz-TSC9Sa7Bx4~GAJy6eLSHA7gSWJukZTXeA85vW~fy05w8dV7i~HP67b-aMtuslrqi~Kxd5mg2AAWDfAFDFsYs9974boZB9Qfb0Xw__'
    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sweet corn  with blue yogurt  and oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/04f6/04fb/a2e8eb77de960dee8e9ce508eb619d38?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibneG2aZa7ErF2Sxu-PVnyqMspNhxCJc3hmabyKGcwFU8jqiyzIhX8PblQBiXhMiszIpBSJLyvNo2t5HeA7cYv1B1ejI55dA6dX54vT0rt~R1jpaWO5Y5dbj~Kmj3UrBcYwWGNz8nVXLnnW~8U1L44Dz5VnKpI2B7FOyPaW65zSYD29~XBtETDFlTxGa1~aJro6r151~dnZ4AxdpDMIyUSnW8Zk~mtbMsVXZ1hQIj72fOwcnFQSK4kXiJWY5vQh7X7zef-JsGntNJDqpH-CADwtGEve9OSqUQci2q2tbCbABzW-7Y2UNugJk5EjK7yXTi1m2y4vmXUaFro~88DsKwA__'    ],
            category:'snacks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sweet corn  with blue yogurt  and oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
    'https://s3-alpha-sig.figma.com/img/9ead/cb98/e02fd199d0411fc74ccfad566c666e14?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d38aV3fU6xZNHnZBf9tFVDxeHLabFPRPdLYzuG9FYdZb1j2mqtH50y21cR2tXBg3qdOM8KBOlOfh2svor3fvdBn60iLPT-EFt6XCo778eG7pr1C6Ynp0Es2bB5Bsy8ODyhpaGG6S0q214JaZjvLqWUDS4rdnPbBvfRuoeTX7ihyaZUPX9lqkqd666TB6f4R3h-7et3J9WM20XXyNYWK0TzwXKIdOBlaX0Pybdks3yc5SApDOiQnfb2RQJb3VwIiGP80FGEMCUz0D90l6moWRYD~uhRgDQ3aOIFHgg6IA4iJkLtAj8RC3FIsjnvNPoV6wKkRN-ajCB-cZ-7whLksUng__'
    ],
      category:'ice cream and sweets',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Cheesecake raspberry',
      price :'40 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/f949/7c91/82bea5050b7bb9eb4875f39973ce486a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QcR3Qc9qpP4nrSe21pwWUR15W4TGyv1nf4GueKWWzreh7MZ55ANnWb1mellBt4J7dlYElgjTl~DVFhLsMDmOpnjE~Fs4kE3YRdFBbd7Rw~ojZQffTNND19dNXqHA46PYNmnlusE~mDYX58GQy9u4ZbzeNXDQvu9IOxt5wcRmxMBIFl9M5~UPwgj6LmNetvl2eVyb5ahHRDJ9wbqD-8Bi7SZN14iL8qMjg2pAyDvZvRvUQVbJStZK1NiohWZ8VQHSw2FubT5TEOBZ5~PReWruF7cJMYHt96-KRJUEUfsDGs75ZUkd89Uc0kHTANDELcMleVqAv2Xnn5Qr8sc4FU6NSw__'
    ],
      category:'ice cream and sweets',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sweet corn  with blue yogurt  and oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/04f6/04fb/a2e8eb77de960dee8e9ce508eb619d38?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibneG2aZa7ErF2Sxu-PVnyqMspNhxCJc3hmabyKGcwFU8jqiyzIhX8PblQBiXhMiszIpBSJLyvNo2t5HeA7cYv1B1ejI55dA6dX54vT0rt~R1jpaWO5Y5dbj~Kmj3UrBcYwWGNz8nVXLnnW~8U1L44Dz5VnKpI2B7FOyPaW65zSYD29~XBtETDFlTxGa1~aJro6r151~dnZ4AxdpDMIyUSnW8Zk~mtbMsVXZ1hQIj72fOwcnFQSK4kXiJWY5vQh7X7zef-JsGntNJDqpH-CADwtGEve9OSqUQci2q2tbCbABzW-7Y2UNugJk5EjK7yXTi1m2y4vmXUaFro~88DsKwA__'
    ],
      category:'drinks',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'mango sour',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/e25c/7b02/9cdb20963261e68b180133d3e80d6387?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AE9keZ5qO0BP1chVSF-OhW9SPg5HIO4Mc91VuOIRIvoG2Lap7vPo3DPGWb2szD94NF642hZZFy2p19guTEC33MJN4AJ-olChcNZjcKdDqZktR8CpOhmtOdgTPJxsrXTB9O3uwPBVX5veT-4XnqY1ahy7QYwuf~STmb0yOgiQJB~7-FWJorIGy5sQB-q~SsNVSpQUf0g5DXASgPfy-MaXT-~V8pV7vg-ndahixJNbbLCwtbzXElo5gJWOSaas2IIUJXjjD3qnDEthTI6zEJccvp~nFHt4yWjHiVmUTztrBH4oHXzt78r1Urw9I-63At5PdHrfKUJx06sgj78SVZ~zVQ__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Spicy mango sour',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/7143/f02e/1eb532662be6f1a91e13581236e821be?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fb7LUThMRZo0kWk7KuE4sECb8T30wfybaWBUkeqcnyndNnZ4bzakxQamXIB4JtfO4rf~i5XH-cvfPG5tYNIlfWEUHbupDqEpG5l104~5dHsKdEZAsTyXETjL~Ug9l7a498NpNY7lE01SO39FZ5LgV~dbj262l-Xdgj009TqKYET8AXIbhqEgYS6wllckd3wjldms2hMYLaVSyZqmdaCE-MIyBt~DMH4S6-zPNW5ggZ~Pzusq2lTdEDVg8vnIC7M9SciaP1MGTXXa5ZQTiUpdBHj8tfERarnZyiLy~Gez-mOHqQ3HT9-6w7cIWfqtoLXdf~d0xEqelDToZmLlCBbkZw__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sour pomegranate',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/b066/773f/b176dbd764ac3fbd527411d5d9c983ca?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8MufIXgrQO1~ggD5uXBdUKpGIXnMPq4vB4WkF8QGK1aOP~DGgjbN9JoPgoTuIlg7laqYLdRkfdkhg7kjHZEoilHP-romg1CN4FMbQgur4LML624oiYG7N191NTzbpYRN1SIF1lzI~e6Z1INg-XKhDwUaRC5kmzEatcDqU5yzb7dVEreSiHhatlcsjw53GIj3ku3xVLplwuEw9NSstqkCFgSwnS7iMrPCXpVe6fF2CC4EATP7Ur5mtyPlw8suHSK-fBgh3UWtLpe1ZXk7WS4UyTS7JPuzHSUSWE-53E7b9z49-XpXNnwcU1ULSqDfoua0zgX8VxrsUFWGKGL3Oyuvg__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta trend lavashak sour',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/c71e/311b/17157657421d49aa5b6c14be9be76185?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRj0ka4TTukBorX1l7nrK8epJdOSovpbkZie9NFiOdeCJfC992ZNjWzs2h-YODBiG2un2Y~9qKBQNj~q5ZarsCqneC6fPLqQohYTGkL~ZD2TvpUr2nXrJTy~SZOHgv0epv6CMhTJN8bGd-7DLGf8rpn90jFdSLVMpT-0xISMcquErh-66~LgNyy1GemhQlS8xlnaVz8sCkYBnSLt5FvYz3T2GzDKlmRSWx~p~WFslJNeeB0CmHMbp1MMNZRDYh-C1h6mE138ZqXqXuN2k6ybzl6EmxtIWKV1Mu-3kUXmjeRvm9BzRaBgfc~4fRfpitNf8lAkbk5V5QFV4kfajcZSXw__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Dried sour cherries',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/90bb/2482/684f786d4475951096ef746aac5c3699?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lv59uZQ1~aJDDg6qnFHga5JTnncWpprGndY3fOE240yGbVl0OVtZ7-84DPQweUOqRy~ZxkVTMNcHOc2ETk6Cp6nFbET0fiFfWRZJGEZznSHnmtx3qm5MT6uY8IPiNiEFMkSunOX1ndFPeH~S0cgHSFWlaCFG6Fu-aNFsXQbrtzDkj0PgIFDdsrK2M334F0UW1cLLfnSi7n0hFE3nNc7CBjUPbE~cequN3Babf2NdyeDasrinspNi9mMYOPMgJ7gquFdz2rQ5mR~x63j6axT2n8-pBrfFAMtdTNLiJIhWVdNKDlQQ-9NKB0Ys2f2hDVmlsgPvF~dsYxy8w20CPyi1xQ__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sunflower seed special iran',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/dc5e/ec2b/bef618fe9584069a1dd8b9ed03729bf8?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=byFmI7YW6OiRCZKJ5cwBnE0sbT464fge3QQZVJBOfn5SsoXD1SE2DP0Lk9JGWexGTKpoJ95cvuLp19WVoPlqZb8CQ-uUgOsZVOQtmpmMak3SNnJmHsGmc0UyVrzpsRlQvPsLAyGdtN1BP-MSoCx1qDdUUwX0gjAMy2QIQNXSXXcXLxC9zOKuDFm0CMMReVZ9J1oztx~jtbW9YiKRNhke9HnSgOGekHtrbTFyAF0u-yP36ZxaTUUtDENRnKmq5rY2SZJECuctAZQo53lzFPXOdao3Ga6-b~R6qk255NAGhWjNl1l8O9oIlTJ2ca45C3SNl6TBnFZUOd2irVAk9wzZww__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Sour skittles amriki have salt',
      price :'12 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/3904/e4ee/2cc36966d2b6ae7db56257b8b04f88f2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddVeOBfO-uO2g9jdUQLNIdsOORex23C9lY-QTQkZzh-MaE1pFLyfeBuNS2O9NSarxbQ5jdEGdcNs7WO4C62f-ivEPgMsruJUDtuZkxkh8zKDWcZb3OJehwmQfpKnBfiVZfE1vhnrvSLUCLw8ktMEqfH4D6yvJ8JC3~0qHwBbMgpSrFXN7nLEQg7xn4xqcTX49SU~B33DpJdSV~HL4MWpMn4uAwg2URTwN8wYrh4AsKW1pVWKH9PljssL-sXW~sqVpbeX0lGdsSQQK4xFPtCzeJ0Q4BJ6FypRl7bqYZY9qfgTnoHKJIwyHv-PCvCpgn0ayzmaizIGYo9OydS4-9-Jww__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Canles cherry sours trend lane',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/156a/b8c5/d31ce07a056c6b3b910be24374718ea5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euFho1kaGlBSRQjpvkk4tje1qXNMwPG1~Ww1rPqgazEVuDOlxm2gFQ1~B5ykjegT5sWZMTms9UhYPE7nrYqL~u0uzfq83hjRWflk0qE2v4W8fEHRU4GECsPTFS18LprvpGdsliDNDCThRfUg-SUBsgU80P~oMh5tlkNq2y9m6sjgw~KxKWr7c4A2Ro0NXMD4YiUH9aPAGIpPOpXID-MBuyvjfAxGj-OlW9BSv5uRFz-9Iv-ZscDxYdj6rJNCp2sZ-OCJFhiVFpKCKhMl7QhnAwwk5DNNSYHkkSCgDBPzY9m44LX95IAoUgXGrQ0f7MyrkehpR3ZzsqpoXTK5nPxp9A__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Mixture of sour fruits and sauce',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/3826/7778/5f2b3b5de8f1d283a9039dc7239d8ff9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYKe1I7fGXxTl-nN84189fHBWjKBw2XJj8r1X2pJog9CzKiTYDGOOek5OD2WrD8mhwBcs~i2qiZ5TdRvTHyneCJpqAUvSDvPIghO9M7MmiU6Y~6KuRKX9cdKkVr-OE9poE79cWRJGfx6fkATrSPomPq2bPJH6oUCHrmqQaiwCz-U5c7S4b9Z1Zk-9u9lER4E1RiZZKDy0P7eSWU4iSJtxCJq573IswXIINTCCf1MxeWFLSItLBu4Hc8yJKoIF3CLohn6Biy8~z4E0qp08LvqoOLXtecoL-PfHKDZQ1756acVe-mmoAULbQzFTtA1O2dqwlwjfvD-jjEnIpdkrnsQNA__'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Skittles sours balls',
      price :'12 AED',
      isSuggested: false,
      imagesUrl:[
'https://www.figma.com/file/ButokGbcqH9FL1UXz66Txr/image/863e36d6fd0af6b1eef4c372f6f7e6384ad2eeaf'
    ],
      category:'fruit and candy',
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
  ],
}
  },
  computed: {
    sortedItems() {
    return (category) => {
      return this.items
        .filter(item => item.category === category)
        .slice()
        .sort((a, b) => {
          // Define sorting order
          const aSuggested = a.isSuggested ? 0 : 1;
          const bSuggested = b.isSuggested ? 0 : 1;

          const aHasImages = a.imagesUrl.length > 0;
          const bHasImages = b.imagesUrl.length > 0;

          const aHasPrice = a.price.length > 0;
          const bHasPrice = b.price.length > 0;

          // Sort by suggested status first
          if (aSuggested !== bSuggested) {
            return aSuggested - bSuggested;
          }

          // If both have or both don't have imagesUrl, sort by price
          if (aHasImages === bHasImages) {
            if (aHasPrice && !bHasPrice) return -1;
            if (!aHasPrice && bHasPrice) return 1;
            return 0; // They are the same in this regard
          }

          // Sort by imagesUrl presence
          if (aHasImages && !bHasImages) return -1;
          if (!aHasImages && bHasImages) return 1;

          return 0; // This should not happen
        });
    }
  },
    chosenItem(){
      return this.sortedItems(this.categories[this.chosenCategory])[this.chosenIndex]
    },
    listPosition(){
      return 'transform:TranslateX(' +this.listXPosition * -this.chosenCategory + 'vw);'
    }
  },
  
  methods:{
    changeCategory(index){
      this.chosenCategory = index;
      setTimeout(() => {
  this.enabledList = index;
}, this.switchAnimationLength);
    },
    chooseItem(index){
     this.chosenIndex = index;
     this.isExpanded = true;
     this.showExpansionTab = true;
     console.log(this.sortedItems(this.categories[this.chosenCategory])[this.chosenIndex].imagesUrl.length)
    },
    closeItem(){
      this.isExpanded = false;
      setTimeout(() => {
        this.showExpansionTab = false;
      }, this.closeExpansionTabTime);
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
    FoodExpanded,
    FooterNav
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
