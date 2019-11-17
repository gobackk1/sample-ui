<template>
  <div class="home">
    <Bread :pageTitle="pageTitle"></Bread>
    <p>carouselトップページです</p>
  </div>
</template>

<script>
import Bread from "@/components/Bread"
export default {
  name: "carousel",
  data() {
    return {
      pageTitle: "carousel"
    };
  },
  components:{
    Bread,
  }
};
</script>
