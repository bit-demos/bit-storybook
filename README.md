# Steps to get this demo

```sh
git clone ...
cd bit-storybook
bit install
yarn storybook
bit start
```

## Files of interest

### `scope/my-component/my-component.composition.tsx`

Component composition file contains a basic composition and also renders a story.

### `scope/my-component/my-component.stories.tsx`

Component story file contains a basic story and also renders a composition.

## Steps to reproduce this repository

```sh
bit new react-workspace bit-storybook
cd bit-storybook
npm init -y
npx sb init
bit create react my-component
rm -rf stories
```

then:

1. edit `.storybook/main.js` and make it look like this:

  ```js
  module.exports = {
    "stories": [
      "../**/*.stories.mdx",
      "../**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
    ]
  }
  ```

1. open `package.json` and remove all `dependencies` and `devDependencies`.
1. open `workspace.jsonc` and put the following content:

  ```js
  "teambit.dependencies/dependency-resolver": {
    "packageManager": "teambit.dependencies/pnpm",
    "policy": {
      "dependencies": {
        "@babel/core": "^7.13.15",
        "@storybook/addon-actions": "^6.2.7",
        "@storybook/addon-essentials": "^6.2.7",
        "@storybook/addon-links": "^6.2.7",
        "@storybook/preset-typescript": "3.0.0",
        "@storybook/react": "^6.2.7",
        "@testing-library/react": "^10.4.7",
        "@types/classnames": "2.2.11",
        "@types/react": "16.9.43",
        "@types/react-dom": "16.9.10",
        "babel-loader": "^8.2.2",
        "classnames": "2.3.1",
      },
      "peerDependencies": {
        "react": "^16.13.1",
        "react-dom": "^16.13.1"
      }
    }
  ```

```sh
rm -rf node_modules
bit install
yarn storybook
bit start
```
