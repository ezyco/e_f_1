<template>
    <input   type="file" 
      accept="image/*" 
      ref="imagePicker" 
      @change="onFileChange" class="hidden" >
  <div class="saira">
    <div>
      <div class="pl-[3vw] saira mt-[3vw] w-full flex items-center justify-between space-x-[2vw]">
        <div @click="openCategoriesTab"
          class="w-[9.5vw] active:border-[#1B7B4A] h-[9.5vw] t-[2vw] rounded-[1vw] border-1 bg-white drop-shadow-lg border-white focus:border-[#1B7B4A] flex justify-center items-center">
          <svg width="3vw" height="3vw" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.61886 2.1499C6.82451 2.1499 6.99123 2.31662 6.99123 2.52227V6.246H10.715C10.9206 6.246 11.0873 6.41271 11.0873 6.61837C11.0873 6.82403 10.9206 6.99074 10.715 6.99074H6.99123V10.7145C6.99123 10.9201 6.82451 11.0868 6.61886 11.0868C6.4132 11.0868 6.24649 10.9201 6.24649 10.7145V6.99074H2.52276C2.31711 6.99074 2.15039 6.82403 2.15039 6.61837C2.15039 6.41271 2.31711 6.246 2.52276 6.246H6.24649V2.52227C6.24649 2.31662 6.4132 2.1499 6.61886 2.1499Z"
              fill="#1B7B4A" />
          </svg>

        </div>
        <div class="flex-1 p-[1vw] h-[9.5vw] space-x-[1vw] saira whitespace-nowrap overflow-x-auto drop-shadow-lg ">

          <div @click="focusCategory(index)" v-for="(category, index) in categories" :key="index"
            :class="{ 'h-[7vw] inline-block shrink-0 bg-white text-center p-[1vw]  text-[3.8vw]': true, 'drop-shadow-[0_0px_8px_rgba(0,150,6,1)]': focusedCategory === index, 'drop-shadow-lg': focusedCategory !== index }">
            <div class="w-full h-full flex justify-center items-center">
              {{ category }}
            </div>
          </div>
        </div>
      </div>
      <div class="px-[3vw] w-full bg-white">
        <div @click="addNewItem"
          class="w-full border-2 bg-white drop-shadow-lg mt-[3vw] border-white rounded-[1vw] active:border-[#1B7B4A] focus:border-[#1B7B4A] h-[10vw] flex justify-center items-center">
          <svg width="3vw" height="3vw" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.61886 2.1499C6.82451 2.1499 6.99123 2.31662 6.99123 2.52227V6.246H10.715C10.9206 6.246 11.0873 6.41271 11.0873 6.61837C11.0873 6.82403 10.9206 6.99074 10.715 6.99074H6.99123V10.7145C6.99123 10.9201 6.82451 11.0868 6.61886 11.0868C6.4132 11.0868 6.24649 10.9201 6.24649 10.7145V6.99074H2.52276C2.31711 6.99074 2.15039 6.82403 2.15039 6.61837C2.15039 6.41271 2.31711 6.246 2.52276 6.246H6.24649V2.52227C6.24649 2.31662 6.4132 2.1499 6.61886 2.1499Z"
              fill="#1B7B4A" />
          </svg>
        </div>
        <div class="mt[4vw] w-full">
          <draggable   group="foodItem" 
          v-model="itemSeperated[focusedCategory]" item-key="id">
  <template #item="{element,index}">
    <div 
            :class="{ 'w-full item px-[2vw] bg-white rounded-[2vw] drop-shadow-lg transition-all duration-300 overflow-y-hidden my-[2vw] ': true, ' max-h-[11.5vw]': focusedItem !== index, 'max-h-[100vw]': focusedItem === index, 'opacity-0': isSwitchingCategory, 'opacity-100':!isSwitchingCategory }">
            <div class="flex justify-between items-center h-[11.5vw]">
              <div @click="focusItem(index)" class="flex items-center justify-start space-x-[2vw]">
                <div>
                  <svg width="4.3vw" height="4.3vw" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.4998 25.375V3.625M14.4998 25.375L18.1248 21.75M14.4998 25.375L10.8748 21.75M14.4998 3.625L10.8748 7.25M14.4998 3.625L18.1248 7.25"
                      stroke="#555555" stroke-width="2.41667" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div v-if="element.title.length > 0"
                  :class="{ 'text-[3.8vw] transition-all duration-200': true, 'text-black': element.isVisible, 'text-[#A6A6A6]': !element.isVisible }">
                  {{ element.title.length > 27 ? element.title.substring(0, 27) + '...' : element.title }}
                </div>
                <div v-else class=" text-[3.8vw] transition-all duration-200 text-[#A6A6A6]">
                  empty...
                </div>
              </div>


              <div class="flex-1 flex justify-end">
                <svg @click="toggleItemVisibility(element.id)" v-if="element.isVisible" width="4.6vw" height="4.6vw"
                  viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1"
                    d="M5.0188 7.02832L4.01395 8.03317C2.97959 9.06757 2.4624 9.5847 2.4624 10.2274C2.4624 10.8701 2.97959 11.3872 4.01395 12.4216L5.65962 14.0673C7.78034 16.188 11.2187 16.188 13.3394 14.0673L13.6586 13.7481L11.3879 11.9821C10.9297 12.4548 10.2879 12.7487 9.57751 12.7487C8.18499 12.7487 7.05621 11.6199 7.05621 10.2274C7.05621 9.74219 7.19329 9.28898 7.43084 8.90435L5.0188 7.02832Z"
                    fill="#555555" />
                  <path d="M2.59546 4.89795L16.5594 15.7588" stroke="#555555" stroke-width="1.55155"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.2795 11.6595C10.8535 12.2047 10.19 12.5551 9.44451 12.5551C8.15913 12.5551 7.11719 11.5132 7.11719 10.2278C7.11719 9.70459 7.28982 9.22175 7.58123 8.83301"
                    stroke="#555555" stroke-width="1.55155" />
                  <path
                    d="M7.11719 5.28303C9.11892 4.3727 11.5599 4.74083 13.2065 6.38741L15.5352 8.71609C15.9205 9.10134 16.113 9.29397 16.2218 9.49846C16.4643 9.95415 16.4643 10.5005 16.2218 10.9561C16.113 11.1606 15.9205 11.3533 15.5352 11.7385L15.4948 11.7789"
                    stroke="#555555" stroke-width="1.55155" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M5.57783 7.43371C5.88079 7.13074 5.88079 6.63955 5.57783 6.3366C5.27487 6.03363 4.78368 6.03363 4.48072 6.3366L5.57783 7.43371ZM6.07501 13.5192L4.42935 11.8735L3.33223 12.9707L4.9779 14.6163L6.07501 13.5192ZM12.6577 13.5192C10.8399 15.3369 7.89277 15.3369 6.07501 13.5192L4.9779 14.6163C7.40158 17.04 11.3312 17.04 13.7548 14.6163L12.6577 13.5192ZM4.42935 8.58219L5.57783 7.43371L4.48072 6.3366L3.33223 7.48508L4.42935 8.58219ZM13.1265 13.0503L12.6577 13.5192L13.7548 14.6163L14.2236 14.1475L13.1265 13.0503ZM4.42935 11.8735C3.89666 11.3408 3.55349 10.9953 3.33389 10.7075C3.12794 10.4376 3.10502 10.3114 3.10502 10.2278H1.55347C1.55347 10.787 1.78912 11.2407 2.10037 11.6487C2.39795 12.0387 2.83056 12.469 3.33223 12.9707L4.42935 11.8735ZM3.33223 7.48508C2.83056 7.98675 2.39795 8.41703 2.10037 8.80709C1.78912 9.21499 1.55347 9.66866 1.55347 10.2278H3.10502C3.10502 10.1444 3.12794 10.0182 3.33389 9.74818C3.55349 9.46037 3.89666 9.11491 4.42935 8.58219L3.33223 7.48508Z"
                    fill="#555555" />
                </svg>
                <svg @click="toggleItemVisibility(element.id)" v-else width="4.6vw" height="4.6vw" viewBox="0 0 19 19"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1"
                    d="M5.0188 6.48242L4.01395 7.48727C2.97959 8.52167 2.4624 9.0388 2.4624 9.68146C2.4624 10.3242 2.97959 10.8413 4.01395 11.8757L5.65962 13.5214C7.78034 15.6421 11.2187 15.6421 13.3394 13.5214L13.6586 13.2022L11.3879 11.4362C10.9297 11.9089 10.2879 12.2028 9.57751 12.2028C8.18499 12.2028 7.05621 11.074 7.05621 9.68154C7.05621 9.19629 7.19329 8.74308 7.43084 8.35845L5.0188 6.48242Z"
                    fill="#8F8F8F" />
                  <path d="M2.59546 4.35205L16.5594 15.2129L2.59546 4.35205Z" fill="#8F8F8F" />
                  <path d="M2.59546 4.35205L16.5594 15.2129" stroke="#8F8F8F" stroke-width="1.55155"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.2795 11.1136C10.8535 11.6588 10.19 12.0092 9.44451 12.0092C8.15913 12.0092 7.11719 10.9673 7.11719 9.68188C7.11719 9.15869 7.28982 8.67585 7.58123 8.28711"
                    fill="#8F8F8F" />
                  <path
                    d="M11.2795 11.1136C10.8535 11.6588 10.19 12.0092 9.44451 12.0092C8.15913 12.0092 7.11719 10.9673 7.11719 9.68188C7.11719 9.15869 7.28982 8.67585 7.58123 8.28711"
                    stroke="#8F8F8F" stroke-width="1.55155" />
                  <path
                    d="M7.11719 4.73713C9.11892 3.8268 11.5599 4.19493 13.2065 5.84151L15.5352 8.1702C15.9205 8.55545 16.113 8.74807 16.2218 8.95257C16.4643 9.40826 16.4643 9.95456 16.2218 10.4102C16.113 10.6147 15.9205 10.8074 15.5352 11.1926L15.4948 11.233"
                    fill="#8F8F8F" />
                  <path
                    d="M7.11719 4.73713C9.11892 3.8268 11.5599 4.19493 13.2065 5.84151L15.5352 8.1702C15.9205 8.55545 16.113 8.74807 16.2218 8.95257C16.4643 9.40826 16.4643 9.95456 16.2218 10.4102C16.113 10.6147 15.9205 10.8074 15.5352 11.1926L15.4948 11.233"
                    stroke="#8F8F8F" stroke-width="1.55155" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M5.57783 6.88781C5.88079 6.58485 5.88079 6.09366 5.57783 5.7907C5.27487 5.48774 4.78368 5.48774 4.48072 5.7907L5.57783 6.88781ZM6.07501 12.9733L4.42935 11.3276L3.33223 12.4248L4.9779 14.0704L6.07501 12.9733ZM12.6577 12.9733C10.8399 14.791 7.89277 14.791 6.07501 12.9733L4.9779 14.0704C7.40158 16.4941 11.3312 16.4941 13.7548 14.0704L12.6577 12.9733ZM4.42935 8.03629L5.57783 6.88781L4.48072 5.7907L3.33223 6.93918L4.42935 8.03629ZM13.1265 12.5044L12.6577 12.9733L13.7548 14.0704L14.2236 13.6016L13.1265 12.5044ZM4.42935 11.3276C3.89666 10.7949 3.55349 10.4494 3.33389 10.1616C3.12794 9.89171 3.10502 9.7655 3.10502 9.68194H1.55347C1.55347 10.2411 1.78912 10.6948 2.10037 11.1028C2.39795 11.4928 2.83056 11.9231 3.33223 12.4248L4.42935 11.3276ZM3.33223 6.93918C2.83056 7.44085 2.39795 7.87113 2.10037 8.26119C1.78912 8.66909 1.55347 9.12277 1.55347 9.68194H3.10502C3.10502 9.59847 3.12794 9.47225 3.33389 9.20228C3.55349 8.91447 3.89666 8.56902 4.42935 8.03629L3.33223 6.93918Z"
                    fill="#8F8F8F" />
                </svg>
              </div>

            </div>
            <div class="h-[83vw] pt-[1vw] saira">
              <div class="w-full h-[1px] bg-[#9f9f9f81]"></div>
              <div class="mt-[2vw] px-[2vw] flex justify-between items-center">
                <input type="text" v-model="items[indexOfFocusedItem(element.id)].title" placeholder="title"
                  class="outline-none rounded-[2vw] w-[60vw] px-[2vw] py-[1vw] border-[1px] text-[3.8vw] border-[#E9EAEB] bg-[rgba(31,42,55,0.05)]">
                <input type="text" v-model="items[indexOfFocusedItem(element.id)].price" placeholder="price"
                  class="outline-none rounded-[2vw] w-[24.3vw] px-[2vw] py-[1vw] border-[1px] text-[3.8vw] border-[#E9EAEB] bg-[rgba(31,42,55,0.05)]">
              </div>
              <div class="flex justify-between px-[2vw] mt-[2vw] w-full">
               <div class="w-[46vw] ">
                <textarea placeholder="description" v-model="element.description"
                class=" outline-none p-[2vw] w-full rounded-[2vw] text-[4.1vw] font-light h-[52vw] bg-[rgba(31,42,55,0.05)]"></textarea>
                
               </div>
             
                <div class="w-[36.9vw] pt-[2vw]">
                  <div
                    class="w-[36.9vw] h-[36.9vw] rounded-[2vw] border-[1px] border-[#e9eaeb] bg-[rgba(31,42,55,0.05)] flex justify-center items-center">
                    <div @click="selectImage(element.id)" v-if="element.imagesUrl.length===0" class="w-[23.8vw] h-[23.8vw] rounded-[2vw] bg-[#FFFFFF] flex justify-center items-center">
                      <svg width="5.6vw" height="5.6vw" viewBox="0 0 23 23" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M11.6455 0.00292969C12.1597 0.00292969 12.5765 0.419722 12.5765 0.933861V10.2432H21.8858C22.3999 10.2432 22.8167 10.66 22.8167 11.1741C22.8167 11.6882 22.3999 12.105 21.8858 12.105H12.5765V21.4143C12.5765 21.9285 12.1597 22.3453 11.6455 22.3453C11.1314 22.3453 10.7146 21.9285 10.7146 21.4143V12.105H1.4053C0.891157 12.105 0.474365 11.6882 0.474365 11.1741C0.474365 10.66 0.891157 10.2432 1.4053 10.2432H10.7146V0.933861C10.7146 0.419722 11.1314 0.00292969 11.6455 0.00292969Z"
                          fill="#9C9898" />
                      </svg>

                    </div>
                    <div :style="`background-image: url(${element.imagesUrl[0]})`" v-else class="w-full rounded-[2vw] h-full flex justify-end p-[2vw] bg-center bg-cover bg-no-repeat" >
                             <div @click="removeImage(element.id,0)" class="w-[4.1vw] h-[4.1vw] rounded-full bg-red-800 flex justify-center items-center">
                              <svg width="4.1vw" height="4.1vw" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00198 16C5.86284 16 3.85046 15.1604 2.34513 13.6554C0.839812 12.1505 0 10.1386 0 8C0 5.86139 0.839812 3.8495 2.34513 2.34455C3.85046 0.839604 5.86284 0 8.00198 0C10.1411 0 12.1535 0.839604 13.6588 2.34455C16.7804 5.46535 16.7804 10.5347 13.6588 13.6554C12.1535 15.1604 10.1411 16 8.00198 16ZM8.00198 0.950495C6.11636 0.950495 4.34167 1.67921 3.01065 3.0099C1.67962 4.34059 0.95073 6.11485 0.95073 8C0.95073 9.88515 1.67962 11.6594 3.01065 12.9901C4.34167 14.3208 6.11636 15.0495 8.00198 15.0495C9.8876 15.0495 11.6623 14.3208 12.9933 12.9901C15.7504 10.2337 15.7504 5.76634 12.9933 3.0099C11.6623 1.67921 9.8876 0.950495 8.00198 0.950495Z" fill="#D10000"/>
