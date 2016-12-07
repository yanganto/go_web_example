
// require vue from js file not npm module for testing
var Vue = require('./vue.js')
var Vuex = require('vuex')
Vue.use(Vuex)

var ExampleComponent = require('$vue/example.vue')

// const state = { }
//
// export const mutations = {
//   showBackendValue: function(state, a_text){
//       state.ajax_data = "Fake data"
//   }
// }
// export default new Vuex.Store({
//   state,
//   mutations
// })
const store = new Vuex.Store({
  state: {
    ajax_data: "Fake Data"
  }
})

function logattr(o) {
  console.log(o)
  console.log("==========")
  for(var a in o){
    console.log(a)
  }
  console.log("==========")
}

describe('example.vue', function () {

  // asserting JavaScript options
  it('should have correct message', function () {
    expect(ExampleComponent.data().msg).toBe('A vue example')
  })

  // asserting rendered result by actually rendering the component
  it('should render correct message', function () {
    var vm = new Vue({
      template: '<div><test></test></div>',
      store,
      components: {
        'test': ExampleComponent
      },
    }).$mount()
    // console.log(vm.$el)
    expect(vm.$el.querySelector('h1').textContent).toBe('A vue example')
  })

  // asserting rendered result by actually rendering the component
  it('check clikc function', function () {
    var vm = new Vue({
      template: '<div><test></test></div>',
      store,
      components: {
        'test': ExampleComponent
      },
    }).$mount()
    // test click by clicking element
    vm.$el.querySelector('h1').click()

    expect(vm.$children[0].times).toBe(1);
    expect(vm.$children[0].msg).toBe('you click me 1 times >///<');
  })
})
