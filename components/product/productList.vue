<template>
    <div class="popular-product">
        <v-container>
          <v-row no-gutters>
          <v-layout row justify-center>
              <product v-for="product in products" :key="product.id" :dataSrc="product" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" />
          </v-layout>
          </v-row>
        </v-container>
    </div>
</template>

<script>
import product from './index.vue'
export default {
  data () {
    return {
      products: [
        { id: 1, img: 'product-1' },
        { id: 2, img: 'product-2' },
        { id: 3, img: 'product-3' },
        { id: 4, img: 'product-4' },
      ]
    }
  },
  components: {
    product,
  },
}
</script>

<style lang="stylus" scoped></style>