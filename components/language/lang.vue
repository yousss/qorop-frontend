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
          <img :src="loadImage($i18n.locale === 'en' ? 'English': 'Khmer')" alt="image loading language" />
         </v-avatar>
        </v-btn>
      </template>
      <v-list>
         <!-- <v-list-item-group >
            <v-list-item
              v-for="locale in $i18n.locales" :key="locale.code"
              :class="$i18n.locale === locale.code ? 'active': 'not-active' "
              @click="changeLocale(locale.code)"
            >
              <v-list-item-icon>
                <v-avatar height="32px">
                  <img :src="loadImage(locale.name)" alt="language loading" />
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="locale.name">
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
         </v-list-item-group> -->
         <div v-for="locale in $i18n.locales" :key="locale.code" :class="$i18n.locale === locale.code ? 'active': 'not-active' ">
            <a :href="switchLocalePath(locale.code)" @click="setCookie(locale.code)">
              <img :src="loadImage(locale.code)" alt="Country Selector">
            </a>
          </div>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
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
    setCookie (locale) {
      console.log(this.$store, 'lang changed')

      this.$cookie.set('lang', locale)
      // this.$store.app.switchLocalePath(locale)
    }
  }
}
</script>
