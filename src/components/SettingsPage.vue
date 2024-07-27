<template>
  <div class="pb-[3vw] pt-[3vw] saira text-[4vw] px-[6vw]">
    <div class="saira font-normal">Title*</div>
    <input
      type="text"
      placeholder="Enter the desired menu title"
      class="w-full text-[4vw] p-[4vw] drop-shadow-md focus:outline-none focus:border-2 border-0 rounded-[1.5vw] border-[#12D18E]"
    />
    <div class="translate-y-[-9vw] translate-x-[80vw]">
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
      type="text"
      placeholder="Enter the desired sub-heading"
      class="w-full text-[4vw] p-[4vw] drop-shadow-md focus:outline-none focus:border-2 border-0 rounded-[1.5vw] border-[#12D18E]"
    />
    <div class="translate-y-[-9vw] translate-x-[80vw]">
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
  <div class="py-[3vw] text-[4vw] px-[6vw]">
    <div
      class="py-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Title Color</div>
      <div class="flex space-x-2">
        <div class="saira">{{ upperCaseTitleColor }}</div>
        <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="chosenTitleColor"
        />
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
      <div class="flex space-x-2">
        <div class="saira">{{ upperCaseBackgroundColor }}</div>
        <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="chosenBackgroundColor"
        />
      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Tan Bar</div>
      <div class="flex space-x-2">
        <div class="saira">{{ upperCaseTanBarColor }}</div>
        <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="tanBarColor"
        />
      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Item Background</div>
      <div class="flex space-x-2">
        <div class="saira">{{ upperCaseItemBackgroundColor }}</div>
        <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="itemBackgroundColor"
        />
      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
    >
      <div class="text-[#3A3A3A] saira">Item Text</div>
      <div class="flex space-x-2">
        <div class="saira">{{ upperCaseItemTextColor }}</div>
        <input
          type="color"
          class="outline-none color-input saira rounded-[1vw] border-[1px] w-[5.8vw] h-[5.8vw] border-[#212121]"
          v-model="itemTextColor"
        />
      </div>
    </div>
    <div
      class="py-[3vw] my-[3vw] flex justify-between items-center px-[6vw] w-full rounded-[1.5vw] bg-white drop-shadow-md h-[14vw]"
      @click="chooseItem()"
    >
      <div class="text-[#3A3A3A] saira">Currency</div>
      <div class="saira">
        {{ currencies[chosenCurrency] }}
      </div>
    </div>
  </div>
  <SelectCurrencyExpansionTab
    @close-tab="closeItem"
    @change-currency="chooseCurrency"
    :isOpen="isExpanded"
    v-if="showExpansionTab"
  />
  <div class="w-full h-[30vw]"></div>
</template>

<script>
import SelectCurrencyExpansionTab from "@/components/SelectCurrencyExpansionTab.vue";
export default {
  name: "SettingsPage",
  data() {
    return {
      showExpansionTab: false,
      isExpanded: false,
      closeExpansionTabTime: 300,
      chosenTitleColor: "#FFFFFF",
      chosenBackgroundColor: "#FFFFFF",
      itemBackgroundColor: "#FFFFFF",
      itemTextColor: "#FFFFFF",
      tanBarColor: "#FFFFFF",
      logoImageUrl: null,
      logoError: null,
      coverImageUrl: null,
      coverError: null,
      chosenCoverDesign: 0,
      chosenLogoDesign: 0,
      chosenCurrency: 0,
      currencies:["$","T","£","€","no price","₿","AED"]
    };
  },
  methods: {
    triggerLogoFileInput() {
      this.$refs.logoInput.click();
    },
    chooseCurrency(option){
this.chosenCurrency = option
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
      this.isExpanded = false;
      setTimeout(() => {
        this.showExpansionTab = false;
      }, this.closeExpansionTabTime);
    },
    chooseItem() {
      this.isExpanded = true;
      this.showExpansionTab = true;
    },
  },
  computed: {
    upperCaseTitleColor() {
      return this.chosenTitleColor.toUpperCase();
    },
    upperCaseBackgroundColor() {
      return this.chosenBackgroundColor.toUpperCase();
    },
    upperCaseItemBackgroundColor() {
      return this.itemBackgroundColor.toUpperCase();
    },
    upperCaseItemTextColor() {
      return this.itemTextColor.toUpperCase();
    },
    upperCaseTanBarColor() {
      return this.tanBarColor.toUpperCase();
    },
    logoImagePickerUrl() {
      return "background-image: url('" + this.logoImageUrl + "')";
    },
    coverImagePickerUrl() {
      return "background-image: url('" + this.coverImageUrl + "')";
    },
  },
  components: {
    SelectCurrencyExpansionTab,
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
