import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createTestingPinia } from '@pinia/testing'
import { config } from '@vue/test-utils'
import { vi } from 'vitest'

const vuetify = createVuetify({
  components,
  directives,
})

// global.ResizeObserver = require('resize-observer-polyfill')

config.global.plugins = [vuetify, createTestingPinia({ createSpy: vi.fn })]
config.global.stubs = {
  VBtnCart: {
    template: '<VBtn>Add to cart</VBtn>'
  }
}