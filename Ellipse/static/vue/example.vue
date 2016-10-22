
<template>
    <div id="example">
        <h1 v-on:click="clickFunc()">{{ msg }}</h1>
    </div>
</template>
<script>
module.exports = {
  name: 'Example',
  data(){
    return { msg: 'A vue example',
      clickFunc: function(){
        console.log(this);
        this.msg = 'you click me >///<';
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