<path d="M11.8256 5.12568L4.79868 11.5158L4.17993 10.9531L11.2068 4.56299L11.8256 5.12568Z" fill="#FFFFFF"/>
<path d="M4.40601 5.32858L5.03101 4.77441L11.8279 10.9555L11.2029 11.5239L4.40601 5.32858Z" fill="#FFFFFF"/>
</svg>

                             </div>
                    </div>

                  </div>
                  <div class="flex whitespace-nowrap mt-[2vw] justify-start space-x-[1vw] w-[36.9vw] overflow-x-auto">
                    <div v-if="element.imagesUrl.length>=1"
                      class="w-[11.5vw] h-[11.5vw] rounded-[0.6vw] border-[1px] border-[#e9eaeb] bg-[rgba(31,42,55,0.05)] flex-[0_0_auto] justify-center items-center">
                    <div @click="selectImage(element.id)" v-if="element.imagesUrl.length<2" class="w-full h-full flex justify-center items-center">
                      <div class="w-[7.7vw] h-[7.7vw] rounded-[0.6vw] bg-[#FFFFFF] flex justify-center items-center">
                        <svg width="2.7vw" height="2.7vw" viewBox="0 0 23 23" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.6455 0.00292969C12.1597 0.00292969 12.5765 0.419722 12.5765 0.933861V10.2432H21.8858C22.3999 10.2432 22.8167 10.66 22.8167 11.1741C22.8167 11.6882 22.3999 12.105 21.8858 12.105H12.5765V21.4143C12.5765 21.9285 12.1597 22.3453 11.6455 22.3453C11.1314 22.3453 10.7146 21.9285 10.7146 21.4143V12.105H1.4053C0.891157 12.105 0.474365 11.6882 0.474365 11.1741C0.474365 10.66 0.891157 10.2432 1.4053 10.2432H10.7146V0.933861C10.7146 0.419722 11.1314 0.00292969 11.6455 0.00292969Z"
                            fill="#9C9898" />
                        </svg>

                      </div>
                    </div>
                    <div :style="`background-image: url(${element.imagesUrl[1]})`" v-else class="w-full rounded-[2vw] h-full flex justify-end p-[1vw] bg-center bg-cover bg-no-repeat" >
                             <div @click="removeImage(element.id,1)" class="w-[4.1vw] h-[4.1vw] rounded-full bg-red-800 flex justify-center items-center">
                              <svg width="4.1vw" height="4.1vw" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00198 16C5.86284 16 3.85046 15.1604 2.34513 13.6554C0.839812 12.1505 0 10.1386 0 8C0 5.86139 0.839812 3.8495 2.34513 2.34455C3.85046 0.839604 5.86284 0 8.00198 0C10.1411 0 12.1535 0.839604 13.6588 2.34455C16.7804 5.46535 16.7804 10.5347 13.6588 13.6554C12.1535 15.1604 10.1411 16 8.00198 16ZM8.00198 0.950495C6.11636 0.950495 4.34167 1.67921 3.01065 3.0099C1.67962 4.34059 0.95073 6.11485 0.95073 8C0.95073 9.88515 1.67962 11.6594 3.01065 12.9901C4.34167 14.3208 6.11636 15.0495 8.00198 15.0495C9.8876 15.0495 11.6623 14.3208 12.9933 12.9901C15.7504 10.2337 15.7504 5.76634 12.9933 3.0099C11.6623 1.67921 9.8876 0.950495 8.00198 0.950495Z" fill="#D10000"/>
