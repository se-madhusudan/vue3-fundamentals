<template>
    <Header :links="headerLinks" :logoDetails="logoInfo" />
    <main>
        <h1>About Us</h1>
        <section>
            <p>At To Do Inc., we believe in the power of organization and productivity. Founded with the mission to simplify task management, our innovative solutions are designed to help individuals and teams achieve their goals efficiently. Our flagship product, the To Do app, offers a seamless experience for managing tasks, setting reminders, and collaborating with others. With a user-friendly interface and powerful features, we empower our users to stay on top of their responsibilities and make the most of their time.</p>

            <p>Our commitment to excellence drives us to continuously improve and expand our offerings. We understand that every user has unique needs, and we strive to provide customizable solutions that cater to a diverse range of preferences. At To Do Inc., we are dedicated to fostering a culture of productivity and innovation, ensuring that our users have the tools they need to succeed in both their personal and professional lives.</p>
            <p>At To Do Inc., we believe in the power of organization and productivity. Founded with the mission to simplify task management, our innovative solutions are designed to help individuals and teams achieve their goals efficiently. Our flagship product, the To Do app, offers a seamless experience for managing tasks, setting reminders, and collaborating with others. With a user-friendly interface and powerful features, we empower our users to stay on top of their responsibilities and make the most of their time.</p>

            <p>Our commitment to excellence drives us to continuously improve and expand our offerings. We understand that every user has unique needs, and we strive to provide customizable solutions that cater to a diverse range of preferences. At To Do Inc., we are dedicated to fostering a culture of productivity and innovation, ensuring that our users have the tools they need to succeed in both their personal and professional lives.</p>
            <p>At To Do Inc., we believe in the power of organization and productivity. Founded with the mission to simplify task management, our innovative solutions are designed to help individuals and teams achieve their goals efficiently. Our flagship product, the To Do app, offers a seamless experience for managing tasks, setting reminders, and collaborating with others. With a user-friendly interface and powerful features, we empower our users to stay on top of their responsibilities and make the most of their time.</p>

            <p>Our commitment to excellence drives us to continuously improve and expand our offerings. We understand that every user has unique needs, and we strive to provide customizable solutions that cater to a diverse range of preferences. At To Do Inc., we are dedicated to fostering a culture of productivity and innovation, ensuring that our users have the tools they need to succeed in both their personal and professional lives.</p>
        </section>
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

<style lang="scss" scoped>
    main {
        padding: 20px 60px;

        h1 {
            margin: 0;
        }
    }
</style>