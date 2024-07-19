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
    components: {
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
    data() {
        return {
            trendingProds: [
                {
                    img: 's5.jpg',
                    title: 'Fress Apple',
                    price: '$18',
                    sale: false,
                    categories: ['Apple'],
                    id: 1
                },
                {
                    img: 's2.jpg',
                    title: 'Fress Cobies',
                    price: '$18',
                    discount: '$17',
                    sale: true,
                    categories: ['Vegetable'],
                    id: 2
                },
                {
                    img: 's8.jpg',
                    title: 'Fresh Watermelon',
                    price: '$15',
                    sale: false,
                    categories: ['Food', 'Orange'],
                    id: 3
                },
                {
                    img: 's1.jpg',
                    title: 'Organic Juice',
                    price: '$20',
                    discount: '$15',
                    sale: true,
                    categories: ['Apple', 'Orange'],
                    id: 4
                },
                {
                    img: 's4.jpg',
                    title: 'Fresh Blueberries',
                    price: '$19',
                    discount: '$14',
                    sale: true,
                    categories: ['Apple', 'Food'],
                    id: 5
                },
                {
                    img: 's10.jpg',
                    title: 'organic letus',
                    price: '$18',
                    discount: '$23',
                    sale: false,
                    categories: ['Food', 'Vegetable'],
                    id: 6
                },
                {
                    img: 's9.jpg',
                    title: 'Red Gajor',
                    price: '$28',
                    discount: '$26',
                    sale: true,
                    categories: ['Food', 'Vegetable'],
                    id: 7
                },
                {
                    img: 's7.jpg',
                    title: 'Naga pepper',
                    price: '$21',
                    sale: false,
                    categories: ['Apple', 'Orange'],
                    id: 8
                },
            ],
            prodCategories: ['All Products', 'Apple', 'Food', 'Orange', 'Vegetable'],
            selectedCategory: 'All Products',
            newsFeed: [
                {
                    img: 'blo1-390x250.jpg',
                    resp: 'Gogrin',
                    date: '17 Dec 2022',
                    tite: 'Where I live, I am surrounded by fresh, organic food, so I eat really well.',
                },
                {
                    img: 'blo2-390x250.jpg',
                    resp: 'Gogrin',
                    date: '16 Dec 2022',
                    tite: 'What we get at home is 100% organic food. We are also 90% vegetarian.',
                },
                {
                    img: 'blo3-390x250.jpg',
                    resp: 'Gogrin',
                    date: '15 Dec 2022',
                    tite: 'If we as a society are willing to have a preference for organic food farmer',
                },
            ],
            cardClass1: 'list_items',
            cardClass2: 'trending_products'
        }
    },
    methods: {
        // Metodo per restituire il percorso dell'immagine
        returnImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
        // Metodo per selezionare la categoria
        selectCategory(category) {
            this.selectedCategory = category;
        },
        // Metodo per filtrare i prodotti in base alla categoria selezionata
        filteredProducts() {
            if (this.selectedCategory === 'All Products') {
                return this.trendingProds;
            }
            const filtered = this.trendingProds.filter(product => product.categories.includes(this.selectedCategory));
            return this.reorderProducts(filtered);
        },
        // Metodo per riordinare i prodotti in base alla categoria
        reorderProducts(products) {
            if (this.selectedCategory === 'Apple') {
                const order = ['Fress Apple', 'Organic Juice', 'Fresh Blueberries', 'Naga pepper'];
                return order.map(title => products.find(product => product.title === title)).filter(Boolean);
            } else if (this.selectedCategory === 'Orange') {
                const order = ['Fresh Watermelon', 'Organic Juice', 'Naga pepper'];
                return order.map(title => products.find(product => product.title === title)).filter(Boolean);
            }
            return products;
        }
    }
}
</script>

<template>
    <main>
        <!-- Sezione Jumbotron -->
        <section>
            <JumbotronMini />
        </section>
        
        <!-- Sezione HealthIsWealth -->
        <section>
            <HealthIsWealth imageSrc="src/assets/image1project.jpg" />
        </section>

        <!-- Sezione Lista Articoli -->
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
                <transition-group
                    name="list"
                    tag="div"
                    class="row small"
                    enter-active-class="animate__animated animate__rotateIn animate__fadeIn"
                    leave-active-class="animate__animated animate__rotateOut animate__fadeOut"
                >
                    <ProductCard 
                        v-for="(product, i) in filteredProducts()" 
                        :key="product.id" 
                        :info="product" 
                        :cardClass="cardClass1"
                    />
                </transition-group>
                <a href="#" id="btn_allproduct" class="button orange_bg" @click.prevent="selectCategory('All Products')">ALL PRODUCTS</a>
            </div>
        </section>

        <!-- Sezione Prodotti Organici -->
        <section>
            <OrganicProds />
        </section>

        <!-- Sezione HealthIsWealth Inverso -->
        <section>
            <div class="container_80">
                <HealthIsWealth 
                    imageSrc="src/assets/image2project.jpg" 
                    :inverse="true"
                    :showContactInfo="false"
                />
            </div>
        </section>

        <!-- Sezione Liste delle Caratteristiche -->
        <section>
            <FeatureLists />
        </section>

        <!-- Sezione Carousel Testimonial -->
        <section>
            <CarouselTestimonial />  
        </section>
        
        <!-- Sezione Contatore -->
        <section>
            <div class="container_90">
                <Counter backgroundClass="about-counter" labelTextColor="#000" />
            </div>
        </section>

        <!-- Sezione Best Sale -->
        <section>
            <BestSale25 />
        </section>
        
        <!-- Sezione Form Maps -->
        <section>
            <FormMaps />
        </section>
    </main>
</template>

<style scoped lang="scss">
@use '/src/style/partials/variables' as *;

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

        #btn_allproduct {
            transition: background-color $time;

            &:hover {
                background-color: $green;
            }
        }
    }
}
</style>
