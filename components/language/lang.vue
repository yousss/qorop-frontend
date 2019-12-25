<template>
  <div class="language-wrapper text-center hidden-sm-and-down">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          fab
          x-small
          icon
        >
         <v-avatar height="32px">
          <img :src="loadImage($i18n.locale === 'en' ? 'English' : 'Khmer')" alt="image loading language" />
         </v-avatar>
        </v-btn>
      </template>
      <v-list>
         <v-list-item-group >
            <v-list-item
              v-for="locale in locales" :key="locale.code"
              @click="onChangeLang(locale.code)"
            >
              <v-list-item-icon>
                <v-avatar height="32px">
                  <img :src="loadImage(locale.name)" alt="language loading" />
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="locale.name">
                  <!-- <nuxt-link to="" ></nuxt-link> -->
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
         </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      locales: [
        { code: 'en', name: this.$t('links.langEn') },
        { code: 'kh', name: this.$t('links.langKh') }
      ],
    }
  },
  methods: {
    loadImage (imageSrc) {
      try {
        return require(`~/assets/img/${imageSrc}.svg`)
      } catch (error) {
        console.log(error)
        return
      }
    },

    langFilter (localeCode) {
      if (localeCode === 'en') {
        return this.loadImage('united-kingdom')
      }

      return this.loadImage('cambodia')
    },

    onChangeLang (locale) {
      if (this.$i18n.locale === undefined)
        this.$i18n.locale = 'en'

      this.$i18n.locale = locale
    }
  },
  created () {
    if (this.$i18n.locale === undefined)
      this.$i18n.locale = 'en'
  }
}
</script>
