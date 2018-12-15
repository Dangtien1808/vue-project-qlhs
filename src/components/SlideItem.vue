<template>
  <router-link tag="li" v-if="router && router.name" :to="router">
    <a href="#">
      <i :class="icon"></i>
      <span>{{ name }}</span>
    </a>
  </router-link>
  <router-link tag="li" v-else :to="router">
    <a href="#">
      <i :class="icon"></i>
      <span>{{ name }}</span>
    </a>
  </router-link>
</template>

<script>
export default {
  name: "SlideItem",
  props: {
    icon: {
      type: String,
      default: ""
    },
    name: {
      type: String
    },
    router: {
      type: Object,
      default() {
        return {
          name: ""
        };
      }
    }
  },
  created() {},
  computed: {}
};
</script>
