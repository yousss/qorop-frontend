<template>
  <VueCountdown class="vueCountdown" :class="size" :time="setTimer(startTime, endTime)" @end="$emit('end')">
    <template slot-scope="props">                            
      <div class="timer">
        <div class="subTimer" v-if="days || props.days!==0">
          <div><span class="countdown-holder">{{ props.days }}</span><p v-if="size != 'xtra-small'">DAYS</p></div>
          <div><span class="semi-colon"> : </span></div>
        </div>
        <div class="subTimer" v-if="hours"> 
          <div><span class="countdown-holder">{{ props.hours }}</span><p v-if="size != 'xtra-small'">HOURS</p></div>
          <div><span class="semi-colon"> : </span></div>
        </div>
        <div class="subTimer" v-if="minutes"> 
          <div><span class="countdown-holder">{{ props.minutes }}</span><p v-if="size != 'xtra-small'">MINS</p></div>
          <div><span class="semi-colon"> : </span></div>
        </div>
        <div class="subTimer" v-if="seconds"> 
          <div><span class="countdown-holder">{{ props.seconds }}</span><p v-if="size != 'xtra-small'">SECS</p></div>
        </div>
      </div>
    </template>
  </VueCountdown>
</template>


<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  props: {
    startTime: String,
    endTime: String,
    size: {
      type: String,
      default: 'normal'
    },
    days: {
      type: Boolean,
      default: true
    },
    hours: {
      type: Boolean,
      default: true
    },
    minutes: {
      type: Boolean,
      default: true
    },
    seconds: {
      type: Boolean,
      default: true
    }
  },
  components: {
    VueCountdown
  },
  methods: {
    setTimer (startTime, endTime) {
      return this.$jwMoment.setCountDownTimer(startTime, endTime)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

.vueCountdown {
  margin: 25px 0;

  .timer {
    display: flex;

    .subTimer {
      display: flex;

      p {
        margin-top: 5px;
        text-align: center;
        font-size: 0.8rem;
        margin-bottom: 10px;
      }

      .countdown-holder {
        font-family: 'Teko';
        background-color: $secondary2;
        font-size: 2.5rem;
        border-radius: 15px;
        justify-content: center;
        align-content: center;
        display: flex;
        width: 60px;
        padding: 10px;
      }

      .semi-colon {
        font-size: 3rem;
        color: $color-grey;
        display: table-cell;
        text-align: center;
        padding: 0 10px;
        line-height: 55px;
        overflow: hidden;
        vertical-align: bottom;
      }
    }
  }

  &.small {
    .timer {
      .subTimer {
        .countdown-holder {
          width: 50px;
          font-size: 2rem;
          // padding: 0;
        }

        .semi-colon {
          font-size: 2rem;
          padding: 0 5px;
          line-height: 40px;
        }
      }
    }
  }

  &.xtra-small {
    .timer {
      .countdown-holder {
        width: 5px;
        font-size: 1.4rem;
      }

      .semi-colon {
        font-size: 1rem;
        line-height: 25px;
      }
    }
  }
}

.xtra-small {
  margin-top: 5px;

  .timer .subTimer .countdown-holder {
    padding: 0;
    background-color: transparent;
  }
}

.small {
  margin: 10px 0;

  .timer .subTimer .countdown-holder {
    padding: 0;
  }
}

.lightColor {
  .timer .subTimer .countdown-holder {
    background-color: $secondary2 !important;
  }
}

@media only screen and (min-width: 0px) and (max-width: 800px) {
  .vueCountdown .timer .subTimer .semi-colon {
    padding: 0 6px;
  }
}
</style>

<style lang="stylus" scoped>
@media only screen and (min-width: 0px) and (max-width: 480px) {
  .vueCountdown {
    .timer {
      .subTimer {
        .countdown-holder {
          width: 40px;
          padding: 2px;
        }
      }
    }
  }
}
</style>
