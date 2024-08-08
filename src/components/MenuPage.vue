<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<div :class="font">
  <div :class=" {'h-0 pl-[5vw] w-full overflow-hidden':true,
  'mt-0' :!isSticky,}
" >
        <div :class="
        {
          'bg-white w-[95%] h-[10vw] p-[1vw]  cursor-pointer rounded-l-md select-none whitespace-nowrap scroll-container space-x-[1vw] overflow-x-scroll flex' :true,
          'fixed top-0  z-20' : isSticky,
          'absolute top-[80vw] z-20' : !isSticky,
        }
        " ref="stickyDiv">
          <div v-for="(item,index) in categories" :key="index" :style="chosenCategory === index? tanBarColor: 'background-color:#FDFFFE'"
          :class="{
      'text-[4vw] p-[1vw] rounded-sm drop-shadow-md transition-colors duration-200': true,
      ' text-black': chosenCategory !== index,
      
      'text-white':chosenCategory===index,
    }"
    @click="changeCategory(index)"
    >{{ item }} </div>

        </div>
      </div>
  <div :style="backgroundColor" class="overflow-x-hidden">
    <img :src="imageUrl" class="object-cover w-full h-[57.75vw]" />
    <div id="curve" class="w-full h-[33vw] bg-no-repeat translate-y-[-20vw]">
      <img
        :src="logoUrl"
        class="w-[27.4vw] h-[27.4vw] rounded-full object-cover m-auto translate-y-[2vw]"
      />
    </div>
    <div class=" w-full translate-y-[-21vw] py-[2vw]">
      <div class="text-center mx-auto text-[4vw]" :style="titleColor">{{ cafeName }}</div>
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
<FoodExpanded @close-tab="closeItem" :isOpen="isExpanded"  :foodTitle="chosenItem.title" :isSuggested="chosenItem.isSuggested"  :imageUrl="chosenItem.imagesUrl" :foodPrice="chosenItem.price" :description="chosenItem.description"  v-if="showExpansionTab"/>
<FooterComponent  class="pb-[4vw]"/>
</div>
</template>

