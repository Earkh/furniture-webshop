<template>
    <div class="card" style="width: 14rem;">
        <div class="card-img-top" alt="Card image cap"></div>
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">{{desc}}</p>
            <a href="#" class="btn btn-vue">Buy</a>
        </div>
    </div>
</template>

<script>

export default {
    props: {
    name: {
      type: String,
      required: true
    },
    desc: {
        type: String,
        required: true
    }
  }
}
</script>

<style>
.card-img-top{
    width: 100%;
    height: 150px;
    background-color: cadetblue;
}
</style>