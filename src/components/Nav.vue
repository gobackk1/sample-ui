<template>
  <div>
    <h2>Menu</h2>
    <ul>
      <li @click="close">
        <router-link to="/modal">Modal</router-link>
      </li>
      <li @click="close">
        <router-link to="/carousel">Carousel</router-link>
      </li>
      <li @click="close">
        <router-link to="/tab">Tab</router-link>
      </li>
      <li @click="close">
        <router-link to="/drawer">Drawer</router-link>
      </li>
      <li @click="close">
        <router-link to="/table">Table</router-link>
      </li>
    </ul>
    <h2>Improvement</h2>
    <ul>
      <li @click="close">
        <router-link to="/lazyload">LazyLoad</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
h2 {
  padding: 20px;
  font-weight: bold;
  text-align: center;
}
ul {
  padding: 20px;
}
a {
  padding: 5px 0;
  display: block;
}
</style>
<script>
import $ from "jquery";
export default {
  name: "Nav",
  methods: {
    close() {
      $(".nav").removeClass("navOpen");
      $(".nav-btn").removeClass("navOpen");
    }
  }
};
</script>
