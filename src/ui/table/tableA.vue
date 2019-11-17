<template>
  <div>
    <table class="tableA">
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
// import $ from "jquery";

export default {
  name: "table"
};
</script>

<style lang="scss">
.tableA {
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
      position: sticky;
      top: 0;
      color: #555;
      font-weight: bold;
      background: #ccc;
    }
  }
  @media (max-width:767px){
    thead{
      display: none;
    }
    tbody{
      th{
        background: #ccc;
        display: block;
        margin-top: 30px;
      }
      td{
        display: block;
        border-bottom: 1px solid #ccc;
        &::before{
          content:attr(data-label);
          font-size: 80%;
          color: #555;
          display: block;
          margin-bottom: .2em;
        }
      }
    }
  }
}
</style>
