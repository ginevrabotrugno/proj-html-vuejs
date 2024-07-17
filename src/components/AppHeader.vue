<script>
import { router } from '../router';

export default {
    name: 'AppHeader',
    data() {
        return {
            routes: router.options.routes.slice(0, 3),
            isScrolled: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
        this.isScrolled = window.scrollY > 50;
        },
    },
}
</script>

<template>
    <header>
        <section class="green_bg">
            <div class="container">
                <div>
                    <a href="#" class="header_i">
                        <i class="fa-solid fa-location-dot"></i>
                        North baukhula, tala, USA
                    </a>
                    <a href="#" class="header_i">
                        <i class="fa-solid fa-envelope"></i>
                        demo@example.com
                    </a>
                </div>
                <div>
                    <a href="#" class="header_i">
                        <i class="fa-regular fa-clock"></i>
                        8.30AM-8.30PM
                    </a>
                    <a href="#" class="header_i">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="header_i">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="header_i">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="header_i">
                        <i class="fa-brands fa-pinterest-p"></i>
                    </a>
                </div>
            </div>
        </section>

        <section :class="{ fixed: true, scrolled: isScrolled }">

            <div class="container">
                    
                <nav>
                    <a href="#">
                        <img src="../assets/logo.png" alt="logo">
                    </a>
                    <ul>
                        <li v-for="(route, i) in routes" :key="i">
                            <router-link :to="route.path">{{ route.name }}</router-link>
                        </li>
                    </ul>
                </nav>

                <div class="shop">
                    <a href="#" class="header_i">
                        <i class="fa-solid fa-magnifying-glass orange_bg"></i>
                    </a>
                    <a href="#" class="header_i">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                    <a href="#" class="button orange_bg">ORDER NOW</a>
                </div>
            </div>

        </section>
    </header>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

header {
    background-color: $white;
    height: 150px;

    section {
        padding: 20px 0;

        .container {
            width: 85%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .header_i {
                padding: 0 10px
            }

            nav {
                display: flex;
                align-items: center;
                gap: 20px;
                
                ul {
                    display: flex;
                    gap: 10px;

                    li {
                        text-transform: uppercase;
                    }
                }

            }

            .fa-magnifying-glass {
                padding: 10px;
                border-radius: 50%;
            }

            .fa-cart-shopping {
                position: absolute;
                padding: 10px;
                position: relative;
                padding: 10px;
                border-radius: 50%;
                color: $green;
                background-color: $white;

                &::after {
                    content: '0';
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: $orange;
                    color: $white;
                    padding: 5px;
                    border-radius: 50%;
                    font-size: small;
                }
            }

        }

    }


    .fixed {
        width: 100%;
        position: fixed;
        top: 59px;
        left: 0;
        z-index: 900;

        &.scrolled {
            background: rgba($color: #000000, $alpha: 0.7); /* Colore di sfondo quando si scrolla */
            color: #fff; /* Cambia anche il colore del testo */
            top: 0;
        }
    }
}


</style>