<template>
  <div class="container">
    <h1>About Us</h1>
    <p>{{ $t("about.content") }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.title
    };
  },
  head: {
    title: "About Page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "About page description"
      }
    ]
  },
  components: {}
};
</script>

<style lang="stylus" scoped></style>
