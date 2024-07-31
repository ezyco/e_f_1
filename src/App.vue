<template>
    <TonConnectUIProvider :options="options">

      <div class="overflow-x-hidden">
        <router-view/>
        <FooterNav v-if="!isLoginRoute"/>
</div>
</TonConnectUIProvider>

</template>


<script>
import FooterNav from "@/components/FooterNav.vue";
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue';

export default{
    components:{
        FooterNav,TonConnectUIProvider
    },
    setup(){
    const options = {
      manifestUrl:"https://ef1.liara.run/tonconnect-manifest.json",
    };
    return {
      options,
    }
  },
  computed: {
    isLoginRoute() {
      return this.$route.path === '/login';
    },
  },
}
</script>
<style>
#curve {
  background-image: url("@/assets/Vectors/Asset 1.svg");
}
@import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
.inter {
  font-family: "Inter", sans-serif;
}
.saira {
  font-family: "Saira", sans-serif;
}
 /* Optional: Style for a more consistent scroll experience */
 .scroll-container::-webkit-scrollbar {
      height: 0px;
    }

    .scroll-container::-webkit-scrollbar-thumb {
      border-radius: 0px;
    }

    .scroll-container::-webkit-scrollbar-thumb:hover {
    }

html{
  overflow-x: hidden;
  color-scheme: only light;
  background-color: white !important;
}
:root{
  color-scheme: only light;
  background-color: white !important;
}
@media (prefers-color-scheme:dark) {
  body{
    background-color: white !important;
  }
  html{
    background-color: white !important;
  }
}
.color-input.user .box {
	width: 5.8vw !important;
	height:5.8vw !important;
  border:1px;
  border-color: #212121;
}
.color-input.user .box.active .inner {
	transform: scale(1) !important
}
</style>