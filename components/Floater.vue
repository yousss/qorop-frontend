<template>
  <v-speed-dial v-model="fab" left bottom open-on-hover direction="top" transition="slide-y-reverse-transition" class="floaterAction">
    <template v-slot:activator>
      <v-btn v-model="fab" class="customColor" fab>
        <v-icon>mdi-headphones-settings</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </template>
    <v-btn fab class="liveChat" @click="liveChat">
      <v-icon>mdi-chat-processing</v-icon>
    </v-btn>
    <v-btn fab class="telegram" @click="telegram">
      <v-icon>mdi-telegram</v-icon>
    </v-btn>
    <div class="telegram-holder">
      <p>Telegram</p>
      <p class="txt-id">@jeetwinsupport</p>
      <img class="telegramQR" src="~assets/img/qrcodeTelegram.png" alt="telegram qrcode">
    </div>
  </v-speed-dial>
  
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => {
    return {
      fab: false
    }
  },
  methods: {
    ...mapActions(['setLogs']),
    liveChat () {
      let logData = {
        category: 'FloatingChatHead',
        code: 'EVT-LiveChat',
        log_detail: {
          msg: 'clicked on live chat'
        },
        flag: 'info'
      }
      this.setLogs(logData);

      try {
        this.$liveChat.openLiveChat();
        return false;
      } catch (e) {
        console.log(e);
      }
    },
    telegram () {
      let logData = {
        category: 'FloatingChatHead',
        code: 'EVT-Telegram',
        log_detail: {
          msg: 'clicked on Telegram'
        },
        flag: 'info'
      }
      this.setLogs(logData);

      window.open('http://www.t.me/jeetwinsupport', '_blank')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

.floaterAction {
  position: fixed;
  width: 80px;
  z-index: 9999;

  .customColor {
    background: $primary !important;
  }

  .liveChat {
    background-color: $white !important;
    color: $primary;
  }

  .telegram {
    background-color: #0088cc !important;
    color: $white;

    &:hover {
      &+.telegram-holder {
        transform: scale3d(1, 1, 1) !important;
      }
    }
  }

  .telegram-holder {
    position: absolute;
    left: 80px;
    width: 220px;
    height: 270px;
    transform: scale3d(0, 0, 0);
    transform-origin: 0 0;
    transition: all 0.3s ease;
    background-color: $secondary;
    border-radius: 10px;
    padding: 10px;
  }

  p {
    margin-bottom: 5px;
    line-height: 20px;
    font-size: 0.86rem;
  }

  .txt-id {
    color: $primary;
    font-size: 1rem;
  }
}
</style>