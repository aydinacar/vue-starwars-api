<template>
  <div class="home">
    <ul>
      <li v-for="post in allPosts" :key="post.id">
        <char-card :char="post"></char-card>

      </li>
    </ul>
  </div>
</template>

<script>
import CharCard from '../components/characters/CharCard.vue'


export default {
  components: { CharCard },
  name: 'Home',
  computed: {
    allPosts() {
      return this.$store.getters.getPosts
    }
  },
  data() {
    return {
      arr: []
    }
  },
  methods: {
    loadPosts() {
      this.$store.dispatch("setPosts")
    }
  },
  created() {
    this.loadPosts()
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
