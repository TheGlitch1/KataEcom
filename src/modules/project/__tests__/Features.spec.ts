import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Features from '@project/components/Features.vue'
import { keyFeatures } from '@project/constants/KeyFeatures'

const vuetify = createVuetify({
  components,
  directives,
})

describe('Features.vue', () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    wrapper = mount(Features, {
      global: {
        plugins: [vuetify],
      },
    });
  });

  it('renders initial state correctly', () => {
    const buttons = wrapper.findAll('button.v-btn');
    const featuresButton = buttons[0];
    const technicalChoicesButton = buttons[1];
    // @ts-ignore
    expect(wrapper.vm.showFeatures).toBe(true);
    expect(featuresButton.classes()).toContain('text-primary');
    expect(technicalChoicesButton.classes()).not.toContain('text-primary');
    expect(wrapper.findAll('li').length).toBe(keyFeatures.features.reduce((sum, feature) => sum + feature.points.length, 0));
  });

  it('toggles to technical choices on button click', async () => {
    const buttons = wrapper.findAll('button.v-btn');
    const featuresButton = buttons[0];
    const technicalChoicesButton = buttons[1];

    await technicalChoicesButton.trigger('click');

    // After click, Technical Choices button should have 'text-primary' class and Features button should not.
    expect(featuresButton.classes()).not.toContain('text-primary');
    expect(technicalChoicesButton.classes()).toContain('text-secondary');
    // @ts-ignore
    expect(wrapper.vm.showFeatures).toBe(false);
    expect(wrapper.findAll('li').length).toBe(keyFeatures.technicalChoices.reduce((sum, choice) => sum + choice.points.length, 0));
  });

  it('renders item content correctly', () => {
    const feature = keyFeatures.features[0];
    const featureCard = wrapper.findAll('.v-card').at(0);

    expect(featureCard?.find('.v-card-title').text()).toContain(feature.title);
    feature.points.forEach(point => {
      expect(featureCard?.text()).toContain(point);
    });
  });
});
