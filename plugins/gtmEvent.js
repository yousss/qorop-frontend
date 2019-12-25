export default ({app}, inject) => {
  let gtmEvent = {
    gtmAddDataLayer(dataLayerValue) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(dataLayerValue);
    }
  }

  app.$gtmEvent = gtmEvent;
  inject('gtmEvent', gtmEvent);
}