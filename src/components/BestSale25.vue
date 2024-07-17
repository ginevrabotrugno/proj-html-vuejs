<script>
export default {
    name: 'BestSale25'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <span>HERE YOU CAN GET 100% FRESH ORGANIC FOOD</span>
                <h2>Best organic food up to 25% off for all product</h2>
                <p>The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of those depths. The most beautiful people we have known are those who have known defeat, known suffering</p>
                <div>
                <div>
                    <div><i class="fa-brands fa-viber"></i> +088123 56 906</div>
                </div>
                <div>
                    <div>APOINMENT</div>
                </div>
            </div>

            </div>
            
            
            
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container{

    .row{
        background-image: url('src/assets/call-to-bg.jpg');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 400px;
        color: white;
        // flex
        display: flex;
        justify-content: center;

        

        .col{
            width: 48%;

            // flex
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;

            span{
                font-size: 1.2rem;
                font-weight: bold;
            }

            h2{
                font-size: 2.5rem;
            }

            &>div{
            display: flex;
            gap: 30px;

            &>div{

                &:nth-child(1){
                    background-color: $orange;
                    font-weight: bold;
                    cursor: pointer;
                    padding: 15px 25px;
                    border-radius: 5px;

                    &:hover{
                        background-color: $green;
                        transition-duration: 0.8s;
                    }
                }

                &:nth-child(2){
                    background-color: $green;
                    font-weight: bold;
                    cursor: pointer;
                    padding: 15px 25px;
                    border-radius: 5px;

                    &:hover{
                        background-color: $orange;
                        transition-duration: 0.8s ;
                    }
                }
                
            }
        }


        }

        
    }
}


</style>
