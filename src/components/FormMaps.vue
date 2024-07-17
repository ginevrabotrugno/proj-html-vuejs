<script>
export default {
    name: 'FormMaps'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <form action="">
                <span>Our Contact</span>
                <h2>Get In A Touch</h2>
                <input type="text" name="Name" placeholder="Name*">
                <input type="email" name="email" placeholder="email*"/>
                <input type="text" name="Phone" placeholder="Phone*">
                <textarea rows="18" cols="80" id="TITLE">
                </textarea>
                <div id="button">
                    <div onclick="sendMessage">Send Message</div>
                </div>
            </form>
             <iframe loading="lazy" src="https://maps.google.com/maps?q=webitrangpur&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="webitrangpur" aria-label="webitrangpur"></iframe>

        </div>
    </div>
    
    

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container{
    margin-bottom: 100px;

    .row{
        display: flex;
        justify-content: center;
        gap: 20px;

        form{
            height: 800px;
            width: 550px;
            padding: 50px;
            border-radius: 5px;
            box-shadow: 10px 10px 15px 15px rgb(249, 249, 249);
            // flex
            display: flex;
            flex-direction: column;
            justify-content: start;
            gap: 20px;

            span{
                color: $orange;
            }

            h2{
                font-size: 2.5rem;
            }
            input{
                border-radius: 5px;
                padding: 10px;
                border: 1px solid rgb(238, 238, 238);
            }
            textarea{
                border: 1px solid rgb(238, 238, 238);
            }

            #button{
                height: 50px;
                width: 180px;
                font-size: 1.1rem;
                background-color: $orange;
                color: white;
                cursor: pointer;
                // flex
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    background-color: $green;
                    transition-duration: 0.8s;
                }

            }
        }

        iframe{
            height: 700px;
            width: 550px;
            border: 1px solid white;
        }


    }

}




</style>