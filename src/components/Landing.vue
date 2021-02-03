<template>
    <div id="landing" class="row d-flex justify-content-center">
        <div id="landingText" class="d-flex flex-column justify-content-center align-content-between col-sm-10 col-md-8 col-lg-4">
            <h4 class="d-4">Quality and design within reach</h4>
            <h1 class="d-1">Furnish your dreams</h1>
            <h5 class="d-5">We offer you a wide and varied selection of styles to combine, as well as the best and most innovative collections of furniture, auxiliary, sofas, armchairs, dining rooms, decoration, lighting, bedrooms, mattresses, rest equipment and outdoor furniture ...</h5>
        </div>
        <div id="landingImage" class="col-sm-10 col-md-8 col-lg-6">
            <div id="img1" class="img-container d-flex justify-content-end align-items-end">
                <img src="../assets/bedroom.jpg" class="img-fluid rounded" alt="Bedroom">
                <!-- <div class="overlay">
                    <div class="text">Hello World</div> // TODO Fix IMG overlays
                </div> -->
            </div>
            <div id="img2" class="img-container d-flex justify-content-start align-items-end">
                <img src="../assets/kitchen.jpg" class="img-fluid rounded" alt="Kitchen">
                <!-- <div class="overlay">
                    <div class="text">Hello World</div>
                </div> -->
            </div>
            <div id="img3" class="img-container d-flex justify-content-end align-items-start">
                <img src="../assets/living.jpg" class="img-fluid rounded" alt="Living">
                <!-- <div class="overlay">
                    <div class="text">Hello World</div>
                </div> -->
            </div>
            <div id="img4" class="img-container d-flex justify-content-start align-content-start">
                <img src="../assets/office.jpg" class="img-fluid rounded" alt="Office">
                <!-- <div class="overlay">
                    <div class="text">Hello World</div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #landing{
        width: 90%;
        height: 90%;
        background: #fff;
    }
    #landingText{
        padding: 5%;
    }

    #landingImage{
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        grid-gap: 1em;
    }
    img{
        max-width: 80%;
        max-height: 80%;
    }
    h1{
        color: #42b983;
    }
    h5{
        text-align: justify;
        text-justify: inter-word;
    }
    #img2 > img, #img2 .overlay{
        max-width: 70%;
        max-height: 70%;
    }
    #img3 > img, #img3 .overlay{
        max-width: 60%;
        max-height: 60%;
    }
    #img4 > img, #img4 .overlay{
        max-height: 70%;
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
        background-color: rgba(0, 0, 0, 0.5);
    }   
    .img-container{
        position: relative;
    }
    .img-container:hover .overlay {
        opacity: 1;
    }
</style>