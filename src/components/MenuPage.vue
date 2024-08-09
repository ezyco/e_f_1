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
'https://i.ibb.co/xqRfsMt/5e6f8169fad6d98fb1b82c7c9e83b901.png'
    ],
      category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta blue taxis with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/sPL8PpF/76984a25241f76c6c0d9a8aaae06dd53-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-j-s.png'      
      ],
             category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta red taxis with special blue yogurt',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/gPZ4HJd/c8bee80fd6b483d8348b0cbe05c5bb71-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-fr.png'
    ],
     category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta doritos blue with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/whRGmk5/c8bee80fd6b483d8348b0cbe05c5bb71-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-fr.png'
    ], 
      category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta doritos red with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/BwWQq9w/d4785ba5a57299082554746098234870-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-HUJ.png'
    ],
       category:'khalta special blue yogurt',
      description:'',
     
    },
    {
      title:'Khalta oman chips with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/sgHGwfS/1433213955b4fc602c4d1cbfc3ed21c9-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-a-E.png'],
      category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Khalta amwaj chips with blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/x5BnfCN/d9ec9a8c620f18d137776b7f9584a030-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Ev.png'
    ],
      category:'khalta special blue yogurt',
      description:'',
    },
    {
      title:'Pink korean noodles',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/sypZxdC/9c172fb2e64fd6f33c0ba5f73962ad4f-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-E06.png'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Pink korean noodles small',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/MfY1Q9q/ab69ddd9b3b405723825959e6d56f533-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ej.png'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Pink korean noodles with cheetos',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/J25PPKB/c5c6641128a28c6d9cdb8ae4e1213032-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-erf.png'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Pink korean noodles with cheetos small size',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/J25PPKB/c5c6641128a28c6d9cdb8ae4e1213032-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-erf.png'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Vegetables andomi',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/qY1XdkL/bd3be8e9b218f55e0e6c7c06d3b6d79b-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ZR0.png'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Vegetables andomi small size',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/qY1XdkL/bd3be8e9b218f55e0e6c7c06d3b6d79b-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ZR0.png'
    ],
            category:'snacks',
      description:'',
    },
    {
      title:'Curry andomi',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/SsBCQXs/2af849eb074b25c8b82a1e115acc4921-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-AE0.png'
    ],
            category:'snacks',
