// import { Route } from 'react-router-dom';
// import {StyleDecorator}  from "./../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
// import type { Preview } from "@storybook/react";

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
//   // decorators: [(Story) => Story(), (Route) => Route()],
//   // decorators: [addDecorator(StyleDecorator)],
// // addDecorator(StyleDecorator)

// }


// export default preview;


// .storybook/preview.js
// Load the Addon
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider } from '../../src/app/providers/ThemeProvider';
import {StyleDecorator}  from "./../../src/shared/config/storybook/StyleDecorator/StyleDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  // Add the Addon to decorators
  withRouter,
  (Story) => Story()
  // (Story) => (
  //   // <ThemeProvider>
  //     // <div id="">
  //       // <StyleDecorator />
  //       // <Story />
  //     // </div>
  //   // </ThemeProvider>
  // ),
];
