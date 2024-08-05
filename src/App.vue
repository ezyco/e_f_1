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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Heebo:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Saira:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
.inter {
  font-family: "Inter", sans-serif;
}
.roboto {
  font-family: "Roboto", sans-serif;
}
.saira {
  font-family: "Saira", sans-serif;
}
.open-sans {
  font-family: "Open Sans", sans-serif;
}
.lato {
  font-family: "Lato", sans-serif;
}
.montserrat {
  font-family: "Montserrat", sans-serif;
}
.nunito {
  font-family: "Nunito", sans-serif;
}
.poppins {
  font-family: "Poppins", sans-serif;
}
.source-sans-3 {
  font-family: "Source Sans 3", sans-serif;
}
.merriweather {
  font-family: "Merriweather", sans-serif;
}
.raleway {
  font-family: "Raleway", sans-serif;
}
.playfair-display {
  font-family: "Playfair Display", sans-serif;
}
.pt-sans {
  font-family: "PT Sans", sans-serif;
}
.ubuntu {
  font-family: "Ubuntu", sans-serif;
}
.oswald {
  font-family: "Oswald", sans-serif;
}
.quicksand {
  font-family: "Quicksand", sans-serif;
}
.work-sans {
  font-family: "Work Sans", sans-serif;
}
.fira-sans {
  font-family: "Fira Sans", sans-serif;
}
.heebo {
  font-family: "Heebo", sans-serif;
}
.mulish {
  font-family: "Mulish", sans-serif;
}
.dm-sans {
  font-family: "DM Sans", sans-serif;
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