
<template>
    <div id="example">
        <h1 v-on:click="clickFunc()">{{ msg }}</h1>
    </div>
</template>
<script>
module.exports = {
  name: 'Example',
  data(){
    return { msg: 'A vue example', times: 0,
      clickFunc(){
        this.times += 1;
        this.msg = 'you click me ' + this.times + ' times >///<';
      }
    }
  }
}
</script>
<style>
  h1 {
    color: red;
  }
</style>
