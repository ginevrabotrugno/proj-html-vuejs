<script>
import { router } from '../router';

export default {
    name: 'AppHeader',
    data() {
        return {
            routes: router.options.routes.slice(0, 3),
            isScrolled: false,
            showScrollToTop: false,
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
            this.showScrollToTop = window.scrollY > 200;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

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

        <a href="#" id="scroll-to-top" class="orange_bg" @click.prevent="scrollToTop" v-if="showScrollToTop">
            <i class="fa-solid fa-chevron-up"></i>
        </a>
    </header>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

header {
    background-color: $white;
    height: 150px;

    #scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        cursor: pointer;
        z-index: 900;
    }

    section {
        padding: 20px 0;

        .container {
            width: 90%;
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
                margin-right: 15px;

                &::after {
                    content: '0';
                    position: absolute;
                    top: -5px;
                    right: -5px;
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