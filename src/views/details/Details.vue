<template>
  <div>
      <h1>Details</h1>
      {{Post}}
  </div>
</template>

<script>
export default {
  name: 'Details',
  computed: {
    Post() {
      return this.$store.getters.getPost
    }
  },
  methods: {
    loadPost() {
        let id = this.$route.params.id
      this.$store.dispatch("setPost",id)
    }
  },
  created() {
    this.loadPost()
  }
}
</script>

<style>

</style>