<template>
  <div>
      <h3> {{char.name}} </h3>
      <img class="item-image" :src="char.image">
      <router-link :to="'/details/' +char.id">Details</router-link>
  </div>
</template>

<script>
export default {
    props: {
        char:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .item-image {
        width: 300px;
        object-fit: cover;
    }
</style>