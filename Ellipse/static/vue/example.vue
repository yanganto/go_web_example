
<template>
    <div id="example">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
module.exports = {
  data: function(){
    return { msg: 'A vue example'}
  }
}
</script>
<style>
  h1 {
    color: red;
  }
</style>