<path d="M11.8256 5.12568L4.79868 11.5158L4.17993 10.9531L11.2068 4.56299L11.8256 5.12568Z" fill="#FFFFFF"/>
<path d="M4.40601 5.32858L5.03101 4.77441L11.8279 10.9555L11.2029 11.5239L4.40601 5.32858Z" fill="#FFFFFF"/>
</svg>

                             </div>
                    </div>
                    </div>
                    <div v-if="element.imagesUrl.length>=2"
                      class="w-[11.5vw] h-[11.5vw] rounded-[0.6vw] border-[1px] border-[#e9eaeb] bg-[rgba(31,42,55,0.05)] flex-[0_0_auto] justify-center items-center">
                    <div @click="selectImage(element.id)" v-if="element.imagesUrl.length<3" class="w-full h-full flex justify-center items-center">
                      <div class="w-[7.7vw] h-[7.7vw] rounded-[0.6vw] bg-[#FFFFFF] flex justify-center items-center">
                        <svg width="2.7vw" height="2.7vw" viewBox="0 0 23 23" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.6455 0.00292969C12.1597 0.00292969 12.5765 0.419722 12.5765 0.933861V10.2432H21.8858C22.3999 10.2432 22.8167 10.66 22.8167 11.1741C22.8167 11.6882 22.3999 12.105 21.8858 12.105H12.5765V21.4143C12.5765 21.9285 12.1597 22.3453 11.6455 22.3453C11.1314 22.3453 10.7146 21.9285 10.7146 21.4143V12.105H1.4053C0.891157 12.105 0.474365 11.6882 0.474365 11.1741C0.474365 10.66 0.891157 10.2432 1.4053 10.2432H10.7146V0.933861C10.7146 0.419722 11.1314 0.00292969 11.6455 0.00292969Z"
                            fill="#9C9898" />
                        </svg>

                      </div>
                    </div>
                    <div :style="`background-image: url(${element.imagesUrl[2]})`" v-else class="w-full rounded-[2vw] h-full flex justify-end p-[1vw] bg-center bg-cover bg-no-repeat" >
                             <div @click="removeImage(element.id,2)" class="w-[4.1vw] h-[4.1vw] rounded-full bg-red-800 flex justify-center items-center">
                              <svg width="4.1vw" height="4.1vw" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00198 16C5.86284 16 3.85046 15.1604 2.34513 13.6554C0.839812 12.1505 0 10.1386 0 8C0 5.86139 0.839812 3.8495 2.34513 2.34455C3.85046 0.839604 5.86284 0 8.00198 0C10.1411 0 12.1535 0.839604 13.6588 2.34455C16.7804 5.46535 16.7804 10.5347 13.6588 13.6554C12.1535 15.1604 10.1411 16 8.00198 16ZM8.00198 0.950495C6.11636 0.950495 4.34167 1.67921 3.01065 3.0099C1.67962 4.34059 0.95073 6.11485 0.95073 8C0.95073 9.88515 1.67962 11.6594 3.01065 12.9901C4.34167 14.3208 6.11636 15.0495 8.00198 15.0495C9.8876 15.0495 11.6623 14.3208 12.9933 12.9901C15.7504 10.2337 15.7504 5.76634 12.9933 3.0099C11.6623 1.67921 9.8876 0.950495 8.00198 0.950495Z" fill="#D10000"/>
<path d="M11.8256 5.12568L4.79868 11.5158L4.17993 10.9531L11.2068 4.56299L11.8256 5.12568Z" fill="#FFFFFF"/>
<path d="M4.40601 5.32858L5.03101 4.77441L11.8279 10.9555L11.2029 11.5239L4.40601 5.32858Z" fill="#FFFFFF"/>
</svg>

                             </div>
                    </div>
                    </div>
                    <div v-if="element.imagesUrl.length>=3"
                      class="w-[11.5vw] h-[11.5vw] rounded-[0.6vw] border-[1px] border-[#e9eaeb] bg-[rgba(31,42,55,0.05)] flex-[0_0_auto] justify-center items-center">
                    <div @click="selectImage(element.id)" v-if="element.imagesUrl.length<4" class="w-full h-full flex justify-center items-center">
                      <div class="w-[7.7vw] h-[7.7vw] rounded-[0.6vw] bg-[#FFFFFF] flex justify-center items-center">
                        <svg width="2.7vw" height="2.7vw" viewBox="0 0 23 23" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.6455 0.00292969C12.1597 0.00292969 12.5765 0.419722 12.5765 0.933861V10.2432H21.8858C22.3999 10.2432 22.8167 10.66 22.8167 11.1741C22.8167 11.6882 22.3999 12.105 21.8858 12.105H12.5765V21.4143C12.5765 21.9285 12.1597 22.3453 11.6455 22.3453C11.1314 22.3453 10.7146 21.9285 10.7146 21.4143V12.105H1.4053C0.891157 12.105 0.474365 11.6882 0.474365 11.1741C0.474365 10.66 0.891157 10.2432 1.4053 10.2432H10.7146V0.933861C10.7146 0.419722 11.1314 0.00292969 11.6455 0.00292969Z"
                            fill="#9C9898" />
                        </svg>

                      </div>
                    </div>
                    <div :style="`background-image: url(${element.imagesUrl[3]})`" v-else class="w-full rounded-[2vw] h-full flex justify-end p-[1vw] bg-center bg-cover bg-no-repeat" >
                             <div @click="removeImage(element.id,3)" class="w-[4.1vw] h-[4.1vw] rounded-full bg-red-800 flex justify-center items-center">
                              <svg width="4.1vw" height="4.1vw" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00198 16C5.86284 16 3.85046 15.1604 2.34513 13.6554C0.839812 12.1505 0 10.1386 0 8C0 5.86139 0.839812 3.8495 2.34513 2.34455C3.85046 0.839604 5.86284 0 8.00198 0C10.1411 0 12.1535 0.839604 13.6588 2.34455C16.7804 5.46535 16.7804 10.5347 13.6588 13.6554C12.1535 15.1604 10.1411 16 8.00198 16ZM8.00198 0.950495C6.11636 0.950495 4.34167 1.67921 3.01065 3.0099C1.67962 4.34059 0.95073 6.11485 0.95073 8C0.95073 9.88515 1.67962 11.6594 3.01065 12.9901C4.34167 14.3208 6.11636 15.0495 8.00198 15.0495C9.8876 15.0495 11.6623 14.3208 12.9933 12.9901C15.7504 10.2337 15.7504 5.76634 12.9933 3.0099C11.6623 1.67921 9.8876 0.950495 8.00198 0.950495Z" fill="#D10000"/>
<path d="M11.8256 5.12568L4.79868 11.5158L4.17993 10.9531L11.2068 4.56299L11.8256 5.12568Z" fill="#FFFFFF"/>
<path d="M4.40601 5.32858L5.03101 4.77441L11.8279 10.9555L11.2029 11.5239L4.40601 5.32858Z" fill="#FFFFFF"/>
</svg>

                             </div>
                    </div>
                    </div>
                    <div v-if="element.imagesUrl.length>=4"
                      class="w-[11.5vw] h-[11.5vw] rounded-[0.6vw] border-[1px] border-[#e9eaeb] bg-[rgba(31,42,55,0.05)] flex-[0_0_auto] justify-center items-center">
                    <div @click="selectImage(element.id)" v-if="element.imagesUrl.length<5" class="w-full h-full flex justify-center items-center">
                      <div class="w-[7.7vw] h-[7.7vw] rounded-[0.6vw] bg-[#FFFFFF] flex justify-center items-center">
                        <svg width="2.7vw" height="2.7vw" viewBox="0 0 23 23" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.6455 0.00292969C12.1597 0.00292969 12.5765 0.419722 12.5765 0.933861V10.2432H21.8858C22.3999 10.2432 22.8167 10.66 22.8167 11.1741C22.8167 11.6882 22.3999 12.105 21.8858 12.105H12.5765V21.4143C12.5765 21.9285 12.1597 22.3453 11.6455 22.3453C11.1314 22.3453 10.7146 21.9285 10.7146 21.4143V12.105H1.4053C0.891157 12.105 0.474365 11.6882 0.474365 11.1741C0.474365 10.66 0.891157 10.2432 1.4053 10.2432H10.7146V0.933861C10.7146 0.419722 11.1314 0.00292969 11.6455 0.00292969Z"
                            fill="#9C9898" />
                        </svg>

                      </div>
                    </div>
                    <div :style="`background-image: url(${element.imagesUrl[4]})`" v-else class="w-full rounded-[2vw] h-full flex justify-end p-[1vw] bg-center bg-cover bg-no-repeat" >
                             <div @click="removeImage(element.id,4)" class="w-[4.1vw] h-[4.1vw] rounded-full bg-red-800 flex justify-center items-center">
                              <svg width="4.1vw" height="4.1vw" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00198 16C5.86284 16 3.85046 15.1604 2.34513 13.6554C0.839812 12.1505 0 10.1386 0 8C0 5.86139 0.839812 3.8495 2.34513 2.34455C3.85046 0.839604 5.86284 0 8.00198 0C10.1411 0 12.1535 0.839604 13.6588 2.34455C16.7804 5.46535 16.7804 10.5347 13.6588 13.6554C12.1535 15.1604 10.1411 16 8.00198 16ZM8.00198 0.950495C6.11636 0.950495 4.34167 1.67921 3.01065 3.0099C1.67962 4.34059 0.95073 6.11485 0.95073 8C0.95073 9.88515 1.67962 11.6594 3.01065 12.9901C4.34167 14.3208 6.11636 15.0495 8.00198 15.0495C9.8876 15.0495 11.6623 14.3208 12.9933 12.9901C15.7504 10.2337 15.7504 5.76634 12.9933 3.0099C11.6623 1.67921 9.8876 0.950495 8.00198 0.950495Z" fill="#D10000"/>
