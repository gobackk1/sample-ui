<template>
  <div class>
    <h2 class="ttl-ui">①基本的なタブUI</h2>
    <div class="tabA">
      <div class="tabA__body">
        <h4 class="tabA__ttl">お知らせ</h4>
        <p
          class="tabA__txt"
        >お知らせの内容が入ります。jQueryを使った簡易な実装のタブです。.tab__ttlのhxタグは文書のアウトラインに合わせて適切なものを選んでください。スマホの見た目も同じタブのままです。</p>
        <h4 class="tabA__ttl">行事案内</h4>
        <p
          class="tabA__txt"
        >行事案内の内容が入ります。jQueryを使った簡易な実装のタブです。.tab__ttlのhxタグは文書のアウトラインに合わせて適切なものを選んでください。スマホの見た目も同じタブのままです。</p>
        <h4 class="tabA__ttl">ブログ</h4>
        <p
          class="tabA__txt"
        >ブログの内容が入ります。jQueryを使った簡易な実装のタブです。.tab__ttlのhxタグは文書のアウトラインに合わせて適切なものを選んでください。スマホの見た目も同じタブのままです。</p>
      </div>
    </div>
    <dl>
      <dt>$tabA_color</dt>
      <dd>全体の色</dd>
      <dt>$tabA_active_text</dt>
      <dd>アクティブのタブボタンのテキスト色</dd>
      <dt>$tabA_hover</dt>
      <dd>アクティブ以外のタブボタンのホバー色</dd>
      <dt>$tabA_border</dt>
      <dd>borderのプロパティ</dd>
      <dt>$tabA_title_type</dt>
      <dd>fill:タブボタンをflex-itemにして幅いっぱいまで広げる。 auto:float:leftで左寄せ</dd>
      <dt>$tabA_type</dt>
      <dd>A or B Bは丸みを帯びる</dd>
    </dl>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "tabA",
  mounted: function() {
    var $tabA = $(".tabA");
    var $tabATtl = $(".tabA__ttl");
    var $tabATxt = $(".tabA__txt");
    var current = 0;

    //タブ表示用にDOM差し込み&移動
    $('<div class="tabA__menu"></div>').prependTo($tabA);
    $tabATtl.prependTo($(".tabA__menu"));

    //UIの初期化
    var show = $tabATxt.eq(current);
    $tabATxt.not(show).hide();
    $tabATtl.eq(current).addClass("active");

    //タブをクリックしたとき
    $tabATtl.on("click", function() {
      $tabATxt
        .hide()
        .eq($tabATtl.index(this))
        .fadeIn();
      $tabATtl.removeClass("active");
      $(this).addClass("active");
    });
  }
};
</script>

<style lang="scss">
dl {
  margin: 20px 0;
}
dt {
  font-weight: bold;
}
dd {
  margin-bottom: 10px;
}

$tabA_color: #384188;
$tabA_active_text: #fff;
$tabA_hover: lighten($tabA_color, 30);
$tabA_border: 2px solid $tabA_color;
$tabA_title_type: "auto"; //fill:flexにして幅いっぱいまで広げる。 auto:float:leftで左寄せ
$tabA_num: 4; //タブの数
$tabA_type: "A"; //A or B  Bは丸みを帯びる

//typeB
$tabA_B_border_radius: 10px;

.tabA {
  &__menu {
    @if $tabA_title_type == "fill" {
      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    } @else if $tabA_title_type == "auto" {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
  &__ttl {
    @if $tabA_type == "B" {
      @media (min-width: 768px) {
        border-top-left-radius: $tabA_B_border_radius;
        border-top-right-radius: $tabA_B_border_radius;
      }
      @media (max-width: 767px) {
        &:first-child {
          border-top-left-radius: $tabA_B_border_radius;
          border-top-right-radius: $tabA_B_border_radius;
        }
      }
    }
    @if $tabA_title_type == "fill" {
      width: 100% / $tabA_num;
    } @else if $tabA_title_type == "auto" {
      @media (min-width: 768px) {
        float: left;
        margin-right: 5px;
      }
    }
    cursor: pointer;
    padding: 5px 10px;
    border: $tabA_border;
    border-bottom: none;
    transition: 0.3s;
    box-sizing: border-box;
    &.active {
      background: $tabA_color;
      color: $tabA_active_text;
    }
    &:not(.active):hover {
      background: $tabA_hover;
    }
    @media (max-width: 767px) {
      width: 100%;
      position: relative;
      padding-left: 20px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 5px;
        display: block;
        width: 6px;
        height: 6px;
        border-top: 2px solid $tabA_color;
        border-right: 2px solid $tabA_color;
        transform: rotate(45deg);
        margin: auto;
      }
    }
  }
  &__body {
    border: $tabA_border;
    // background: #ccc;
    padding: 20px;
    @if $tabA_type == "B" {
      border-bottom-left-radius: $tabA_B_border_radius;
      border-bottom-right-radius: $tabA_B_border_radius;
      @if $tabA_title_type != "fill" {
        @media (min-width: 768px) {
          border-top-right-radius: $tabA_B_border_radius;
        }
      }
    }
  }
}
</style>
