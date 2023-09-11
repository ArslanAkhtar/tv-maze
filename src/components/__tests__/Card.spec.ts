import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Card from '../Card.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const mockItem = {
  id: 1,
  name: 'Some movie',
  rating: {
    average: 9
  },
  genres: ['Action', 'Comedy']
}

describe('Card Component', () => {
  it('renders props', () => {
    const wrapper = mount(Card, { props: { item: mockItem } })
    expect(wrapper.props().item).toMatchObject(mockItem)
  })

  it('renders show name', () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [vuetify]
      },
      props: { item: mockItem }
    })
    expect(wrapper.html().includes(mockItem.name)).toBe(true)
  })

  it('renders show genre', () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [vuetify]
      },
      props: { item: mockItem },
      components: components
    })
    expect(wrapper.html().includes(mockItem.genres[0])).toBe(true)
  })
})
