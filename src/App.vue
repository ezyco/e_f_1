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
       <FoodItem  class="my-[1vw]" v-for="(item,index) in sortedItems" @click="chooseItem(index)" :key="index" :foodTitle="item.title" :foodPrice="item.price" :isSuggested="item.isSuggested" :imageUrl="item.imagesUrl[0]"/>
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
  items:[
    {
      title:'Khalta cheetos with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__'
      ],
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta blue taxis with special blue yogurt',
      price :'20 AED',
      isSuggested: true,
      imagesUrl:[
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__'
      ],
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta red taxis with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__'
      ],
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta doritos blue with special blue yogurt',
      price :'25 AED',
      isSuggested: false,
      imagesUrl:[
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__'
      ],
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta doritos red with special blue yogurt',
      price :'',
      isSuggested: false,
      imagesUrl:[
       ],
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
     
    },
    {
      title:'Khalta amwaj chips ',
      price :'30 AED',
      isSuggested: false,
      imagesUrl:[
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__'
      ],
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta amwaj chips ',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
      ],
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta cheetos with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      imagesUrl:[
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__'
      ],
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
    },
    {
      title:'Khalta cheetos with special blue yogurt',
      price :'15 AED',
      isSuggested: false,
      description:'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
      imagesUrl:[
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__',
          'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVd8DYOUboYcglv9whkyHBXyX50bAwm7frP1jF7D0gNDAwH~j3mQIWERiqozj4uivggvWpZx7fHHKKVRwAQeWnvCIkxzzrWL5zD-8Y0K9IfE-Ntj1ycRpKyaHB-9syF3zS~hIKGE52mpuy0xasRZHBocW01W0mKlI1ibLPTJdBxgFdaRrd0FXpaFrN4rAuvl~0nOSkQZpZQjGNPQcdF5um6sQwasZEUzA-rWEa7eWbMcEzcf7Cj7q4yxoRvZs3vZsYZGXK8WjojGtrEXsVDTwbXxLeJYzZQ4Cs1maHHftgI9AxCl2nPMHqm58Rmml5eNfzA7R7IdeS6YlYFlVEERPQ__'
      ],
        },
  ],
}
  },
  computed: {
    sortedItems() {
    return this.items.sort((a, b) => {
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
  },
    chosenItem(){
      return this.sortedItems[this.chosenIndex]
    }
  },
  
  methods:{
    changeCategory(index){
      this.chosenCategory = index;
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
