
<template>
    <div id="example">
        <h1 v-on:click="clickFunc">{{ msg }}</h1>
        <p>{{ value }}</p>
    </div>
</template>
<script>
module.exports = {
  name: 'Example',
  data(){
    return {
      msg: 'A vue example',
      times: 0
    }
  },
  methods: {
    clickFunc(){
      this.times += 1;
      this.msg = 'you click me ' + this.times + ' times >///<';
    }
  },
  computed: {
    value() {
      return this.$store.state.ajax_data
    }
  }
}
</script>
<style>
  h1 {
    color: red;
  }
</style>
