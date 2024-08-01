<template>
    <div class="w-[100vw] h-[100vh] absolute z-40" @click="toggleCountriesDrawer" v-if="countriesDrawer"></div>
    <div class="px-[6.4vw]">
      <div class="m-auto p-[4vw] text-center text-[#1B7B4A] font-semibold roboto text-[6.15vw]">Profile</div>
      <div class="mt-[0vw]">
        <div class="roboto font-extrabold text-[4.8vw]">Phone number</div>
        <div class="w-full h-[14.3vw] border-[1px] mt-[2vw] space-x-[3vw] border-[#E9EAEB] rounded-[2vw] flex items-center p-[4vw] bg-[#e4e4e4]">
            <div class="basis-1/2 flex items-center justify-start">
              <div @click="toggleCountriesDrawer" class="w-[19.6vw] h-[6.15] flex items-center justify-start space-x-3">
                 <img class="h-[6.15vw] w-[8.46vw] object-cover" :src="flagUrl">
                 <svg width="6.15vw" height="6.15vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
             </div>
             <div class="roboto font-normal text-[4.1vw] text-[#697079]">({{ dialNum }})</div>
            </div>
             <div class="basis-1/2 h-full">
              <input  placeholder="912 345 7890" v-model="enteredPhoneNumber" 
             @input="filterInput"  type="tel"  class="bg-[#e4e4e4] roboto basis-1/2 text-[4.1vw] w-full outline-none h-full" >
             </div>
             
        </div>
        <div :class="{'w-[87.2vw]  drop-shadow-lg rounded-b-lg z-50 overflow-hidden transition-all duration-200 bg-white absolute':true,'opacity-0' : !drawerOpen,'opacity-100':drawerOpen}" v-if="countriesDrawer">
            <div class="w-full pb-[2vw] px-[4vw] pt-[4vw] ">
                <input placeholder="search country" v-model="searchTerm" type="text" class="w-full rounded-lg outline-none h-[10vw] bg-[#e4e4e4] p-[4vw] text-[4.1vw] roboto" name="" id="">
                <svg class="absolute right-[7vw] -translate-y-[8vw] opacity-30" xmlns="http://www.w3.org/2000/svg" width="6vw" height="6vw" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            <div class="overflow-scroll h-[70vw] w-full">
                <div @click="selectCountry(country.flag,country.dialCode)" v-for="(country,index) in filteredCountries" :key="index" class="w-full p-[4vw] bg-white hover:bg-[#e4e4e4] flex items-center space-x-[3vw]">
                <img class="w-7 h-5" :src="country.flag"/>
                <div class="roboto text-[4.1vw] font-semibold">{{ country.dialCode }} </div>
                <div class="roboto text-[4.1vw] font-semibold">{{ country.name }} </div>
            </div>
            </div>
        </div>
      </div>
      <div class="mt-[6vw]">
        <div class="roboto font-extrabold text-[4.8vw]">Email</div>
        <input placeholder="example@email.com" v-model="emailAddress" class="w-full outline-none h-[14.3vw] border-[1px] mt-[2vw] space-x-[3vw] roboto font-normal text-[4.1vw] border-[#E9EAEB] rounded-[2vw] flex items-center p-[4vw] bg-[#e4e4e4]"/>
      </div>
      <div class="mt-[6vw]">
        <div class="roboto font-extrabold text-[4.8vw]">Name</div>
        <input placeholder="Enter your name" v-model="name" class="w-full outline-none h-[14.3vw] border-[1px] mt-[2vw] space-x-[3vw] roboto font-normal text-[4.1vw] border-[#E9EAEB] rounded-[2vw] flex items-center p-[4vw] bg-[#e4e4e4]"/>
      </div>
      <div class="mt-[6vw]">
        <div class="roboto font-extrabold text-[4.8vw]">Cafe username</div>
        <input placeholder="Enter desired username " v-model="cafeID" class="w-full focus:border-[#1B7B4A] focus:border-[1px] border-0 outline-none h-[14.3vw] border-[1px] mt-[2vw] space-x-[3vw] roboto font-normal text-[4.1vw] border-[#E9EAEB] rounded-[2vw] flex items-center p-[4vw] bg-[#e4e4e4]"/>
        <div class="roboto font-normal text-[2.8vw] ">{{ cafeUsername }}</div>
      </div>
      <div class="w-full mt-[6vw] px-[5.12vw] h-[7vw]">
        <div class="border-[1px] border-black flex h-full justify-start space-x-[1vw] items-center bg-white rounded-md">
          <svg @click="copyToClipboard" width="4.6vw" height="4.6vw" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_733_408)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9224 6.11546C15.9224 4.90587 14.9419 3.92529 13.7323 3.92529H7.89183C6.68223 3.92529 5.70166 4.90587 5.70166 6.11546V14.8761C5.70166 16.0858 6.68223 17.0663 7.89183 17.0663H13.7323C14.9419 17.0663 15.9224 16.0858 15.9224 14.8761V6.11546ZM14.4623 6.11546C14.4623 5.71227 14.1355 5.38541 13.7323 5.38541H7.89183C7.48863 5.38541 7.16177 5.71227 7.16177 6.11546V14.8761C7.16177 15.2793 7.48863 15.6062 7.89183 15.6062H13.7323C14.1355 15.6062 14.4623 15.2793 14.4623 14.8761V6.11546Z" fill="black"/>
