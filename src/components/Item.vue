<template>
    <tr>
        <th scope="row"><img :src=item.img style="width: 10vh"></th>
        <td>{{item.name}}</td>
        <td>
            <div>
                <button class="btn btn-outline-danger btn-sm" @click="decrement(item.id)">
                    -
                </button>
                {{item.qty}}
                <button class="btn btn-outline-success btn-sm" @click="increment(item.id)">
                    +
                </button>
            </div>
        </td>
        <td>{{item.price * item.qty}} €</td>
    </tr>
</template>

<script>
import {useStore} from 'vuex'
export default {
    props: ['item'],
    setup(){
        const store = useStore()
        const increment = id => {store.commit('increment', id)}
        const decrement = id => {store.commit('decrement', id)}
        return {increment, decrement}
    }
}
</script>

<style scoped>
    td{
        height: 100%;
        display: inline-flexbox;
        justify-content: center;
        align-content: center;
    }
    .table > tbody > tr > td {
        vertical-align: middle;
    }
</style>