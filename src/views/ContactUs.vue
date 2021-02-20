<template>
    <div id="container">
        <h1 class="text-light pb-4">Contact Us</h1>
        <div class="contactus col-sm-10 col-md-8 col-lg-5 pt-2 pb-4">
            Name: <input type="text" class="form-control" id="formName">
            Email: <input type="email" class="form-control" id="formEmail">
            Message:
            <textarea name="message" cols="30" rows="10" class="form-control" id="formMessage"></textarea>
            <p></p>
            <button class="btn btn-vue" @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script>
import sendMessage2DB from '../composables/sendMessage'
export default {
    setup(props, context){
        const { error, message } = sendMessage2DB()
        const sendMessage = async () => {
            const formMessage = document.getElementById('formMessage').value
            const formName = document.getElementById('formName').value
            const formEmail = document.getElementById('formEmail').value
            await message(formMessage, formName, formEmail)
            if (!error.value) {
                context.emit('sendMessage')
            }
        }
        return { sendMessage }
    },
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