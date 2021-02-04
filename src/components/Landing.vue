<template>
    <div id="landing" class="row">
        <div id="landingText" class="col-md-12 col-lg-4 d-flex flex-column align-content-center justify-content-center">
            <h4 class="d-4">Quality and design within reach</h4>
            <h1 class="d-1">Furnish your dreams</h1>
            <h5 class="d-5">We offer you a wide and varied selection of styles to combine, as well as the best and most innovative collections of furniture, auxiliary, sofas, armchairs, dining rooms, decoration, lighting, bedrooms, mattresses, rest equipment and outdoor furniture ...</h5>
        </div>
        <div id="landingImage" class="col-md row h-100 w-100 d-flex justify-content-center ml-1" style="cursor: pointer;" onclick="window.location='/articles';">
            <router-link to="/articles" custom v-slot="{ navigate }">
                <div role="link" id="img1" class="img-container col-md-5 rounded" @click="navigate">
                    <div class="overlay rounded">
                        <div class="text">Bedroom</div> 
                    </div>
                </div>
            </router-link>
            <router-link to="/articles" custom v-slot="{ navigate }">
                <div role="link" id="img2" class="img-container col-md-5 rounded" @click="navigate">
                    <div class="overlay rounded">
                        <div class="text">Kitchen</div> 
                    </div>
                </div>
            </router-link>
            <router-link to="/articles" custom v-slot="{ navigate }">    
                <div role="link" id="img3" class="img-container col-md-5 rounded" @click="navigate">
                    <div class="overlay rounded">
                        <div class="text">Living Room</div> 
                    </div>
                </div>
            </router-link>
            <router-link to="/articles" custom v-slot="{ navigate }">    
                <div role="link" id="img4" class="img-container col-md-5 rounded" @click="navigate">
                    <div class="overlay rounded">
                        <div class="text">Office</div> 
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #img1{
        background-image: url('../assets/bedroom1.jpg');
        /* margin-right: 1px; */
    }
    #img2{
        background-image: url('../assets/kitchen1.jpg');
    }
    #img3{
        background-image: url('../assets/living1.jpg');
        /* margin-right: 1px; */
    }
    #img4{
        background-image: url('../assets/office1.jpg');
    }
    #img1, #img2, #img3, #img4{
        background-size: cover;
        background-position: center;
        margin-bottom: .25em;
        margin-right: .25em;
        padding: 0 !important;
    }
    #landing{
        width: 90%;
        height: 90%;
        background: #fff;
    }
    #landingText{
        padding: 1%;
    }
    #landingImage{
        min-height: 84vh;
    }
    h1{
        color: #42b983;
    }
    h5{
        text-align: justify;
        text-justify: inter-word;
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: x-large;
        color: #fff;
    }   
    .img-container{
        position: relative;
    }
    .img-container:hover .overlay {
        opacity: 1;
    }
</style>