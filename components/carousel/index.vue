<template>
  <v-carousel
    cycle
    height="94%"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
    class="carousel-container"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <img :src="loadImage(slide)" />
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data () {
    return {
      slides: [
        'main-home-slider-img-1',
        'main-home-slider-img-2',
        'main-home-slider-img-3'
      ],
    }
  },

  methods: {
    loadImage (imageSrc) {
      try {
        return require(`~/assets/img/${imageSrc}.jpg`)
      } catch (error) {
        console.log(error)
        return
      }
    },

  },

}
</script>
<style lang="stylus" >
.carousel-container {
  .fade-transition {
    .fade-leave-active {
      transition: transform 5s, 3s ease-out;
    }

    .fade-enter-active, .fade-leave, .fade-leave-to {
      transition: scale(2) rotate(25deg);
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }
}
</style>