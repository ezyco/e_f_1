<template>
  <div class="pb-[3vw] pt-[3vw] saira text-[4vw] px-[6vw]">
    <div class="saira font-normal">Title*</div>
    <input
      type="text" v-model="title"
      placeholder="Enter the desired menu title"
      class="w-full text-[4vw] p-[4vw] drop-shadow-md focus:outline-none focus:border-2 border-0 rounded-[1.5vw] border-[#12D18E]"
    />
    <div @click="clearTitle" class="translate-y-[-9vw]  translate-x-[80vw]">
      <svg 
        width="4.7vw"
        height="4.7vw"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3953 7.59424L7.60327 12.3862"
          stroke="#57EC9A"
          stroke-width="1.32224"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.3968 12.3893L7.60083 7.59229"
          stroke="#57EC9A"
          stroke-width="1.32224"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.3345 0.749512H5.66549C2.64449 0.749512 0.750488 2.88851 0.750488 5.91551V14.0835C0.750488 17.1105 2.63549 19.2495 5.66549 19.2495H14.3335C17.3645 19.2495 19.2505 17.1105 19.2505 14.0835V5.91551C19.2505 2.88851 17.3645 0.749512 14.3345 0.749512Z"
          stroke="#9F9F9F"
          stroke-width="1.32224"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <div class="py-[3vw] saira text-[4vw] px-[6vw]">
    <div class="saira font-normal">Sub-headings*</div>
    <input
      type="text" v-model="subHeading"
      placeholder="Enter the desired sub-heading"
      class="w-full text-[4vw] p-[4vw] drop-shadow-md focus:outline-none focus:border-2 border-0 rounded-[1.5vw] border-[#12D18E]"
    />
    <div class="translate-y-[-9vw] translate-x-[80vw]">
      <svg @click="clearSubHeading" 
        width="4.7vw"
        height="4.7vw"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3953 7.59424L7.60327 12.3862"
          stroke="#57EC9A"
          stroke-width="1.32224"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.3968 12.3893L7.60083 7.59229"
          stroke="#57EC9A"
          stroke-width="1.32224"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.3345 0.749512H5.66549C2.64449 0.749512 0.750488 2.88851 0.750488 5.91551V14.0835C0.750488 17.1105 2.63549 19.2495 5.66549 19.2495H14.3335C17.3645 19.2495 19.2505 17.1105 19.2505 14.0835V5.91551C19.2505 2.88851 17.3645 0.749512 14.3345 0.749512Z"
          stroke="#9F9F9F"
          stroke-width="1.32224"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <div class="py-[3vw] text-[4vw] px-[6vw]">
    <div
      class="py-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Title Color</div>
      <div class="flex items-center space-x-2">
        <div class="saira">{{ upperCaseTitleColor }}</div>
        <!-- <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="chosenTitleColor"
        /> -->
        <div class="w-[6.3vw] flex justify-center items-center h-[6.3vw] border-[2px] rounded-[20%] border-[#212121]">
          <ColorInput  disable-text-inputs disable-alpha  position="left top" v-model="chosenTitleColor" />
        </div>

      </div>
    </div>
  </div>
  <div class="py-[3vw] saira text-[4vw] px-[6vw]">
    <div class="saira font-normal">Upload image</div>
    <div
      :style="logoImagePickerUrl"
      class="border-[0.7vw] border-[#12D18E] border-dotted w-full h-[23vw] rounded-[4.1vw] mt-1"
      @click="triggerLogoFileInput"
    >
      <input
        type="file"
        ref="logoInput"
        @change="handleLogoFileChange"
        accept="image/*"
        style="display: none"
      />
    </div>
    <div>{{ logoError }}</div>
  </div>
  <div class="py-[3vw] saira text-[4vw] px-[6vw]">
    <div class="saira font-normal">Upload cover image</div>
    <div
      :style="coverImagePickerUrl"
      class="border-[0.7vw] border-[#12D18E] border-dotted w-full h-[23vw] rounded-[4.1vw] mt-1"
      @click="triggerCoverFileInput"
    >
      <input
        type="file"
        ref="coverInput"
        @change="handleCoverFileChange"
        accept="image/*"
        style="display: none"
      />
    </div>
    <div>{{ coverError }}</div>
  </div>
  <div class="py-[3vw] saira text-[4vw] px-[6vw]">
    <div class="saira font-normal">Choose a cover design</div>
    <div
      class="mt-[1vw] flex justify-between items-center p-[4vw] w-full rounded-[4.1vw] bg-white drop-shadow-lg"
    >
      <div class="basis-1/3 flex flex-col items-center" @click="chooseCover(0)">
        <svg
          width="24.6vw"
          height="12.8vw"
          viewBox="0 0 96 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_536_865" fill="white">
            <path
              d="M96 0C96 12.7304 90.9429 24.9394 81.9411 33.9411C72.9394 42.9429 60.7304 48 48 48C35.2696 48 23.0606 42.9429 14.0589 33.9411C5.05713 24.9394 1.92224e-06 12.7304 0 7.62939e-06L48 0H96Z"
            />
          </mask>
          <path
            d="M96 0C96 12.7304 90.9429 24.9394 81.9411 33.9411C72.9394 42.9429 60.7304 48 48 48C35.2696 48 23.0606 42.9429 14.0589 33.9411C5.05713 24.9394 1.92224e-06 12.7304 0 7.62939e-06L48 0H96Z"
            stroke="#747474"
            stroke-width="1.86408"
            mask="url(#path-1-inside-1_536_865)"
          />
        </svg>
        <div
          class="w-[3.5vw] h-[3.5vw] border-[1px] border-[#747474] mt-[3vw] rounded-full bg-white flex justify-center items-center p-[0.4vw]"
        >
          <div
            class="h-full w-full bg-[#47C183] rounded-full"
            v-if="chosenCoverDesign === 0"
          ></div>
        </div>
      </div>
      <div class="basis-1/3 flex flex-col items-center" @click="chooseCover(1)">
        <svg
          width="24.6vw"
          height="12.8vw"
          viewBox="0 0 94 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.32"
            y="1.03973"
            width="92.8"
            height="48.64"
            stroke="#747474"
            stroke-width="0.640001"
          />
        </svg>
        <div
          class="w-[3.5vw] h-[3.5vw] border-[1px] border-[#747474] mt-[3vw] rounded-full bg-white flex justify-center items-center p-[0.4vw]"
        >
          <div
            class="h-full w-full bg-[#47C183] rounded-full"
            v-if="chosenCoverDesign === 1"
          ></div>
        </div>
      </div>
      <div class="basis-1/3 flex flex-col items-center" @click="chooseCover(2)">
        <svg
          width="24.6vw"
          height="9.4vw"
          viewBox="0 0 97 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M95.6801 0.46602C95.5583 12.9044 90.5645 24.8071 81.76 33.6116C80.6895 34.6822 79.592 35.2737 78.4712 35.5139C77.3468 35.7548 76.1639 35.6497 74.9141 35.2707C72.3946 34.5067 69.6878 32.6586 66.7982 30.4745C66.1116 29.9555 65.4153 29.4179 64.7106 28.874C62.4766 27.1496 60.159 25.3606 57.803 23.8924C54.7012 21.9595 51.461 20.534 48.1484 20.534C44.8359 20.534 41.5957 21.9595 38.4939 23.8924C36.1379 25.3606 33.8203 27.1496 31.5863 28.8739C30.8816 29.4179 30.1852 29.9555 29.4986 30.4745C26.6091 32.6586 23.9023 34.5067 21.3828 35.2707C20.133 35.6497 18.95 35.7548 17.8257 35.5139C16.7048 35.2737 15.6074 34.6822 14.5368 33.6116C5.73239 24.8072 0.738534 12.9044 0.616739 0.466028L48.1484 0.46602H95.6801Z"
            stroke="#747474"
            stroke-width="0.93204"
          />
        </svg>
        <div
          class="w-[3.5vw] h-[3.5vw] border-[1px] border-[#747474] mt-[3vw] rounded-full bg-white flex justify-center items-center p-[0.4vw]"
        >
          <div
            class="h-full w-full bg-[#47C183] rounded-full"
            v-if="chosenCoverDesign === 2"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-[3vw] saira text-[4vw] px-[6vw]">
    <div class="saira font-normal">Choosing a logo design</div>
    <div
      class="mt-[1vw] flex justify-between items-center p-[4vw] w-full rounded-[4.1vw] bg-white drop-shadow-lg"
    >
      <div
        class="basis-1/3 flex flex-col items-center"
        @click="chooseLogoDesign(0)"
      >
        <svg
          width="24.6vw"
          height="12.8vw"
          viewBox="0 0 96 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_536_865" fill="white">
            <path
              d="M96 0C96 12.7304 90.9429 24.9394 81.9411 33.9411C72.9394 42.9429 60.7304 48 48 48C35.2696 48 23.0606 42.9429 14.0589 33.9411C5.05713 24.9394 1.92224e-06 12.7304 0 7.62939e-06L48 0H96Z"
            />
          </mask>
          <path
            d="M96 0C96 12.7304 90.9429 24.9394 81.9411 33.9411C72.9394 42.9429 60.7304 48 48 48C35.2696 48 23.0606 42.9429 14.0589 33.9411C5.05713 24.9394 1.92224e-06 12.7304 0 7.62939e-06L48 0H96Z"
            stroke="#747474"
            stroke-width="1.86408"
            mask="url(#path-1-inside-1_536_865)"
          />
        </svg>
        <div
          class="w-[3.5vw] h-[3.5vw] border-[1px] border-[#747474] mt-[3vw] rounded-full bg-white flex justify-center items-center p-[0.4vw]"
        >
          <div
            class="h-full w-full bg-[#47C183] rounded-full"
            v-if="chosenLogoDesign === 0"
          ></div>
        </div>
      </div>
      <div
        class="basis-1/3 flex flex-col items-center"
        @click="chooseLogoDesign(1)"
      >
        <svg
          width="24.6vw"
          height="12.8vw"
          viewBox="0 0 94 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.32"
            y="1.03973"
            width="92.8"
            height="48.64"
            stroke="#747474"
            stroke-width="0.640001"
          />
        </svg>
        <div
          class="w-[3.5vw] h-[3.5vw] border-[1px] border-[#747474] mt-[3vw] rounded-full bg-white flex justify-center items-center p-[0.4vw]"
        >
          <div
            class="h-full w-full bg-[#47C183] rounded-full"
            v-if="chosenLogoDesign === 1"
          ></div>
        </div>
      </div>
      <div
        class="basis-1/3 flex flex-col items-center"
        @click="chooseLogoDesign(2)"
      >
        <svg
          width="24.6vw"
          height="9.4vw"
          viewBox="0 0 97 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M95.6801 0.46602C95.5583 12.9044 90.5645 24.8071 81.76 33.6116C80.6895 34.6822 79.592 35.2737 78.4712 35.5139C77.3468 35.7548 76.1639 35.6497 74.9141 35.2707C72.3946 34.5067 69.6878 32.6586 66.7982 30.4745C66.1116 29.9555 65.4153 29.4179 64.7106 28.874C62.4766 27.1496 60.159 25.3606 57.803 23.8924C54.7012 21.9595 51.461 20.534 48.1484 20.534C44.8359 20.534 41.5957 21.9595 38.4939 23.8924C36.1379 25.3606 33.8203 27.1496 31.5863 28.8739C30.8816 29.4179 30.1852 29.9555 29.4986 30.4745C26.6091 32.6586 23.9023 34.5067 21.3828 35.2707C20.133 35.6497 18.95 35.7548 17.8257 35.5139C16.7048 35.2737 15.6074 34.6822 14.5368 33.6116C5.73239 24.8072 0.738534 12.9044 0.616739 0.466028L48.1484 0.46602H95.6801Z"
            stroke="#747474"
            stroke-width="0.93204"
          />
        </svg>
        <div
          class="w-[3.5vw] h-[3.5vw] border-[1px] border-[#747474] mt-[3vw] rounded-full bg-white flex justify-center items-center p-[0.4vw]"
        >
          <div
            class="h-full w-full bg-[#47C183] rounded-full"
            v-if="chosenLogoDesign === 2"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-[3vw] text-[4vw] px-[6vw]">
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Background Color</div>
      <div class="flex items-center space-x-2">
        <div class="saira">{{ upperCaseBackgroundColor }}</div>
        <!-- <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="chosenBackgroundColor"
        /> -->
        <div class="w-[6.3vw] flex justify-center items-center h-[6.3vw] border-[2px] rounded-[20%] border-[#212121]">
          <ColorInput  disable-text-inputs disable-alpha  position="left top" v-model="chosenBackgroundColor" />        
        </div>

      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Tan Bar</div>
      <div class="flex items-center space-x-2">
        <div class="saira">{{ upperCaseTanBarColor }}</div>
        <!-- <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="tanBarColor"
        /> -->
        <div class="w-[6.3vw] flex justify-center items-center h-[6.3vw] border-[2px] rounded-[20%] border-[#212121]">
          <ColorInput  disable-text-inputs disable-alpha  position="left top" v-model="tanBarColor" />
        </div>

      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Item Background</div>
      <div class="flex items-center space-x-2">
        <div class="saira">{{ upperCaseItemBackgroundColor }}</div>
        <!-- <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="itemBackgroundColor"
        /> -->
        <div class="w-[6.3vw] flex justify-center items-center h-[6.3vw] border-[2px] rounded-[20%] border-[#212121]">

        <ColorInput  disable-text-inputs disable-alpha  position="left top" v-model="itemBackgroundColor" />
      </div>
      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Item Text</div>
      <div class="flex items-center space-x-2">
        <div class="saira">{{ upperCaseItemTextColor }}</div>
        <!-- <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="itemTextColor"
        /> -->
        <div class="w-[6.3vw] flex justify-center items-center h-[6.3vw] border-[2px] rounded-[20%] border-[#212121]">
          <ColorInput disable-text-inputs disable-alpha position="left top" v-model="itemTextColor" />
      </div>

      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
      @click="chooseItem('currency')"
    >
      <div class="text-[#3A3A3A] saira">Currency</div>
      <div class="saira">
        {{ currencies[chosenCurrency] }}
      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
      @click="chooseItem('font')"
    >
      <div class="text-[#3A3A3A] saira">Font</div>
      <div class="saira">
        {{ fonts[chosenFont] }}

      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-start items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
      @click="chooseItem('lang')"
    >
      <div class="text-[#3A3A3A] saira">{{ languages[chosenLanguage] }}</div>
   
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-start items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
      @click="chooseItem('socials')"
    >
      <div class="text-[#3A3A3A] saira">Socials</div>
   
    </div>
  </div>
  <SelectCurrencyExpansionTab
    @close-tab="closeItem"
    @change-currency="chooseCurrency"
    :isOpen="isCurrencyExpanded"
    v-if="showExpansionTab"
  />
  <FontSelectionTab
    @close-font-select-tab="closeFontTab"
    :isOpen="isFontSelectionExpanded"
    @change-font="chooseFont"
    v-if="showFontExpansionTab" :fonts="fonts"
  />
  <LanguageExpansionTab
    @close-language-select-tab="closeLanguageTab"
    :isOpen="isLanguageSelectionExpanded"
    @change-lang="chooseLanguage"
    :chosenOpt ="chosenLanguage"
    v-if="showLanguuageExpansionTab" :languages="languages"
  />
  <SocialsTab
  :title="'Socials'"
    @close-language-select-tab="closeLanguageTab"
    :isOpen="isSocialsExpanded"
    @change-lang="chooseLanguage"
    :chosenOpt ="chosenLanguage"
    v-if="showSocialsTab" 
  >
  <div class="w-full pl-[8.3vw] pt-[8.3vw]">
    <div class="w-full flex items-center">
    <div>
      <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4167 29.1771C13.7417 29.7863 14.0671 30.3352 14.3782 30.8216C11.073 30.0783 8.20489 28.1798 6.22027 25.5723C7.53009 24.8347 9.20768 24.0701 11.2245 23.5106C11.7977 25.7588 12.6063 27.6577 13.4167 29.1771ZM15.9167 27.8437C15.2127 26.524 14.5072 24.8757 13.9989 22.9228C15.0932 22.7604 16.2613 22.6667 17.5002 22.6667C18.7389 22.6667 19.907 22.7604 21.0011 22.9226C20.4928 24.8757 19.7873 26.524 19.0833 27.8437C18.5189 28.9021 17.9565 29.747 17.5 30.3652C17.0435 29.747 16.4811 28.9021 15.9167 27.8437ZM13.25 17C13.25 18.1033 13.3242 19.1505 13.4551 20.1391C14.7175 19.9455 16.0671 19.8333 17.5002 19.8333C18.9331 19.8333 20.2827 19.9453 21.5449 20.1391C21.6758 19.1503 21.75 18.1033 21.75 17C21.75 15.8967 21.6758 14.8497 21.5449 13.8609C20.2827 14.0545 18.9331 14.1667 17.5002 14.1667C16.0671 14.1667 14.7175 14.0545 13.4551 13.8609C13.3242 14.8495 13.25 15.8967 13.25 17ZM10.6752 13.2766C10.5107 14.4458 10.4167 15.688 10.4167 17C10.4167 18.312 10.5107 19.5542 10.6752 20.7234C8.26972 21.3692 6.27777 22.2798 4.73723 23.1561C3.83763 21.2946 3.33333 19.2062 3.33333 17C3.33333 14.7938 3.83763 12.7055 4.73721 10.8439C6.27758 11.72 8.26957 12.6307 10.6752 13.2766ZM13.9989 11.0773C15.0932 11.2397 16.2613 11.3333 17.5002 11.3333C18.7389 11.3333 19.907 11.2397 21.0011 11.0773C20.4928 9.12437 19.7873 7.47609 19.0833 6.15627C18.5189 5.098 17.9565 4.25295 17.5 3.63483C17.0435 4.25295 16.4811 5.098 15.9167 6.15623C15.2127 7.47605 14.5072 9.12434 13.9989 11.0773ZM24.3247 13.2768C24.4893 14.446 24.5833 15.6882 24.5833 17C24.5833 18.312 24.4893 19.554 24.3247 20.7232C26.7302 21.3692 28.7223 22.2798 30.2628 23.1561C31.1623 21.2944 31.6667 19.206 31.6667 17C31.6667 14.794 31.1623 12.7056 30.2628 10.844C28.7225 11.7201 26.7304 12.6308 24.3247 13.2768ZM28.7797 8.42781C27.4697 9.16547 25.7922 9.92998 23.7756 10.4895C23.2024 8.2413 22.3937 6.3423 21.5834 4.82294C21.2583 4.21368 20.9329 3.66492 20.6218 3.17843C23.9271 3.92177 26.7952 5.82035 28.7797 8.42781ZM11.2245 10.4895C9.2078 9.92991 7.53026 9.1654 6.22029 8.42771C8.20489 5.82031 11.073 3.92177 14.378 3.17843C14.0671 3.66492 13.7417 4.21366 13.4167 4.8229C12.6063 6.34227 11.7977 8.24124 11.2245 10.4895ZM23.7756 23.5104C23.2024 25.7588 22.3937 27.6577 21.5834 29.1771C21.2583 29.7863 20.9329 30.3352 20.6218 30.8216C23.9271 30.0783 26.7952 28.1796 28.7799 25.5722C27.4699 24.8345 25.7924 24.0701 23.7756 23.5104ZM17.5 34C26.8889 34 34.5 26.3889 34.5 17C34.5 7.61116 26.8889 0 17.5 0C8.11116 0 0.5 7.61116 0.5 17C0.5 26.3889 8.11116 34 17.5 34Z" fill="#333333"/>
