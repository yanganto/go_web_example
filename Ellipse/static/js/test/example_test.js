
// require vue from js file not npm module for testing
var Vue = require('../vue.js')
// var Vuex = require('vuex')
// Vue.use(Vuex)

var ExampleComponent = require('../vue/example.vue')

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


describe('example.vue', function () {

  // asserting JavaScript options
  it('should have correct message', function () {
    expect(ExampleComponent.data().msg).toBe('A vue example')
  })

  // asserting rendered result by actually rendering the component
  it('should render correct message', function () {
    var vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': ExampleComponent
      },
    }).$mount()
    console.log(vm.$el)
    expect(vm.$el.querySelector('h1').textContent).toBe('A vue example')
  })

  // asserting rendered result by actually rendering the component
  it('check clikc function', function () {
    var vm = new Vue(
        ExampleComponent,
        store
    ).$mount()
    // test click by clicking element
    vm.$el.querySelector('h1').click()

    // test click by sending event
    // var clickEvent = new MouseEvent("click", {
    //     "view": window,
    //     "bubbles": true,
    //     "cancelable": false
    // });
    // vm.$el.querySelector('h1').dispatchEvent(clickEvent);

    // test click by js function
    // vm.clickFunc();

    expect(vm.times).toBe(1);
    expect(vm.msg).toBe('you click me 1 times >///<');

    // the re-render may not so quick
    //expect(vm.$el.querySelector('h1').innerHTML).toBe('you click me 1 times >///<')
  })
})
