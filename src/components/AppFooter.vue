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
                <div class="email">
                    <input type="email" placeholder="your email">
                    <div>
                        <div onclick="sendEmail">SEND</div>
                    </div>
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
    position: relative;

    .rowUp {
        background-image: url('src/assets/milesim-bg.jpg');
        width: 60%;
        position: absolute;
        top: -13%;
        left: 20%;

        div#up {

            width: 90%;
            margin: 0 auto;
            height: 18vh;
            // font
            color: white;
            font-size: 2.2rem;
            font-weight: bold;

            // flex
            display: flex;
            justify-content: space-between;
            align-items: center;

            input {
                font-size: 0.9rem;
                padding: 15px 120px 15px 30px;
            }

            div.email {
                display: flex;

                div {
                    width: 180px;
                    font-size: 1.2rem;
                    background-color: aqua;
                    cursor: pointer;
                    // flex
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }
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
            height: 60vh;
        }
    }

    .rowDown {
        background-color: $green;


        div#down {
            width: 90%;
            margin: 0 auto;
            height: 8vh;
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