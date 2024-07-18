<script>
import CarouselTestimonial from "../components/CarouselTestimonial.vue";
import FormMaps from "../components/FormMaps.vue";
import BestSale25 from "../components/BestSale25.vue";
import JumbotronMini from "../components/JumbotronMini.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
    name: 'AboutUs',
    components:{
        CarouselTestimonial,
        FormMaps,
        BestSale25,
        JumbotronMini,
        ProductCard,
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
        }
    },

}
</script>

<template>
    <main>
        <section>
            <JumbotronMini />
        </section>
        <!-- CAROUSEL TESTIMONIAL-->
        <!-- LIST ITEMS -->
        <section class="list_items">
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

        <section>
            <CarouselTestimonial/>  
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