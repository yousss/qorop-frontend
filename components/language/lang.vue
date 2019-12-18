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
          <img :src="loadImage($i18n.locale === undefined ? 'English' : 'Khmer')" alt="image loading language" />
         </v-avatar>
        </v-btn>
      </template>
      <v-list>
         <v-list-item-group v-model="langSelected">
            <v-list-item
              v-for="locale in availableLocales" :key="locale.code"
            >
              <v-list-item-icon>
                <v-avatar height="32px">
                  <img :src="loadImage(locale.name)" alt="language loading" />
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="locale.name">
                  <nuxt-link :to="switchLocalePath(locale.code)"></nuxt-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
         </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => {
    return { langSelected: 'en' }
  },
  methods: {
    setCookie (locale) {
      this.langSelected = locale.code;
      console.log(this.langSelected)
      this.$cookie.set('lang', locale)
      this.$i18n.setLocaleCookie(locale)
    },
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
    }
  },

  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  },
  watch: {
    langSelected (val) {
      this.$i18n.locale = val
    }
  }
}
</script>
