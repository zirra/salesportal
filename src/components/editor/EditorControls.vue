<template>
  <div class="editor-controls">
    <div class="branding-options">
      <p>
        <input-control label="Color 1" @input="update" did="color1"/><br/>
        <input-control label="Color 2" @input="update" did="color2"/><br/>
        <input-control label="Color 3" @input="update" did="color3"/><br/>
        <input-control label="Color 4" @input="update" did="color4"/><br/>
        <input-control label="Color 5" @input="update" did="color5"/><br/>
      </p>
      <div :style="`background-color:${color1}; height:10vw; width:10vw;`"></div>
      <div :style="`background-color:${color2}; height:10vw; width:10vw;`"></div>
      <div :style="`background-color:${color3}; height:10vw; width:10vw;`"></div>
      <div :style="`background-color:${color4}; height:10vw; width:10vw;`"></div>
      <div :style="`background-color:${color5}; height:10vw; width:10vw;`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorControls',
  methods: {
    update (target) {
      this.mutateColor(target)
    }
  }
}
</script>

<style>

</style>