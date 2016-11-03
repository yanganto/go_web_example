// var Vue = require('../vue.js')
// var Example = require('../vue/example.vue')
// // Here are some Jasmine 2.0 tests, though you can
// // use any test runner / assertion library combo you prefer
// describe('Example', () => {
//   // Inspect the raw component options
//   it('has a click function', () => {
//     expect(typeof MyComponent.clickFunc).toBe('function')
//   })
// })

var Vue = require('../vue.js')
var ExampleComponent = require('../vue/example.vue')

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
      }
    }).$mount()
    expect(vm.$el.querySelector('h1').textContent).toBe('A vue example')
  })

  // asserting rendered result by actually rendering the component
  it('check clikc function', function () {
    var vm = new Vue(
        ExampleComponent
    ).$mount()
    // vm.$el.querySelector('h1').click()
    // var clickEvent = new MouseEvent("click", {
    //     "view": window,
    //     "bubbles": true,
    //     "cancelable": false
    // });
    // vm.$el.querySelector('h1').dispatchEvent(clickEvent);
    vm.clickFunc();
    expect(vm.times).toBe(1);
  })
})