<script>
import FoodItem from "@/components/FoodItem.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FoodExpanded from "@/components/FoodExpanded.vue";
export default {
  name: 'MenuPage',
  data(){
return {
  imageUrl:'https://s3-alpha-sig.figma.com/img/b721/2cc1/b9a2f17b3524df84d817522685049f10?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrNs4jkmaHhHuTe4~g8Qlm9uRfxVHKWBCXKFhXDvLvTNwaN82NLRkyEtLjTOeVI6g3QigNb6LgM1Xxv2Xk-LUyZnShipPzEoQ-gql2r-Ys7UrU-L98jPBA4TISX4t4-gXIqHhKST9bC50S3FVHu1kSh6iHGOYbPvwSwRb2v~kLNB-~UxHCsRzuXNGviOpWQLev9pYfKpzcV452RjYoLXHFFeUPlZojD3rLRjHH1SFsB-MJS0P8faJ67P0qkIHdaqo2xu~vmoEmCE8sNg~-FXIbKcj840nc0rVARhRzjmCYebH5h4kfetebC~Ce0P9XVzizuPJtIRLPOpeyOuVkijdg__',
  logoUrl:'https://s3-alpha-sig.figma.com/img/b090/4af3/2c97085e4e414fc8fc0cfb87d129ee7b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N7gx4halHsKFfkXb8ZwVkHA2ClanhJqQNgCONxPhZAo79IF6Lop6oZwW3JNTysvQsgzm7ufrsRLx7OHTocp6Se0iN4uFQlkYOZubxD3iac3OIdId7H8EVTZl40NYc9JAaLQcWrvM4l0Q-VeDp0R1Bd16k6pEM59ivSRhJ3PbcuAx42dL-MJ3cDhH~Ipqv-9xyFHB1~snUseO0zz2DSOBFX5qqpZvlFn-RCSDz5nbS0YCWW8dYDucVaSlbQm0f3VnhSFOLswMPvFFBryRBvI9MYhYS1VqyAEWWG2ZszxK8m8uGnIGAPHXdCkQEWbFLDr7UHmg-WWEKhY6NH2ItHgYHA__',
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
'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccGdH76QvAezxzGw~m4JpTNj0R83Q4wf2gY7nFhBf1rHEG4L3ryfAUlh4NtEy4HtDZg8FQy32C9~uuyPQ-zGrvpmNNT3jbVec02G2DYdeW~IcU3axLM5aNs~CaAorLLbCt~7tnaw9bZqcgTE5GTJUcS6AYdedCLqHMMmiPcGiksPEH3yKTlU8vnfHNE0sw1jRFX3Vmc2Xm0KNbrl9q064BdZ4z3-TJQNqXJjRppvEBImgttakmfL~mYljAwK5r-mgzcrfGppyhhpVG~WuMjlGiQB6hiWx2i6oMNM1ALCyKRt~GAUYiYorAFBmbzA5y-8HvJvsTalKerrn--euTC5AQ__'
    ],
      category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta blue taxis with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-sWX5mXqNON9SDS0~vGIyeF0grOCm47d0vpmUNXVLRMXiQpyLl9oYDEhYuiVRX5JvmR5Fb3F7kEO8A9iDJ-0RvzyJb1UyGigXttMdwwnRHlFYlYlYhLDUFDvvHQXeA0krrrYKsaIifHNnpNVIhlVLKNnRB93jfScnRc44FFm6Oy7kl4uMgELE-dazDXKcFjpuvOOr0CB5Hd81PE8qxATl6y0FwwrYwbLxn3odt4HH81Cp-aoJuQAAHqrqL8EDFGf-w6~fHjnGTydB~XXRIkTftIWIuOZGAqmUdqn5zgnlvCMw2eR5ad5kSnQ2XY3ZLg5FqOIK5ReYpShQJDnmi17A__'
      
      ],
             category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta red taxis with special blue yogurt',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/a77b/8256/79eb601f20b29aab0bc30318c4c765b6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=au~KxTTApbIj7B~mdrOQTo6fg3Q0lW-E2WW34E5X4PQMrU-80Sa1sqh-H-Uw3mc-GbsDnH12qHM86GOUEylMOUMK3SEAoRJXTj9DvpbQQFXmNyH9WsKceEprelTXxqJhk1dhVDsnFZyCizzGi8Wvs-KvX3ANntnXNXnQMPrhPDC2DbFpj~-7LsxMv-l5xAVk70RRuCmTKXUV51r0sY31imBYFwwpJbSVMmlC7r4agOJ4bR4~9Yj~ohdOxiLl9klG~LS-YxvXzNoeKS1Mj6qNqP6q0LRYUwXw~tbQAesiVA6HrtgH9qxJCDODH06iMoUQJbR7Zgl2et3jcAT7JBsqLQ__'
    ],
     category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta doritos blue with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:['https://s3-alpha-sig.figma.com/img/4ee6/86a7/c8bee80fd6b483d8348b0cbe05c5bb71?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frY5~Or9ZNUn0GmrAklndyVtdqN5vTFjCzVV8Us2Vq5RZaf3vRPSbREl83VbNIpBwNKLdENago6FtIMjdXAyedAE4OOOxk5Tpe91ihU2Pfy9zpFlo8wWJzSDQdB2b86rQGuMPJAJ64B0SmBmxOXn7buZnJY~XNrfcV-tU0hyRUKkx4rm9Fwr1RS25vszGXNBcpxiVmQIJp2vQeGGkANIKlkRXVL5NJhMyiRvZzGIFuNUiwVCZ9UDebIYWSRfdDZFIsa601zAWkFI1FTlwtxgA-fCcZ22LxB4N~X6zXJWA-1CnY5IfxWj-Y31TKkiLYjvEh205hRMHPO4RbWwV2sUeA__'], 
      category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta doritos red with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
      'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HUJFtriw-uXOEe33hgOTWsFuEWClVFqdnKJBk1qqwlvOveShc~9FDFG9AKLdyJsWHuqKHZuWlGdbneL-KH5AeVubSEygo~YZZ0jRRFJ5NH8PH8j8~V9ZwvlOP48eNcLtyV5m~4Cw9MlojlGu0pUmy4Dhl7so4TteWesSXeRcyrv2iGPQL8vEnuEN8Sjo2XaYG5pvPe9-Tw9X-ISnzFgjd9zRlMvK2KuXoxdRimHdPVEuflxmkfc9qmlfI~swAw7ae0VSaywlJJjCZVe9pDFuznId0V6AhtAz~9BSDrFQZLDutLU6UGMawxr4yxxQi-k5HM1ytpBWCCN3l5KrssWCEg__'
       ],
       category:'khalta special blue yogurt',
      description:'',
     
    },
    {
      title:'Khalta oman chips with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
     'https://s3-alpha-sig.figma.com/img/cb24/8cfe/1433213955b4fc602c4d1cbfc3ed21c9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aEAgYrH2Ijvm0Cq~V2TDAIdfeOqSMd2i2Tvs~XxkkisonCqUpvqWEn32j9ZX44l2N8nhNYZuUhnNCaqQiolQvyO-TSTPJHgxbgTXGskGvgFhy1SiUdnwREcZb1~~zPLEqpzpK6cvjlqKf1gBRXM~Tbu~-NWPPc7zRhtE3D3fCPmnNAIFzKkz8kM~djMifJbHGjBjRfrmjT7pPDcHk4HZ5LFvmlw6JjSoQ0y1f~1XqR1dovZuczLw73UvM9ho0lT8VfQcwpaCh23~ddxMem6JnrZILKCLLK8noUG1G6bw~YmkQiCzT77nj5GBPEp72PMqcNcDMONrDdEVbJwdbxCVUw__'   ],
       category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta amwaj chips with blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/6be6/9a80/d9ec9a8c620f18d137776b7f9584a030?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvCZUAwVUOnz~lHUhCnMTChaVpMUSoXebEpqeBFtCWFaontMu7zcOZoQ1t5C06Iyu1eWKVBrSAwmKtdQ70O8XbaJEBYFhoeRv-JA-4tk3RbrdxewtuVEFbM-bPkXzkOSniBSQ~cHfPhea8MLh7sBrtiW0J4XxasJIO5SfXiEGfoBgaJ4NQQ-35k8g3eiJQcbiqViUlfnFg2VOkjGZPr6113sUfxFFHXnKMCCk63q3UjTvAxiWol7ckq91nh~DUUS9at6SHP9Mg~r7IxDzLWpWuAQvjSr6P3ABFJn7LYj-Q0Aqj2Gk~ihj4FU5PpZGRdNvHNkyyR~1Ozf~6I3IPLx4A__'
    ],
      category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Pink korean noodles',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/91c4/e1c1/9c172fb2e64fd6f33c0ba5f73962ad4f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E06LexUXu1N4~EAIkLpqZwmxctslQ-r5GccOfJUqPtZnKTV7cTu-NvW1NGcFUHpoMRaoWi-i7YhZgSvxHIpyj74Rv1sl4Pnnn52HDJkGRpchfXZRh9-wydN7kUrCTzMsa6IWZ21Geyx5S~eBJqaDYjsc9PLHR6oP3g9-NF8lMYoTlWIz61squYzzVzOjyhJtAMjUYlDFFMxRUm~mHi1uEvvCuQv24BvrlhTedvF4Xu1VzoUKVP~AIxl3mmudDk6MB8~cF-ek0IXPT7ecFLzr8jYJd4h8eg6tl509QctSstzOeqFr400I9nyo7JYQYrhv-ZJwJzSMEelsEtF6NFsvHw__'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Pink korean noodles small',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/c7ea/cad8/ab69ddd9b3b405723825959e6d56f533?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ejHGZH3Hsh4r1EcpLL~gKdTPacIZqoBQwQJj9ZqtrEL8Iohf28cBsy8UsRW5b-4hh54DmsQtteOY9huFYr-SUxF3z12EOQ-bLF4Aw2QrdToW3uMLW9EogOs6EunccFFmskRDphhzV6mGYxU5deDQf~SA6rbV2n7V9nHnfC~UKEF~vc1nEe9zNvRL4cASOUQbZAIfpDaWW-F6CtksYSlLTpyUqjvB5A~4DLH4TJhIJ986yeOvAfDT0jUuARjy7SQNrHp9ahFCFkszrLEMHoxpdZYSlM88jqM7JYk~ZvDiQDOEiNVMRdQUN4MeF1xQVskwRRIJfXz7vG7geG8cHOdREQ__'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Pink korean noodles with cheetos',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/671b/8c7a/c5c6641128a28c6d9cdb8ae4e1213032?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erf9g5iATcOQnDRM3Ca8xhQwhnZT3fd~bb4YmVMQyzZBfYA7Gz3qOxFIajYRJLRvKzRE5t8DNE6S2~6BhFdXJKNh0y8PjrFTmhu6tPzWsc-tw9X4-HXjwkw6OI5FmvoJW51JNembfdlsoKsK2SjcBFgESgVkxyP7Uh6h5MDvNKimzOdiGNJTsNfLQBqMxisIk7y3feR20bdLE7jdOwyINyV8LEhwEFagiEtQlVNrIby~kTML3KsvzfevhQjrLb-PwZLfly0tAcjD34sH5a4eM0hg9KhX7nhfpU9Qjpfnao-wWswHjCLWGVDjVVtLEp1HTVo88pQDJEkT-6nnNRwyBw__'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Pink korean noodles with cheetos small size',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/671b/8c7a/c5c6641128a28c6d9cdb8ae4e1213032?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erf9g5iATcOQnDRM3Ca8xhQwhnZT3fd~bb4YmVMQyzZBfYA7Gz3qOxFIajYRJLRvKzRE5t8DNE6S2~6BhFdXJKNh0y8PjrFTmhu6tPzWsc-tw9X4-HXjwkw6OI5FmvoJW51JNembfdlsoKsK2SjcBFgESgVkxyP7Uh6h5MDvNKimzOdiGNJTsNfLQBqMxisIk7y3feR20bdLE7jdOwyINyV8LEhwEFagiEtQlVNrIby~kTML3KsvzfevhQjrLb-PwZLfly0tAcjD34sH5a4eM0hg9KhX7nhfpU9Qjpfnao-wWswHjCLWGVDjVVtLEp1HTVo88pQDJEkT-6nnNRwyBw__'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Vegetables andomi',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/8794/20c8/bd3be8e9b218f55e0e6c7c06d3b6d79b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZR0bvcYMiBJs6Cfi7Y9uGG-DW8kEqGFbhDR9BvNHOu0pk-1LiHNUFk7yR45j-BU1HY-1HX5fwvRzx2pG8oKrxFTKhStKU6PRPG7IsN8X04k-MrORvKoFOrH0UNR~DfRGryKNEuLjzfdo0MV-jki0tpwNqZQn~QUd6h2GgwoI5LNDBmvxQ9sssNbD-raet35RgSPJ2JQNViwKzCCEFpiFpFiGv1wVevhVBXhdS2trwExkzw1FRPFOiMZsUsUnrbmbiuieBUj38EC5YS20JdegUhALmzAxE9CGP9-XtrYf0b9OUPcKaLIoiQpDTc~u1pbGVVE~y9sxuulZAxDcuRfQaA__'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Vegetables andomi small size',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/e483/01a7/4566e0c1c43075d9eb281fabdcf50061?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SteUrTDFbnTehaYDEs-5X4npV2rb8hDhhxDmmk34FA4mgZOCixE62KXSEtvh-SCkwneFBmejdTtQbbey4nB23t7uRjmHagwE-5zZTBXHWc0XHa9JGdDAcbVBTeQtGApfkx2j9yox30VVUkIhiEUFB3Y3hyYSJsSooll1ZxBIuwxrOk~RM800v3QzlWZbXfnPkMuZwgNXV4wXrEs22I~zt4Spzu~8UvrAPSU1titQ6tBrJNJHHDCRMKwgrP8GEtWaaH31DwQVtg7yhpUl-ZUMbZkZs8uOzYGTeYh6120zUAhHmu8VhdG5-CyZVnZV~Y2lKG42FrzGOINAU3gzCxZ91g__'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Curry andomi',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/8a1f/9d2e/2af849eb074b25c8b82a1e115acc4921?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AE0f8DHeLlEtajU-nT9sKBoW2sjVcYxAQyMJBzs~6yFbGzV5y~vau6l7fogzzOSpVwInzi57erG4OZ1J0hPyml0QEdB~46D6BhjLNSsl4jVSHVQ3q9PUrp6vCbp36k5Mf0VTIklVaiUHQo8O1lFFiCg5agXMOS-EnJJrmEg35Bq3v2hq3-W0uSiizX0slwfNbwdhJ8MkRffdA4Y4MJufvAC~GC75P0iFECOFxZvC~kGvDD5hB8yHyf5EHerH7j5x5Vs05Yv8Uh1istPUw4FZ3YAjCSsK25W5PsAlqh8PrbEzWZpnBGT2rCW4MH5pTnMQp9J~hZD~OM~mZESRw7ETTw__'
 ],
            category:'snacks',
