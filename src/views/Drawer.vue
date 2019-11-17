<template>
  <div class="home">
    <Bread :pageTitle="pageTitle"></Bread>
    <h2 class="ttl-ui">drawer</h2>
    <iframe class="drawerA" src="https://kksample.sakura.ne.jp/media/iframe/drawerA.html" ></iframe>
  </div>
</template>

<script>
import Bread from "@/components/Bread";
export default {
  name: "drawer",
  data() {
    return {
      pageTitle: "drawer"
    };
  },
  components: {
    Bread
  }
};
</script>
<style lang="scss" scoped>
  .drawerA{
    width: 100%;
    height: 400px;
  }
</style>
