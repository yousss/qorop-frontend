<script>
import Vue from 'vue'
export default {
  render(h) {
    return  h('iframe', {
      on: { load: this.renderChildren }
    })
  },
  data () {
    return {
      iApp: {}
    }
  },
  beforeUpdate() {
    //freezing to prevent unnessessary Reactifiation of vNodes
    this.iApp.children = Object.freeze(this.$slots.default)
  },  
  methods: {
    renderChildren() {
      const children = this.$slots.default
      const body = this.$el.contentDocument.body      
      const el = document.createElement('DIV') // we will mount or nested app to this element
      body.appendChild(el)
      const iApp = new Vue({
        name: 'iApp',
        //freezing to prevent unnessessary Reactifiation of vNodes
        data: { children: Object.freeze(children) }, 
        render(h) {
          return h('div', this.children)
        },
      })
      iApp.$mount(el) // mount into iframe
      this.iApp = iApp // cache instance for later updates
    }
  }
}
</script>

<style lang="stylus" scoped>
iframe{
  width: 100%;
  height 100%;
}
</style>