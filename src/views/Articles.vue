<template>
    <div id="articlesContainer">
        <div class="row">
            <div id="articlesHeader" class="col d-flex justify-content-center align-items-center">
                <div class="layer">
                </div>
                    <span style="z-index: 3;">Bedrooms</span>
            </div>
        </div>
        <div class="row d-flex justify-content-around align-content-center" id="articlesCards">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

        </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
    name: "Articles",
    components: {
        ProductCard
    }
}
</script>

<style>
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
</style>