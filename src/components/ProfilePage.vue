<template>
    <div class="w-[100vw] h-[100vh] absolute z-40" @click="toggleCountriesDrawer" v-if="countriesDrawer"></div>
    <div class="px-[6.4vw]">
      <div class="m-auto p-[4vw] text-center text-[#1B7B4A] font-semibold roboto text-[6.15vw]">Profile</div>
      <div class="mt-[6vw]">
        <div class="roboto font-extrabold text-[4.8vw]">Phone number</div>
        <div class="w-full h-[14.3vw] border-[1px] mt-[2vw] space-x-[3vw] border-[#E9EAEB] rounded-[2vw] flex items-center p-[4vw] bg-[#e4e4e4]">
             <div @click="toggleCountriesDrawer" class="w-[15.6vw] h-[6.15] flex space-x-[3vw]">
                 <img class="h-[6.15vw] w-[8.46vw] object-cover" :src="flagUrl">
                 <svg width="6.15vw" height="6.15vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
             </div>
             <div class="roboto font-normal text-[4.1vw] text-[#697079]">({{ dialNum }})</div>
             <input   v-model="enteredPhoneNumber" 
             @input="filterInput"  type="tel"  class="bg-[#e4e4e4] roboto text-[4.1vw] outline-none h-full" >
             
        </div>
        <div :class="{'w-[87.2vw]  drop-shadow-lg rounded-b-lg z-50 overflow-hidden transition-all duration-200 bg-white absolute':true,'opacity-0' : !drawerOpen,'opacity-100':drawerOpen}" v-if="countriesDrawer">
            <div class="w-full pb-[2vw] px-[4vw] pt-[4vw] ">
                <input v-model="searchTerm" type="text" class="w-full rounded-lg outline-none h-[10vw] bg-[#e4e4e4] p-[4vw] text-[4.1vw] roboto" name="" id="">
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
        <input v-model="emailAddress" class="w-full outline-none h-[14.3vw] border-[1px] mt-[2vw] space-x-[3vw] roboto font-normal text-[4.1vw] border-[#E9EAEB] rounded-[2vw] flex items-center p-[4vw] bg-[#e4e4e4]"/>
      </div>
    </div>
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
        countriesDrawer:false,
        searchTerm:'',
        drawerOpen:false,
        drawerAnimationTime:200,
        flagUrl:'https://flagcdn.com/gb.svg',
        dialNum:'+44',
      };
    },
    created() {
      this.fetchCountryData();
    },
    methods: {
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