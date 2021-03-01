<template>
  <div class="editor-controls">
    <div class="branding-options">
      <p v-for="(item, id) in colors" :key="id">
        <input-control :label="item.label" @input="update" :did="item.did"/><br/>
      </p>
      <div :style="`background-color:${color1}; height:2vw; width:10vw;`"></div>
      <div :style="`background-color:${color2}; height:2vw; width:10vw;`"></div>
      <div :style="`background-color:${color3}; height:2vw; width:10vw;`"></div>
      <div :style="`background-color:${color4}; height:2vw; width:10vw;`"></div>
      <div :style="`background-color:${color5}; height:2vw; width:10vw;`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorControls',
  data () {
    return {
      colors: [
        {label: 'Color 1', did: 'color1'},
        {label: 'Color 2', did: 'color2'},
        {label: 'Color 3', did: 'color3'},
        {label: 'Color 4', did: 'color4'},
        {label: 'Color 5', did: 'color5'}
      ]
    }
  },

  methods: {
    update (target) {
      let len = target.value.length
      if(len === 6) {
        let hex = target.value
        let good = ( typeof hex === 'string'
          && hex.length === 6
          && !isNaN(Number('0x' + hex)))
        good ? this.mutateColor(target) : alert('NEED VALID HEX RGB')
      } else {
        this.mutateColor({value: 'fff', did: target.did})
      }
    }
  }
}
</script>

<style>

</style>