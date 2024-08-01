<template>
    <div>edit here</div>
    <ExpansionTab :isOpen="isOpen" :close-event-name="closeEvent">
        <draggable v-model="myArray" item-key="id">
  <template #item="{element, index}">
    <div> {{index}} - {{element}} </div>
  </template>
</draggable>
<div> 0 - Me </div>

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
            myArray:['me','you','steve'],
            closeEvent:'close-categories'
         }
    },
    components: {
        Draggable,ExpansionTab
        },
}
</script>