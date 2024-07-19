<script>
export default {
    name: 'NewsCard',
    props: {
        info: Object
    },
    methods: {
        returnImagePath(imgPath){
            return new URL (imgPath, import.meta.url).href;
        },
    }
}
</script>

<template>
<div class="news_card">
    <div class="img">
        <img :src="returnImagePath(`../assets/${info.img}`)" alt="picture">
        <div class="overlay"></div>
    </div>
    <div>
        <span>
            <i class="fa-solid fa-user orange_txt"></i>
            {{ info.resp }}
        </span>
        <span>
            <i class="fa-regular fa-clock orange_txt"></i>
            {{ info.date }}
        </span>
    </div>

    <h4 class="green_txt">
        {{ info.tite }}
    </h4>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reiciendis error recusandae saepe exercitationem, commodi sunt veniam hic! Cupiditate, optio earum. 
    </p>

    <a href="#" class="green_txt">READ MORE...</a>
</div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.news_card {
    width: calc((100% / 2) - 30px);
    line-height: 1.5;
    position: relative; // Assicurati che gli elementi siano posizionati correttamente
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    .img {
        width: 100%;
        height: 250px;
        overflow: hidden;
        position: relative;
        cursor: default;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
        }

        .overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background-color: rgba(0, 0, 0, 0.5);
            transition: width 0.3s ease-in-out, height 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out;
            transform: translate(-50%, -50%);
        }
    }

    &:hover .img img {
        transform: scale(1.1);
    }

    &:hover .img .overlay {
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
    }

    span {
        margin-right: 10px;
        font-size: 15px;

        &:first-child{
            cursor: pointer;
        }

        i{
            cursor: pointer;
        }
        
    }

    h4 {
        font-size: 25px;
        font-weight: 600;
        margin: 20px 0;
        cursor: pointer;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: $orange;
        }
    }

    p {
        margin: 20px 0;
        padding-right: 15px;
    }

    a {
        font-weight: 600;
        font-size: 20px;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: $orange;
        }
    }
}
</style>
