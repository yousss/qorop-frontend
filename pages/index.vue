<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <productList />
      </div>
      <!-- <VueCoreImageUpload
        :class="['btn', 'btn-primary']"
        :crop="false"
        @imageuploaded="imageuploaded"
        :data="data"
        :max-file-size="5242880"
        url="your server url" >
      </VueCoreImageUpload> -->
    </v-flex>
  </v-layout>
</template>

<script>
import productList from "./products/product.vue";
import VueCoreImageUpload from "vue-core-image-upload";

export default {
  name: "index",
  head: {
    title: "Home page 🚀",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ],
    noscript: [{ innerHTML: "Body No Scripts", body: true }],
    script: [
      { src: "/head.js" },
      // Supported since 1.0
      { src: "/body.js", body: true },
      { src: "/defer.js", defer: "" }
    ]
  },
  data() {
    return {
      data: {
        src:
          "http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png"
      }
    };
  },
  methods: {
    imageuploaded(res) {
      if (res.errcode == 0) {
        this.src =
          "http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png";
      }
    }
  },
  components: {
    VueCoreImageUpload,
    productList
  }
};
</script>
