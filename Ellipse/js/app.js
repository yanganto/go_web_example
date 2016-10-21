var Vue = require('./vue.js')
var Example = require('./example.js')
// Example.data = function(){
//     return {msg: "A Example Vue app"}
// }
new Vue({
  el: '#app',
  render: h => h(Example)
})