</svg>

    </div>
    <input type="text" class="w-[65vw] p-[4vw] ml-[5.3vw] h-[13vw] drop-shadow-lg focus:border-2 border-0 border-[#1B7B4A] bg-white rounded-[2vw] outline-none">
    <div class="ml-[2vw]">
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5028 23C8.42783 23 5.53503 21.7931 3.37113 19.6297C1.20723 17.4663 0 14.5743 0 11.5C0 8.42574 1.20723 5.53366 3.37113 3.3703C5.53503 1.20693 8.42783 0 11.5028 0C14.5779 0 17.4707 1.20693 19.6346 3.3703C24.1218 7.85644 24.1218 15.1436 19.6346 19.6297C17.4707 21.7931 14.5779 23 11.5028 23ZM11.5028 1.36634C8.79228 1.36634 6.24115 2.41386 4.3278 4.32673C2.41446 6.2396 1.36667 8.7901 1.36667 11.5C1.36667 14.2099 2.41446 16.7604 4.3278 18.6733C6.24115 20.5861 8.79228 21.6337 11.5028 21.6337C14.2134 21.6337 16.7645 20.5861 18.6779 18.6733C22.6412 14.7109 22.6412 8.28911 18.6779 4.32673C16.7645 2.41386 14.2134 1.36634 11.5028 1.36634Z" fill="#D10000"/>
<path d="M16.9991 7.36893L6.898 16.5548L6.00854 15.7459L16.1097 6.56006L16.9991 7.36893Z" fill="#D10000"/>
<path d="M6.33374 7.66039L7.23218 6.86377L17.0027 15.7491L16.1042 16.5662L6.33374 7.66039Z" fill="#D10000"/>
</svg>

    </div>
  </div>
  <div class="w-full flex items-center">
    <div>
      <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 18.7917C5.625 12.3491 5.625 9.12787 7.62644 7.12644C9.62787 5.125 12.8491 5.125 19.2917 5.125H22.7083C29.1509 5.125 32.3721 5.125 34.3736 7.12644C36.375 9.12787 36.375 12.3491 36.375 18.7917V22.2083C36.375 28.6509 36.375 31.8721 34.3736 33.8736C32.3721 35.875 29.1509 35.875 22.7083 35.875H19.2917C12.8491 35.875 9.62787 35.875 7.62644 33.8736C5.625 31.8721 5.625 28.6509 5.625 22.2083V18.7917Z" stroke="#333333" stroke-width="3.41667"/>
