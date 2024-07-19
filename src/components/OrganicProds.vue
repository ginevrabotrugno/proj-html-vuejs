<script>

export default {
    name: 'OrganicProds',
    data(){
        return {
            organics: [
                {
                    name: 'Natural Cabbage',
                    icon: 'H3-fe1.png'
                },
                {
                    name: 'Organic Grapes',
                    icon: 'H3-fe5.png'
                },
                {
                    name: 'Fresh Tomato',
                    icon: 'H3-fe2.png'
                },
                {
                    name: 'Fresh Apple',
                    icon: 'H3-fe6.png'
                },
                {
                    name: 'Organic Spinach',
                    icon: 'H3-fe3.png'
                },
                {
                    name: 'Natural Farming',
                    icon: 'H2-fe4.png'
                },
                {
                    name: 'Natural Carrots',
                    icon: 'H3-fe4.png'
                },
                {
                    name: 'Organic Eggplant',
                    icon: 'H2-fe1.png'
                },
            ]
        }
    },
    methods: {
        returnImagePath(imgPath){
            return new URL (imgPath, import.meta.url).href;
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col_30">
                <h2>Our organic <span class="orange_txt">fruits</span> & <span class="orange_txt">vegetable</span></h2>
                <p>
                    Organic is loaded with a sense of rightness, with a set of rules. I would much rather someone bought food that was local and sustainable but not organic than bought organic food 
                </p>
                <a href="#" class="button orange_bg">ABOUT US</a>
            </div>
            <div class="col_70">
                <div class="product" v-for="(organic, i) in organics" :key="i">
                    <img :src="returnImagePath(`../assets/${organic.icon}`)" alt="">
                    <h4>{{ organic.name }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.row {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    padding: 20px 0;

    .col_30 {
        width: calc((100% / 10) * 3 - 30px);

        h2 {
            font-size: 50px;
            font-weight: 900;
        }

        p {
            margin: 25px 0;
            padding-bottom: 25px;
        }

        a {
            transition: $time;

            &:hover {
                background-color: $green;
            }
        }

    }

    .col_70 {
        width: calc((100% / 10) * 7 - 30px);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        text-align: center;

        .product {
            width: calc((100% / 4) - 20px);

            h4 {
                margin: 20px 0;
                cursor: pointer;
                font-size: 18px;
                transition: $time;

                &:hover {
                    color: $orange;
                }
            }
        }
    }
    
}

</style>