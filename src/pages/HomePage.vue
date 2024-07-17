<script>
import CarouselBig from '../components/CarouselBig.vue';
import ImageSmallCarousel from '../components/ImageSmallCarousel.vue';


export default {
    name: 'HomePage',
    components: {
        CarouselBig,
        ImageSmallCarousel,
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
                        <p class="top">
                            I have a need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a relationship to hosting culture. <span class="orange_txt">It isn't really about it helps to do that. I have a relationship to hosting culture.</span>
                        </p>
                        <p class="bottom">
                            Need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a relationship to hosting culture. 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <ImageSmallCarousel/>
        </section>
  
    </main>
</template>

<style scoped lang="scss">

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

                .top {
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                .bottom {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
            }
        }
    }
}
</style>