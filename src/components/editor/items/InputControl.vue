<template>
  <span>
    {{label}}: <input v-bind:value="value"
      @input="returnval">
  </span>
</template>

<script>
export default {
  name: 'InputControl',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    did: {
      type: String,
      required: true
    }
  },
  methods: {
    returnval(val) {
      this.$emit('input', {value: val.target.value, did: this.did})
    }
  }
}
</script>

<style>

</style>