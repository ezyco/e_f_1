<template>
    <div class="w-[100vw] h-[100vh] absolute z-40" @click="toggleCountriesDrawer" v-if="countriesDrawer"></div>
    <div class="px-[6.4vw]">
      <div class="m-auto p-[4vw] text-center text-[#1B7B4A] font-semibold roboto text-[6.15vw]">Profile</div>
      <div>
        <div class="w-full inter text-white p-[4vw] h-[51vw] bg-gradient-to-r from-[#2B83EC] to-[#1AC9FF] rounded-[4.6vw] mb-[4vw]  drop-shadow-md">
          <div class="font-semibold text-[4.6vw]">EZY TON WALLET</div>
          <div class="flex mt-[2vw] space-x-1 items-center">
            <div  class="font-normal text-[3.3vw]">{{ displayedAddress }}</div>
            <svg @click="copyAddress" width="3.3vw" height="3.3vw" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_779_554)">
<path d="M11.1638 5.76318H6.16385C5.5502 5.76318 5.05273 6.26064 5.05273 6.87429V11.8743C5.05273 12.4879 5.5502 12.9854 6.16385 12.9854H11.1638C11.7775 12.9854 12.275 12.4879 12.275 11.8743V6.87429C12.275 6.26064 11.7775 5.76318 11.1638 5.76318Z" stroke="#E8EFFB" stroke-width="1.55556" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.83073 9.09673H2.27517C1.98049 9.09673 1.69787 8.97967 1.4895 8.7713C1.28113 8.56292 1.16406 8.28031 1.16406 7.98562V2.98562C1.16406 2.69094 1.28113 2.40832 1.4895 2.19995C1.69787 1.99157 1.98049 1.87451 2.27517 1.87451H7.27517C7.56986 1.87451 7.85247 1.99157 8.06085 2.19995C8.26922 2.40832 8.38628 2.69094 8.38628 2.98562V3.54118" stroke="#E8EFFB" stroke-width="1.55556" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_779_554">
<rect width="13.3333" height="13.3333" fill="white" transform="translate(0.0527344 0.763184)"/>
</clipPath>
</defs>
</svg>
          </div>
          <div class="flex mt-[2vw] text-[7vw] justify-start font-extrabold items-center">
            <div>EZY</div>
            <div>{{ tokenAmount }}</div>
          </div>
          <div class="text-[6vw] font-bold">${{tokensValue}}</div>
          <div class="w-full mt-[2vw] flex justify-between items-center">
            <div class="p-[1vw] flex rounded-[1.8vw] w-[27vw] h-[6.6vw] bg-[rgba(255,255,255,0.25)] justify-around items-center">
              <svg width="3.3vw" height="4.3vw" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.153 4.95801L4.73633 12.0413" stroke="white" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.153 12.0413H4.73633V4.95801" stroke="white" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div class="text-[4.1vw] font-medium">Recieve</div>
            </div>

            <div class="p-[1vw] flex rounded-[1.8vw] w-[6.6vwvw] h-[6.6vw] bg-[rgba(255,255,255,0.25)] justify-around items-center">
              <svg width="3.8vw" height="2.8vw" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.210938 3.86149C0.210937 3.69874 0.282108 3.54265 0.408791 3.42757C0.535475 3.31249 0.707295 3.24783 0.886452 3.24783H6.01091L4.46195 1.84071C4.39743 1.7841 4.34597 1.71638 4.31057 1.64151C4.27517 1.56664 4.25653 1.48612 4.25575 1.40464C4.25497 1.32316 4.27206 1.24235 4.30603 1.16693C4.34 1.09152 4.39015 1.023 4.45358 0.965382C4.51701 0.907764 4.59243 0.862197 4.67545 0.831342C4.75847 0.800486 4.84742 0.78496 4.93711 0.785668C5.02681 0.786376 5.11545 0.803304 5.19786 0.835466C5.28028 0.867627 5.35482 0.914377 5.41713 0.972988L8.11919 3.42763C8.24583 3.54271 8.31697 3.69877 8.31697 3.86149C8.31697 4.02421 8.24583 4.18027 8.11919 4.29535L5.41713 6.75C5.35482 6.80861 5.28028 6.85536 5.19786 6.88752C5.11545 6.91968 5.02681 6.93661 4.93711 6.93732C4.84742 6.93803 4.75847 6.9225 4.67545 6.89164C4.59243 6.86079 4.51701 6.81522 4.45358 6.7576C4.39015 6.69999 4.34 6.63147 4.30603 6.55605C4.27206 6.48064 4.25497 6.39983 4.25575 6.31835C4.25653 6.23687 4.27517 6.15634 4.31057 6.08147C4.34597 6.0066 4.39743 5.93889 4.46195 5.88228L6.01091 4.47515H0.886452C0.707295 4.47515 0.535475 4.4105 0.408791 4.29542C0.282108 4.18033 0.210938 4.02425 0.210938 3.86149ZM14.3968 8.15712H9.27229L10.8213 6.75C10.9443 6.63426 11.0124 6.47925 11.0109 6.31835C11.0093 6.15745 10.9383 6.00353 10.813 5.88976C10.6878 5.77598 10.5183 5.71144 10.3412 5.71004C10.1641 5.70864 9.99348 5.7705 9.86607 5.88228L7.16401 8.33693C7.03737 8.45201 6.96623 8.60806 6.96623 8.77079C6.96623 8.93351 7.03737 9.08957 7.16401 9.20465L9.86607 11.6593C9.99348 11.7711 10.1641 11.8329 10.3412 11.8315C10.5183 11.8301 10.6878 11.7656 10.813 11.6518C10.9383 11.538 11.0093 11.3841 11.0109 11.2232C11.0124 11.0623 10.9443 10.9073 10.8213 10.7916L9.27229 9.38445H14.3968C14.5759 9.38445 14.7477 9.31979 14.8744 9.20471C15.0011 9.08963 15.0723 8.93354 15.0723 8.77079C15.0723 8.60803 15.0011 8.45195 14.8744 8.33686C14.7477 8.22178 14.5759 8.15712 14.3968 8.15712Z" fill="white"/>
