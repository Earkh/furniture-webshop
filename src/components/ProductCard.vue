<template>
    <div class="card" style="width: 14rem;">
        <div class="card-img-top" alt="Card image cap"></div>
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#" class="btn btn-vue">Buy</a>
        </div>
    </div>
</template>

<script>

export default {
    props: {
    title: {
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