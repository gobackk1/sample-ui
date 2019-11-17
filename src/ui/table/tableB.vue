<template>
  <div>
    <table class="tableB js-r-table">
      <thead>
        <tr>
          <th>商品名</th>
          <th>価格</th>
          <th>商品コード</th>
          <th>発注単位</th>
          <th>在庫</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>商品A</th>
          <td data-label="価格">1,234円</td>
          <td data-label="商品コード">JAN4902123456789</td>
          <td data-label="発注単位">3</td>
          <td data-label="在庫">100</td>
        </tr>
        <tr>
          <th>商品B</th>
          <td data-label="価格">1,234円</td>
          <td data-label="商品コード">JAN4902123456789</td>
          <td data-label="発注単位">3</td>
          <td data-label="在庫">100</td>
        </tr>
        <tr>
          <th>商品C</th>
          <td data-label="価格">1,234円</td>
          <td data-label="商品コード">JAN4902123456789</td>
          <td data-label="発注単位">3</td>
          <td data-label="在庫">100</td>
        </tr>
        <tr>
          <th>商品D</th>
          <td data-label="価格">1,234円</td>
          <td data-label="商品コード">JAN4902123456789</td>
          <td data-label="発注単位">3</td>
          <td data-label="在庫">100</td>
        </tr>
        <tr>
          <th>商品E</th>
          <td data-label="価格">1,234円</td>
          <td data-label="商品コード">JAN4902123456789</td>
          <td data-label="発注単位">3</td>
          <td data-label="在庫">100</td>
        </tr>
        <tr>
          <th>商品F</th>
          <td data-label="価格">1,234円</td>
          <td data-label="商品コード">JAN4902123456789</td>
          <td data-label="発注単位">3</td>
          <td data-label="在庫">100</td>
        </tr>
        <tr>
          <th>商品G</th>
          <td data-label="価格">1,234円</td>
          <td data-label="商品コード">JAN4902123456789</td>
          <td data-label="発注単位">3</td>
          <td data-label="在庫">100</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "table",
  mounted: () => {
    $(".js-r-table")
      .wrap('<div class="wrapper"></div>')
      .parent()
      .after($('<p class="r-table-txt">※横にスクロールできます。</p>'));
  }
};
</script>

<style lang="scss">
.tableB {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  th,
  td {
    padding: 10px 0;
    text-align: center;
  }
  tr {
    border-bottom: 1px solid #ccc;
  }
  thead {
    th {
      color: #555;
      font-weight: bold;
      background: #ccc;
    }
  }
  @media (max-width: 767px) {
    width: 768px;
  }
}
.wrapper {
  @media (max-width: 767px) {
    overflow-x: scroll;
  }
}
.r-table-txt {
  text-align: center;
  color: red;
  display: none;
  @media (max-width:767px){
    display: block;
  }
}
</style>
