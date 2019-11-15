<template>
  <v-tooltip :bottom="!left" :left="left" :disabled="checkDevice()" max-width=200 content-class="toolTipWrapper" >
    <div slot="activator">
      <slot name="trigger"></slot>
    </div>
    <span class="messageWrapper">
      <slot name="message"></slot>
    </span>
  </v-tooltip>
</template>

<script>
export default {
  name: "JwTooltip",
  props: {
    left: Boolean
  },
  methods: {
    checkDevice () {
      return this.$mq === 'sm' ? true : false
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/variables.styl';

.toolTipWrapper {
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: inset 0px 0px 1px 1px rgba(255, 255, 255, 0.05);
  -moz-box-shadow: inset 0px 0px 1px 1px rgba(255, 255, 255, 0.05);
  box-shadow: inset 0px 0px 1px 1px rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 10px;

  .messageWrapper {
    color: $white;
    font-weight: bold;

    span {
      overflow-wrap: break-word;
      text-align: center;
      display: block;
    }
  }
}
</style>

