<script>
import CarouselBig from '../components/CarouselBig.vue';

export default {
    name: 'HomePage',
    components: {
        CarouselBig
    },
    data(){
        return {
            trendingProds: [
                {
                    img: 's5.jpg',
                    title: 'Fress Apple',
                    price: '$18',
                    sale: false
                },
                {
                    img: 's2.jpg',
                    title: 'Fress Cobies',
                    price: '$18',
                    discount: '$17',
                    sale: true
                },
                {
                    img: 's8.jpg',
                    title: 'Fresh Watermelon',
                    price: '$15',
                    sale: false
                },
                {
                    img: 's1.jpg',
                    title: 'Organic Juice',
                    price: '$20',
                    discount: '$15',
                    sale: true
                },
            ]
        }
    },
    methods: {
        returnImagePath(imgPath){
            return new URL (imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <main>

        <!-- CAROUSEL BIG -->
        <section>
            <CarouselBig />  
        </section>

        <!-- INFO -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="div col_50">
                        <h2 class="green_txt"><span class="orange_txt">Look what</span> consumer power has done with <span class="orange_txt">organic food;</span> we can do the same with clothes.</h2>
                    </div>
                    <div class="div col_50">
                        <div class="text-container">
                            <p class="top">
                                I have a need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a relationship to hosting culture. <span class="orange_txt">It isn't really about it helps to do that. I have a relationship to hosting culture.</span>
                            </p>
                            <p class="bottom">
                                Need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a relationship to hosting culture. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CAROUSEL SMALL -->
        </section>

        <!-- LIST ITEMS -->
        <section>
            
        </section>

        <!-- QUOTES CAROUSEL -->
        <section>
            
        </section>

        <!-- OFFERS -->
        <section>
            <div class="container">

                <div class="row">

                    <div class="col_50">
                        <div class="label left">

                            <h3>Fresh gurden tomato combo offer... $37</h3>
                            <a href="#">SHOP NOW</a>
    
                        </div>
                    </div>

                    <div class="col_50">

                        <div class="label rigth">

                            <h3>Some ogranic healty fruits combo offer... $49</h3>
                            <a href="#">SHOP NOW</a>

                        </div>

                    </div>
                </div>

            </div>

        </section>
        
        <!-- COUNTER -->
        <section>
        </section>

        <!-- TOP TRENDING -->
        <section>
            <div class="container">
                <div class="section_title">
                    <h4 class="orange_txt">Running week top selling</h4>
                    <h3 class="green_txt">TOP <span class="orange_txt">TRENDING</span> ORGANIC FOOD</h3>
                </div>

                <div class="row">
                    <div class="card" v-for="(prod, i) in trendingProds" :key="i">
                        <img :src="returnImagePath(`../assets/${prod.img}`)" :alt="prod.title">
                        <a href="#" class="d_block">
                            {{ prod.title }}
                        </a>
                        <div>
                            <span class="price" :class="{ barred: prod.sale }">{{ prod.price }}</span>
                            <span class="price" v-if=" prod.sale === true "> 
                                {{ prod.discount }}
                            </span>
                        </div>
                        <div class="icons">
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <span class="orange_bg sale" v-if= " prod.sale === true ">
                            SALE!
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- CONTACT US -->
         <section>

         </section>

        <!-- LATEST NEWS -->
        <section></section>

        <!-- BRAND CAROUSEL -->
         <section></section>
  
    </main>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

section {
    margin-bottom: 100px;

    .container {
        width: 80%;
        margin: 0 auto;

        .row {
            display: flex;
            justify-content: space-between;
            gap: 30px;
            align-items: stretch; 

            .col_50 {
                width: calc((100% / 2) - 30px);
                display: flex;
                flex-direction: column; 
                justify-content: space-between; 

                h2 {
                    font-size: 50px;
                    font-weight: 900;
                }

                .text-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    flex: 1; 
                    font-size: 20px;

                    .top {
                        align-self: flex-start;
                    }

                    .bottom {
                        align-self: flex-end;
                    }
                }

                .left {
                    background-image: url('../assets/offer-img01.jpg');
                }

                .rigth {
                    background-image: url('../assets/offer-img02.jpg');
                }

                .label {
                    background-size: cover;
                    background-position: center;
                    aspect-ratio: 5 / 2;
                    padding: 20px;
                    color: $white;
                    position: relative;
                    font-weight: bold;

                    a {
                        position: absolute;
                        left: 20px;
                        bottom: 20px;
                        font-size: 20px;

                        &:hover {
                            color: $orange;
                        }
                    }

                    h3 {
                        max-width: 80%;
                        font-size: 40px;
                    }
                }
            }

            .card {
                width: calc((100% / 4) - 30px);
                text-align: center;
                line-height: 2;
                box-shadow: 1px 1px 1px 2px rgba($color: #000000, $alpha: 0.2);
                padding: 20px;
                position: relative;

                a {
                    font-size: 30px;
                    font-weight: 700;

                    &:hover {
                        color: $orange;
                    }
                }

                .price {
                    font-size: 20px;
                    margin-right: 10px;
                }

                .barred {
                    text-decoration: line-through;
                    font-size: 18px;
                }

                .sale {
                    font-weight: 900;
                    padding: 5px 15px;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }

                .icons {
                    display: none;
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    top: 55%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    i {
                        display: inline-block;
                        border-radius: 50%;
                        background-color: $white;
                        padding: 10px;
                        margin-right: 10px;
                        box-shadow: 3px 3px 15 rgba($color: #000000, $alpha: 0.3);

                        &:hover {
                            background-color: $orange;
                            color: $white;
                        }
                    }
                }

                &:hover {
                    .icons {
                        display: block;
                    }
                }
            }
        }

        .section_title {
            text-align: center;
            line-height: 1.5;
            padding: 20px;
            position: relative;
            font-weight: 900;

            &::after {
                content: url('../assets/title-shap.png');
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            h4 {
                font-size: 30px;
            }

            h3 {
                font-size: 40px;
            }
        }
    }
}


</style>