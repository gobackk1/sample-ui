<template>
  <header>
    <h1><router-link to="/">SampleUI</router-link></h1>
  </header>
</template>
<style lang="scss" scoped>
  header{
    box-shadow: 0px 1px 3px 1px #afafaf;
    padding:20px;
    text-align: center;
    font-size:20px;
  }
  h1{
    a{
      color: #333;
      text-decoration: none;
    }
  }
</style>
<script>
export default {
  name: 'Header',
}
</script>
