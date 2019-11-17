<template>
  <div class="home">
    <Bread :pageTitle="pageTitle"></Bread>
    <div class="block">
      <h3 class="ttl-ui">①TableA</h3>
      <ul class="list-ui">
        <li>見出し固定表示</li>
        <li>スマホ時は各セルを縦積み</li>
      </ul>
      <tableA></tableA>
    </div>
    <div class="block">
      <h3 class="ttl-ui">②TableB</h3>
      <ul class="list-ui">
        <li>ウィンドウ幅768px以下で横スクロールするように</li>
      </ul>
      <tableB></tableB>
    </div>
  </div>
</template>

<script>
import Bread from "@/components/Bread";
import tableA from "@/ui/table/tableA";
import tableB from "@/ui/table/tableB";
export default {
  name: "table",
  data() {
    return {
      pageTitle: "table"
    };
  },
  components: {
    Bread,
    tableA,
    tableB
  }
};
</script>
