import type { Meta } from '@storybook/react';
// @ts-ignore
import { Add } from '@carbon/react/icons';
import Button from './Button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

export const Primary = {
  args: {
    title: 'Start new task',
    kind: 'primary',
    size: 'md',
    icon: Add
  },
};

export const Secondary = {
  args: {
    title: 'Next',
    kind: 'secondary',
    size: 'md'
  },
};

export const Tertiary = {
  args: {
    title: 'Cancel',
    kind: 'tertiary',
    size: 'md'
  },
};

export const Danger = {
  args: {
    title: 'Delete',
    kind: 'danger',
    size: 'md'
  },
};
