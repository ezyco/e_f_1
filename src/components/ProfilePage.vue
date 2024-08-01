<template>
    <div class="px-[6.4vw]">
      <div class="m-auto p-[4vw] text-center text-[#1B7B4A] font-semibold roboto text-[6.15vw]">Profile</div>
      <div class="mt-[6vw]">
        <div class="roboto font-extrabold text-[4.8vw]">Phone number</div>
        <div class="w-full h-[14.3vw] border-[1px] mt-[2vw] space-x-[3vw] border-[#E9EAEB] rounded-[2vw] flex items-center p-[4vw] bg-[#e4e4e4]">
             <div class="w-[15.6vw] h-[6.15] flex space-x-[3vw]">
                 <img class="h-[6.15vw] w-[8.46vw] object-cover" src="https://i.ibb.co/18Z8trZ/united-kingdom.png">
                 <svg width="6.15vw" height="6.15vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
             </div>
             <div class="roboto font-normal text-[4.1vw] text-[#697079]">(+1)</div>
             <input   v-model="enteredPhoneNumber" 
             @input="filterInput"  type="tel"  class="bg-[#e4e4e4] roboto text-[4.1vw] outline-none h-full" >
        </div>
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
      };
    },
    created() {
      this.fetchCountryData();
    },
    methods: {
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
  }
  </script>

<style scoped>
.flag-image {
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
}
</style>