<path d="M4.97142 2.46548H12.272C12.6752 2.46548 13.002 2.13862 13.002 1.73543C13.002 1.33223 12.6752 1.00537 12.272 1.00537H4.97142C3.76182 1.00537 2.78125 1.98595 2.78125 3.19554V13.4163C2.78125 13.8195 3.10811 14.1464 3.51131 14.1464C3.9145 14.1464 4.24136 13.8195 4.24136 13.4163V3.19554C4.24136 2.79234 4.56822 2.46548 4.97142 2.46548Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_733_408">
<rect width="17.5213" height="17.5213" fill="white" transform="translate(0.590332 0.274902)"/>
</clipPath>
</defs>
</svg>
<svg @click="shareContent" width="5.12vw" height="5.12vw" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.111 2.83691C12.6219 2.83691 11.4147 4.04405 11.4147 5.53314C11.4147 5.69567 11.4291 5.85483 11.4567 6.00944L7.5321 8.75666C7.51215 8.77061 7.49328 8.78553 7.47549 8.8013C7.01776 8.44297 6.44126 8.22937 5.81488 8.22937C4.32579 8.22937 3.11865 9.43654 3.11865 10.9256C3.11865 12.4147 4.32579 13.6218 5.81488 13.6218C6.44126 13.6218 7.01776 13.4082 7.47549 13.0499C7.49328 13.0657 7.51215 13.0806 7.5321 13.0945L11.4567 15.8418C11.4291 15.9963 11.4147 16.1555 11.4147 16.3181C11.4147 17.8071 12.6219 19.0143 14.111 19.0143C15.6 19.0143 16.8072 17.8071 16.8072 16.3181C16.8072 14.829 15.6 13.6218 14.111 13.6218C13.2376 13.6218 12.4611 14.0371 11.9684 14.681L8.25232 12.0797C8.41827 11.7298 8.51111 11.3386 8.51111 10.9256C8.51111 10.5126 8.41827 10.1214 8.25232 9.77154L11.9684 7.17021C12.4611 7.81409 13.2376 8.22937 14.111 8.22937C15.6 8.22937 16.8072 7.02223 16.8072 5.53314C16.8072 4.04405 15.6 2.83691 14.111 2.83691ZM12.6592 5.53314C12.6592 4.73133 13.3092 4.08133 14.111 4.08133C14.9128 4.08133 15.5628 4.73133 15.5628 5.53314C15.5628 6.33496 14.9128 6.98496 14.111 6.98496C13.3092 6.98496 12.6592 6.33496 12.6592 5.53314ZM5.81488 9.47379C5.01306 9.47379 4.36307 10.1238 4.36307 10.9256C4.36307 11.7274 5.01306 12.3774 5.81488 12.3774C6.6167 12.3774 7.2667 11.7274 7.2667 10.9256C7.2667 10.1238 6.6167 9.47379 5.81488 9.47379ZM14.111 14.8662C13.3092 14.8662 12.6592 15.5162 12.6592 16.3181C12.6592 17.1199 13.3092 17.7699 14.111 17.7699C14.9128 17.7699 15.5628 17.1199 15.5628 16.3181C15.5628 15.5162 14.9128 14.8662 14.111 14.8662Z" fill="black"/>
</svg>
<svg width="0.5vw" height="5.12vw" viewBox="0 0 2 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.725461" y1="0.970215" x2="0.725461" y2="20.0844" stroke="url(#paint0_linear_733_414)" stroke-width="1.04565"/>
<defs>
<linearGradient id="paint0_linear_733_414" x1="-0.797368" y1="0.970215" x2="-0.797366" y2="20.5395" gradientUnits="userSpaceOnUse">
<stop stop-color="#929292" stop-opacity="0"/>
<stop offset="0.513456" stop-color="#929292"/>
<stop offset="1" stop-color="#929292" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
<div class="inter text-[4.1vw]">{{ cafeUsername.substring(8) }}</div>
        </div>
      </div>
      <div class="m-auto mt-[3vw] w-[77vw] h-[77vw] rounded-lg border-[1px] border-black">
        <img class="w-full h-full" :src="qrCode">
      </div>
    </div>
    <div class="w-full h-[30vw]"></div>

  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProfilePage',
    data() {
      return {
        selectedCountry: '',
        countries: [],
        enteredPhoneNumber: '',
        emailAddress:'',
        name:'',
        cafeID:'',
        countriesDrawer:false,
        searchTerm:'',
        drawerOpen:false,
        drawerAnimationTime:200,
        flagUrl:'https://flagcdn.com/gb.svg',
        dialNum:'+44',
        qrCode:'https://s3-alpha-sig.figma.com/img/6e65/211a/e54138479a8f944a0be24ac78965fdf9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cANkbP9TPLPLjpX7dF3CssxChDw3Dv1L9TK87ON8Smj13zC0r9KTu39MujNPq59xh7z8LmJKVxSUMudvoRdJqcRu9PorcWGY0IgVeo8tsbRz3rz8bEjthA7EuilYLl3H1t0q-B2b4KZxuVWfUg1HcAWpZHFHEN~gG2~~gwozrTckEm28RioGkyG2r35Dst-zI-Lgl2XUlNnFWJ75knNPAB7GS~a8KeFS~OWHjIyq8cix5v8yU6B0sbyJONvaD99DkbRfqhTs0sq4LHT7HShs5Z83uMxDC6UerSsG6pw85QAlA65O84dva1AKtJ8vOejR2mKm-GqGPctpav8zvw8NSQ__',
      };
    },
    created() {
      this.fetchCountryData();
    },
    methods: {
      async shareContent() {
      if (navigator.share) {
        try {
          await navigator.share({
        text:this.cafeUsername
          });
          console.log('Content shared successfully');
        } catch (error) {
          console.error('Error sharing content:', error);
        }
      } else {
        console.log('Share API is not supported in this browser.');
      }
    },
      selectCountry(flag,number){
         this.flagUrl = flag;
         this.dialNum = number;
         this.toggleCountriesDrawer();
      },
        toggleCountriesDrawer(){
            if(!this.countriesDrawer){
                this.countriesDrawer = !this.countriesDrawer
            }else{
                setTimeout(() => {
                this.countriesDrawer = !this.countriesDrawer
            },this.drawerAnimationTime );
            }
          this.drawerOpen =!this.drawerOpen; 
        },
      async fetchCountryData() {
        try {
          const response = await axios.get('https://restcountries.com/v3.1/all');
          const countries = response.data.map(country => ({
            name: country.name.common,
            flag: country.flags.svg,
            dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
          }));
  
          // Sort countries alphabetically by name
          countries.sort((a, b) => a.name.localeCompare(b.name));
          
          this.countries = countries;
        } catch (error) {
          console.error('Error fetching country data:', error);
        }
      },
      async copyToClipboard() {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(this.cafeUsername);
       
        } else {
          // Fallback for browsers that do not support Clipboard API
          const textArea = document.createElement('textarea');
          textArea.value = this.cafeUsername;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
      } catch (error) {
        console.error('Failed to copy text: ', error);
      }
    },
      filterInput(event) {
      // Remove any non-numeric characters and enforce max length
      this.enteredPhoneNumber = event.target.value.replace(/\D/g, '').slice(0, 11);
      var x = this.enteredPhoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  this.enteredPhoneNumber = !x[2] ? x[1] : ' ' + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '');
    },
    },
    computed:{
        filteredCountries() {
      if (!this.searchTerm) {
        return this.countries;
      }
      const searchLower = this.searchTerm.toLowerCase();
      return this.countries.filter(country => 
        country.name.toLowerCase().startsWith(searchLower)
      );
    },
    cafeUsername(){
      let cafeName = this.cafeID.toLocaleLowerCase();
      return 'https://ezyton.com/menu/' + cafeName;
    }
    }
  }
  </script>

<style scoped>
.flag-image {
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
}
</style>