<template>
  <div id="app">
    <Layout>
      <Header slot="header"/>
      <Nav slot="nav"/>
      <router-view slot="main"/>
      <Footer slot="footer"/>
    </Layout>
  </div>
</template>

<style lang="scss">
  #app{
    font-family: 'Noto Sans JP', sans-serif;
  }
</style>
<script>
// import $ from 'jquery'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

export default {
  mounted: function() {
    //  $('#btn').click(function() {
    //      $("#hogehoge").text("テキスト挿入");
    //  });
  },
  components:{
    Header,
    Nav,
    Footer,
    Layout,
  }
}
</script>
