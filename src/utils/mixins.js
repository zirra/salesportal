import Vue from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

Vue.mixin({
  methods: {
    ...mapActions({}),
    ...mapMutations({
      mutateBorderSize: 'mutateBorderSize',
      mutateColor: 'mutateColor'
    }),
    debug(err) {
      console.log(err)
    },
    styles(target) {
      console.log(target + this.color1)
      return `border-color: ${this.color1};`
    },
    classes(target) {
      let classes = ''
      classes += target
      if(this.borderRadius) {
        classes += ' border-radius'
      }
      if(this.borderSize != null) {
        classes += ` border-thickness-${this.borderSize}`
      }
      return (`${classes}`)
    }
  },
  computed: {
    ...mapGetters({
      borderRadius: 'borderRadius',
      borderSize: 'borderSize',
      color1: 'color1',
      color2: 'color2',
      color3: 'color3',
      color4: 'color4',
      color5: 'color5'
    })
  }
})