<script>
import { info } from 'sass';

export default {
    name: 'ProductCard',
    props: {
        info: Object,
    },
    methods: {
        returnImagePath(imgPath){
            return new URL (imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="returnImagePath(`../assets/${info.img}`)" :alt="info.title">
        <a href="#" class="d_block">
            {{ info.title }}
        </a>
        <div>
            <span class="price" :class="{ barred: info.sale }">{{ info.price }}</span>
            <span class="price" v-if=" info.sale === true "> 
                {{ info.discount }}
            </span>
        </div>
        <div class="icons">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-eye"></i>
        </div>
        <span class="orange_bg sale" v-if= " info.sale === true ">
            SALE!
        </span>
    </div>


</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.card {
    width: calc((100% / 4) - 30px);
    text-align: center;
    line-height: 2;
    box-shadow: 1px 1px 1px 2px rgba($color: #000000, $alpha: 0.2);
    padding: 20px;
    position: relative;

    a {
        font-size: 30px;
        font-weight: 700;

        &:hover {
            color: $orange;
        }
    }

    .price {
        font-size: 20px;
        margin-right: 10px;
    }

    .barred {
        text-decoration: line-through;
        font-size: 18px;
    }

    .sale {
        font-weight: 900;
        padding: 5px 15px;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .icons {
        display: none;
        width: 100%;
        text-align: center;
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


</style>