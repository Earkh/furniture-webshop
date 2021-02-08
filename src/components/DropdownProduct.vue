<template>
    <div class="row p-2 m-2">
        <div class="col-6"><img :src="item.img" style="width: 10vh;"></div>
        <div class="col-6 d-flex flex-column align-items-start justify-content-center">
            <span class="font-weight-bold">{{ item.name }}</span> <br>
            {{ item.qty }} piece/s <br>
            {{ item.price }} €
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    props: ['item']
}
</script>

<style>

</style>