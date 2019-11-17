<template>
  <div class="">
    <h2 class="ttl-ui">③セレクトボタン</h2>
    <div class="wrapper">
      <div class="Select-lang">
        <button
          type="button"
          class="Select-lang__btn js-slctBtn"
          aria-controls="js-slctLst"
        >Language</button>
        <ul class="Select-lang__list js-slctLst" id="js-slctLst">
          <li>
            <a href class="Select-lang__item--jp">日本語</a>
          </li>
          <li>
            <a href class="Select-lang__item--us">English</a>
          </li>
          <li>
            <a href class="Select-lang__item--kr">한국어</a>
          </li>
          <li>
            <a href class="Select-lang__item--cn">简体中文</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "tabB",
  mounted: function() {
    //Select-lang
    var selectBtn = $(".js-slctBtn");
    var selectLst = $(".js-slctLst");
    var ariaHiddenProp = true;

    selectLst
      .css({
        position: "absolute",
        "z-index": 1
      })
      .hide()
      .attr("aria-hidden", true);

    function onClickSelectBtn() {
      selectLst.slideToggle();
      if (ariaHiddenProp) {
        selectLst.attr("aria-hidden", false);
        ariaHiddenProp = false;
      } else {
        selectLst.attr("aria-hidden", true);
        ariaHiddenProp = true;
      }
    }

    selectBtn.on("click", onClickSelectBtn);
  }
};
</script>

<style lang="scss">
.wrapper{
  min-height: 250px;
}
%Select-lang__item {
  display: block;
  width: 100%;
  padding: 10px 10px 8px;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background: #ddd;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 20px;
    vertical-align: middle;
    margin: 0 5px 0px 0;
    transform: translateY(-10%);
  }
}

.Select-lang {
  width: 200px;
  position: relative;
  &__btn {
    position: relative;
    width: 100%;
    padding: 10px;
    background: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto 0;
      display: block;
      width: 5px;
      height: 5px;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      transform: rotate(135deg);
    }
  }
  &__list {
    width: 100%;
    padding: 0;
    list-style: none;
    background: #f2f2f2;
    // &[aria-hidden="true"]{
    //   display: none;
    // }
  }
  &__item {
    &--jp {
      @extend %Select-lang__item;
      &::before {
        background: url(/wp-content/uploads/flag_jp.png) no-repeat center/cover;
      }
    }
    &--us {
      @extend %Select-lang__item;
      &::before {
        background: url(/wp-content/uploads/flag_us.png) no-repeat center/cover;
      }
    }
    &--kr {
      @extend %Select-lang__item;
      &::before {
        background: url(/wp-content/uploads/flag_kr.png) no-repeat center/cover;
      }
    }
    &--cn {
      @extend %Select-lang__item;
      &::before {
        background: url(/wp-content/uploads/flag_cn.png) no-repeat center/cover;
      }
    }
  }
}
</style>
