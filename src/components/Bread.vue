<template>
  <div class>
    <ul>
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>&gt; {{pageTitle}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    pageTitle:String
  }
};
</script>
<style lang="scss" scoped>
  ul{
    margin-bottom: 50px;
    &::after{
      content: "";
      display: block;
      clear: both;
    }
  }
  li{
    float: left;
    margin-right: 5px;
  }

</style>
