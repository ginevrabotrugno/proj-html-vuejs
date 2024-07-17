<script>
import CarouselTestimonial from "../components/CarouselTestimonial.vue";
import FormMaps from "../components/FormMaps.vue";
import BestSale25 from "../components/BestSale25.vue";
import JumbotronMini from "../components/JumbotronMini.vue";

export default {
    name: 'AboutUs',
    components:{
        CarouselTestimonial,
        FormMaps,
        BestSale25,
        JumbotronMini,
    }
}
</script>

<template>
    <main>
        <section>
            <JumbotronMini />
        </section>
        <!-- CAROUSEL TESTIMONIAL-->
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

// provvisorio per dividere le sezioni
section{
    margin-bottom: 50px;
}



</style>