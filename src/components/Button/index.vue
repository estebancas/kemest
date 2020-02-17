<template>
  <b-button variant="primary">{{ text }}</b-button>
</template>

<script>
export default {
  name: "FlatButton",
  props: {
      text: {
          type: String,
          default: () => 'Save',
          require: false
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  border-top: 2px solid;
}
</style>
