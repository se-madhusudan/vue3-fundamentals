<template>
    <Header :logoDetails="logoInfo" />
    <router-view />
    <Footer :currentYear="year" :logoDetails="logoInfo" />
</template>

<script>
  import logo from './assets/Img/to-do-list.png';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',

    data() {
      return {
        logoInfo: {
          logoUrl: logo,
          logoCaption: 'To Do List Logo',
        },
        year: new Date().getFullYear()
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  * {
    box-sizing: border-box;
  }
</style>