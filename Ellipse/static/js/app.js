var Vue = require('vue')
var Vuex = require('vuex')
Vue.use(Vuex)
var Example = require('$vue/example.vue')

const store = new Vuex.Store({
  state: {
    ajax_data: ""
  },
  mutations: {
    showBackendValue(state, a_text) {
      state.ajax_data = a_text
    }
  },
  actions: {
    getData(context) {
      fetch('/other').then(function(response) {
          return response.json().then(function(json) {
            console.log(json);
            context.commit('showBackendValue', json.key)
          },
          () => context.commit('showBackendValue', "Error")
        );
      });
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(Example)
})

store.dispatch('getData')
