import Vue from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

Vue.mixin({
  methods: {
    ...mapActions({}),
    ...mapMutations({
      mutateColor: 'mutateColor'
    }),
    debug(err) {
      console.log(err)
    }
  },
  computed: {
    ...mapGetters({
      color1: 'color1',
      color2: 'color2',
      color3: 'color3',
      color4: 'color4',
      color5: 'color5'
    })
  }
})