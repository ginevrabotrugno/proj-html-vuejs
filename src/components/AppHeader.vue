<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <section class="green_bg">
            <div class="container">
                <div>
                    <a href="#">North baukhula, tala, USA</a>
                    <a href="#">demo@example.com</a>
                </div>
                <div>
                    <a href="#">8.30AM-8.30PM</a>
                    <a href="#">socials</a>
                </div>
            </div>
        </section>

        <section>

            <div class="container">
                    
                <nav>
                    <a href="#">
                        <img src="../assets/logo.png" alt="logo">
                    </a>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICE</li>
                        <li>PORTFOLIO</li>
                        <li>SHOP</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>

                <div class="shop">
                    <a href="#" class="button orange_bg">ORDER NOW</a>
                </div>
            </div>

        </section>
    </header>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

section {
    padding: 20px 0;

    .container {
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            padding: 0 10px
        }

        nav {
            display: flex;
            align-items: center;
            gap: 20px;
            
            ul {
                display: flex;
                gap: 10px;
            }

        }

        .button {
            padding: 15px 30px;
        }
    }

}

</style>