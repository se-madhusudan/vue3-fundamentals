<template>
    <header class="header">
        <div class="header__logo">
            <router-link to="/" class="nav-links"><img :src="logoDetails.logoUrl" :alt="logoDetails.logoCaption" /></router-link>
        </div>
        <nav class="header__nav">
            <ul>
                <li>
                    <router-link to="/" class="nav-links">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="nav-links">About Us</router-link>
                </li>
                <li>
                    <router-link to="/contact" class="nav-links">Contact Us</router-link>
                </li>
                <li>
                    <router-link to="/videos" class="nav-links">Videos</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    props: {
        logoDetails: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 70px;
    display: flex;
    padding: 10px;
    margin: 0;
    background-color: #f3e0d1;
    justify-content: space-between;
    align-items: center;
    
    &__logo {
        width: 50px;
        height: 50px;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    &__nav {
        width: 70%;

        ul {
            display: flex;
            width: 100%;
            list-style-type: none;
            justify-content: flex-end;
            gap: 30px;
            padding: 0;

            li {
                .nav-links {
                    text-decoration: none;
                    font-size: 18px;
                    font-weight: 700;
                    font-family:'Lucida Sans', Geneva, Verdana, sans-serif;
                    color: #f13d10;
                }

                .nav-links:hover {
                    color: #0074a1;
                }
            }
        }
    }

}
</style>