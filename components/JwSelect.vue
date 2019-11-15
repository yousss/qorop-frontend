<template>
  <div>
    <v-select
      :label="floatLabel"
      :value="model"
      :items="options"
      @input="input"
      item-text="label"
      item-value="value"
      v-model="state"
      :disabled="disable"
      :loading="loading"
      autocomplete
      :search-input.sync="searchInput"
    />
    <div class="error-container" v-if="formHandle.$error">
      <span class="errorList" v-for="error in errors" :key="error">* {{ $t(errorMessage[error]) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "JeSelect",
  data () {
    return {
      state: '',
      searchInput: ''
    }
  },
  props: ['model', 'name', 'handler', 'formData', 'floatLabel', 'disable', 'options', 'loading'],
  model: {
    prop: 'model',
    event: 'updateModel'
  },
  created () {
    this.state = this.model
  },
  methods: {
    input () {
      this.$emit('updateModel', this.state)
      this.$emit('change')
    }
  },
  watch: {
    'model': function () {
      this.state = this.model
    }
  },
  computed: {
    errors: function () {
      return Object.getOwnPropertyNames(this.formHandle).filter(x => this.formHandle[x] === false && x[0] !== '$')
    },
    formHandle: function () {
      let data = this.name.split('.').reduce((acc, curr) => {
        return acc[curr]
      }, this.handler.form)
      return data
    },
    errorMessage: function () {
      let data = this.name.split('.').reduce((acc, curr) => {
        return acc[curr]
      }, this.formData.errorMessages)
      return data
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

.error-container {
  text-align: right;
  // color: #db2828;
  font-size: 12px;
  /* width: 100%; */
}

.errorList {
  color: $color-red;
  display: block;
  width: 100%;
  margin-top: 5px;
}
</style>

<style lang="stylus">
@import '~assets/variables.styl';

.theme--dark .list .list__tile__mask, .application .theme--dark.list .list__tile__mask {
  background-color: transparent;
  color: $primary;
}

.menu__content--autocomplete {
  margin-top: 20px;
}
</style>
