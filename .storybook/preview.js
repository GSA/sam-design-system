import { stackblitzLink } from './decorators/stackblitz-link';
import {
  setCompodocJson
} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true
  },
  options: {
    showPanel: true,
  }
}

export const decorators = [
  stackblitzLink
];