<template>
  <div class="dateWrapper">
    <q-input
      :placeholder="placeholder" 
      :value="model"
      :color="color"
      @input="input()"
      v-model="state"
      :error="formHandle.$error"
      :name="name"
      dark
      type="text"
      :disable="disable"
      :label="floatLabel"
      hide-underline
      no-error-icon
      hide-bottom-space
    >
      <template v-slot:append>
        <q-icon :name="icon" />
      </template>
      <q-popup-proxy @hide="onHide" ref="qDateProxy" transition-show="scale" transition-hide="scale">
        <q-date v-model="state" today-btn @input="() => $refs.qDateProxy.hide()" />
      </q-popup-proxy>
    </q-input>
  
    <div class="errorWrapper" v-if="formHandle.$error">
      <span class="error" v-for="error in errors" :key="error">{{errorMessage[error]}}</span>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      state: ''
    }
  },
  props: {
    dark: {
      type: Boolean,
      default: true
    },
    model: String | Number,
    type: String,
    name: String,
    handler: Object,
    formData: Object,
    floatLabel: String,
    icon: {
      type: String,
      default: 'arrow_drop_down'
    },
    placeholder: String,
    disable: Boolean,
    readonly: Boolean,
    mask: String,
    color: {
      type: String,
      default: 'primary'
    }
  },
  model: {
    prop: 'model',
    event: 'updateModel'
  },

  methods: {
    input () {
      this.$emit('updateModel', this.state);
      this.$emit('change');
    },

    onHide () {
      this.$emit('updateModel', this.state);
      this.$emit('change');
    }
  },
  watch: {
    'model': function () {
      this.state = this.model
    },
  },
  computed: {
    errors: function () {
      return Object.getOwnPropertyNames(this.formHandle).filter(x => {
        return this.formHandle[x] === false && x[0] !== '$';
      });
    },
    formHandle: function () {
      let data = this.name.split('.').reduce((acc, curr) => {
        return acc[curr];
      }, this.handler.form);
      return data;
    },
    errorMessage: function () {
      let data = this.name.split('.').reduce((acc, curr) => {
        return acc[curr];
      }, this.formData.errorMessages);
      return data;
    },
  }
};
</script>
<style lang="stylus">
.q-date__header {
  background-color: #1d3043;
}

.dateWrapper {
  .errorWrapper {
    text-align: right;
    color: $color-red;
    font-size: 12px;
  }

  .error {
    display: block;
    width: 100%;
    margin-top: 5px;
  }

  .q-field__control {
    padding: 0;
    background: transparent !important;
  }
}
</style>