<path d="M11.8256 5.12568L4.79868 11.5158L4.17993 10.9531L11.2068 4.56299L11.8256 5.12568Z" fill="#FFFFFF"/>
<path d="M4.40601 5.32858L5.03101 4.77441L11.8279 10.9555L11.2029 11.5239L4.40601 5.32858Z" fill="#FFFFFF"/>
</svg>

                             </div>
                    </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div class="flex px-[2vw] mt-[2vw] w-full space-x-[2vw] items-center justify-between">
                <div class="w-[46vw]  bg-[rgba(31,42,55,0.05)] rounded-[2vw] p-[1vw] flex justify-between items-center">
                  <div class="text-[#969696] text-[2.8vw]">susggested color</div>
                  <ColorInput disable-text-inputs disable-alpha position="left top" v-model="itemTextColor" />
                </div>
               <div class=" w-[36.9vw] space-x-[2vw] flex justify-start">
                <div @click="toggleItemSuggestion(element.id)" :class="{' w-[10vw]  h-[6vw] rounded-full flex px-[0.5vw] items-center transition-all duration-200':true,'bg-[#34C759]':element.isSuggested,'bg-[#9c9c9c]':!element.isSuggested}">
                    <div :class="{'w-[5.1vw] h-[5.1vw] bg-white rounded-full relative transition-all duration-200':true, 'left-[0%]' : !element.isSuggested ,'left-[42.9%]':element.isSuggested}"></div>
                  </div>
                  <div>Suggested</div>
               </div>
              </div>
            </div>
            <div>

            </div>
          </div>
   </template>
</draggable>
        
        </div>
      </div>
    </div>
    <ExpansionTab :close-event-name="'close-socials-tab'" @close-socials-tab="closeSocialsTab"
      :isOpen="isSocialsExpanded" :title="'Tan bar'" v-if="showSocialsTab">
      <draggable @end="reOrganizeArrays"  group="category"  v-model="categories" item-key="id">
        <template #item="{ element, index }">
          <div class="w-ful  text-[3.8vw] my-[1vw]  flex space-x-[2vw] items-center">
            <div>
              <svg width="7.43vw" height="7.43vw" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.4998 25.375V3.625M14.4998 25.375L18.1248 21.75M14.4998 25.375L10.8748 21.75M14.4998 3.625L10.8748 7.25M14.4998 3.625L18.1248 7.25"
                  stroke="#555555" stroke-width="2.41667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div
              class="flex-1 justify-between flex items-center px-[2vw] bg-[#e0e0e0] border-[1px] border-[#E9EAEB] rounded-[2vw]">
              <div>
                {{ element }}
              </div>
              <div>
                <svg @click="deleteCategory(index)" width="4.1vw" height="4.1vw" viewBox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.00198 16C5.86284 16 3.85046 15.1604 2.34513 13.6554C0.839812 12.1505 0 10.1386 0 8C0 5.86139 0.839812 3.8495 2.34513 2.34455C3.85046 0.839604 5.86284 0 8.00198 0C10.1411 0 12.1535 0.839604 13.6588 2.34455C16.7804 5.46535 16.7804 10.5347 13.6588 13.6554C12.1535 15.1604 10.1411 16 8.00198 16ZM8.00198 0.950495C6.11636 0.950495 4.34167 1.67921 3.01065 3.0099C1.67962 4.34059 0.95073 6.11485 0.95073 8C0.95073 9.88515 1.67962 11.6594 3.01065 12.9901C4.34167 14.3208 6.11636 15.0495 8.00198 15.0495C9.8876 15.0495 11.6623 14.3208 12.9933 12.9901C15.7504 10.2337 15.7504 5.76634 12.9933 3.0099C11.6623 1.67921 9.8876 0.950495 8.00198 0.950495Z"
                    fill="#D10000" />
                  <path d="M11.8256 5.12568L4.79868 11.5158L4.17993 10.9531L11.2068 4.56299L11.8256 5.12568Z"
                    fill="#D10000" />
                  <path d="M4.40601 5.32858L5.03101 4.77441L11.8279 10.9555L11.2029 11.5239L4.40601 5.32858Z"
                    fill="#D10000" />
                </svg>

              </div>
            </div>
          </div>
        </template>
      </draggable>
      <div class="w-full my-[1vw]  flex space-x-[2vw] items-center">
        <div>
          <svg width="7.43vw" height="7.43vw" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.4998 25.375V3.625M14.4998 25.375L18.1248 21.75M14.4998 25.375L10.8748 21.75M14.4998 3.625L10.8748 7.25M14.4998 3.625L18.1248 7.25"
              stroke="#555555" stroke-width="2.41667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <input @keydown.enter="addNewCategory" v-model="newEnteredCategory" @blur="addNewCategory" type="text"
          placeholder="empty"
          class="flex-1 text-[3.8vw] justify-between flex items-center px-[2vw] bg-[#e0e0e0] border-[1px] border-[#E9EAEB] rounded-[2vw] outline-none">
      </div>
      <div class="w-full h-[10vw] bg-white"></div>
    </ExpansionTab>
    <div class="w-full h-[30vw]"></div>
  </div>
</template>

