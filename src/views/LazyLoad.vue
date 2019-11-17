
<template>
  <div class="home">
    <Bread :pageTitle="pageTitle"></Bread>
    <div class="block">
      <h3 class="ttl-ui">「jquery.lazyload.js」</h3>
      <iframe src="https://kksample.sakura.ne.jp/media/iframe/lazyload.html" frameborder="0"></iframe>
    </div>
    <div class="block">
      <h3 class="ttl-ui">「lazyload.js」</h3>
      <iframe src="https://kksample.sakura.ne.jp/media/iframe/lazyloadB.html" frameborder="0"></iframe>
    </div>
    <div class="block">
      <h3 class="ttl-ui">「lazysizes.js」</h3>
      <iframe src="https://kksample.sakura.ne.jp/media/iframe/lazysizes.html" frameborder="0"></iframe>
    </div>
    <!-- <iframe src="https://kksample.sakura.ne.jp/media/iframe/lazyload.html" frameborder="0"></iframe> -->
  </div>
</template>

<script>
import Bread from "@/components/Bread";
// import $ from "jquery";
export default {
  name: "lazyload",
  data() {
    return {
      pageTitle: "lazyload"
    };
  },
  components: {
    Bread
  },
  mounted: () => {}
};
</script>
<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 600px;
}
</style>
