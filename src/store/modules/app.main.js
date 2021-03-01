const state = {
  borderRadius: false,
  borderSize: 'sm',
  color1: null,
  color2: null,
  color3: null,
  color4: null,
  color5: null
}

const mutations = {
  mutateColor(state, obj) {
    console.log(obj)
    state[obj.did] = obj.value
  },
  mutateBorderSize(state, size) {
    state.borderSize = size
  }
}

const actions = {
}

const getters = {
  borderRadius: (state) => { return state.borderRadius },
  borderSize: (state) => { return state.borderSize },
  color1: (state) => { return `#${state.color1}` },
  color2: (state) => { return `#${state.color2}` },
  color3: (state) => { return `#${state.color3}` },
  color4: (state) => { return `#${state.color4}` },
  color5: (state) => { return `#${state.color5}` }
}

export default {
  state,
  actions,
  mutations,
  getters
}
