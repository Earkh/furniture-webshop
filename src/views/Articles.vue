<template>
    <div id="articlesContainer">
        <div class="row">
            <div id="articlesHeader" class="col d-flex justify-content-center align-items-center">
                <div class="layer">
                </div>
                    <span style="z-index: 2;">Bedrooms</span>
            </div>
        </div>
        <div id="sales" class="row d-flex flex-column justify-content-center p-1">
            Sales
            <div id="slider" class="d-flex justify-content-center align-items-center">Slider</div>
        </div>
        <div class="row d-flex justify-content-around align-items-end mt-3" id="articlesCards">
            <carousel>
                <slide>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </slide>
                <slide>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import { Carousel, Slide } from 'vue-carousel'

export default {
    name: "Articles",
    components: {
        ProductCard,
        Carousel,
        Slide
    }
}
</script>

<style scoped>
    #articlesContainer{
        width: 100%;
        height: 92vh;
    }
    #articlesHeader{
        background-image: url('../assets/bedroom1.jpg');
        background-color: rgba(0, 0, 0, 0.4);
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 25vh;
        font-size: xx-large;
    }
    .layer{
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    #sales{
        background: #efe583;
    }
    #slider{
        background: gainsboro;
        width: 100%;
        height: 25vh;
    }
    .btn-vue{
        color: #bad97b !important;
    }
</style>