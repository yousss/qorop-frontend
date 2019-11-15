<template>
  <div class="lds-css ng-scope">
    <div style="width:100%;height:100%" class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
}
</script>

<style lang="stylus" scoped>
// button loader animation
@keyframes lds-ripple {
  0% {
    top: 15px;
    left: 15px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 31px;
    height: 31px;
    opacity: 0;
  }
}
@-webkit-keyframes lds-ripple {
  0% {
    top: 15px;
    left: 15px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 31px;
    height: 31px;
    opacity: 0;
  }
}
.lds-ripple {
  position: relative;
}
.lds-ripple div {
  box-sizing: content-box;
  position: absolute;
  border-width: 2px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(1) {
  border-color: white;
}
.lds-ripple div:nth-child(2) {
  border-color: #eeeeee;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.lds-ripple {
  width: 20px !important;
  height: 20px !important;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -35%)
}


</style>
