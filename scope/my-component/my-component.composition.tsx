import React from 'react';
import { MyComponent } from './my-component';
import { BasicStory } from './my-component.stories';

export const BasicComposition = () => (
  <MyComponent text="hello from MyComponent composition" />
);

export const FromStorybookComposition = () => (
  <BasicStory />
);
