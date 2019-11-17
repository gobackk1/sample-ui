<template>
  <div class>
    <h2 class="ttl-ui">②スマホ時はアコーディオンになるタブUI</h2>
    <div class="tabB">
      <div class="tabB__body">
        <h4 class="tabB__ttl">お知らせ</h4>
        <p
          class="tabB__txt"
        >お知らせの内容が入ります。jQueryを使った簡易な実装のタブです。.tab__ttlのhxタグは文書のアウトラインに合わせて適切なものを選んでください。スマホの見た目はアコーディオンになります。</p>
        <h4 class="tabB__ttl">行事案内</h4>
        <p
          class="tabB__txt"
        >行事案内の内容が入ります。jQueryを使った簡易な実装のタブです。.tab__ttlのhxタグは文書のアウトラインに合わせて適切なものを選んでください。スマホの見た目はアコーディオンになります。</p>
        <h4 class="tabB__ttl">ブログ</h4>
        <p
          class="tabB__txt"
        >ブログの内容が入ります。jQueryを使った簡易な実装のタブです。.tab__ttlのhxタグは文書のアウトラインに合わせて適切なものを選んでください。スマホの見た目はアコーディオンになります。</p>
        <h4 class="tabB__ttl">採用情報</h4>
        <p
          class="tabB__txt"
        >採用情報の内容が入ります。jQueryを使った簡易な実装のタブです。.tab__ttlのhxタグは文書のアウトラインに合わせて適切なものを選んでください。スマホの見た目はアコーディオンになります。</p>
      </div>
    </div>
    <dl>
      <dt>$tabB_color</dt>
      <dd>全体の色</dd>
      <dt>$tabB_active_text</dt>
      <dd>アクティブのタブボタンのテキスト色</dd>
      <dt>$tabB_hover</dt>
      <dd>アクティブ以外のタブボタンのホバー色</dd>
      <dt>$tabB_border</dt>
      <dd>borderのプロパティ</dd>
      <dt>$tabB_title_type</dt>
      <dd>fill:タブボタンをflex-itemにして幅いっぱいまで広げる。 auto:float:leftで左寄せ</dd>
      <dt>$tabA_type</dt>
      <dd>A or B Bは丸みを帯びる</dd>
    </dl>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "tabB",
  mounted: function() {
    var $tabB = $(".tabB");
    var $tabBTtl = $(".tabB__ttl");
    var $tabBTxt = $(".tabB__txt");
    var current = 0;

    //タブ表示用にDOM差し込み&移動
    $('<div class="tabB__menu"></div>').prependTo($tabB);

    //UIの初期化
    var show = $tabBTxt.eq(current);
    $tabBTxt.not(show).hide();
    $tabBTtl.eq(current).addClass("active");
    $tabBTtl
      .clone(true)
      .addClass("clone")
      .prependTo($(".tabB__menu"));
    var $clone = $(".clone");

    //タブをクリックしたとき
    $clone.on("click", function() {
      $tabBTxt
        .hide()
        .eq($clone.index(this))
        .fadeIn();
      $(".tabB")
        .find(".tabB__ttl")
        .removeClass("active");
      $(this).addClass("active");
    });
    $tabBTtl.on("click", function() {
      $tabBTxt
        .slideUp()
        .eq($tabBTtl.index(this))
        .slideToggle();
      $(".tabB")
        .find(".tabB__ttl")
        .removeClass("active");
      $(this).addClass("active");
    });
  }
};
</script>

<style lang="scss">
dl {
  margin: 20px 0;
  dt {
    font-weight: bold;
  }
  dd {
    margin-bottom: 10px;
  }
}

$tabB_color: #0f9c1a;
$tabB_active_text: #fff;
$tabB_hover: lighten($tabB_color, 30);
$tabB_border: 2px solid $tabB_color;
$tabB_title_type: "fill"; //fill:flexにして幅いっぱいまで広げる。 auto:float:leftで左寄せ
$tabB_num: 3; //タブの数
$tabB_type: "B"; //A or B  Bは丸みを帯びる

//typeB
$tabB_B_border_radius: 10px;

.tabB {
  &__menu {
    @if $tabB_title_type == "fill" {
      display: flex;
      justify-content: space-between;
    } @else if $tabB_title_type == "auto" {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
  &__ttl {
    @if $tabB_title_type == "fill" {
      width: 100% / $tabB_num;
    } @else if $tabB_title_type == "auto" {
      @media (min-width: 768px) {
        float: left;
        margin-right: 5px;
        border-top-left-radius: $tabB_B_border_radius;
        border-top-right-radius: $tabB_B_border_radius;
      }
    }
    cursor: pointer;
    padding: 5px 10px;
    border: $tabB_border;
    border-bottom: none;
    transition: 0.3s;
    box-sizing: border-box;
    &.active {
      background: $tabB_color;
      color: $tabB_active_text;
    }
    &:not(.active):hover {
      background: $tabB_hover;
    }
    @media (max-width: 767px) {
      width: 100%;
      border-right: none;
      border-left: none;
      position: relative;
      &.clone {
        display: none;
      }
      &:first-child {
        border-top: none;
        border-top-left-radius: $tabB_B_border_radius / 2;
        border-top-right-radius: $tabB_B_border_radius / 2;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 10px;
        margin: auto;
        display: block;
        width: 6px;
        height: 6px;
        border-top: 2px solid $tabB_color;
        border-right: 2px solid $tabB_color;
        transform: rotate(135deg);
        margin: auto;
        transition: 0.3s;
      }
      &.active {
        &::after {
          border-color: $tabB_active_text;
          transform: rotate(-45deg);
        }
      }
    }
    @media (min-width: 768px) {
      @if $tabB_type == "B" {
        &:first-child {
          border-top-left-radius: $tabB_B_border_radius;
        }
        &:last-child {
          border-top-right-radius: $tabB_B_border_radius;
        }
      }
      &:not(.clone) {
        display: none;
      }
    }
  }
  &__body {
    border: $tabB_border;
    // background: #ccc;
    padding: 20px;
    @media (min-width: 768px) {
      @if $tabB_type == "B" {
        border-bottom-right-radius: $tabB_B_border_radius;
        border-bottom-left-radius: $tabB_B_border_radius;
        @if $tabB_title_type == "auto" {
          border-top-right-radius: $tabB_B_border_radius;
        }
      }
    }
    @media (max-width: 767px) {
      @if $tabB_type == "B" {
        border-radius: $tabB_B_border_radius;
        overflow: hidden;
      }
      padding: 0;
      p {
        padding: 10px;
      }
    }
  }
}
</style>
