<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <div class="container">
        <!-- Sezione superiore della newsletter -->
        <div class="rowUp">
            <div id="up">
                <div>SUBSCRIBE OUR NEWSLETTER</div>
                <div class="email">
                    <input type="email" placeholder="your email">
                    <div id="button">
                        <div onclick="sendEmail">SEND</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione centrale con contenuti vari -->
        <div class="rowCenter">
            <div id="center">
                <!-- Informazioni Gogrin -->
                <div id="gogrin">
                    <img src="../assets/footer-logo.png" alt="footer-logo">
                    <div id="gogrinText">War should never be entered upon until every agency of peace has failed not to be good</div>
                    <div id="logoSocial">
                        <div><i class="fa-brands fa-facebook-f"></i></div>
                        <div><i class="fa-brands fa-google-plus-g"></i></div>
                        <div><i class="fa-brands fa-twitter"></i></div>
                        <div><i class="fa-brands fa-pinterest-p"></i></div>
                    </div>
                </div>

                <!-- Link di emergenza -->
                <div id="emergencyLink">
                    <span>Emergency Link.</span>
                    <a href="#">Organic Food Shop</a>
                    <a href="#">Our Term & Condition.</a>
                    <a href="#">Gogrin Faq Section</a>
                    <a href="#">Our Team Member</a>
                    <a href="#">Our Latest News Feed</a>
                </div>

                <!-- Sezione blog -->
                <div id="ourLatestBlog">
                    <span>Our Latest Blog.</span>
                    <div>
                        <img src="../assets/blo1-70x70.jpg" alt="blo1-70x70">
                        <div>
                            <a href="#">Where I live, I am surrounded by fresh, organic food, so I eat really well.</a>
                            <br>
                            <span>December 17, 2022</span>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/blo2-70x70.jpg" alt="blo2-70x70">
                        <div>
                            <a href="#">What we get at home is 100% organic food. We are also 90% vegetarian.</a>
                            <br>
                            <span>December 16, 2022</span>
                        </div>
                    </div>
                </div>

                <!-- Galleria -->
                <div id="ourGallery">
                    <span>Our Gallery</span>
                    <div id="galleryImg">
                        <img src="../assets/blo1-100x100.jpg" alt="">
                        <img src="../assets/blo9-100x100.jpg" alt="">
                        <img src="../assets/blo8-100x100.jpg" alt="">
                    </div>
                    <div>
                        <img src="../assets/blo7-100x100.jpg" alt="">
                        <img src="../assets/blo4-100x100.jpg" alt="">
                        <img src="../assets/blo3-100x100.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione inferiore con copyright -->
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
        background-size: cover;
        background-position: center;
        width: 60%;
        position: absolute;
        top: -13%;
        left: 20%;

        div#up {
            width: 90%;
            margin: 0 auto;
            height: 18vh;
            color: white;
            font-size: 2.2rem;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            div.email {
                width: 500px;
                display: flex;
                flex-wrap: wrap;

                input {
                    width: 70%;
                    min-width: 220px;
                    font-size: 0.9rem;
                    padding: 15px 120px 15px 30px;
                    color: #8e8e8e;
                }

                div#button {
                    width: 30%;
                    font-size: 1.1rem;
                    background-color: $green;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: background-color $time;

                    &:hover {
                        background-color: #050e62;
                    }
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
            color: white;
            padding: 180px 0 65px;
            display: flex;
            justify-content: center;
            align-items: start;
            gap: 20px;

            #gogrin {
                width: calc(100% / 20 * 3);
                margin-left: 60px;

                div#gogrinText {
                    margin: 25px 0;
                }

                div#logoSocial {
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 15px;

                    div {
                        background-color: $green;
                        height: 40px;
                        width: 40px;
                        border-radius: 5px;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: background-color $time;

                        &:hover {
                            background-color: $orange;
                        }
                    }

                    .fa-brands {
                        padding: 15px;
                    }
                }
            }

            #emergencyLink {
                width: calc(100% / 20 * 2);
                display: flex;
                flex-direction: column;
                gap: 20px;

                span {
                    font-size: 1.3rem;
                    font-weight: 600;
                }

                a {
                    transition: color $time;

                    &:hover {
                        color: $orange;
                    }
                }
            }

            #ourLatestBlog {
                width: calc(100% / 20 * 4);
                display: flex;
                flex-direction: column;
                gap: 15px;

                span:first-child {
                    font-size: 1.3rem;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                &>div {
                    display: flex;
                    gap: 10px;
                }

                img {
                    height: 70px;
                    width: 70px;
                }

                a {
                    font-weight: 600;
                    transition: color $time;

                    &:hover {
                        color: $orange;
                    }
                }
            }

            #ourGallery {
                width: calc(100% / 20 * 4);

                span {
                    font-size: 1.3rem;
                    font-weight: 600;
                }

                div#galleryImg {
                    margin-top: 20px;
                }

                img {
                    margin: 5px;
                    cursor: pointer;
                    height: 80px;
                }
            }
        }
    }

    .rowDown {
        background-color: $green;

        div#down {
            width: 60%;
            margin: 0 auto;
            height: 8vh;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;

            div a {
                font-size: 1.2rem;
                color: white;
                margin: 20px;
                transition: color $time;

                &:hover {
                    color: $orange;
                }
            }
        }
    }
}
</style>