<script>
import ColorInput from 'vue-color-input';
import Draggable from 'vuedraggable';
import ExpansionTab from './ExpansionTab.vue';
export default {
  name: "EditMenuPage",
  data() {
    return {
      isOpen: true,
      categories: ['khalta special blue yogurt', 'snacks', 'ice cream and sweets', 'fruit and candy', 'drinks'],
      closeEvent: 'close-categories',
      newEnteredCategory: '',
      showSocialsTab: false,
      isSocialsExpanded: false,
      closeExpansionTabTime: 300,
      focusedCategory: 0,
      focusedItem: -1,
      isSwitchingCategory:false,
      categorySwitchTime:300,
      items: [
        {
          id: 0,
          title: 'Khalta cheetos with special blue yogurt',
          isVisible: true,
          price: '15 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
            'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
            'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
            'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
            'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
            'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',
            'https://s3-alpha-sig.figma.com/img/bcef/91ad/5e6f8169fad6d98fb1b82c7c9e83b901?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqNEdGhEIYu0g2EWsK4aAfv8T2JEK1WYG-SJyXfiNI27K8aDBBgoGMewy6U9bgRX1yyGb2VUwoZ4d85whMJGn~DaipC6jNh7hCt5Z3dwfb~zpWX~mo3VXqdHn57aPUko8mEh4fJhv6iS2ovFRhl3ea5309Oj-AiytbR7c965tOtX3Nn9OjYhBW1crcYDiLECiJgkATOjdByjni28AAgcZ0KWDJEb9LL-1QaSsF~bYvF5WisXou98f-yc6YrWG4A6l89k4V5JinUf~6P0M137ROMVfYxDcOZKZ6DB9thhlicEw5WYtEENh4s~TZEP42wEuvaQtySdbd--RZBcsnPFwg__',

          ],
          category: 'khalta special blue yogurt',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 1,
          title: 'Khalta blue taxis with special blue yogurt',
          isVisible: true,
          price: '20 AED',
          isSuggested: true,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',
            'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',
            'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',
            'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',
            'https://s3-alpha-sig.figma.com/img/668c/0c2c/76984a25241f76c6c0d9a8aaae06dd53?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHLcB3mgg53MUdOw4ur1lifJ3j~lGLujrZQc7iSOebvUekLAruqTA6k-avPRuREm65y-SAdAf0pCLAhZKZCBGIsMnPwaT4oztiYkEhlgn8l5K7p8wwvdDf-SRNQGgRFYT6NCqGkusBrLbRm~buywQkN3vXGosxvw1DCzT9XpBsVk8zzGBM62YLsbxjS7tlr7HF-UAhA8D8WYNPrZsTvK14YU3wSosSOs2X-XGyN6OrkOnzbykxugmzr6VV2tOkoBV7HBq3qgPM4GAlSrGfV5AZuRlAvPWZFqjJ7z9fSgrn3cHl0q0RadWBgepD29cSvecYvZsxTTQCWzjn5oGFJirA__',


          ],
          category: 'khalta special blue yogurt',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 2,
          title: 'Khalta red taxis with special blue yogurt',
          isVisible: true,
          price: '15 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/a77b/8256/79eb601f20b29aab0bc30318c4c765b6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRTu5bSDHDQWgB9hskHAYoypcOnU7TmXBYntr0ZORAq8NtCaar0C~mrZiYToZuxv9RrwIWAP5giUDWJcft6t-NpCqbklx0Ref67knQGGyCMDSu9GtlTcU2nN-3NySjh0SOCJovkZs0iz1gXBxwWkWGKRGdxbTcHaA5gUU86L2mpAr26iivp47n1U-gKAMoiYBvMZ~vZhA~8g1mMegPmojIZHeF3BM~BPSi2HWzzb0GabtjV1Ic-RsMUSx0tfY2n628eKoGCgVw1OEjNB9mNVggFQNx8FjU~jivLGgTLQJjnpmh9WcJQZWJ7yrNOtvJMArLR3QzYPgkTXyy-YmfFWvg__'
          ],
          category: 'khalta special blue yogurt',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 3,
          title: 'Khalta doritos blue with special blue yogurt',
          isVisible: true,
          price: '25 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/4ee6/86a7/c8bee80fd6b483d8348b0cbe05c5bb71?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0yi8HPerM96FqrcpdjaOMQLPbnqAy1swm~FvoPMa82pdRA8~6ziyhcVvt6wO8hXqX-fH1MNaDZhNORTI6pfeqJwLpCEpJjKg~X1nv8wHrXPJw-MV~fgPP3QLMZdcgWdDL92AZ48ym0XQNRQa8vMq52ECl424Lga3P04qlFDljsURuFvmtSFu-QKwyf800QDnn5ldqyzIt5KODDSVc7PrdK~9lCenuCECQ4zi~IMJ9C4M0KgCUlPEYYTIVkNhfU7b3OD4e7hTHuVYnS~yrKh1uKC~Hhw4yovHMsKIVVs2I633Wf3hpyAt7aJjUF8XsB~LXvdm2LkaIVC98~5ou6-2g__'

          ],
          category: 'khalta special blue yogurt',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 4,
          title: 'Khalta doritos red with special blue yogurt',
          isVisible: true,
          price: '',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/d5d8/1dc9/d4785ba5a57299082554746098234870?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDQgsc9zpBQa9KEOvHdSnmrYMnlx5SYso~jd5a3bdx0uJPGCx2xK8NOYsP6zwJPNLBq3iHomiaZ95auj1xGC8iNxx89XzFWrwwtYR6mTYcVbNgoC0DUIHZui0tjCeUATFF0a9jB-cUIsz22GWq12WPGCAZ0RXTzoQz0nSRfVBZbQCff0keVS6rcL2ckpvby4WhdT-FR52iWADe7JMsmY5uuTG~b4oJdkUAn0c3T3silnDZwixaRzP2SLdgA~Sj4E46-1psszEVGNdjuGFLfcYLclZUkomQ7kRzPVC-4AcvOvMNmx-3nCzTE9PpvkqKGdf1LD~JkJjDuZYzTYxx~pYw__'

          ],
          category: 'khalta special blue yogurt',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',

        },
        {
          id: 5,
          title: 'Khalta amwaj chips ',
          isVisible: true,
          price: '30 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/cb24/8cfe/1433213955b4fc602c4d1cbfc3ed21c9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oecdfwiO-8wSQEVN4mKw2Vj9KtrBe0vkadWUHaX1SyJjf~ohT-ZDcCmqnl0HF1bnwoTj2fypovX99j5z2JrP2LliH7AA7Dg1BmlsPf5G6SBSeMHbt2uAu9FSAp3B-gwWBDN~wxHRgPUJt04yhuaVbRz3apyMiSlhff0M8lCmEujWph0zpeUdrVd5Gxb1ddSJWDmXGYTST6R7~Xq6Q~pppRr0QmuDfkP1jMt9l01mExPV-~1-abkYqt-aEMHrZ253ou6XBxUhz~7auHZ1JistTThBAqDs9lwak~SzjDbffSXQhSNBTzb1XthQTHq7WM6Mg2JavleuPCt~J7~uEbYSmw__'
          ],
          category: 'khalta special blue yogurt',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 6,
          title: 'Khalta amwaj chips with blue yogurt',
          isVisible: true,
          price: '15 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/6be6/9a80/d9ec9a8c620f18d137776b7f9584a030?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CDLa--3O9wUg7n9V7ckxtdTx2xfPXVKGNHIpLPPIo9neJ2VQ5ecA1A9kOyOeoQH2oPUDXlGoKSNxhNM49k7Zb6kOnAFYMHVT3mjMKM76E02B5dR75swOSYJoQMYYS1PLSWK3UHL9y4ovNK4IDK-3lHJt25vEgCgVvIryyTPG-W4RZswq7J72ZEKmioHNRMi2nrHF9nNWPJCIyhCYdWBPaVmbvSpbKtWQxKVQ0MQXe62bL2zI6vZucR7T0TWdN7S0JUBCLhHSuhxkd2jtlTvr3eVuiYdwh3XhpIyrEje8SPqvs9Qtgn5mNeOorU9ZTD0hk-LzpnllBCdXkeRn3TrRBg__'
          ],
          category: 'khalta special blue yogurt',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 7,
          title: 'Pink korean noodles',
          isVisible: true,
          price: '25 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/91c4/e1c1/9c172fb2e64fd6f33c0ba5f73962ad4f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fl6sWNS0v2QJfHW~MnPxU-NmcwxIFkJy7SN~xQ9N122r7YkWYbeNMlppWdExIl4ni31ISCc7MeJZWvUsDYAmzi~TBdikdRHm~q1hm9vV9G3pMmeFGtCXlWv-0xRbdY21~pV4DwAes65GNyen~ChvWVu-tccIFPfIJBLWxF0RjphQzlxON8kzXAaNP9Cj3l-8IXRO~wg1P5yiYeScbk9Z4CJfIlt7qA4iBByLl-iZxQZ-c-6eWzIUtgMbtpmajoHWiwjucwZbPd5K2yB19wTnc051ZK4sR7FVajEfSBmc9P5OPZSD0G1CzeEZ-KIc7T4wEvFRsfr9OWVxZUKBPRTLiw__',
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 8,
          title: 'Pink korean noodles small',
          isVisible: true,
          price: '25 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/c7ea/cad8/ab69ddd9b3b405723825959e6d56f533?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=abu2DIEyppNfC9Hioj6YVS3hdT285PsyG-dD-PP543xAWFWUiVIGhDEdvAfvo7ygqAxC9LgdXqE3-bMTibxDUnXZSqU5zAYFJDqMEgIDm-sFNR7c3ht9ci0I8x7KjLUDun8~Eqf6GKGw0y24872Apjib7uc2dri5X4Kj-~xGcGOuTFISG3aI7-Aqrsa7bantoRtLdJoCdOBzpkgpiV6DSK27ETUnuiqL8Wz4LmZiZamQmeCTxrwj~luz1qDQU7mxsBJ4aEiALrP4CwXdJO6mAl~4Zijnq0dORFnfI61hEO5YbF5BpDZOyRNPRLiLBrhfrQHpLpsDSpK241UpDpJWjw__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 9,
          title: 'Pink korean noodles with cheetos',
          isVisible: true,
          price: '30 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/671b/8c7a/c5c6641128a28c6d9cdb8ae4e1213032?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jwophNDkM0UFZnqQH6hqaLdnn8w~x8OsyJs3oA81qVzJGzHIRXKuGaz-7pVsmfwqKB9qfeoXKDiS1oLYEr4qPCa-7eUiCDZS8ZlObKBIPXCt3CWpbUL95-dJwNNK~vIvlMZAa2RA6mIaNBArMleiSn~gp7hZ71n68ccfwCTidLkVjyI7gQNjZgrNlwBmqZHp3eVGTwfIhtCprjdksTZ4-AcPhDQOnepvrJOEI0nhjvJjdfn-CJ21lgHzC9CSRgV8rheXEUeesHledL0PpC-Ax8RQaNcD2gEvI5X4vx5ClypNtdW1g-S~tPIUMS-xhEfCdSPnJKmzZIvie4MkkFq2Yg__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 10,
          title: 'Pink korean noodles with cheetos small size',
          isVisible: true,
          price: '20 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/671b/8c7a/c5c6641128a28c6d9cdb8ae4e1213032?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jwophNDkM0UFZnqQH6hqaLdnn8w~x8OsyJs3oA81qVzJGzHIRXKuGaz-7pVsmfwqKB9qfeoXKDiS1oLYEr4qPCa-7eUiCDZS8ZlObKBIPXCt3CWpbUL95-dJwNNK~vIvlMZAa2RA6mIaNBArMleiSn~gp7hZ71n68ccfwCTidLkVjyI7gQNjZgrNlwBmqZHp3eVGTwfIhtCprjdksTZ4-AcPhDQOnepvrJOEI0nhjvJjdfn-CJ21lgHzC9CSRgV8rheXEUeesHledL0PpC-Ax8RQaNcD2gEvI5X4vx5ClypNtdW1g-S~tPIUMS-xhEfCdSPnJKmzZIvie4MkkFq2Yg__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 11,
          title: 'Vegetables andomi',
          isVisible: true,
          price: '15 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/8794/20c8/bd3be8e9b218f55e0e6c7c06d3b6d79b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RjgPKDwFs~wxnC9o-MruGcjRyms2p7MN-NAJHa6tXIG20cNanB5Vsa8f7I5A6zybJJ6ENSkH1xPHybKlmSEJqaibO29qVTtOIk4MUWM43OYqdMBoFfgI0pPRqqR6Gt9IZ259sMWgs2yzM8InGNJpeAxDPWssecO26129XMtJkDbuqbttCpAj7fEiU1QNk0YPj4F0RjeixS9V6k3NAt0Z2t4Ru8S96wzvSfm-SSzOKok6O~IFeR8YMTnDuLfJQFnjwvO-EygDeTEVGpGCBeFgQA1VuKz-OV16M~hDlZhFObYoNrhNtrbbSFsh6R4XbJQ0sxKxibvcYv2IeM0oDkHRBg__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 12,
          title: 'Vegetables andomi small size',
          isVisible: true,
          price: '15 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/e483/01a7/4566e0c1c43075d9eb281fabdcf50061?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U8wf~WbwX2aPEMKc0pNDnpL1XEm~DY2zChmPL4GbVNPGPAJSXV2N2aS~fLK5nF0dydEaCFX7-o7QJFeJApkxdwdfdXnd-Rkiu~p3PqTrIA9DKiqIozRdc6IDTI3kt8QnsrgcvDAwibUNNHQdHGq6fFHahX4CvEKrqiiTfFtreJfyuA~wxyw-PiALOWkcVp1brrm9e7cEL7JjNAtkptE59ZSjwycfvD~gW9QzYypM7f4sAn3uecBdSD7qHLsEAeoNrM9GyrVrtuHiomoRKMH6FjSY44vwRPEDzKJivvveF211I0s9jfX1PONBxr43a5hlRUGssdSEC0quQKTcduW68A__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 13,
          title: 'Curry andomi',
          isVisible: true,
          price: '30 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/8a1f/9d2e/2af849eb074b25c8b82a1e115acc4921?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRr12EAGXjDh2f-FahhSkD5ZkVOqGdoA53JAWHOvVzrCcBNhLNa8l6~0mcSwEpB335qDQhYhXVYBkaFCEVDs2cGd8~xS3iA2rhNmR0WUSMLUGepvTOcacmGTh4lXKz7gJ1cjetOA~Lrpfk8iBz6rA638RefOAR49f2vnP6WFwBh8JuhRn2xNlIJd~Z8ThzaCqdJU24W62t7WsbM4UFcqIQnXHSnVLC1HUVsXmgZyiAEvK0TWIuyTt0yDeHBStJELCrHcJo1Kx~mjI5YZUY5Xph1halyL2Wdau-HmXE5A9Z~FBvFp5eFFmP1y1jiEUOVPrRMepUCnFynzUBYNRBNwOg__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 14,
          title: 'Curry andomi small size',
          isVisible: true,
          price: '23 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/8a1f/9d2e/2af849eb074b25c8b82a1e115acc4921?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRr12EAGXjDh2f-FahhSkD5ZkVOqGdoA53JAWHOvVzrCcBNhLNa8l6~0mcSwEpB335qDQhYhXVYBkaFCEVDs2cGd8~xS3iA2rhNmR0WUSMLUGepvTOcacmGTh4lXKz7gJ1cjetOA~Lrpfk8iBz6rA638RefOAR49f2vnP6WFwBh8JuhRn2xNlIJd~Z8ThzaCqdJU24W62t7WsbM4UFcqIQnXHSnVLC1HUVsXmgZyiAEvK0TWIuyTt0yDeHBStJELCrHcJo1Kx~mjI5YZUY5Xph1halyL2Wdau-HmXE5A9Z~FBvFp5eFFmP1y1jiEUOVPrRMepUCnFynzUBYNRBNwOg__'

          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 15,
          title: 'Black korean noodles',
          isVisible: true,
          price: '20 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/0525/1204/7a164a745fc8b6668bd59023f52c4c93?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YbpwBq0TlJZE22SqGOaRf4zr19LENVG91hnKsoo5hUkF3d7F9Ye0kLhTFHFQiwBxpW7Nc~3MYjZqCjXAhAm4G3a886HLqNlojACwcI65NXmhPimLLnyik61TcBrVv-dNOGaEPuasUhjxvWdN4WS5RZ9s160vwY6ElgslMn2I861EVka8B1odRX4GnmPiZcCG-S6c9qz4yHXOZXXbgKgpVX1-Zg6sORf2xV6jv0DRMcIxnCUxnY4l6OjWmh-lE4CSwiTJWDRRVdys2-csnZOwWglRelYMTkGzP77E6iumokL~gqUrXJNWOUIMQpZrGWtF107Nh4ttyU7c6cwrFmA2TQ__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 16,
          title: 'Yellow korean noodles',
          isVisible: true,
          price: '25 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/b1f6/55b9/b08e30869e80f2d0c53749c317410bc9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cz10KZE2Ui30e8kVxYk9vTmvqSxwpcd2vAO0dV80R~4AiEbY0ZNYoF6Q-PUzEz0R5Q5yrJR9A~~2BjDgwYB9Cd1uHb2RrwhAnUm2sadlTFVev5feESF3V3iz0Ll~Wht38XDOMiOkNxRjlvLHCQ9o~LzNLP~plHxgPcB~wTqU2V9sks9V5GD3scEWYxPwwNxgX5Dstmgy7lTPOa6Fpp3cqjfiOwup-k4sbBUSmm4A6ZLUcoa8JSxyly3Zc15yVWkEUnh5QfqRvREO-WVcquvKPpGQ9CHirWBQX0~XXmQqfMeaHYtMp5VrE1Jl3JsIyPpm5pSNqweiey-s46UZ28moXw__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 17,
          title: 'Fatta warqa anab',
          isVisible: true,
          price: '35 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/10bc/600e/92eecd11d9ce7e713d001cb80bdbf3b1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E98y9xyOmUelEtWbPOHK1RMnyBYiu2HX5ZFDx3tPOlOlpPQsKh3QX0I3p5hSJ5DPhAT6I2LI0RfrYdjaXvF~uB~pF~-3EyeZjsyBp4CUKCfXirwnGhbgNw80uNE9LNZNbTkpcm0hwP8XiRCS3ayuoTWmSuEg5~8u-JMKDcq9faZYReQZfDDRz0IbvzQXd5MElatmmEEs0UKt2-7b7HKEZlEHOXMZhesF8o-E5yCmQygSVmFYPrhbdz5xnS94Y1Z6EmccJyiZtSQ0GIhRCYUGw1U3gmSUHW8ScAeBOzfiKkDiwZpzavkKBh2l-bYxyAoMWjnN4qkkuPEkfbU3atK-ew__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 18,
          title: 'Sweet corn',
          isVisible: true,
          price: '35 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/05da/3977/bad9c74d3ddefc22b21856faec882b14?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p8NlAn0sdpufl8gCLzmK738IFATmStvPzuMyl3qkLlels87DJMHEhbyidl~l1S61eh8R~CJPqG89gIRC23qLZiDvSFMhC-~U~EitihWlUkg1P2muvGZHg1fG7Xh5WLFAcIOboKBmmriLf-Ac5q98hoyA-9N~c4rNHzpg9EXA28072cM3UGM4clbEAI5cNotd9FYIjtRT5KGhEDJsSOEjy-S-P-gx4fNUaRnf22cH18Irjf-oUdxbH~YwG1W0hxEQmuZJ0~2e2Zh18KfIaAHQrGuZOUbahvywit7Fj-FUj8KNHH4F7t21BpdXXjaYxsy~baWIKHiG2~1UZw0Vc30iLg__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 19,
          title: 'Sweet corn with cheetos',
          isVisible: true,
          price: '35 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/a7b6/bb48/433d1a2c8d3d9a7f6e7c569f9604ef18?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lmx5PAHPVrYlmvCBaAy5FCHfiazmb0j8OSgwX6ZsOmwPnuSYP59PARTVzsWNVu3eNaMvC1TrTZv1Uud1SQ~KrK-CLMT9FB~BqXnB~qfQCXBfb14ekAh-S6lZPX2EEFMzMhj149EbQOYSi5MqfN6U1lgSfd5q74D9LA40biwPX6tZRS3N1snapEQbTHUtIJeOMBNbFuOHaPyThHvvdR0s0p94bFjC68CO-WvkGao80fnVJOku4tTRZzpyWiI9DnIwDNp5-5yC2Ta2VxmKcQQtcreL3XC8l01SmIMBFzhQfGWVHoPCTYgY0eO6pLe~x7dS1oXTAltPJYj7J5ulqQZLkw__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 20,
          title: 'Sweet corn  with blue yogurt  and oman chips',
          isVisible: true,
          price: '35 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/04f6/04fb/a2e8eb77de960dee8e9ce508eb619d38?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibneG2aZa7ErF2Sxu-PVnyqMspNhxCJc3hmabyKGcwFU8jqiyzIhX8PblQBiXhMiszIpBSJLyvNo2t5HeA7cYv1B1ejI55dA6dX54vT0rt~R1jpaWO5Y5dbj~Kmj3UrBcYwWGNz8nVXLnnW~8U1L44Dz5VnKpI2B7FOyPaW65zSYD29~XBtETDFlTxGa1~aJro6r151~dnZ4AxdpDMIyUSnW8Zk~mtbMsVXZ1hQIj72fOwcnFQSK4kXiJWY5vQh7X7zef-JsGntNJDqpH-CADwtGEve9OSqUQci2q2tbCbABzW-7Y2UNugJk5EjK7yXTi1m2y4vmXUaFro~88DsKwA__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 21,
          title: 'Pink korean noodles with sausage',
          isVisible: true,
          price: '30 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/90de/7e63/cb5fe8bed26695f91e1465030ac6b18e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WJ0NM5~~zS7KcfA1XJjE2pQLEVCHzoHIIBIKnGD-~ba3UJ0Mc80PHXzLKh~f40OHc66bBHt4wPRzkSrt6IsewDt5~VQdZXzCF5OXxLuHQChjmKlszg9rWbqObLarX8Xk3LR5Li5Yb6vsbfp3sR92bisEYZlABVIi9gAI96CQXwVJZ7LtMM7xj~HsKh8YpItvO10nuJiqrIfvrOFxpECG1HUb-pazrmkrvl~~VTHi5meZoFYiJJDhtMd2oy-Aqw7thueKY6n13vGyoYVCIH8jy0Js87zgFxE0Vecaz1TzgKtC4sKCQ9dDxzW5-epiLtaB8rmna3RYlH79SdkTarrRHA__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 22,
          title: 'Trend Fatta waraq anab  with oman chips',
          isVisible: true,
          price: '35 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/3f4f/7da7/780806af59f9c5b539392e8b01e49ea0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XS5zhNIeHLAPH08rkgbC6g~eZqMknk-S6Bqp8NjUmVLPn0X6lY5ErdhocQowVzWtpYeQpVPpbrUBLXWFtCrBST7q9KGK7vFNMfzJhl5APvsY4y1Xr16mpsIzAofC0gQ9BpceDar0jGGDVOvb9FHBE0dAUyCZpGn-BAj1ecAejWahuIjqMfG9qZLp510UUenS5M1Ktm~N3EHKdOJEge48xXbCOGQJb1MlvV2hjLjqdrbg2LOBHz-TSC9Sa7Bx4~GAJy6eLSHA7gSWJukZTXeA85vW~fy05w8dV7i~HP67b-aMtuslrqi~Kxd5mg2AAWDfAFDFsYs9974boZB9Qfb0Xw__'
          ],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 23,
          title: 'Sweet corn  with blue yogurt  and oman chips',
          isVisible: true,
          price: '35 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/04f6/04fb/a2e8eb77de960dee8e9ce508eb619d38?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibneG2aZa7ErF2Sxu-PVnyqMspNhxCJc3hmabyKGcwFU8jqiyzIhX8PblQBiXhMiszIpBSJLyvNo2t5HeA7cYv1B1ejI55dA6dX54vT0rt~R1jpaWO5Y5dbj~Kmj3UrBcYwWGNz8nVXLnnW~8U1L44Dz5VnKpI2B7FOyPaW65zSYD29~XBtETDFlTxGa1~aJro6r151~dnZ4AxdpDMIyUSnW8Zk~mtbMsVXZ1hQIj72fOwcnFQSK4kXiJWY5vQh7X7zef-JsGntNJDqpH-CADwtGEve9OSqUQci2q2tbCbABzW-7Y2UNugJk5EjK7yXTi1m2y4vmXUaFro~88DsKwA__'],
          category: 'snacks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 24,
          title: 'Sweet corn  with blue yogurt  and oman chips',
          isVisible: true,
          price: '35 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/9ead/cb98/e02fd199d0411fc74ccfad566c666e14?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d38aV3fU6xZNHnZBf9tFVDxeHLabFPRPdLYzuG9FYdZb1j2mqtH50y21cR2tXBg3qdOM8KBOlOfh2svor3fvdBn60iLPT-EFt6XCo778eG7pr1C6Ynp0Es2bB5Bsy8ODyhpaGG6S0q214JaZjvLqWUDS4rdnPbBvfRuoeTX7ihyaZUPX9lqkqd666TB6f4R3h-7et3J9WM20XXyNYWK0TzwXKIdOBlaX0Pybdks3yc5SApDOiQnfb2RQJb3VwIiGP80FGEMCUz0D90l6moWRYD~uhRgDQ3aOIFHgg6IA4iJkLtAj8RC3FIsjnvNPoV6wKkRN-ajCB-cZ-7whLksUng__'
          ],
          category: 'ice cream and sweets',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 25,
          title: 'Cheesecake raspberry',
          price: '40 AED',
          isVisible: true,
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/f949/7c91/82bea5050b7bb9eb4875f39973ce486a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QcR3Qc9qpP4nrSe21pwWUR15W4TGyv1nf4GueKWWzreh7MZ55ANnWb1mellBt4J7dlYElgjTl~DVFhLsMDmOpnjE~Fs4kE3YRdFBbd7Rw~ojZQffTNND19dNXqHA46PYNmnlusE~mDYX58GQy9u4ZbzeNXDQvu9IOxt5wcRmxMBIFl9M5~UPwgj6LmNetvl2eVyb5ahHRDJ9wbqD-8Bi7SZN14iL8qMjg2pAyDvZvRvUQVbJStZK1NiohWZ8VQHSw2FubT5TEOBZ5~PReWruF7cJMYHt96-KRJUEUfsDGs75ZUkd89Uc0kHTANDELcMleVqAv2Xnn5Qr8sc4FU6NSw__'
          ],
          category: 'ice cream and sweets',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 26,
          title: 'Sweet corn  with blue yogurt  and oman chips',
          isVisible: true,
          price: '35 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/04f6/04fb/a2e8eb77de960dee8e9ce508eb619d38?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibneG2aZa7ErF2Sxu-PVnyqMspNhxCJc3hmabyKGcwFU8jqiyzIhX8PblQBiXhMiszIpBSJLyvNo2t5HeA7cYv1B1ejI55dA6dX54vT0rt~R1jpaWO5Y5dbj~Kmj3UrBcYwWGNz8nVXLnnW~8U1L44Dz5VnKpI2B7FOyPaW65zSYD29~XBtETDFlTxGa1~aJro6r151~dnZ4AxdpDMIyUSnW8Zk~mtbMsVXZ1hQIj72fOwcnFQSK4kXiJWY5vQh7X7zef-JsGntNJDqpH-CADwtGEve9OSqUQci2q2tbCbABzW-7Y2UNugJk5EjK7yXTi1m2y4vmXUaFro~88DsKwA__'
          ],
          category: 'drinks',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 27,
          title: 'mango sour',
          isVisible: true,
          price: '10 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/e25c/7b02/9cdb20963261e68b180133d3e80d6387?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AE9keZ5qO0BP1chVSF-OhW9SPg5HIO4Mc91VuOIRIvoG2Lap7vPo3DPGWb2szD94NF642hZZFy2p19guTEC33MJN4AJ-olChcNZjcKdDqZktR8CpOhmtOdgTPJxsrXTB9O3uwPBVX5veT-4XnqY1ahy7QYwuf~STmb0yOgiQJB~7-FWJorIGy5sQB-q~SsNVSpQUf0g5DXASgPfy-MaXT-~V8pV7vg-ndahixJNbbLCwtbzXElo5gJWOSaas2IIUJXjjD3qnDEthTI6zEJccvp~nFHt4yWjHiVmUTztrBH4oHXzt78r1Urw9I-63At5PdHrfKUJx06sgj78SVZ~zVQ__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 28,
          title: 'Spicy mango sour',
          isVisible: true,
          price: '10 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/7143/f02e/1eb532662be6f1a91e13581236e821be?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fb7LUThMRZo0kWk7KuE4sECb8T30wfybaWBUkeqcnyndNnZ4bzakxQamXIB4JtfO4rf~i5XH-cvfPG5tYNIlfWEUHbupDqEpG5l104~5dHsKdEZAsTyXETjL~Ug9l7a498NpNY7lE01SO39FZ5LgV~dbj262l-Xdgj009TqKYET8AXIbhqEgYS6wllckd3wjldms2hMYLaVSyZqmdaCE-MIyBt~DMH4S6-zPNW5ggZ~Pzusq2lTdEDVg8vnIC7M9SciaP1MGTXXa5ZQTiUpdBHj8tfERarnZyiLy~Gez-mOHqQ3HT9-6w7cIWfqtoLXdf~d0xEqelDToZmLlCBbkZw__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 29,
          title: 'Sour pomegranate',
          isVisible: true,
          price: '10 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/b066/773f/b176dbd764ac3fbd527411d5d9c983ca?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8MufIXgrQO1~ggD5uXBdUKpGIXnMPq4vB4WkF8QGK1aOP~DGgjbN9JoPgoTuIlg7laqYLdRkfdkhg7kjHZEoilHP-romg1CN4FMbQgur4LML624oiYG7N191NTzbpYRN1SIF1lzI~e6Z1INg-XKhDwUaRC5kmzEatcDqU5yzb7dVEreSiHhatlcsjw53GIj3ku3xVLplwuEw9NSstqkCFgSwnS7iMrPCXpVe6fF2CC4EATP7Ur5mtyPlw8suHSK-fBgh3UWtLpe1ZXk7WS4UyTS7JPuzHSUSWE-53E7b9z49-XpXNnwcU1ULSqDfoua0zgX8VxrsUFWGKGL3Oyuvg__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 30,
          title: 'Khalta trend lavashak sour',
          isVisible: true,
          price: '25 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/c71e/311b/17157657421d49aa5b6c14be9be76185?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRj0ka4TTukBorX1l7nrK8epJdOSovpbkZie9NFiOdeCJfC992ZNjWzs2h-YODBiG2un2Y~9qKBQNj~q5ZarsCqneC6fPLqQohYTGkL~ZD2TvpUr2nXrJTy~SZOHgv0epv6CMhTJN8bGd-7DLGf8rpn90jFdSLVMpT-0xISMcquErh-66~LgNyy1GemhQlS8xlnaVz8sCkYBnSLt5FvYz3T2GzDKlmRSWx~p~WFslJNeeB0CmHMbp1MMNZRDYh-C1h6mE138ZqXqXuN2k6ybzl6EmxtIWKV1Mu-3kUXmjeRvm9BzRaBgfc~4fRfpitNf8lAkbk5V5QFV4kfajcZSXw__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 31,
          title: 'Dried sour cherries',
          isVisible: true,
          price: '15 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/90bb/2482/684f786d4475951096ef746aac5c3699?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lv59uZQ1~aJDDg6qnFHga5JTnncWpprGndY3fOE240yGbVl0OVtZ7-84DPQweUOqRy~ZxkVTMNcHOc2ETk6Cp6nFbET0fiFfWRZJGEZznSHnmtx3qm5MT6uY8IPiNiEFMkSunOX1ndFPeH~S0cgHSFWlaCFG6Fu-aNFsXQbrtzDkj0PgIFDdsrK2M334F0UW1cLLfnSi7n0hFE3nNc7CBjUPbE~cequN3Babf2NdyeDasrinspNi9mMYOPMgJ7gquFdz2rQ5mR~x63j6axT2n8-pBrfFAMtdTNLiJIhWVdNKDlQQ-9NKB0Ys2f2hDVmlsgPvF~dsYxy8w20CPyi1xQ__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 32,
          title: 'Sunflower seed special iran',
          isVisible: true,
          price: '15 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/dc5e/ec2b/bef618fe9584069a1dd8b9ed03729bf8?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=byFmI7YW6OiRCZKJ5cwBnE0sbT464fge3QQZVJBOfn5SsoXD1SE2DP0Lk9JGWexGTKpoJ95cvuLp19WVoPlqZb8CQ-uUgOsZVOQtmpmMak3SNnJmHsGmc0UyVrzpsRlQvPsLAyGdtN1BP-MSoCx1qDdUUwX0gjAMy2QIQNXSXXcXLxC9zOKuDFm0CMMReVZ9J1oztx~jtbW9YiKRNhke9HnSgOGekHtrbTFyAF0u-yP36ZxaTUUtDENRnKmq5rY2SZJECuctAZQo53lzFPXOdao3Ga6-b~R6qk255NAGhWjNl1l8O9oIlTJ2ca45C3SNl6TBnFZUOd2irVAk9wzZww__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 33,
          title: 'Sour skittles amriki have salt',
          isVisible: true,
          price: '12 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/3904/e4ee/2cc36966d2b6ae7db56257b8b04f88f2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddVeOBfO-uO2g9jdUQLNIdsOORex23C9lY-QTQkZzh-MaE1pFLyfeBuNS2O9NSarxbQ5jdEGdcNs7WO4C62f-ivEPgMsruJUDtuZkxkh8zKDWcZb3OJehwmQfpKnBfiVZfE1vhnrvSLUCLw8ktMEqfH4D6yvJ8JC3~0qHwBbMgpSrFXN7nLEQg7xn4xqcTX49SU~B33DpJdSV~HL4MWpMn4uAwg2URTwN8wYrh4AsKW1pVWKH9PljssL-sXW~sqVpbeX0lGdsSQQK4xFPtCzeJ0Q4BJ6FypRl7bqYZY9qfgTnoHKJIwyHv-PCvCpgn0ayzmaizIGYo9OydS4-9-Jww__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 34,
          title: 'Canles cherry sours trend lane',
          isVisible: true,
          price: '10 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/156a/b8c5/d31ce07a056c6b3b910be24374718ea5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euFho1kaGlBSRQjpvkk4tje1qXNMwPG1~Ww1rPqgazEVuDOlxm2gFQ1~B5ykjegT5sWZMTms9UhYPE7nrYqL~u0uzfq83hjRWflk0qE2v4W8fEHRU4GECsPTFS18LprvpGdsliDNDCThRfUg-SUBsgU80P~oMh5tlkNq2y9m6sjgw~KxKWr7c4A2Ro0NXMD4YiUH9aPAGIpPOpXID-MBuyvjfAxGj-OlW9BSv5uRFz-9Iv-ZscDxYdj6rJNCp2sZ-OCJFhiVFpKCKhMl7QhnAwwk5DNNSYHkkSCgDBPzY9m44LX95IAoUgXGrQ0f7MyrkehpR3ZzsqpoXTK5nPxp9A__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 35,
          title: 'Mixture of sour fruits and sauce',
          isVisible: true,
          price: '15 AED',
          isSuggested: false,
          imagesUrl: [
            'https://s3-alpha-sig.figma.com/img/3826/7778/5f2b3b5de8f1d283a9039dc7239d8ff9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYKe1I7fGXxTl-nN84189fHBWjKBw2XJj8r1X2pJog9CzKiTYDGOOek5OD2WrD8mhwBcs~i2qiZ5TdRvTHyneCJpqAUvSDvPIghO9M7MmiU6Y~6KuRKX9cdKkVr-OE9poE79cWRJGfx6fkATrSPomPq2bPJH6oUCHrmqQaiwCz-U5c7S4b9Z1Zk-9u9lER4E1RiZZKDy0P7eSWU4iSJtxCJq573IswXIINTCCf1MxeWFLSItLBu4Hc8yJKoIF3CLohn6Biy8~z4E0qp08LvqoOLXtecoL-PfHKDZQ1756acVe-mmoAULbQzFTtA1O2dqwlwjfvD-jjEnIpdkrnsQNA__'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
        {
          id: 36,
          title: 'Skittles sours balls',
          isVisible: true,
          price: '12 AED',
          isSuggested: false,
          imagesUrl: [
            'https://www.figma.com/file/ButokGbcqH9FL1UXz66Txr/image/863e36d6fd0af6b1eef4c372f6f7e6384ad2eeaf'
          ],
          category: 'fruit and candy',
          description: 'Khalta cheetos  with special blue yogurt with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt  with special blue yogurt',
        },
      ],
      chosenIdForImage:-1,
      itemSeperated:[],
    }
  },
  mounted(){
      this.seperateArrays();
  },

  methods: {
    seperateArrays(){
      let newArray = [];
      for(let a =0; a<this.categories.length;a++){
        newArray = [];
        for(let i=0; i<this.items.length;i++){
           if(this.items[i].category === this.categories[a]){
               newArray.push(this.items[i])
           }
          if(i=== this.items.length-1){
            this.itemSeperated.push(newArray);
          }
        }
      }
    },
    reOrganizeArrays(){
      let oldArray = this.itemSeperated;
      let newArray = [];
       for(let a=0;a<this.categories.length;a++){
          for(let i=0;i<oldArray.length;i++){
              if(oldArray[i][0].category === this.categories[a]){
                newArray.push(oldArray[i])
              }
          }
       }
       this.itemSeperated = newArray;
    },
    indexOfFocusedItem(id) {
      let index = 0;
      for (let a = 0; a < this.items.length; a++) {
        if (id === this.items[a].id) {
          index = a;
        }
      }
      return index;
    },
    selectImage(id) {
      this.$refs.imagePicker.click();

      for (let a = 0; a < this.items.length; a++) {
        if (id == this.items[a].id) {
          this.chosenIdForImage = id;
        }
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Create a URL for the selected image
        this.items[this.chosenIdForImage].imagesUrl.push(URL.createObjectURL(file))
        event.target.value = null;
      }
    },
    addNewItem() {
      let blankItem = {

        id: this.items[this.items.length - 1].id + 1,
        title: '',
        isVisible: true,
        price: '',
        isSuggested: false,
        imagesUrl: [
        ],
        category: this.categories[this.focusedCategory],
        description: '',
      }
      this.items.push(blankItem);
    },
    removeImage(id,index){
      for (let a = 0; a < this.items.length; a++) {
        if (id == this.items[a].id) {
          this.items[a].imagesUrl.splice(index,1);
        }
      }
    },
    addNewCategory() {
      if (this.newEnteredCategory.length > 0) {
        this.categories.push(this.newEnteredCategory);
        this.newEnteredCategory = '';
      }
    },
    deleteCategory(index) {
      for(let a =0; a<this.items.length;a++){
        if(this.items[a].category === this.categories[index]){
               this.categories.splice(a,1);
        }
      }
      this.categories.splice(index, 1);
    },
    closeSocialsTab() {
      this.isSocialsExpanded = false;
      setTimeout(() => {
        this.showSocialsTab = false;
      }, this.closeExpansionTabTime);
    },
    openCategoriesTab() {
      this.isSocialsExpanded = true;
      this.showSocialsTab = true;
    },
    focusCategory(index) {
      this.isSwitchingCategory = true;
      this.focusedItem = -1;
      setTimeout(() => {
        this.isSwitchingCategory = false;
        this.focusedCategory = index;
      }, this.categorySwitchTime);
     
    },
    focusItem(index) {
      if(index === this.focusedItem){
        this.focusedItem = -1;
      }else{
      this.focusedItem = index;
    }
  },
    toggleItemVisibility(index) {
      for (let a = 0; a < this.items.length; a++) {
        if (a == index) {
          this.items[a].isVisible = !this.items[a].isVisible;
        }
      }
    },
    toggleItemSuggestion(index){
      for (let a = 0; a < this.items.length; a++) {
        if (a == index) {
          this.items[a].isSuggested = !this.items[a].isSuggested;
        }
      }
    }
  },
  computed: {
    filteredItem() {
      if (this.categories[this.focusedCategory]) {
        return this.items.filter(item => item.category === this.categories[this.focusedCategory]);
      }
      return this.items;
    },

  },
  components: {
    Draggable, ExpansionTab, ColorInput
  },
}
</script>
<style scoped>
.item {
  padding: 1px;
  border: 1px solid #dddddd00;
  margin-bottom: 4px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}
.item-enter-active, .item-leave-active {
  transition: opacity 0.5s;
}
.item-enter, .item-leave-to {
  opacity: 0;
}
</style>