description:''
          },
    {
      title:'Curry andomi small size',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/8a1f/9d2e/2af849eb074b25c8b82a1e115acc4921?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AE0f8DHeLlEtajU-nT9sKBoW2sjVcYxAQyMJBzs~6yFbGzV5y~vau6l7fogzzOSpVwInzi57erG4OZ1J0hPyml0QEdB~46D6BhjLNSsl4jVSHVQ3q9PUrp6vCbp36k5Mf0VTIklVaiUHQo8O1lFFiCg5agXMOS-EnJJrmEg35Bq3v2hq3-W0uSiizX0slwfNbwdhJ8MkRffdA4Y4MJufvAC~GC75P0iFECOFxZvC~kGvDD5hB8yHyf5EHerH7j5x5Vs05Yv8Uh1istPUw4FZ3YAjCSsK25W5PsAlqh8PrbEzWZpnBGT2rCW4MH5pTnMQp9J~hZD~OM~mZESRw7ETTw__'
      
    ],
            category:'snacks',
            description:''
          },
          {
      title:'Chiken andomi',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/367e/a390/1ed3aff2e3ea3315180b9c76fb375884?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvqgP1YZ40SpqjaUemDL-qJ~Ge3rECIs4n3qL6elsqkTkuu-fLmNfFJ28tlqyfVZLmUQkY9wPRrv9FpdECdQE0GUfDYCh2juPUnV6NyMAiS5~jbHjDackH74~Jneu2YQAD-sn7USqcqlfCx5w7B-7Qvwtbzhmr7xuLj8FIb3dXJrRJJAvCYCWy1jN5Qnq3XPDPRrws98wijxje4RKq-lcc-f~g5EmkiioLheRKrS3G-~9nhgMUEwWzQoXlDFBVYBozQbzjY4Y0cx9EyO3YIITqqyOD9~HhYMly3EvEL1R1hc4VtBNu9T2Msg7JAv197-lszUEcs~NYVQ7pZoSme-Eg__'
      
    ],
            category:'snacks',
            description:''
          },
          {
      title:'Chiken andomi small size',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/367e/a390/1ed3aff2e3ea3315180b9c76fb375884?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvqgP1YZ40SpqjaUemDL-qJ~Ge3rECIs4n3qL6elsqkTkuu-fLmNfFJ28tlqyfVZLmUQkY9wPRrv9FpdECdQE0GUfDYCh2juPUnV6NyMAiS5~jbHjDackH74~Jneu2YQAD-sn7USqcqlfCx5w7B-7Qvwtbzhmr7xuLj8FIb3dXJrRJJAvCYCWy1jN5Qnq3XPDPRrws98wijxje4RKq-lcc-f~g5EmkiioLheRKrS3G-~9nhgMUEwWzQoXlDFBVYBozQbzjY4Y0cx9EyO3YIITqqyOD9~HhYMly3EvEL1R1hc4VtBNu9T2Msg7JAv197-lszUEcs~NYVQ7pZoSme-Eg__'
      
    ],
            category:'snacks',
            description:''
          },
          {
      title:'Black korean noodles',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/0525/1204/7a164a745fc8b6668bd59023f52c4c93?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqtH~5~zvoUgLVuukbPRgXs-VgGxP3KzRLlFFUNnlHO2Nnp4DAPCxnMDNzT1-kkArIOduSl~ZbkJZUwjWuhaneWLaqvp7gwFhyR4VA1xjRSXS4fLKeGFs6cdzIuxutC3qmzgKWCHmmTtExc7K4bxGsVi0qtjcq7N1OAg865OrVzl5cnrwY5bpKnCqahgC7x2aMcdU9iml7Sns5tgl7~Buo1TkcDVWaSPNzxYX4i7gtpiMfyPtTqIb~erlbjX~W61kMhhhw~XTWOCZTM3Bro8BpKRtYeRbLIvbE2BgS87V~nikVsL-QuJwkMPNak5flxl~ZHg~qm3P5TnYKkQm2uaKw__'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Yellow korean noodles',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/b1f6/55b9/b08e30869e80f2d0c53749c317410bc9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fqGCEL7cPccRaJhuOdycY3YNYLk4n0rI8gM8D3c1Dui68D5j89qKAMVzXt8xAuqLQWyl7sZU~JtzCJmr2YFU1aQgwPGHVp95~LYHStmhw3hpHQAIcuDfzCDz0nGU4toHLTYyKVRfS7MXTkoH-mYCkHKqWZW~RVAtlO4RAtDwRbs2p39~Qm~DnXPVvLpdS1XiEV7YEBIWZ-XeWfxhYa1ZBCfL0gtVQYkAI8QDEXRaqArKY3kKbKAZWNhzCbRjwhL47hLGORE1Fxo54O9GH9t3fHTQTUAvF-dx9TcF52Bzed79tt-Ck4ALrv4yXLUCFNyVV7DRdlrYZITJTvWsCI9cow__'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Fatta warqa anab',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/10bc/600e/92eecd11d9ce7e713d001cb80bdbf3b1?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKFA~8ViDkbRGHzvWhwnYcTWRszq8Lfn1-7KJv5Qjjfn9idNBCQKQijAt9~2LuIx~wwWPOhe5ndVo-rpKUpxbc5La~FV8BrCpvbyNaXq-59gpfGUEN1kisVa9OmdJugrjy~PQe2IdBEhw7cqrhUW9FxagW8gqHzvanvz520yvOo2gY6T2F53zkgT7xOkpEcuitcj~RNN~E9MBotSTNnZjZHkn4xO2hUixRCk772qqPFDej69NJr6JmEvzXT2jT-9YkORfujlqWc4YvgBAsuaaKlUmqKV4uRK8EuiksNMUiSab94fO93qHClsdt~1w2Sv-G6jbxov9~ncvvkCjJwUmw__'    ],
            category:'snacks',
            description:''
          },
    {
      title:'Sweet corn',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/05da/3977/bad9c74d3ddefc22b21856faec882b14?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ovxzen7S3fe2NROnULXngmEVHyTNVp~iGZHIe6B~nTBK69PwTeA8a6Qb~tAr13~sE~D7bO75rh503mzR6gRE2S-mOScIr-N-S6bcUvWHV3skkC5VwgUVdfuiGQR4fmWIggxxxyclOR3KgLyw9~bp435RXScm~cyZBIHgssvXEiAg29rhMQmC6IY8B7E9cFtANITO99Y6hWAAW~a-lyvragSkuiXBABgCpaOLR3dDTZi1~yS11SNN~erJ7HmlUEnbKChZ~kd8pw1GKBI~DwjXOehKbVVJQN8o3uvtIFIXbovYGZ~SO4RFcxoD2ONpoDmgFCTeZCYBS6z3Jp9YYDZ8Ng__'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Sweet corn with cheetos',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/a7b6/bb48/433d1a2c8d3d9a7f6e7c569f9604ef18?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EboRJOWGMSnliEuT4xnn8vWaZ9QqkmsycXG87ZTH-8qI~u2H70pIKQKIb1kFUhEalCqofouuApOsXxTZcz-rmZqkMDkrilUrtmvMZmZobPJEpvOEOsa3YRy6FVJ0oG1vzAJ868PEGtXRXEFV-wlFSyvJuu2DbKa67uc~7b5sXXswFOcfQunGKmF7igHSPZqbxkgNkTjLmdmPNoaNXR3LvTx6sRJ8bQkqjIcvZhCu2EgI1TxaFeAHpmP6XcB505MV5q4b69gNN5UNSZjTfudS5SA2mICEc59SJpyI3Mqp5FMiKQ7~PEBh4Xkzq2bOQpAVfEWe7Ba6P7QkF2h3aeOeDQ__'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Sweet corn  with blue yogurt and oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/04f6/04fb/a2e8eb77de960dee8e9ce508eb619d38?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y5Fnt9~CX~MDIw3UJ7nqYik3ue4kOtVVP9WhtUaonCPggdg8vBwz~QGE~A12od42Po-0DiQsnGM590yx20wZyAXXma8qBExamOzuoyEC40Gm5Z2We75kzUxOncSRcTRWKaKBUo6EaGGMG2xZXNyfVHb8DuRyOv2EHvV1IXV4-Q-mZ~~uCVNl0Fajhei8D3mrGkX4RyoE-aM9BKotb8Is6xPZXPqN1~Ls8yZMrqzQwIVvaT6g48DXxVNwGnXk0Xxs40BojmfwzIKHcyH6rhIXkJr6uYGnMKQhrSAYZgKGt7NERH6JoqkdYNdBAHkvMZu3mbFPHwtPd0wnS-mO3pT7mg__'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Pink korean noodles with sausage',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/90de/7e63/cb5fe8bed26695f91e1465030ac6b18e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kBoh1yoUw4SnGN8Y4RkVIaKcmh0yLcjiFaUDxeZOvBh~S0d1lVISQiFg1UF41BrE0gay1qeIJpiHTO9hdmJkliLX9bP2WSA8vW6fCbPW4r505hUCX2rinQJtP5S0fo6Xt-95xTV1oKZK0HtUDjKNUui4Oi0HF4zycG3CyKoHOHNsgbYeQ~OA3g0VJ2pAflZ7mM7Ao9-cWz~PWM2CUVQnYR~6ifV6Zj6WypwpVHUm8009EXZOy6tnXUjymPIZ4BY3aC4JKOYdH4PfjvuSbNZETMxn3iJrNtvefpfPVQ9NTvS1xm2-7ZB2CMXVCOYJ~-8kS30OrtdSoVKgPzpGHYunZA__'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Vegetables andomi with sausage',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/6d66/db7d/0104be1fdab1ab878411da989cf0fa1a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASQahVavxvJIGW5IaV3ZXfn9tnEU5yhyCyfE253JSbBz9NJyOE~6LMOSFjdATyvxIDkb2g-4XoGNP1-sx-RZqhZsKnjJYLrY~NqTahid-lr2ZOHRQgsbCVdUn0LTZwQLYZVMTXyE4AiCGbWYph5yZyUHkwPeOeKte-NBzgw82t~BFBs80EcqkJpy3~uTiJY9kxEtfR3llZ4kOLqUJtdwVD3t0GLXXCaKMSRetccx~3HUB4uTJix0TzqAF3tUBBQSg7Aw7s006D-lqFS3FFs717o2otmefJ8iEjKB9YuoUjqkLBDrLUg7M0cdbl-Cv0mL0E9N1PYwNg6EbUvFUF9oKw__'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Trend Fatta waraq anab with oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/3f4f/7da7/780806af59f9c5b539392e8b01e49ea0?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGZa9h7HofykNNXlK47NRpzex4WGHUiUT7c-4qg~QrjGx13Ak-8jdlMrMH6p2R7ctDrnngLc778U-XXa-JoB1ko5z-De5zLMfocQYJbpxHkaCNIWerP9xtSm~rxl5m~F313bZ-8-EFY0kOQR1IsimzC5vG2ejAk3dn8FIJjaNm-B36IdFNtHhrOjpPDcz84Z~aCHGxC~iEnJu4sVJF92f8im49YiAP5GETqo61pfXRdKOLZmj8vjHEGVrAjl8kv7B0ywhKpQ6jjaV3xHh5fI-Mt1cFxEiaQa80oeaqyNudMMmezUHvd2g1pLVKRQTQqrq-1y2RWGehzTioTaE6-NSg__'
          ],      category:'snacks',
            description:''
          },
    {
      title:'Pink korean noodles with zinger',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/7355/edd6/fcaa30fffb4e058fd92e25b730984156?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5IY2WpOofp2-DgogfPMFhAnDZtVJfkcptyygnDdmk7Bz1YoRANhhRq8iByrHQliLyckCvSW0RMTP8B41sPVFQbM7vF8CXP9vY8WcUcZ9ST2gAEBQ1m8SI1MbkK0cSVVNDwK8lMI6bmyiOHSRbCVPAnIcBUci0g9qPxCxcU8DKrHZBajmmVYsKYSiSkfpa65~uD0Lvdv6YUyXWgmQB7ZZiC4Kc4zddmQZLUVzSrhrm0pMi6ScgYWIe5Haz2zS44aKZnahWM0IqkLDI3eQ5jMXPNIQpzdf0wzAMnkO0J4UTom7MhlY-urcx-USlNo1R-kUNflYwplZ5XT3YPe~F8sqQ__'
    ],
      category:'snacks',
      description:''
    },
    {
      title:'Pink korean noodles with Cheetos and zinger',
      price :'40 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/3f8e/0d3a/16eb05ea21cce80e8e5ecf2d4f04fd1e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjmmm3lQwXchpjMb0vTyN2mlsy~0PppO5wrjkr2zfga018D9SNzvp5pG6yrjnK1Chpkguu44wLs92Abeld~vzgUhkbn6plVe-Fz5Hl3iM1TOCjSMcGS3Yl1sC1K~2AnqbkzSolD-8zVosOi6NjYyutT72W~ztT2-y4MWz2~JlAKwEuQV50F0CtJcqmFjvBceC952Fts~whoeHdjZXztQGPc71pojTcpWFAoUbIrJSrvnEIs8whSzIjVbItxZ5z~OrdkHBfe2sGiGls9Nq9sOagCZNroeRxiyBo3kvwCKiVmzk9ILSXaxZ1E9eYbnJ1ijUATEGb1w8FlLHKeIcYeTyw__'
    ],
    category:'snacks',
    description:''
    },
    {
      title:'Black korean noodles with zinger',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/261f/cb0b/80f442150f0ebf0d7687dcc0a8ef4622?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NETdSeHjTK0FaUKsZsYWJI2cU8ovM0nMld5TzuWcIfmxFj5fWnAObpE512tysDvDYYeKND1BKq87S8d0eJm8UZccQnaYEUPUmCz87-4efZVVfB7BQVznHwTf7QpPiP1pzxskkqqduLvEnJ~9BkeIQwZ7QDrdcqzi904EtYyMsClylJnqZdD40b~h0ui7ctapBWZ8IIgmar8WKW8BcMXAo7cuMDd4O-P3iLBQC5RS6zTVQCMyLiIe7t2I9pNiVUs-qBflYMXAkAxV0bglMM9LyyDgTu2TU-2nzjY5xG3ZPbSFV4Nndzrwlytvlsd3uBJLmv8HGX~mS435gOhO8KwpdA__'
    ],
    category:'snacks',
    description:''
    },
    {
      title:'Yellow korean noodles with zinger',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/7e8f/acae/01f9e530d39a89ca9e46ed8e78c46de4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGaYB9ETfQTPmX7mw-IG3kSGwx2dMGC1rUjkP6EP4y~mPUdDKCrpNfIK7kE-xDpC7foWlu0gujhVuzKQPNTZj2Q6Fneq1CIfmAx36mzBAset3pS9GT2mtQtSzdxKTftgRo-4k~Oh4OGCJ2DLgJYCyCSiaAecOETWWmp30yyR6xERF-2jzENEXB94KFOB8XOySYephkBRpv81PFIWqGoZw3e-HziIXe1drd02aw7AQ0zjpT2Duu9g7~tHEe1g8Sx6Jl5api3uFj9P6kBFff9z3gT~yOC1lCMnUTfqwmqc50wvogEZX8o3~DOwM4GFIEe0d5uxCJjeXNw93tcqicNonw__'    ],
    category:'snacks',
    description:''
    },
    {
      title:'Cheesecake raspberry',
      price :'40 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/f949/7c91/82bea5050b7bb9eb4875f39973ce486a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnRillC7aKxwApoRCbkCvgjHdA-Z~6MrDu4fFub-4n8WnhK4szFn3QoHTQZ910~pP6ChwAnqzbkbZuG3DekM0y9B0~TTz~A6xA0XOaSits3jz7sBGTfmAyCJbHq7xNa5P3XYPdnkjk-r~ReINBPxV4nIDy7-H1BqMM8MBmJgF5Wqx7JGdlUyleIw2Gc8JNnXreYAIPKXtvDGF~ELfX1AxNHp66L5mAHNrwb~AOv7tlIPqnE103wexeme30ca1WFZjT0ZcbqND4eAwFmX7X4GhVTEqoP3CUrw3c1y~0y6ZZig0~8IZqei7moVSyUhsTwT9ea-n-sZqTATvPDW0TS7TQ__'
    ],
      category:'ice cream and sweets',
      description:''
    },
    {
      title:'Sweet corn with blue yogurt and oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/9ead/cb98/e02fd199d0411fc74ccfad566c666e14?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jLVm2fzCSv6X7caCbBVA-0XWozYrwrSUQTCzKITz8c12c5HpEVKkBMxd-LL41gr~fxUyQyzG2MeszPnAEerFVQfEvI9rZaIN3yNidCPJbcvlbwt725V2zLRThQBwiwM9xzqt79qDgyPFS1FXnpC439v4esYfaNp2ZmAYeZ9LIo6N8UA0uqqWADsIXDC8rgBlTI~8OrCjaoKUh7Ra2kvdBJ65FqjEZD3Ta2xClumgQLuF52S52W~Zg6~jSzBUT46Hjo8PoyqgCoxfQYo5bpJXeFpRIlkHldsiyAc5sWsusHC0iglgZ6RpA9HWuSN4gH64WaKs~URRKOA-BjSDja2m8g__'
    ],
    category:'ice cream and sweets',
    description:''
    },
    {
      title:'mango sour',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/e25c/7b02/9cdb20963261e68b180133d3e80d6387?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWYi40doKtV5r6473QRvVvN0IhLeuy7f2FDOB2N2~kw8G9H9k7~fjPXeYb8vlLPfy-9DBJL67DXjT61c4cQpwRuW4rJhI~LIPxsCtqFTksvwS-0wIpibs~wbydKerE1Jcu26z5GcuYoQmN8s9Q3GVBGC6v4Bu0SXPOnrtChqCRW6KqZkbqMQUnA0UXq7G4IXcmsm5TirheK7rE-SkzTN6fs5szBbihHzGnJ14lRQDRnzdPQltbI5pY8mD6nU3c-cEIpBvWNKWoxJ45pLy~xNY3I2fq9NtL5~1ovGRu2IDP-O~vLiyzu6HJIDKA3roHfJsBZmjBh7yQ09mVmUsOmjqA__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Spicy mango sour',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/7143/f02e/1eb532662be6f1a91e13581236e821be?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ooFN1vBlJ9CIKTpqHk4RSWkbk4NKp9RrCg-IL~7byQ4Si6i-jSMrvIeA72wqF-9CvdXO4QGOO06-0ZD4NjsINlZjmtpRJKa7XbhNJUkWZczE-tKFvQgQseDw~bvPmM6W~bWEnIU2TUvwy2LFHU85~Jey6VM~r3s9ilHrgUvxcg2nvE1GYplDXNTSzymkae3AnPYsn07yyruPf1eVc0N~0dJw1qrFgPS9nPkRvjInrGRB8ENkcVLdUr8EFn0404tP0l2kHENfVt2vku8n1D--aLk-OLs2BWQG8RHPKrx6B0VuTbb40BFNlZOkl1CEYqNJtQV8G0iCYByDzjXeJdCgsA__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Sour pomegranate',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/b066/773f/b176dbd764ac3fbd527411d5d9c983ca?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UoKIg7iAOvbTl7Cu7nuBZibAGUghTtjO1esFSquDBJnxyNEXygrF-xxVkWewo~r7hb7ZDURiQVfEQl-AAhEoYiahlZKI9VUiyza1cfgz4ZkGY749cjxwpGx-VA42l97I8HIPiekvsdLKgkd7yzUaB0f7hh9v9QdJ9c1pU6J-mckGLSKaR2r8zOHC~4Ue05COISSKPtdK6Wa4ORfWIpllEckbNABop7r~k5Shvt7RZyTf5IG5RWoHmN-PeNTpuNMOeQ2inaKGS6skrVXMWeH-797ROkYk7qe09e7CPlDSMRjquS2I1uKpLJR78budPA7Gz~ExiO3NdLu1Wxps1SB3gQ__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Khalta trend lavashak sour',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/c71e/311b/17157657421d49aa5b6c14be9be76185?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTM8alQGYzR~ZHG1swTCdbkN1DwPUmYFOO7HMNdRVGeNZUnuWfWrM-JP0MHg80n6FI4bylRvlmdiKB5ou0nKtKalJ9Je2QKQJ5uwLa39L7Mn51xmddqqsafOhFsxoVztFXAdmbxwmUQnF7iSMcsaLVIi2Q0dQjhqlPPgIkIMXGauIKr5plZWtmz3uWYVqAmT5eMBcuRdqcf6CsqVDBL31e2HR~uxBT067A5ITa~KATuDtchh4TNLTwB5-D-xxuR4kitIkvYSWyOnwAx7F~kDWXVOPE4MH9pINzEUupzFKukqlp5IDFG8EeM3XIfyFe6JsEQdHbt2qKylRDl~F-0lVw__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Dried sour cherries',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/90bb/2482/684f786d4475951096ef746aac5c3699?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPwv2tYYusPoZMow~UlHnaXdJFuXgbbxOcjlN1ttetzSBwASpjb4wE7lCLNCWgrAM3yheK7~kNFtQp0A70WDa12PKlFTLY5cDYGbHdcbWiQPOpZNR0CVUHPzuC8nJFwdVmB8ICn8UTjp3Cdj5Aj-2D8l4yCu9JTzPzyxn34t7O2kdLoRlnnTMmNiFZeQjgmQlYZtG~~CT-00GuTFv55nnJr5VRNkOUzuH4tqjKkOupGdr7gUwyi5zqXxBCQ~~KZfBqqybpm5Jc8b9v1tM59SSeGIgHC3W4UoVcXSH8lnMwyYUt~LISDNU-JgpOq3cRQQfI0YBXmRnbInPtP4dd8cLg__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Sunflower seed special Iran',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/dc5e/ec2b/bef618fe9584069a1dd8b9ed03729bf8?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CUN2z305bISKsRVDsq-THC~pFP~~pNEG1US9pvuAp0CYhZjdre0QGb-jgwse~Jjx4BgZXYoCVYpnHjhakfEcoliQHD3Qp~wa5Nrfq-MHvGkKkJmN4EYawCNEa8JhOWgI3iZy2kO3wubOD7kZu5zSYwzJ9NlSTvVxnUNykOuKlTfF7gtFHtBA3IUX-G~3iLFqtQ0VaO0r7SiTokwzxZUKWMeMneYZG8rxDCaG0JEOK45DY4CVi02sFZDnnC4bk4zdrVGG3aDULHshM~-GPmxZjL8E~EjrOvBLnRH~UIGvoMrF2IeZSPWr~2qemIf8n1ba4A5ESjWKwlvtt6X8Pshdrw__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Sour skittles amriki with salt',
      price :'12 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/3904/e4ee/2cc36966d2b6ae7db56257b8b04f88f2?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEobDcVj00CADkg1MVG4B~Y0cYS~eKEb0aPlPcwa0~WPOYAaM3xo56SVp~0YGHJAzeXXm5OLxQ7EdG6mWVIDJvkHuOYDLsbk5RzQL0tYIRV1urSZdTRIFMUaB1onCvmWdr34A1aav1LTdmbHKunDcW2oNnQiAZrbnQylvR8CUkGk7C5sBvFQiqoSM6H1BENlfl7qNbIzcCekTg2896Q~0cVnJMXDqg-N43UVFk6set4avPf9zjPM0LlkH5PyRgqRUKhcXb9a7F6AEUlQGKrbAgqwpgYI2Qmoz9QACO6a6do4-ObaqkvI4DncqgU3cqrgZBu7DXyxeF2ibc2ZbzThfQ__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Canles cherry sours trend lane',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/156a/b8c5/d31ce07a056c6b3b910be24374718ea5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXVxiGL2qufR2Bvujgtje3rXRp5-r3~4voz2i9R2f7X~JKRflev5ctsVetGZxV-xiYljSyHVfh~Mj9-HgxF5GPZCVZFmBTMmVzgF0~0b-HBMRe15X-Vm~pblRw72ya7VWmuI7aVsevb2Lujb-HYZfGF9gr7NxWPSyAmWuwpwECw8VMmx~pmypUtNiOxsXWCQFElYO5QyrmwaQ-V16bUVDR7uVZzQVFRRMcdHnwIX-DPpemtSC6TlxolMFT1gsTRkE-JSGa-v~JlQaBivIDpp36IVEppFgniobfEfetFEYYmP1vc2ifX1kLN7W-izvAq1NsOGmxn9EvOIVfDIATKDNQ__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Mixture of sour fruits and sauce',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/3826/7778/5f2b3b5de8f1d283a9039dc7239d8ff9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1WUMUyu66HqeF8MEYc7WTvuAJDerQWHx1V7LS2HLEZMYKCtjYTcrXi58HuJYf0lseCK3MQFNRNhxgqBHqMNdBIGjKFVLsqy0MiUD9D75uLZcwY2mXk7veEJBBnWF3-BhvLwVBgHRbqBB6CZaJbL9u0bag17hyjKfV7rwDrBr1ZU3AECv036Yo04FY9hl09pwQRBK~tmZAapXmQbVjLT6LGJpqZaiRWqCqAoLo6KapitUSIxAh2k1ScaIivurnbhFxU~BbRVoJenyq4xt2zK~ozExPHmc7xX5-FM~cIHFwS2hIzONlAVZZW87gsox-GcCb~qvP0quqiJUSd9LKX~vg__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Skittles sours balls',
      price :'12 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/863e/36d6/fd0af6b1eef4c372f6f7e6384ad2eeaf?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hlsivp3QzsNNyYEw0GZ7gSUqneFM8qIK6GDih3h8I4VRz8reHWYZV-CnH7VKaIEqUrlatS~QajNrN8mGrEAm-R-DhHNGa1mIEdX3ymy7WXkobxgdAwWYghKkmEKRlkukI88N5Qhz8RIfPAQezb3QE~Yv9r9QLAO82bHBjOFDExkEi9iVGw4QUJJ7uDXv6expi4F8PVXc~OdMUXPbPvR81vxeyUkeaoPSN8Zl9wz5IIBNyVcZ~1uaGzFaUDwCiQYlKwvfMqf1aQCa-mVnHrUIDAseBpO7ilcVl4KzLFz9ai~naoSxs9wjxDnkPbzvt84xzfs4GD6ytxkl4ShP0g~lDA__'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Khalta amriki redbull',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/e97c/39ef/d367269f11c3312558c3f33dacb12e47?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLENRs~O8EMHQrD7sP5l~iCzLOwTUuKpCBRXhiY65lH6bZgGJvvjCsUKJaTTuOseWi9vONdvNUBl8hjSQ2yM8CwEOAU2gK9qcUltPutXQReMTy843o0ii05KO-OYPy~6jB8iow1lvonxTg2wbQUptZyZhBsV2MJTiKJr5RmAo0jv6cHGZoWfYR67JxytaFC4jJUs12~4dXR9R2Ihn-5fZiOLs7MbV4X5x2FZjX--Eqz1IeC4t6-itBUdCSzaxe70Kdc0QNZ~ATgz3xbr3c2qFaVlItVqpQyFNZfLTpWd8tKsQ-vq8rxw4h3WxHiYlr14oqlTU1n~cOcTBlHJfoVUNQ__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Khalta amriki rita blue',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/a1a2/d00f/fa94dd2bd4f50c87a282f72972d8cc1e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtvODMA8bjfLhDtFlyBatoeL~ue2hXfVqRemvilNQb3d6KMP7DMCqKDGh9ebLHciw7G8Sg9w1kfuPWD3iBYw0KLYimZs3jDJ1QBtCO-Yp7x8GeYj5dnYp6Lji1LnWrcMogFYSHfZgxnba1pWCwXMKGp53bh0PDEZT~8JA3hbM7Xho4DgxVn~DY9O3t02x00R6gTrbm~EI~2UjASV95-6ADnyGqF3LUi6Wo6ZD7HWOyXqTENc4QLd6pNtOt9TQZHDYeZ~~8eB1WLWkKh9PVjuT2bAbyLQyOUuQ6wEfrHfRRAbqIcZGObPI2VHLLl~U-kwspBxyFFwA2YM6MLtvIYwLw__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Khalta amriki ornamin c',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/e130/c2aa/38a03b1c464f00bd027023c1ba91cc2b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FlzjXTFzp4ycEvWJwX2eX89ke4sUeDNmM52NBx6QXT2-aDgsSi4mUZXiDdwJWiXrzLNYwh44BGs~xcUDbD2A1pcz7oOZU-V-dopjeXsyvimkVTk~wbFb5FSGTxR5VjiYV7wToJgrcd8-lo0ilLudTeIclU1JYFqVLTM8Pzb3ghOLW2HX6PYcRN6F8PUvwTulGLYM1ExBVmCW3Zk80LCWeT68BX~7oxoo30WE9wRV8oKBwkjjNdtyhHhJIR4zwKhlAhzKNWXURwtNEjWBsrsnbjZjzqbe9V2LcafENsnd8nEhv1QtRQCTY1eERe6Fe3bkxfwzxe1Mm8miH8KYy-r~Mw__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Mango passion fruit slush',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/c741/81b4/0a306a2ab0c7850bf5b4761020e98834?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jS4RNkddOk7h3Ue0iLnOLMD6Fq4SMHVlVFncz-B2PkkrFoZt6TssLuFrpxf-xoMtVs26DrdKvP86IKKBTamWMY-0ykiu3zZgXEh4HwNqOXNZOUr04i2ZyMsGWczY~OjywnBCiloxPDzO5EDg65NCs6FM1lvLUDHdv80iXYAnv8aIn84kgPTCRiXDrDc0iI9wNED-4tbIbPHSwP88SrEr2RDd-jbNWRqXG6VCGC8rNkb7lU1P7o9lZn528u7PMNFcu~f6tpiWEAPua9IVBaHYWPCFGuA5jT~UN0Olj~~purZM4-AtXwRKmRvJp1bRTLiJpbZ4ajN3IMY8R9Jx0Q9xiA__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Vimto slush',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/a7d1/b305/583c4ac805186e868b0f59337a6eb021?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu~hATOyIuik-MkbTgOhcr2ks9ZXuOmpRYRuQPQOafuosG6ULW4vQouu615Fmru4ydMG4RXryxAGgkQFNrgYWTZCTAd~b7NjXM6MLlReXwYGgAtMGgaZA8~ZHt3EXx7HmnN23XnPvUCskGCCuE37kY-lBQBOkvd7jnmAJCx4XbhPJHnQQ1j7OtWvHAQYbuLVewO1nrKC0tYqNt~m2boL0APfNc420OWzLt3ulJtABxe7bhgGRA6KGgL21d9-aEcKH2Z-joFqOV9nQgFaz40OPd8YwsrWpE9HlO96VxKJU1-INBmdM23TRmswtfFrfMYrOxxZwk~Ri-YE-v6~vfaBdA__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Cotton candy slush',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/683f/22e2/46c004171e5c864f28cebe3a81f690c8?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CNvn9n4ANxjnhLvtc8YRuhTrtIncGSPTtbV5ZgKtKig37VqdhuTPquh6LJtsESOn4rj1BpB4N3AViHDcty~GdgFFehi218X9wFkFhehp9PLbzoURk75s4d~3KVl7Q-P71KUN4oVTRaZxfGYrtMsEZychOnr-3DZpcyR0RdTAJ-uvly2gT1piD9P3-QqGlB2uXUi--Gv3kb2EOr80Q2LaJeevhbKlaH1li8v71YlE3w7vPSZfMP2keEVD9Lm9F-4CGVL5SQIsrj8GPrSqenpTzSKz-tXy7ZsYyLqdGiB5jRpFZkUHEtfC775mnn3YnavHxWp9IyWX5mDdDfo-~bz6tA__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Redbull with special blue syrup',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/38b6/d2bf/2d9f7ded0fa4df5ca5e0ec6d4528d924?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AMxCOTI8W80xHH4rMN2BELhxAyi-RqtvAeo1nQmXCU4t0ftbo-O7AH7p3s2cNfVK7PE23fq3qI8Qv9beV~eJZSuHBVWPoiOY4AH8Z22fJPSphnB4WzjDMnrnWTQIlJlRUBy1jHkL-kRFe8es7GPqdtJ5znhr8J59i87SLSF6SCRqvUhO2sJ28sztqFpqllNnMeQ00rbe~4W-67LgRpPDnnt2xIGiyY7lA-pcq756BhPhjPziHOh7q3-OedTW0506DFiRBic0d~aEFKxJzHY7V4HWXnEL1ct8jVdWHgn2gyUG0~CUA49Spdw9b4QtvuJN6ko0Yeh3lId7I6xaBddDXg__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Redbull with special red syrup',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/38b6/d2bf/2d9f7ded0fa4df5ca5e0ec6d4528d924?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AMxCOTI8W80xHH4rMN2BELhxAyi-RqtvAeo1nQmXCU4t0ftbo-O7AH7p3s2cNfVK7PE23fq3qI8Qv9beV~eJZSuHBVWPoiOY4AH8Z22fJPSphnB4WzjDMnrnWTQIlJlRUBy1jHkL-kRFe8es7GPqdtJ5znhr8J59i87SLSF6SCRqvUhO2sJ28sztqFpqllNnMeQ00rbe~4W-67LgRpPDnnt2xIGiyY7lA-pcq756BhPhjPziHOh7q3-OedTW0506DFiRBic0d~aEFKxJzHY7V4HWXnEL1ct8jVdWHgn2gyUG0~CUA49Spdw9b4QtvuJN6ko0Yeh3lId7I6xaBddDXg__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Special blue mojito',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/9102/e33e/8436f3645bcb1d051a92a782ec939f54?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imYp6Xqc9VamsFKzRNDgClYEhcDOw81wI98ffVW2zm1L8F8ak6dAmr90yhNYoMdDervUUmAgttgTnTAhQKWmJrGmu1wS2lLYIHvu82Th0sceHaNdxnl5uRW0qHVi~BrcEhi-24Uubk8rLLWctPi8f4ClqpdiaqZTLJv6vYpSOFid4oqXed7KNZo7fsRH5MZPqU3dKGpEfE2UjYGBaonI77~fUxFtqrUndYv6oWmKZHmma59RK~YW80FBSI0Hf4GOMSefuSVNg9EYiJDYuCgoMPCiiBdVj~Bq2b8EdGf0tdXBkR6Gei64u32O9TBkay-N2p-cUcGeRTjk9bkUpNCCfw__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Special red mojito',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/1480/6a03/50df0cb4fd6a10cc442769746ce05f83?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfzxfTZZ~ngV3EytKfnHK5ldkj3w~b6MLn8VtmqcacwjZDmsIxxHzuwtrem36bKy8r9H4b~b4mbfirFW7C2EYDsq24DBj4mPnJP1KDPaUI1fbqz1OIawzpDsN1OGwPshfYzk3NRzkpp5sJIr~wNh6ECEs0JfNQ3dz3obUkBrUiVylQS37kI9fDpJQTpeP7U7miNZUcAxSv-o6EyxZb0fcAIFW3V7ovDbCDzgHD5ZI6niQ2JXEQokGklqdYWsE1DoCF1mu0cs4yeti1Hzdsxvk21r6K6ard667BKKKc15aKfEPpkJCNwEVZDv-89EH8qLS~Q4PIOm08VGvDdac5l~eQ__'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Black magic toptime syrup asli',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://s3-alpha-sig.figma.com/img/e27f/32d1/63341532ee01036ee4fe5197d4272099?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mmP62Vbw6gH2BKCULs4WrA7Sgz~AcLQp4q~6HR3-BJcF1ZfA3JD1ZIwqXSnyrhNjJuzM0e2J4o-3R88TChig0By7GeRX8UsELL~UsSKleqcC~Ssal~Y-9m5~Y0iAcAJjLCtqdV6Q9uGOj6WQQc0dau9P3eZrsWrbrK2w5hudFQRH-luSug1BJxaiVftAJdPwGVKSx7Kq3OIpZXTfogHFotraSeXd8sO1A1kiQY8PEbNy5C4SOqjsOHQ7fYBuPQC6DjtYEKIJpx0~DE5OYSBcawxR3wdB2x2KO-HjwDmwm9URGU2VQetl~qe-D0FYZyFLRm5SMJ2lqXbKgiIE771Drg__'
    ],
      category:'drinks',
      description:''
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
    },
    backgroundColor(){
      return 'background-color:' + this.$store.getters.backgroundColor ;
    },
    titleColor(){
      return 'color:' + this.$store.getters.titleColor;
    },
        tanBarColor(){
          return 'background-color:'+ this.$store.getters.tanBarColor ;
        },
        font(){
      return this.$store.getters.font;
    },
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
