<script>
import CarouselTestimonial from "../components/CarouselTestimonial.vue";
import FormMaps from "../components/FormMaps.vue";
export default {
    name: 'AboutUs',
    components:{
        CarouselTestimonial,
        FormMaps,
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
            <FormMaps />
        </section>
    </main>
</template>

<style scoped lang="scss">

</style>