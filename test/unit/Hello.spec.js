import Vue from 'vue'
import Home from '../../src/components/Home.vue'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Home)
    })
    expect(vm.$el.querySelector('h1.title').textContent).toBe('Welcome to IClient')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
