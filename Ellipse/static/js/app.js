var Vue = require('vue')
var Example = require('./vue/example.vue')
// Example.data = function(){
//     return {msg: "A Example Vue app"}
// }

// source file is iso-8859-15 but it is converted to utf-8 automatically
// fetch("./api/some.data")
//   .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })
new Vue({
  el: '#app',
  render: h => h(Example)
})

fetch('/other').then(function(response) {
    return response.json().then(function(json) {
      console.log(json);
    });
});
