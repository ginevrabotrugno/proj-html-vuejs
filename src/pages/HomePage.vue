<script>
import CarouselBig from '../components/CarouselBig.vue';
import ImageSmallCarousel from '../components/ImageSmallCarousel.vue';
import BestSale25 from '../components/BestSale25.vue';
import LogoCarousel from '../components/LogoCarousel.vue';
import ProductCard from '../components/ProductCard.vue';
import CarouselTestimonial from '../components/CarouselTestimonial.vue';
import Counter from '../components/Counter.vue';
import NewsCard from '../components/NewsCard.vue';

export default {
    name: 'HomePage',
    components: {
        CarouselBig,
        ImageSmallCarousel,
        BestSale25,
        LogoCarousel,
        ProductCard,
        CarouselTestimonial,
        Counter,
        NewsCard
    },
    data(){
        return {
            trendingProds: [
                {
                    img: 's5.jpg',
                    title: 'Fress Apple',
                    price: '$18',
                    sale: false,
                    categories: ['Apple']
                },
                {
                    img: 's2.jpg',
                    title: 'Fress Cobies',
                    price: '$18',
                    discount: '$17',
                    sale: true,
                    categories: ['Vegetable']

                },
                {
                    img: 's8.jpg',
                    title: 'Fresh Watermelon',
                    price: '$15',
                    sale: false,
                    categories: ['Food', 'Orange']

                },
                {
                    img: 's1.jpg',
                    title: 'Organic Juice',
                    price: '$20',
                    discount: '$15',
                    sale: true,
                    categories: ['Apple', 'Orange']
                },
                {
                    img: 's4.jpg',
                    title: 'Fresh Blueberries',
                    price: '$19',
                    discount:'$14',
                    sale: true,
                    categories: ['Apple', 'Food']
                },
                {
                    img: 's10.jpg',
                    title: 'organic letus',
                    price: '$18',
                    discount: '$23',
                    sale: false,
                    categories: ['Food', 'Vegetable']
                },
                {
                    img: 's9.jpg',
                    title: 'Red Gajor',
                    price: '$28',
                    discount: '$26',
                    sale: true,
                    categories: ['Food', 'Vegetable']
                },
                {
                    img: 's7.jpg',
                    title: 'Naga pepper',
                    price: '$21',
                    sale: false,
                    categories: ['Apple', 'Orange']
                },
            ],
            prodCategories: ['All Products', 'Apple', 'Food', 'Orange', 'Vegetable'],
            selectedCategory: 'All Products',
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
                
            ],
            cardClass1: 'list_items',
            cardClass2: 'trending_products'
        }
    },
    methods: {
        returnImagePath(imgPath){
            return new URL (imgPath, import.meta.url).href;
        },
        // Metodo per aggiornare la categoria selezionata
        selectCategory(category) {
            this.selectedCategory = category;
        },
        // Metodo per filtrare i prodotti in base alla categoria selezionata
        filteredProducts() {
            if (this.selectedCategory === 'All Products') {
                return this.trendingProds;
            }
            return this.trendingProds.filter(product => product.categories.includes(this.selectedCategory));
        }
    }
}
</script>

<template>
    <main>
        <section>
            <CarouselBig />  
        </section>

        <!-- info -->
        <section class="floating_img">
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
                            
                            <p>
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
                <nav>
                    <ul>
                        <li v-for="(category, i) in prodCategories" :key="i">
                            <a href="#" @click.prevent="selectCategory(category)">
                                {{ prodCategories[i] }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="row">
                    <ProductCard :info="product" :cardClass="cardClass1" v-for="(product, i) in filteredProducts()" :key="i" />
                </div>
                <a href="#" id="btn_allproduct" class="button orange_bg" @click.prevent="selectCategory('All Products')">ALL PRODUCTS</a>
            </div>
        </section>

        <!-- QUOTES CAROUSEL -->
        <section>
            <div>
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
            <div class="container_90">

                <Counter backgroundClass="home-counter" labelTextColor="#fff"  />
  
            </div>
        </section>

        <!-- TOP TRENDING -->
        <section>
            <div class="container">
                <div class="section_title">
                    <h4 class="orange_txt">Running week top selling</h4>
                    <h3 class="green_txt">TOP <span class="orange_txt">TRENDING</span> ORGANIC FOOD</h3>
                </div>

                <div class="row">
                    <ProductCard :info="product" :cardClass="cardClass2" v-for="(product, i) in trendingProds.slice(0, 4)" :key="i" />
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
                    <NewsCard :info="news" v-for="(news, i) in newsFeed" :key="i" />
                </div>
            </div>
        </section>

        <section>
            <div class="container">
            <LogoCarousel />
            </div>
        </section>



    </main>
</template>

<style scoped lang="scss">
@use'/src/style/partials/variables' as*;

@keyframes float {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

section {
    margin-bottom: 100px;
    // da rivedere per togliere la sporcatura orizzontale
    overflow-x: hidden;
    padding-bottom: 50px;

    .container {
        width: 80%;
        margin: 0 auto;

        .row {
            display: flex;
            justify-content: start;
            gap: 25px;
            align-items: center;

            .col_50 {
                width: calc((100% / 2) - 25px);
                position: relative;
                height: 100%;

                h2 {
                    font-size: 50px;
                    font-weight: 600;
                }

                .text-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    flex: 1; 
                    line-height: 1.5;
                    padding-right: 20px;

                    .top {
                        margin-bottom: 30px;
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
                    font-weight: 600;

                    a {
                        position: absolute;
                        left: 20px;
                        bottom: 20px;
                        font-size: 20px;
                        transition: $time;

                        &:hover {
                            color: $orange;
                        }
                    }

                    h3 {
                        max-width: 80%;
                        font-size: 40px;
                        font-weight: 600;
                    }
                }
            }

        }

        .section_title {
            text-align: center;
            line-height: 1.5;
            padding: 20px;
            position: relative;
            font-weight: 600;
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

    .img_bg {
        background-image: url('../assets/shop-bg-img.jpg');
        background-position: cover;
        color: $white;
        text-align: center;
        padding: 20px 0 100px;

        .row {
            padding: 20px;
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        ul {
            margin: 25px 0;
            display: flex;
            justify-content: center;
            gap: 40px;
            align-items: center;

            li {
                font-size: 20px;
                transition: color $time;

                &:hover {
                    color: $orange;
                }
            }
        }
        #btn_allproduct{
            transition: background-color $time;
            &:hover{
                background-color: $green;
            }
        }
    }
}

.floating_img {
    position: relative;

    &::after {
        content: url("../assets/fe-shap1-1.png");
        position: absolute;
        top: 0;
        right: -50px;
        animation: float 3s ease-in-out infinite;
    }

    .container {
        margin-bottom: 50px;
    }
}
</style>