description:''
          },
    {
      title:'Curry andomi small size',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/SsBCQXs/2af849eb074b25c8b82a1e115acc4921-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-AE0.png'
      
    ],
            category:'snacks',
            description:''
          },
          {
      title:'Chiken andomi',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/Z6NCVhp/1ed3aff2e3ea3315180b9c76fb375884-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-qvq.png'
    ],
            category:'snacks',
            description:''
          },
          {
      title:'Chiken andomi small size',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/Z6NCVhp/1ed3aff2e3ea3315180b9c76fb375884-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-qvq.png'
      
    ],
            category:'snacks',
            description:''
          },
          {
      title:'Black korean noodles',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/QFcSH7C/7a164a745fc8b6668bd59023f52c4c93-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Hqt.png'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Yellow korean noodles',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/d5NTtn3/b08e30869e80f2d0c53749c317410bc9-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-fq.png'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Fatta warqa anab',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/WntLSDF/92eecd11d9ce7e713d001cb80bdbf3b1-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-j-K.png'],
      category:'snacks',
            description:''
          },
    {
      title:'Sweet corn',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/JtH4wWC/bad9c74d3ddefc22b21856faec882b14-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Ovx.png'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Sweet corn with cheetos',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/QJGd05z/433d1a2c8d3d9a7f6e7c569f9604ef18-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Ebo.png'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Sweet corn  with blue yogurt and oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/KWZd5Kq/a2e8eb77de960dee8e9ce508eb619d38-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Y5.png'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Pink korean noodles with sausage',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/fqcn6xn/cb5fe8bed26695f91e1465030ac6b18e-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-k-B.png'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Vegetables andomi with sausage',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/JxJQxrN/0104be1fdab1ab878411da989cf0fa1a-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ASQ.png'
    ],
            category:'snacks',
            description:''
          },
    {
      title:'Trend Fatta waraq anab with oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/sjLPKvV/780806af59f9c5b539392e8b01e49ea0-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-h-G.png'
    ],      category:'snacks',
            description:''
          },
    {
      title:'Pink korean noodles with zinger',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/X3Y5DyJ/fcaa30fffb4e058fd92e25b730984156-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-g5.png'
    ],
      category:'snacks',
      description:''
    },
    {
      title:'Pink korean noodles with Cheetos and zinger',
      price :'40 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/dkF16jt/16eb05ea21cce80e8e5ecf2d4f04fd1e-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-kjm.png'
    ],
    category:'snacks',
    description:''
    },
    {
      title:'Black korean noodles with zinger',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/H4wGM3D/80f442150f0ebf0d7687dcc0a8ef4622-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-NET.png'
    ],
    category:'snacks',
    description:''
    },
    {
      title:'Yellow korean noodles with zinger',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/pK2jqhf/01f9e530d39a89ca9e46ed8e78c46de4-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-h-G.png'],
      category:'snacks',
    description:''
    },
    {
      title:'Cheesecake raspberry',
      price :'40 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/9r4vmVt/82bea5050b7bb9eb4875f39973ce486a-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Hn.png'
    ],
      category:'ice cream and sweets',
      description:''
    },
    {
      title:'Sweet corn with blue yogurt and oman chips',
      price :'35 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/KXSd1c5/e02fd199d0411fc74ccfad566c666e14-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-j-L.png'
    ],
    category:'ice cream and sweets',
    description:''
    },
    {
      title:'mango sour',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/p2fpc3N/9cdb20963261e68b180133d3e80d6387-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-HWY.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Spicy mango sour',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[

      'https://i.ibb.co/dt9kWgK/1eb532662be6f1a91e13581236e821be-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-oo.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Sour pomegranate',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/XLrY3p2/b176dbd764ac3fbd527411d5d9c983ca-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Uo.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Khalta trend lavashak sour',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/kcYt27R/17157657421d49aa5b6c14be9be76185-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-TTM.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Dried sour cherries',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/bR7wRWq/684f786d4475951096ef746aac5c3699-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-c-P.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Sunflower seed special Iran',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/Jk4dBhF/bef618fe9584069a1dd8b9ed03729bf8-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-CUN.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Sour skittles amriki with salt',
      price :'12 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/yB3rw2P/2cc36966d2b6ae7db56257b8b04f88f2-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-TEo.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Canles cherry sours trend lane',
      price :'10 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/DzLt3Cn/d31ce07a056c6b3b910be24374718ea5-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-HXV.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Mixture of sour fruits and sauce',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/2YMLCQC/5f2b3b5de8f1d283a9039dc7239d8ff9-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-n1.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Skittles sours balls',
      price :'12 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/HD4KzkT/fd0af6b1eef4c372f6f7e6384ad2eeaf-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Hls.png'
    ],
      category:'fruit and candy',
      description:''
    },
    {
      title:'Khalta amriki redbull',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/4T1GPqT/d367269f11c3312558c3f33dacb12e47-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-WLE.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Khalta amriki rita blue',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/HhX2yDF/fa94dd2bd4f50c87a282f72972d8cc1e-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Ytv.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Khalta amriki ornamin c',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/wB0n5Vq/38a03b1c464f00bd027023c1ba91cc2b-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Flz.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Mango passion fruit slush',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/4gDDYX1/0a306a2ab0c7850bf5b4761020e98834-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-j-S.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Vimto slush',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/93wC074/583c4ac805186e868b0f59337a6eb021-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-pu.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Cotton candy slush',
      price :'20 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/QY494jz/46c004171e5c864f28cebe3a81f690c8-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-CNv.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Redbull with special blue syrup',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/X2SwX73/2d9f7ded0fa4df5ca5e0ec6d4528d924-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-AMx.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Redbull with special red syrup',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/z2b1S2J/41f14346fd28743884ce9fec7cc2c118-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Ft.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Special blue mojito',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/zsdjC1y/8436f3645bcb1d051a92a782ec939f54-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-im.png'
    ],
      category:'drinks',
      description:''
    },
    {
      title:'Special red mojito',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
'https://i.ibb.co/QY4RYdR/50df0cb4fd6a10cc442769746ce05f83-Expires-1724025600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-mfz.png'
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