<circle cx="28.6875" cy="12.8125" r="2.5625" fill="#333333"/>
<circle cx="21.0001" cy="20.4998" r="5.125" stroke="#333333" stroke-width="3.41667"/>
</svg>


    </div>
    <input type="text" class="w-[65vw] p-[4vw] ml-[5.3vw] h-[13vw] drop-shadow-lg focus:border-2 border-0 border-[#1B7B4A] bg-white rounded-[2vw] outline-none">
    <div class="ml-[2vw]">
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5028 23C8.42783 23 5.53503 21.7931 3.37113 19.6297C1.20723 17.4663 0 14.5743 0 11.5C0 8.42574 1.20723 5.53366 3.37113 3.3703C5.53503 1.20693 8.42783 0 11.5028 0C14.5779 0 17.4707 1.20693 19.6346 3.3703C24.1218 7.85644 24.1218 15.1436 19.6346 19.6297C17.4707 21.7931 14.5779 23 11.5028 23ZM11.5028 1.36634C8.79228 1.36634 6.24115 2.41386 4.3278 4.32673C2.41446 6.2396 1.36667 8.7901 1.36667 11.5C1.36667 14.2099 2.41446 16.7604 4.3278 18.6733C6.24115 20.5861 8.79228 21.6337 11.5028 21.6337C14.2134 21.6337 16.7645 20.5861 18.6779 18.6733C22.6412 14.7109 22.6412 8.28911 18.6779 4.32673C16.7645 2.41386 14.2134 1.36634 11.5028 1.36634Z" fill="#D10000"/>
<path d="M16.9991 7.36893L6.898 16.5548L6.00854 15.7459L16.1097 6.56006L16.9991 7.36893Z" fill="#D10000"/>
<path d="M6.33374 7.66039L7.23218 6.86377L17.0027 15.7491L16.1042 16.5662L6.33374 7.66039Z" fill="#D10000"/>
</svg>

    </div>
  </div>
  <div class="w-full flex items-center">
    <div>
      <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_591_279)">
