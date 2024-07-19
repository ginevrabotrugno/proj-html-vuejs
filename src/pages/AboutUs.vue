<script>
import CarouselTestimonial from "../components/CarouselTestimonial.vue";
import FormMaps from "../components/FormMaps.vue";
import BestSale25 from "../components/BestSale25.vue";
import JumbotronMini from "../components/JumbotronMini.vue";
import ProductCard from "../components/ProductCard.vue";
import FeatureLists from "../components/FeatureLists.vue";
import Counter from '../components/Counter.vue';
import HealthIsWealth from '../components/HealthIsWealth.vue';
import OrganicProds from "../components/OrganicProds.vue";


export default {
    name: 'AboutUs',
    components:{
        CarouselTestimonial,
        FormMaps,
        BestSale25,
        JumbotronMini,
        ProductCard,
        FeatureLists,
        Counter,
        HealthIsWealth,
        OrganicProds,
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
            cardClass1: 'list_items',

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
            <JumbotronMini />
        </section>
        <section>
            <HealthIsWealth 
            imageSrc="src/assets/image1project.jpg" 
            />
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
                <div class="row small">
                    <ProductCard :info="product" :cardClass="cardClass1" v-for="(product, i) in filteredProducts()" :key="i" />
                </div>
                <a href="#" id="btn_allproduct" class="button orange_bg" @click.prevent="selectCategory('All Products')">ALL PRODUCTS</a>
            </div>
        </section>

        <!-- Organic Fruits and Vegetables -->
         <section>
            <OrganicProds />
         </section>

        <section>
            <HealthIsWealth 
            imageSrc="src/assets/image2project.jpg" 
            :inverse="true"
            :showContactInfo="false"
            />
        </section>

        <!-- features list -->
         <section>
            <FeatureLists/>
         </section>

        <section>
            <CarouselTestimonial/>  
        </section>
        
        <!-- COUNTER -->
        <section>
            <div class="container_90">
                <Counter  backgroundClass="about-counter"  labelTextColor="#000"/>
            </div>
           
        </section>

        <section>
            <BestSale25 />
        </section>
        
        <section>
            <FormMaps />
        </section>
    </main>
</template>

<style scoped lang="scss">
@use'/src/style/partials/variables' as*;

section {
    margin-bottom: 100px;
    overflow-x: hidden;

    .container {
        width: 80%;
        margin: 0 auto;

        .row {
            display: flex;
            justify-content: space-between;
            gap: 25px;
            align-items: center;

        }

        .section_title {
            text-align: center;
            line-height: 1.5;
            padding: 20px;
            position: relative;
            font-weigth: 600;
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
        }

        ul {
            margin: 25px 0;
            display: flex;
            justify-content: center;
            gap: 20px;
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




</style>