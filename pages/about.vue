<template>
    <div class="container">
        <h1>About Us</h1>
        <p>{{ $t('about.content') }}</p>
        <hr>
        <TwitterHeadCard />
    </div>
</template>

<script>
import TwitterHeadCard from '~/components/twitter-head-card.vue'

export default {
  data () {
    return {
      title: this.title
    }
  },
  head: {
    title: 'About Page',
    meta: [
      { hid: 'description', name: 'description', content: 'About page description' }
    ]
  },
  components: {
    TwitterHeadCard
  }
}
</script>

<style lang="stylus" scoped></style>