<path d="M17.1176 -0.0107422C10.3536 -0.0107422 4.625 5.75085 4.625 12.5746C4.625 19.7212 11.2652 27.0297 15.7316 32.1663C15.7491 32.1869 16.471 32.9882 17.3599 32.9882H17.4383C18.3282 32.9882 19.045 32.1869 19.0625 32.1663C23.2535 27.3483 29.375 19.4025 29.375 12.5746C29.375 5.74982 24.9066 -0.0107422 17.1176 -0.0107422ZM17.5311 30.7824C17.495 30.8185 17.4424 30.8587 17.396 30.8927C17.3486 30.8597 17.297 30.8185 17.2588 30.7824L16.7195 30.1616C12.4852 25.3044 6.68647 18.6518 6.68647 12.5736C6.68647 6.86873 11.4632 2.0497 17.1165 2.0497C24.1589 2.0497 27.3115 7.33485 27.3115 12.5736C27.3115 17.1874 24.0208 23.3151 17.5311 30.7824ZM17.0361 6.23348C13.6196 6.23348 10.8486 9.00341 10.8486 12.421C10.8486 15.8385 13.6196 18.6085 17.0361 18.6085C20.4526 18.6085 23.2236 15.8375 23.2236 12.421C23.2236 9.00445 20.4537 6.23348 17.0361 6.23348ZM17.0361 16.546C14.7612 16.546 12.8637 14.6505 12.8637 12.3756C12.8637 10.1007 14.7137 8.2506 16.9887 8.2506C19.2646 8.2506 21.1137 10.1007 21.1137 12.3756C21.1147 14.6505 19.3121 16.546 17.0361 16.546Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0_591_279">
<rect width="33" height="33" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


    </div>
    <input type="text" class="w-[65vw] p-[4vw] ml-[5.3vw] h-[13vw] drop-shadow-lg focus:border-2 border-0 border-[#1B7B4A] bg-white rounded-[2vw] outline-none">
    <div class="ml-[2vw]">
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5028 23C8.42783 23 5.53503 21.7931 3.37113 19.6297C1.20723 17.4663 0 14.5743 0 11.5C0 8.42574 1.20723 5.53366 3.37113 3.3703C5.53503 1.20693 8.42783 0 11.5028 0C14.5779 0 17.4707 1.20693 19.6346 3.3703C24.1218 7.85644 24.1218 15.1436 19.6346 19.6297C17.4707 21.7931 14.5779 23 11.5028 23ZM11.5028 1.36634C8.79228 1.36634 6.24115 2.41386 4.3278 4.32673C2.41446 6.2396 1.36667 8.7901 1.36667 11.5C1.36667 14.2099 2.41446 16.7604 4.3278 18.6733C6.24115 20.5861 8.79228 21.6337 11.5028 21.6337C14.2134 21.6337 16.7645 20.5861 18.6779 18.6733C22.6412 14.7109 22.6412 8.28911 18.6779 4.32673C16.7645 2.41386 14.2134 1.36634 11.5028 1.36634Z" fill="#D10000"/>
<path d="M16.9991 7.36893L6.898 16.5548L6.00854 15.7459L16.1097 6.56006L16.9991 7.36893Z" fill="#D10000"/>
<path d="M6.33374 7.66039L7.23218 6.86377L17.0027 15.7491L16.1042 16.5662L6.33374 7.66039Z" fill="#D10000"/>
</svg>

    </div>
  </div>
  <div class="w-full flex items-center">
    <div>
      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5397 26.7311C32.5397 27.2561 32.423 27.7957 32.1751 28.3207C31.9272 28.8457 31.6063 29.3415 31.1834 29.8082C30.4688 30.5957 29.6813 31.1644 28.7917 31.529C27.9167 31.8936 26.9688 32.0832 25.948 32.0832C24.4605 32.0832 22.8709 31.7332 21.1938 31.0186C19.5167 30.304 17.8397 29.3415 16.1772 28.1311C14.5001 26.9061 12.9105 25.5498 11.3938 24.0478C9.89175 22.5311 8.5355 20.9415 7.32508 19.279C6.12925 17.6165 5.16675 15.954 4.46675 14.3061C3.76675 12.6436 3.41675 11.054 3.41675 9.53734C3.41675 8.54567 3.59175 7.59775 3.94175 6.72275C4.29175 5.83317 4.84591 5.0165 5.61883 4.28734C6.55216 3.36859 7.573 2.9165 8.65216 2.9165C9.0605 2.9165 9.46883 3.004 9.83341 3.179C10.2126 3.354 10.548 3.6165 10.8105 3.99567L14.1938 8.76442C14.4563 9.129 14.6459 9.46442 14.7772 9.78525C14.9084 10.0915 14.9813 10.3978 14.9813 10.6748C14.9813 11.0248 14.8792 11.3748 14.6751 11.7103C14.4855 12.0457 14.2084 12.3957 13.8584 12.7457L12.7501 13.8978C12.5897 14.0582 12.5167 14.2478 12.5167 14.4811C12.5167 14.5978 12.5313 14.6998 12.5605 14.8165C12.6042 14.9332 12.648 15.0207 12.6772 15.1082C12.9397 15.5894 13.3917 16.2165 14.0334 16.9748C14.6897 17.7332 15.3897 18.5061 16.148 19.279C16.9355 20.0519 17.6938 20.7665 18.4667 21.4228C19.2251 22.0644 19.8522 22.5019 20.348 22.7644C20.4209 22.7936 20.5084 22.8373 20.6105 22.8811C20.7272 22.9248 20.8438 22.9394 20.9751 22.9394C21.223 22.9394 21.4126 22.8519 21.573 22.6915L22.6813 21.5978C23.0459 21.2332 23.3959 20.9561 23.7313 20.7811C24.0667 20.5769 24.4022 20.4748 24.7667 20.4748C25.0438 20.4748 25.3355 20.5332 25.6563 20.6644C25.9772 20.7957 26.3126 20.9853 26.6772 21.2332L31.5042 24.6603C31.8834 24.9228 32.1459 25.229 32.3063 25.5936C32.4522 25.9582 32.5397 26.3228 32.5397 26.7311Z" stroke="#333333" stroke-width="2.1875" stroke-miterlimit="10"/>
