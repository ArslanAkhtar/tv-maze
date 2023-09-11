import { describe, it, vi, expect } from 'vitest'
import useFetchShows from '@/composables/FetchData'
import Seasons from '../Seasons.vue'
import { mount, flushPromises } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const expectedAPIResponse = {
  id: 1,
  url: 'https://www.tvmaze.com/seasons/1/under-the-dome-season-1',
  number: 1,
  name: '',
  episodeOrder: 13,
  premiereDate: '2013-06-24',
  endDate: '2013-09-16'
}

describe('Seasons Component', () => {
  it('matches data from api based on id prop', async () => {
    const { loadShowSeasons } = useFetchShows()
    const wrapper = mount(Seasons, {
      props: { id: 1 },
      global: {
        plugins: [vuetify]
      }
    })
    const { data } = await loadShowSeasons(wrapper.props().id)
    expect(data.value[0]).toMatchObject(expectedAPIResponse)
  })
})
