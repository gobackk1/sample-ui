<template>
  <div class>
    <Bread :pageTitle="pageTitle" />
    <div class="block">
      <tabA></tabA>
    </div>
    <div class="block">
      <tabB></tabB>
    </div>
    <div class="block">
      <selectBtn></selectBtn>
    </div>
  </div>
</template>

<script>
import Bread from "@/components/Bread";
import tabA from "@/ui/tab/tabA";
import tabB from "@/ui/tab/tabB";
import selectBtn from "@/ui/tab/selectBtn";
export default {
  data() {
    return {
      pageTitle: "tab"
    };
  },
  name: "tab",
  mounted: function() {},
  components: {
    Bread,
    tabA,
    tabB,
    selectBtn,
  }
};
</script>

<style lang="scss" scoped>

</style>
