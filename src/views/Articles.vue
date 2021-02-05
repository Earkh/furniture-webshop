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
              
            <carousel :items-to-show="1" :wrapAround="true" :transition="200">
                <slide class="d-flex justify-content-center" v-for="product in products" :key="product.id">
                    <div class="card" style="width: 18rem;">
                        <img src="../assets/bedroom/malm.webp"  alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{product.name}}</h5>
                            <p class="card-text">{{product.desc}}</p>
                            <p class="card-text d-flex justify-content-between align-items-center">{{product.price}}€ <a href="#" class="btn btn-vue">Buy</a></p>
                            
                        </div>
                    </div>     
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>



        </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'Articles',
  components: {
    ProductCard,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
        return {
            products : [
                {
                    id: 1,
                    name: 'Malm',
                    desc: 'Estructura de cama con 2 cajones',
                    price: 300,
                    img: "malm.webp"
                },
                {
                    id: 2,
                    name: 'Släkt',
                    desc: 'Cama nido, 90x200cm',
                    price: 220,
                    img: ""
                },
                {
                    id: 3,
                    name: 'Brimnes',
                    desc: 'Estructura diván con cajones',
                    price: 199,
                    img: ""
                },
                {
                    id: 4,
                    name: 'Kvitsöy',
                    desc: 'Canapé tapizado, 90x190cm',
                    price: 229,
                    img: ""
                },
                {
                    id: 5,
                    name: 'Songesand',
                    desc: 'Armario, 120x60x190cm',
                    price: 149,
                    img: ""
                },
                {
                    id: 6,
                    name: 'Forsand',
                    desc: 'Armario con espejo, 75x60x200cm',
                    price: 229,
                    img: ""
                },
                {
                    id: 7,
                    name: 'Kullen',
                    desc: 'Cómoda de 5 cajones',
                    price: 49,
                    img: ""
                },
                {
                    id: 8,
                    name: 'Hemnes',
                    desc: 'Cómoda de 3 cajones',
                    price: 119,
                    img: ""
                },
                {
                    id: 9,
                    name: 'Askvoll',
                    desc: 'Mesita de noche de 2 cajones',
                    price: 30,
                    img: ""
                },
                {
                    id: 10,
                    name: 'Ingared',
                    desc: 'Lámpara de mesa',
                    price: 7,
                    img: ""
                },
            ]
        };
    }
};

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
        color: #fff !important;
    }
</style>