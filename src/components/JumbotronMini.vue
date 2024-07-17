<script>
export default {
    name: 'JumbotronMini',
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    }
}
</script>

<template>
<div class="container">
    <div class="row">
        <ul>
            <li>You Here!</li>
            <li><a href="/">Home</a></li>
            <li v-if="currentRoute === 'Home' || currentRoute === 'About'">About</li>
            <li v-else>Contact</li>
        </ul>
    </div>
</div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container {
    .row {
        background-image: url('src/assets/breckum-img.jpg');
        height: 200px;
        width: 100%;
        background-size: cover;
        background-position: center;

        // flex
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            color: white;
            list-style: none;
            padding: 0;

            li {
                float: left;
                margin-right: 10px;

                a:hover{
                    color: $orange;
                    transition-duration: 0.8s;

                }

                &:nth-child(2)::before, &:nth-child(3)::before {
                    content: "\f105"; 
                    font-family: "Font Awesome 5 Free"; 
                    font-weight: 900;
                    padding-right: 8px;
                }
            }
        }
    }
}
</style>
