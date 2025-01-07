<template>
    <Header :links="headerLinks" :logoDetails="logoInfo" />
    <main>
        <h1>Quotes</h1>
    </main>
    <Footer :currentYear="year" :logoDetails="logoInfo" />
</template>

<script>
  import logo from '../assets/Img/to-do-list.png';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';

  export default {
    data() {
        return {
            logoInfo: {
                logoUrl: logo,
                logoCaption: 'To Do List Logo',
            },
            headerLinks: [
                {url: '/', text: 'Home'},
                {url: '/about', text: 'About Us'},
                {url: '/contact', text: 'Contact Us'},
                {url: '/quotes', text: 'Quotes'},
            ],
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

</style>