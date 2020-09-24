<template>
  <div id="app">
    <TopNav></TopNav>
    <Layout>
      <transition name="fade" mode="out-in">
      <router-view/>
      </transition>
    </Layout>

  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import Layout from "./components/Layout";
export default {
  name: 'App',
  components: {
    TopNav,Layout
  }
}
</script>

<style lang="scss">
  #app{
    background-color: #f3f6f8;
    margin: 0;
    padding: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
