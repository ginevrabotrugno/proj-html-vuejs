<script>
import CarouselBig from '../components/CarouselBig.vue';

export default {
    name: 'HomePage',
    components: {
        CarouselBig
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
            <!-- CAROUSEL SMALL -->
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
            gap: 40px;
            align-items: stretch; 

            .col_50 {
                width: calc((100% / 2) - 40px);
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
            }
        }
    }
}
</style>