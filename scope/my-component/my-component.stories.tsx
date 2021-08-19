import React from 'react';
import { MyComponent } from './my-component';
import { BasicComposition } from './my-component.composition';

export default {
    title: 'Example/MyComponent',
    component: MyComponent,
    argTypes: { },
  };

export const BasicStory = () => (
  <MyComponent text="hello from MyComponent story" />
);

export const FromCompositionStory = () => (
  <BasicComposition />
);
