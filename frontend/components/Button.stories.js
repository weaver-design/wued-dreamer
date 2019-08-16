import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import MyButton from './Button.vue'

Vue.component('my-button', MyButton)

storiesOf('Button', module)
  .add('with text', () => '<my-button>with text</my-button>')
  .add('with emoji', () => '<my-button>😀 😎 👍 💯</my-button>')
  .add('as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
