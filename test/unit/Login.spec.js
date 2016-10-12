import Vue from 'vue'
import Login from '../../src/components/Login.vue'

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Login)
    })
    console.log(vm.$el.querySelector('button.button.is-primary'))
    expect(vm.$el.querySelector('button.button.is-primary').textContent).toBe('Welcome to IClient')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
