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
<div class="container1">
    <div class="row">
        <div class="col">
            <div v-if="currentRoute === 'Home' || currentRoute === 'About'">About</div>
            <div v-else>Contact</div>
            <ul>
                <li>You Here!</li>
                <li><a href="/">Home</a></li>
                <li v-if="currentRoute === 'Home' || currentRoute === 'About'">About</li>
                <li v-else>Contact</li>
            </ul>

        </div>
        
    </div>
</div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container1 {
    .row {
        background-image: url('src/assets/breckum-img.jpg');
        height: 200px;
        width: 100%;
        background-size: cover;
        background-position: center;
        color: $white;

        // flex
        display: flex;
        justify-content: center;
        align-items: center;
        .col{
            div{
                text-align: center;
                font-size: 2rem;
                font-weight: 600;
                margin-bottom: 10px;
            }
            ul {
            
            list-style: none;
            padding: 0;

            li {
                float: left;
                margin-right: 5px;

                a{
                    transition: color $time;
                }
                
                a:hover{
                    color: $orange;

                }

                &:nth-child(2)::before, &:nth-child(3)::before {
                    content: "\f105"; 
                    font-family: "Font Awesome 5 Free"; 
                    font-weight: 600;
                    padding-right: 8px;
                }
            }
            }



        }

        
    }
}
</style>
