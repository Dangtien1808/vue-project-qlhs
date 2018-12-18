<template>
  <div class="wrapper">
    <NavBar/>
    <Slider :slideMenuItems="slideMenuItems"/>
    <ContentWrap></ContentWrap>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Slider from "./components/Slider.vue";
import ContentWrap from "./components/ContentWrap.vue";
import slideMenuItems from "./lib/slideMenuItems.js";

export default {
  data() {
    return {
      slideMenuItems: slideMenuItems
    };
  },
  components: {
    NavBar,
    Slider,
    ContentWrap
  }
};
</script>

<style scoped>
</style>
