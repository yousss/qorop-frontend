<template>
<div>
  <div v-for="(data, index) in notification.data" :key="index" class="notificationContainer">
    <v-snackbar :timeout="notification.timeout" :color="data.color" v-model="notification.active" :top="notification.y === 'top'" :right="notification.x === 'right'" :style="{ top: ((index*50))+'px', right: '0px' }" class="snackBar">
      {{ $t(data.text) }}
    </v-snackbar>
  </div>
</div>
</template>

<script>
import { bus } from '@/store/services/bus'

export default {
  name: "JwNotification",
  data() {
    return {
      notification: {
        active: false,
        data: [],
        timeout: 4500,
        x: 'right',
        y: 'top'
      },
    }
  },
  mounted() {
    bus.$on('showNotification', (detail) => {
      this.notification.data = detail
      this.notification.active = true
    })
  },
  beforeDestroy() {
    bus.$off('showNotification')
  }
}
</script>

<style lang="stylus" >
@import '~assets/stylus/variables.styl';

.notificationContainer {
  .snackBar {
    position: fixed;
    display: block;
    .snack__wrapper {
      float: right !important;
      .snack__content {
        height: auto;
      }
    }
  }
}
</style>
