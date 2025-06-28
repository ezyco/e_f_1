<template>
    <div class="color-picker">
      <input type="color" v-model="color" @input="updateColor" />
      <div class="color-display" :style="{ backgroundColor: color }"></div>
    </div>
  </template>
 <script>
 export default {
   name: 'ColorPicker',
   data() {
     return {
       color: '#ff0000',
     };
   },
   methods: {
     updateColor(event) {
       this.color = event.target.value;
     },
   },
 };
 </script>
<style scoped>
.color-picker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-display {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border: 1px solid #000;
}
</style>