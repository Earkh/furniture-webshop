<template>
    <div id="container">
        <h1 class="text-light pb-4">About Us</h1>
        <div class="aboutus col-sm-10 col-md-8 col-lg-5 pt-2 pb-4">
            <span class="h4">We use only the best quality woods to make true your dream home.</span>
            <span class="h5">Find us at:</span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.437310485384!2d-13.53771348432979!3d28.974409682284254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc489d8f0868daeb%3A0xfce0beb4b508b157!2sIKEA%20Lanzarote!5e0!3m2!1ses!2ses!4v1613748323429!5m2!1ses!2ses" width="450" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #container {
        width: 100%;
        height: 92vh;
        background-image: url('../assets/aboutus.jpg');
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1 {
        text-shadow: black 0.1em 0.1em 0.2em;
    }
    .aboutus {
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: .5em;
    }
    iframe {
        border: solid 1px #666;
        border-radius: .5em;
    }
</style>