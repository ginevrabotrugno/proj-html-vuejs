<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <div class="container">
        <div class="rowUp">
            <div id="up">
                <div>SUBSCRIBE OUR NEWSLETTER</div>
                <div>
                    <input type="email" placeholder="your email">
                    <button type="send">SEND</button>
                </div>
            </div>
        </div>
        <div class="rowCenter">
            <div id="center">
                <div>
                    <img src="" alt="">
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="rowDown">
            <div id="down">
                <div>Copyright © gogrin all rights reserved.</div>
                <div>
                    <a href="#">Service</a>
                    <a href="#">Pricing Table</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

* {
    text-decoration: none;
}


.container {
    .rowUp {
        background-image: url('src/assets/milesim-bg.jpg');
        width: 90%;
        margin: 0 auto;

        div#up {
            width: 90%;
            margin: 0 auto;
            height: 25vh;
            // font
            color: white;
            font-size: 2.5rem;
            font-weight: bold;

            // flex
            display: flex;
            justify-content: space-between;
            align-items: center;

            input {
                font-size: 1.2rem;
                padding: 20px 40px;
            }
        }
    }

    .rowCenter {
        background-image: url('src/assets/footer-bg.jpg');
        background-size: cover;
        background-position: center;

        div#center {
            width: 90%;
            margin: 0 auto;
            height: 70vh;
        }
    }

    .rowDown {
        background-color: $green;


        div#down {
            width: 90%;
            margin: 0 auto;
            height: 10vh;
            // font
            color: white;
            // flex
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {

                // &:first-child {
                //     margin-left: 50px;
                // }

                a {
                    font-size: 1.2rem;
                    color: white;
                    margin: 20px;

                    // &:last-child {
                    //     margin-right: 50px;
                    // }
                }
            }
        }
    }
}
</style>