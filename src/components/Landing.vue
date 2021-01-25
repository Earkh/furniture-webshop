<template>
    <div id="landing">
        <div id="landingText" class="d-flex flex-column justify-content-center align-content-between">
            <h4 class="d-4">Quality and design within reach</h4>
            <h1 class="d-1">Furnish your dreams. </h1>
            <h5 class="d-5">We offer you a wide and varied selection of styles to combine, as well as the best and most innovative collections of furniture, auxiliary, sofas, armchairs, dining rooms, decoration, lighting, bedrooms, mattresses, rest equipment and outdoor furniture ...</h5>
        </div>
        <div id="landingImage">
            <div id="img1" class="d-flex justify-content-end align-items-end">
                <img src="../assets/bedroom.jpg" class="img-fluid rounded" alt="Bedroom">
            </div>
            <div id="img2" class="d-flex justify-content-start align-items-end">
                <img src="../assets/kitchen.jpg" class="img-fluid rounded" alt="Kitchen">
            </div>
            <div id="img3" class="d-flex justify-content-end align-items-start">
                <img src="../assets/living.jpg" class="img-fluid rounded" alt="Living">
            </div>
            <div id="img4" class="d-flex justify-content-start align-content-start">
                <img src="../assets/office.jpg" class="img-fluid rounded" alt="Office">
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
        display: grid;
        grid-template-columns: 40% 60%;
    }
    #landingText{
        padding: 20%;
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
    #img2 > img{
        max-width: 70%;
        max-height: 70%;
    }
    #img3 > img{
        max-width: 60%;
        max-height: 60%;
    }
</style>