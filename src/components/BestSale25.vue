<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'BestSale25',
    setup() {
        const route = useRoute();

        // Mappa delle immagini di sfondo in base al nome della rotta
        const backgroundImages = {
            Home: 'src/assets/call-to-bg.jpg',
            About: 'src/assets/fe1.jpg',
        };

        // Stile computato per l'immagine di sfondo
        const backgroundImageStyle = computed(() => {
            const routeName = route.name;
            const backgroundImage = backgroundImages[routeName] || backgroundImages.default;

            return {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            };
        });

        return {
            backgroundImageStyle
        };
    }
}
</script>

<template>
    <div class="container_90">
        <div class="row" :style="backgroundImageStyle">
            <div class="col">
                <span>HERE YOU CAN GET 100% FRESH ORGANIC FOOD</span>
                <h2>Best organic food up to 25% off for all product</h2>
                <p>The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of those depths. The most beautiful people we have known are those who have known defeat, known suffering</p>
                <div>
                    <div><i class="fa-brands fa-viber"></i> +088123 56 906</div>
                    <div>APPOINTMENT</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container_90 {
    .row {
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 400px;
        color: white;
        display: flex;
        justify-content: center;

        .col {
            width: 62%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;

            span {
                font-size: 1.2rem;
                font-weight: 600;
            }

            h2 {
                font-size: 2.5rem;
            }

            &>div {
                display: flex;
                gap: 30px;

                &>div {
                    &:nth-child(1) {
                        background-color: $orange;
                        font-weight: 600;
                        cursor: pointer;
                        padding: 15px 25px;
                        border-radius: 5px;
                        transition: background-color $time;

                        &:hover {
                            background-color: $green;
                        }
                    }

                    &:nth-child(2) {
                        background-color: $green;
                        font-weight: 600;
                        cursor: pointer;
                        padding: 15px 25px;
                        border-radius: 5px;
                        transition: background-color $time;

                        &:hover {
                            background-color: $orange;
                        }
                    }
                }
            }
        }
    }
}
</style>
