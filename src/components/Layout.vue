<template>
  <div class="content">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <button class="nav-btn" @click="open">
      <span class="nav-btn__line"></span>
      <span class="nav-btn__line"></span>
      <span class="nav-btn__line"></span>
    </button>
    <div class="nav">
      <slot name="nav"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  @media (min-width: 768px) {
  }
}
.header {
  @media (min-width: 768px) {
    margin-left: 250px;
  }
}
.main {
  @media (min-width: 768px) {
    margin-left: 250px;
  }
  min-height: 1000px;
  padding: 3%;
}
.footer {
  @media (min-width: 768px) {
    margin-left: 250px;
  }
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: #efefef;
  transition: 0.3s;
  overflow-y: scroll;
  z-index: 20;
  @media (max-width: 767px) {
    transform: translateX(-250px);
    &.navOpen {
      transform: translateX(0px);
      box-shadow: 0px 1px 10px 1px #afafaf;
    }
  }
}
.nav-btn {
  position: fixed;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid;
  border-radius: 50%;
  padding: 5px;
  transition: 0.3s;
  &__line {
    display: block;
    background: #000;
    width: 100%;
    height: 2px;
    &:first-child,
    &:nth-child(2) {
      margin-bottom: 4px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.navOpen {
    transform: translateX(250px);
  }
  @media (min-width: 768px) {
    display: none;
  }
}
</style>
<script>
import $ from "jquery";
export default {
  name: "Layout",
  methods: {
    open() {
      $(".nav").toggleClass("navOpen");
      $(".nav-btn").toggleClass("navOpen");
    }
  }
};
</script>>