<path opacity="0.4" d="M22.667 5.8335H29.667V9.3335V12.8335" stroke="#333333" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    </div>
    <input type="text" class="w-[65vw] p-[4vw] ml-[5.3vw] h-[13vw] drop-shadow-lg focus:border-2 border-0 border-[#1B7B4A] bg-white rounded-[2vw] outline-none">
    <div class="ml-[2vw]">
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5028 23C8.42783 23 5.53503 21.7931 3.37113 19.6297C1.20723 17.4663 0 14.5743 0 11.5C0 8.42574 1.20723 5.53366 3.37113 3.3703C5.53503 1.20693 8.42783 0 11.5028 0C14.5779 0 17.4707 1.20693 19.6346 3.3703C24.1218 7.85644 24.1218 15.1436 19.6346 19.6297C17.4707 21.7931 14.5779 23 11.5028 23ZM11.5028 1.36634C8.79228 1.36634 6.24115 2.41386 4.3278 4.32673C2.41446 6.2396 1.36667 8.7901 1.36667 11.5C1.36667 14.2099 2.41446 16.7604 4.3278 18.6733C6.24115 20.5861 8.79228 21.6337 11.5028 21.6337C14.2134 21.6337 16.7645 20.5861 18.6779 18.6733C22.6412 14.7109 22.6412 8.28911 18.6779 4.32673C16.7645 2.41386 14.2134 1.36634 11.5028 1.36634Z" fill="#D10000"/>
<path d="M16.9991 7.36893L6.898 16.5548L6.00854 15.7459L16.1097 6.56006L16.9991 7.36893Z" fill="#D10000"/>
<path d="M6.33374 7.66039L7.23218 6.86377L17.0027 15.7491L16.1042 16.5662L6.33374 7.66039Z" fill="#D10000"/>
</svg>

    </div>
  </div>
  </div>

