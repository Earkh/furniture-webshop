<template>
    <div id="container">
        <h1 class="text-light pb-4">Contact Us</h1>
        <div class="contactus col-sm-10 col-md-8 col-lg-5 pt-2 pb-4">
            Name: <input type="text" class="form-control">
            Email: <input type="email" class="form-control">
            Message:
            <textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
            <p></p>
            <button class="btn btn-vue">Send</button>
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
        background-image: url('../assets/contactus.jpg');
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1 {
        text-shadow: black 0.1em 0.1em 0.2em;
    }
    .contactus {
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