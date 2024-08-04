<template>
<div :class="{'w-full h-full  flex flex-col justify-end fixed top-0 z-30 bg-[rgba(23,23,23,0.5)] backdrop-blur-sm':true,'bg-show': isOpen,
        'bg-hide': !isOpen,}"></div>
<div class="w-[100vw] h-[100vh] fixed z-40  top-0 flex justify-center items-center">
    <div :class="{'w-[80vw] bg-white rounded-[2vw] transition-all duration-300':true,'popup-close':!isOpen,'popup-open':isOpen}">
        <div class="w-full flex justify-center items-center pt-[7vw] px-[7vw]">
            <svg v-if="popupType==='warning'" width="15vw" height="15vw" xmlns="http://www.w3.org/2000/svg" fill="#970e0e" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
        </div>
        <div class="w-full text-center text-[4vw] px-[3vw] mt-[3vw] roboto font-semibold">
            {{ text }}
        </div>
        <div class="w-full mt-[3vw] mb-[4vw] flex justify-around items-center">
            <div @click="deleteData" class="basis-1/3 bg-red-700 text-white p-[1vw] rounded-[1vw] text-center roboto">Yes</div>
            <div @click="closeTab" class="basis-1/3 text-center roboto p-[1vw] rounded-[1vw] bg-[#1a8b45] text-white">Cancel</div>
        </div>
    </div>
</div>
</template>

<script>

export default{
    name:'popupComponent',
    props:{
      
            text:{
               type:String,
               required:true,
            },
            index:{
                type:Number,
                required:true,
            },
            isOpen:{
                type:Boolean,
                required:true,
            },
            popupType:{
                type:String,
                required:true,
            },
            closeEventName:{
        type:String,
        required:true,
      },
      itemToDeleteType:{
         type:String,required: true,
      },
    },
    methods:{
        deleteData(){
              if(this.itemToDeleteType==='item'){
                    this.deleteItem();
              }else{
                  this.deleteCategory();
              }
        },
        closeTab() {
        this.$emit(this.closeEventName);
        // console.log(this.imageUrl[0]);
        setTimeout(() => {}, this.closeTime);
      },
      deleteItem(){
        this.$emit("delete-item",this.index);
      },
      deleteCategory(){
        this.$emit("delete-category",this.index);

      }
    }
}
</script>

<style scoped>
  @keyframes show-bg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
  @keyframes hide-bg {
    0% {
      opacity: 100;
    }
    100% {
      opacity: 0;
    }
  }
  .bg-show {
    animation-name: show-bg;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-direction: forwards;
    animation-timing-function: ease-in-out;
  }
  .bg-hide {
    animation-name: hide-bg;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-direction: forwards;
    animation-timing-function: ease-in-out;
  }

  .popup-open {
    animation-name: open-animation;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-direction: forwards;
    animation-timing-function: ease-in-out;
  }
  .popup-close {
    animation-name: close-animation;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-direction: forwards;
    animation-timing-function: ease-in-out;
  }
  @keyframes close-animation {
    0% {
      transform:scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes open-animation {
    0% {
        transform:scale(0);
    }
    100% {
        transform: scale(1);
    }
  }


</style>