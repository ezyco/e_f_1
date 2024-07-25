<template>
      <div class="overflow-x-hidden">
        <router-view/>
        <FooterNav />
</div>
</template>


<script>
import FooterNav from "@/components/FooterNav.vue";

export default{
    components:{
        FooterNav
    }
}
</script>
<style>
#curve {
  background-image: url("@/assets/Vectors/Asset 1.svg");
}
@import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

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
}
</style>