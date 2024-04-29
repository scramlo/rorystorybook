import type { Meta, StoryObj } from '@storybook/vue3';

import Card from './Card.vue';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  argTypes: {
    shadowSize: {
        options: ['small', 'medium', 'large'],
        control: { type: 'radio' }
    }
  },
  args: {
    hideHeader: false,
    shadowSize: 'medium',
  },
};

export const WithImage: Story = {
    render: (args) => ({
      components: { Card },
      setup() {
        return { args };
      },
      template: `
      <Card v-bind="args">
        <img style="max-width: 100%" src="https://picsum.photos/2500/1000" alt="Random image" />
      </Card>`,
    }),
    argTypes: {
      shadowSize: {
          options: ['small', 'medium', 'large'],
          control: { type: 'radio' }
      }
    },
    args: {
      hideHeader: false,
      shadowSize: 'medium',
    },
  };