<script>
import CarouselBig from '../components/CarouselBig.vue';
import ImageSmallCarousel from '../components/ImageSmallCarousel.vue';
import BestSale25 from '../components/BestSale25.vue';
import LogoCarousel from '../components/LogoCarousel.vue';
import ProductCard from '../components/ProductCard.vue';
import CarouselTestimonial from '../components/CarouselTestimonial.vue';

export default {
    name: 'HomePage',
    components: {
        CarouselBig,
        ImageSmallCarousel,
        BestSale25,
        LogoCarousel,
        ProductCard,
        CarouselTestimonial
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
                {
                    img: 's4.jpg',
                    title: 'Fresh Blueberries',
                    price: '$19',
                    discount:'$14',
                    sale: true
                },
                {
                    img: 's10.jpg',
                    title: 'organic letus',
                    price: '$18',
                    discount: '$23',
                    sale: false
                },
                {
                    img: 's9.jpg',
                    title: 'Red Gajor',
                    price: '$28',
                    discount: '$26',
                    sale: true
                },
                {
                    img: 's7.jpg',
                    title: 'Naga pepper',
                    price: '$21',
                    sale: false
                },
            ],
            newsFeed: [
                {
                    img:'blo1-390x250.jpg',
                    resp: 'Gogrin',
                    date: '17 Dec 2022',
                    tite:'Where I live, I am surrounded by fresh, organic food, so I eat really well.',
                },
                {
                    img:'blo2-390x250.jpg',
                    resp: 'Gogrin',
                    date: '16 Dec 2022',
                    tite:'What we get at home is 100% organic food. We are also 90% vegetarian.',
                },
                {
                    img:'blo3-390x250.jpg',
                    resp: 'Gogrin',
                    date: '15 Dec 2022',
                    tite:'If we as a society are willing to have a preference for organic food farmer',
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
        <section>
            <CarouselBig />  
        </section>

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
            <ImageSmallCarousel/>
        </section>

        <!-- LIST ITEMS -->
        <section>
            <div class="container img_bg">
                <div class="section_title">
                    <h4 class="orange_txt">Trending Online Store</h4>
                    <h3>GOGRIN ALL <span class="orange_txt">ORGANIC</span> FOOD</h3>
                </div>
                <div class="row">
                    <ProductCard :info="product" v-for="(product, i) in trendingProds" :key="i" />
                </div>
            </div>
        </section>

        <!-- QUOTES CAROUSEL -->
        <section>
            <div class="container">
                <CarouselTestimonial />
            </div>
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
                    <ProductCard :info="product" v-for="(product, i) in trendingProds.slice(0, 4)" :key="i" />
                </div>
            </div>
            
        </section>
        <section>
            <BestSale25 />
        </section>

        <!-- LATEST NEWS -->
        <section>
            <div class="container">
                <div class="section_title">
                    <h4 class="orange_txt">The news whatwe have</h4>
                    <h3 class="green_txt">GOGRIN LATEST<span class="orange_txt">NEWS</span> FEED</h3>
                </div>

                <div class="row">
                    <div class="news_card" v-for="(news, i) in newsFeed" :key="i">
                        <div class="img">
                            <img :src="returnImagePath(`../assets/${news.img}`)" alt="picture">
                            <div class="overlay"></div>
                        </div>
                        <div>
                            <span>
                                <i class="fa-solid fa-user orange_txt"></i>
                                {{ news.resp }}
                            </span>
                            <span>
                                <i class="fa-regular fa-clock orange_txt"></i>
                                {{ news.date }}
                            </span>
                        </div>

                        <h4 class="green_txt">
                            {{ news.tite }}
                        </h4>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reiciendis error recusandae saepe exercitationem, commodi sunt veniam hic! Cupiditate, optio earum. 
                        </p>

                        <a href="#" class="green_txt">READ MORE...</a>

                    </div>
                </div>
            </div>
        </section>

        <section>
            <LogoCarousel />
        </section>



    </main>
</template>

<style scoped lang="scss">
@use'/src/style/partials/variables' as*;

section {
    margin-bottom: 100px;

    .container {
        width: 80%;
        margin: 0 auto;

        .row {
            display: flex;
            justify-content: space-between;
            gap: 25px;
            align-items: center;

            .col_50 {
                width: calc((100% / 2) - 25px);
                position: relative;
                height: 100%;

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

        .news_card {
            width: calc((100% / 2) - 30px);
            line-height: 1.5;

            .img {
                width: 100%;
                height: 250px;
                overflow: hidden;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease-in-out;
                }

                .overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    transition: width 0.3s ease-in-out, height 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out;
                    transform: translate(-50%, -50%);
                }

                &:hover img {
                    transform: scale(1.1);
                }

                &:hover .overlay {
                    width: 100%;
                    height: 100%;
                    top: 50%;
                    left: 50%;
                }
            }

            span {
                margin-right: 10px;
                font-size: 15px;
            }

            h4 {
                font-size: 25px;
                font-weight: 900;
                margin: 20px 0;
            }

            p {
                margin: 20px 0;
                padding-right: 15px;
            }

            a {
                font-weight: 900;
                font-size: 20px;

                &:hover {
                    color: $orange;
                }
            }
        }

    }

    .img_bg {
        background-image: url('../assets/shop-bg-img.jpg');
        background-position: cover;
        color: $white;

        .row {
            padding: 20px;
            flex-wrap: wrap;
        }
    }
}
</style>