</SocialsTab>
  <div class="w-full h-[30vw]"></div>
</template>

<script>
import ColorInput from 'vue-color-input';
import SelectCurrencyExpansionTab from "@/components/SelectCurrencyExpansionTab.vue";
import FontSelectionTab from "@/components/FontSelectionTab.vue"
import LanguageExpansionTab from "@/components/LanguageExpansionTab.vue"
import SocialsTab from '@/components/SocialsTab.vue';
export default {
  name: "SettingsPage",
  data() {
    return {
      showExpansionTab: false,
      showFontExpansionTab: false,
      showLanguuageExpansionTab: false,
      showSocialsTab:false,
      isSocialsExpanded:false,
      isCurrencyExpanded: false,
      isFontSelectionExpanded: false,
      isLanguageSelectionExpanded: false,
      closeExpansionTabTime: 300,
      chosenTitleColor: "rgb(11,11,11)",
      chosenBackgroundColor: "rgb(255,255,255)",
      itemBackgroundColor: "rgb(255,255,255)",
      itemTextColor: "rgb(255,255,255)",
      tanBarColor: "rgb(255,255,255)",
      logoImageUrl: null,
      logoError: null,
      coverImageUrl: null,
      coverError: null,
      chosenCoverDesign: 0,
      chosenLogoDesign: 0,
      chosenCurrency: 0,
      chosenFont:0,
      title:'',
      subHeading:'',
      currencies:["$","T","£","€","no price","₿","AED"],
      fonts:['Saira','Saira 2','Saira 3','Saira 4','Saira 5','Saira 6','Saira 7','Saira 8','Saira 9','Saira 10','Saira 11'],
      languages:['English','Persian'],
      chosenLanguage:0,
    };
  },
  methods: {
    rgbToHex(rgb) {
      // Regular expression to extract r, g, b values
      const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.exec(rgb);
      if (!result) {
        return 'Invalid RGB color';
      }
      
      const r = parseInt(result[1], 10);
      const g = parseInt(result[2], 10);
      const b = parseInt(result[3], 10);

      // Convert each value to its hexadecimal representation and ensure it's two digits
      const toHex = (value) => value.toString(16).padStart(2, '0');
      
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    },
    triggerLogoFileInput() {
      this.$refs.logoInput.click();
    },
    chooseCurrency(option){
this.chosenCurrency = option
    },
    chooseFont(option){
this.chosenFont = option
    },
    chooseLanguage(option){
this.chosenLanguage = option
    },
    handleLogoFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 8 * 1024 * 1024) {
          // 8 MB in bytes
          this.logoError = "File size exceeds 8 MB.";
          this.logoImageUrl = null;
        } else {
          this.logoError = null;
          const reader = new FileReader();
          reader.onload = (e) => {
            this.logoImageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    },
    triggerCoverFileInput() {
      this.$refs.coverInput.click();
    },
    handleCoverFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 8 * 1024 * 1024) {
          // 8 MB in bytes
          this.coverError = "File size exceeds 8 MB.";
          this.coverImageUrl = null;
        } else {
          this.coverError = null;
          const reader = new FileReader();
          reader.onload = (e) => {
            this.coverImageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    },
    chooseCover(index) {
      this.chosenCoverDesign = index;
    },
    chooseLogoDesign(index) {
      this.chosenLogoDesign = index;
    },
    closeItem() {
      this.isCurrencyExpanded = false;
      setTimeout(() => {
        this.showExpansionTab = false;
      }, this.closeExpansionTabTime);
    },
    closeFontTab() {
      this.isFontSelectionExpanded = false;
      setTimeout(() => {
        this.showFontExpansionTab = false;
      }, this.closeExpansionTabTime);
    },
    closeLanguageTab() {
      this.isLanguageSelectionExpanded = false;
      setTimeout(() => {
        this.showLanguuageExpansionTab = false;
      }, this.closeExpansionTabTime);
    },
    chooseItem(tabName) {
      switch(tabName){
        case 'currency' : 
        this.isCurrencyExpanded = true;
      this.showExpansionTab = true;
        break;
        case 'font' : 
        this.isFontSelectionExpanded = true;
      this.showFontExpansionTab = true;
      break;
      case 'lang' : 
        this.isLanguageSelectionExpanded = true;
      this.showLanguuageExpansionTab = true;
        break;
        case 'socials' : 
        this.isSocialsExpanded = true;
      this.showSocialsTab = true;
        break;
      }
    
    },
    clearSubHeading(){
      this.subHeading ='';
    },
    clearTitle(){
      this.title = ''
    }
  },
  computed: {
    upperCaseTitleColor() {
      return this.rgbToHex(this.chosenTitleColor).toUpperCase();
    },
    upperCaseBackgroundColor() {
      return this.rgbToHex(this.chosenBackgroundColor).toUpperCase();
    },
    upperCaseItemBackgroundColor() {
      return this.rgbToHex(this.itemBackgroundColor).toUpperCase();
    },
    upperCaseItemTextColor() {
      return this.rgbToHex(this.itemTextColor).toUpperCase();
    },
    upperCaseTanBarColor() {
      return this.rgbToHex(this.tanBarColor).toUpperCase();
    },
    logoImagePickerUrl() {
      return "background-image: url('" + this.logoImageUrl + "')";
    },
    coverImagePickerUrl() {
      return "background-image: url('" + this.coverImageUrl + "')";
    },
    hexColor() {
      return this.rgbToHex();
    }
  },
  components: {
    SelectCurrencyExpansionTab,ColorInput,FontSelectionTab,LanguageExpansionTab,SocialsTab
  },
};
</script>
<style scoped>
.color-input {
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-family: "Saira", sans-serif !important; /* Change font family */
  font-size: 14px; /* Change font size */
  color: transparent; /* Hide default text inside input */
  text-shadow: none;
}
.color-input::-webkit-color-swatch-wrapper {
  padding: 0;
}

.color-input::-webkit-color-swatch {
  border: none;
  border-radius: 0.7vw;
}

</style>
