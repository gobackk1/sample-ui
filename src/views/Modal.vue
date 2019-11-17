<template>
  <div class="about">
    <Bread :pageTitle="pageTitle"></Bread>
    <div class="block">
      <h3 class="ttl-ui">①簡易なモーダル</h3>
      <modalA></modalA>
    </div>
  </div>
</template>
<script>
import Bread from "@/components/Bread";
import modalA from "@/ui/modal/modalA";
// import $ from "jquery";
export default {
  name: "modal",
  data() {
    return {
      pageTitle: "modal"
    };
  },
  components: {
    Bread,
    modalA,
  },
  mounted:function(){
    // $('.col-3 h3').matchHeight();
  }
};
</script>
<style lang="scss">

</style>
