<script>
import CarouselTestimonial from "../components/CarouselTestimonial.vue";
import FormMaps from "../components/FormMaps.vue";
import BestSale25AboutUs from "../components/BestSale25AboutUs.vue";

export default {
    name: 'AboutUs',
    components:{
        CarouselTestimonial,
        FormMaps,
        BestSale25AboutUs,
    }
}
</script>

<template>
    <main>
        <!-- CAROUSEL TESTIMONIAL-->
        <section>
            <CarouselTestimonial/>  
        </section>
        <section>
            <BestSale25AboutUs />
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