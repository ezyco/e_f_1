<template>
    <div>
      <div class="pl-[3vw] mt-[3vw] w-full flex items-center justify-between space-x-[2vw]">
        <div @click="openCategoriesTab" class="w-[9.5vw] active:border-[#1B7B4A] h-[9.5vw] t-[2vw] rounded-[1vw] border-1 bg-white drop-shadow-lg border-white focus:border-[#1B7B4A] flex justify-center items-center">
          <svg width="3vw" height="3vw" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.61886 2.1499C6.82451 2.1499 6.99123 2.31662 6.99123 2.52227V6.246H10.715C10.9206 6.246 11.0873 6.41271 11.0873 6.61837C11.0873 6.82403 10.9206 6.99074 10.715 6.99074H6.99123V10.7145C6.99123 10.9201 6.82451 11.0868 6.61886 11.0868C6.4132 11.0868 6.24649 10.9201 6.24649 10.7145V6.99074H2.52276C2.31711 6.99074 2.15039 6.82403 2.15039 6.61837C2.15039 6.41271 2.31711 6.246 2.52276 6.246H6.24649V2.52227C6.24649 2.31662 6.4132 2.1499 6.61886 2.1499Z" fill="#1B7B4A"/>
</svg>

        </div>
        <div class="flex-1 p-[1vw] h-[9.5vw] space-x-[1vw] saira whitespace-nowrap overflow-x-auto drop-shadow-lg ">
          
            <div @click="focusCategory(index)" v-for="(category,index) in categories" :key="index" :class="{'h-[7vw] inline-block shrink-0 bg-white text-center p-[1vw] drop-shadow-sm text-[3.8vw]':true,'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow-[0_0px_8px_rgba(0,150,6,1)]':focusedCategory === index,'drop-shadow-lg':focusedCategory!==index}">
<div class="w-full h-full flex justify-center items-center">          
  {{ category }}
</div>          
          </div>
        </div>
      </div>
      <div class="px-[3vw] w-full bg-white">
        <div class="w-full border-2 bg-white drop-shadow-lg mt-[3vw] border-white rounded-[1vw] active:border-[#1B7B4A] focus:border-[#1B7B4A] h-[10vw] flex justify-center items-center">
          <svg width="3vw" height="3vw" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.61886 2.1499C6.82451 2.1499 6.99123 2.31662 6.99123 2.52227V6.246H10.715C10.9206 6.246 11.0873 6.41271 11.0873 6.61837C11.0873 6.82403 10.9206 6.99074 10.715 6.99074H6.99123V10.7145C6.99123 10.9201 6.82451 11.0868 6.61886 11.0868C6.4132 11.0868 6.24649 10.9201 6.24649 10.7145V6.99074H2.52276C2.31711 6.99074 2.15039 6.82403 2.15039 6.61837C2.15039 6.41271 2.31711 6.246 2.52276 6.246H6.24649V2.52227C6.24649 2.31662 6.4132 2.1499 6.61886 2.1499Z" fill="#1B7B4A"/>
</svg>
        </div>
        <div class=""></div>
      </div>
    </div>
    <ExpansionTab :close-event-name="'close-socials-tab'" @close-socials-tab="closeSocialsTab" :isOpen="isSocialsExpanded"
    v-if="showSocialsTab" >
        <draggable v-model="categories" item-key="id">
  <template #item="{element,index}">
    <div class="w-full text-[3.8vw] my-[1vw]  flex space-x-[2vw] items-center">
      <div>
        <svg width="7.43vw" height="7.43vw" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4998 25.375V3.625M14.4998 25.375L18.1248 21.75M14.4998 25.375L10.8748 21.75M14.4998 3.625L10.8748 7.25M14.4998 3.625L18.1248 7.25" stroke="#555555" stroke-width="2.41667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div class="flex-1 justify-between flex items-center px-[2vw] bg-[#e0e0e0] border-[1px] border-[#E9EAEB] rounded-[2vw]">
        <div>
          {{ element }}
        </div>
        <div>
          <svg @click="deleteCategory(index)" width="4.1vw" height="4.1vw" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00198 16C5.86284 16 3.85046 15.1604 2.34513 13.6554C0.839812 12.1505 0 10.1386 0 8C0 5.86139 0.839812 3.8495 2.34513 2.34455C3.85046 0.839604 5.86284 0 8.00198 0C10.1411 0 12.1535 0.839604 13.6588 2.34455C16.7804 5.46535 16.7804 10.5347 13.6588 13.6554C12.1535 15.1604 10.1411 16 8.00198 16ZM8.00198 0.950495C6.11636 0.950495 4.34167 1.67921 3.01065 3.0099C1.67962 4.34059 0.95073 6.11485 0.95073 8C0.95073 9.88515 1.67962 11.6594 3.01065 12.9901C4.34167 14.3208 6.11636 15.0495 8.00198 15.0495C9.8876 15.0495 11.6623 14.3208 12.9933 12.9901C15.7504 10.2337 15.7504 5.76634 12.9933 3.0099C11.6623 1.67921 9.8876 0.950495 8.00198 0.950495Z" fill="#D10000"/>
<path d="M11.8256 5.12568L4.79868 11.5158L4.17993 10.9531L11.2068 4.56299L11.8256 5.12568Z" fill="#D10000"/>
<path d="M4.40601 5.32858L5.03101 4.77441L11.8279 10.9555L11.2029 11.5239L4.40601 5.32858Z" fill="#D10000"/>
</svg>

        </div>
      </div>
    </div>
  </template>
</draggable>
<div class="w-full my-[1vw]  flex space-x-[2vw] items-center">
      <div>
        <svg width="7.43vw" height="7.43vw" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4998 25.375V3.625M14.4998 25.375L18.1248 21.75M14.4998 25.375L10.8748 21.75M14.4998 3.625L10.8748 7.25M14.4998 3.625L18.1248 7.25" stroke="#555555" stroke-width="2.41667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
     <input @keydown.enter="addNewCategory" v-model="newEnteredCategory" @blur="addNewCategory" type="text" placeholder="empty" class="flex-1 text-[3.8vw] justify-between flex items-center px-[2vw] bg-[#e0e0e0] border-[1px] border-[#E9EAEB] rounded-[2vw] outline-none">
    </div>
    <div class="w-full h-[10vw] bg-white"></div>
    </ExpansionTab>
</template>

<script>
  import Draggable from 'vuedraggable';
  import ExpansionTab from './ExpansionTab.vue';
  export default{
    name: "EditMenuPage",
    data(){
         return{
            isOpen: true,
            categories:['khalta special blue yogurt ','snacks','ice cream and sweet','fruit and candy','drinks'],
            closeEvent:'close-categories',
            newEnteredCategory:'',
            showSocialsTab:false,
            isSocialsExpanded:false,
            closeExpansionTabTime:300,
            focusedCategory:0,
         }
    },
    methods:{
        addNewCategory(){
           if(this.newEnteredCategory.length>0){
            this.categories.push(this.newEnteredCategory);
            this.newEnteredCategory = '';
           }
        },
        deleteCategory(index){
               this.categories.splice(index,1);
        },
        closeSocialsTab(){
      this.isSocialsExpanded = false;
      setTimeout(() => {
        this.showSocialsTab = false;
      }, this.closeExpansionTabTime);
    },
    openCategoriesTab(){
      this.isSocialsExpanded = true;
      this.showSocialsTab = true;
    },
    focusCategory(index){
this.focusedCategory = index;
    }
    },
    computed(){
         
    },
    components: {
        Draggable,ExpansionTab
        },
}
</script>