</svg>

            </div>

            <div class="p-[1vw] flex rounded-[1.8vw] w-[27vw] h-[6.6vw] bg-[rgba(255,255,255,0.25)] justify-around items-center">
              <svg width="4.1vw" height="4.1vw" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.73779 11.3337L10.9878 4.66699" stroke="white" stroke-width="2.14516" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.73779 4.66699H10.9878V11.3337" stroke="white" stroke-width="2.14516" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div class="text-[4.1vw] font-medium">Send</div>
            </div>
          </div>
        </div>
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
              <div class="w-full h-[1px] bg-black mt-[2vw] opacity-15"></div>
            <div class="overflow-scroll h-[70vw] w-full">
                <div @click="selectCountry(country.flag,country.dialCode)" v-for="(country,index) in filteredCountries" :key="index" class="w-full pt-[4vw] px-[4vw] bg-white hover:bg-[#e4e4e4] ">
                <div class="flex items-center space-x-[3vw]">
                  <img class="w-7 h-5" :src="country.flag"/>
                <div class="roboto text-[4.1vw] font-semibold">{{ country.dialCode }} </div>
                <div class="roboto text-[4.1vw] font-semibold">{{ country.name }} </div>
                </div>
              <div class="w-full h-[1px] bg-black mt-[2vw] opacity-15"></div>
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
        tonWalletAddress:'EQCWB1WLs7rDJfYaeVxTZWnwQmrIFzbUcr-us-9aIn1ZNFpq',
        tokenAmount:15.056,
        tokenUSDprice:2,
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
    async copyAddress() {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(this.tonWalletAddress);
       
        } else {
          // Fallback for browsers that do not support Clipboard API
          const textArea = document.createElement('textarea');
          textArea.value = this.tonWalletAddress;
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
    tokensValue(){
      return this.tokenAmount * this.tokenUSDprice
    },
    displayedAddress(){
           return this.tonWalletAddress.slice(0,15) + "..."
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