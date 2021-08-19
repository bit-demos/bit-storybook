import React from 'react';

export type MyComponentProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function MyComponent({ text }: MyComponentProps) {
  return (
    <div>
      {text}
    </div>
  );
}
