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

const preview = {
  parameters: {
    options: {
      storySort: (a, b) =>
        {
          const aBeforeB = -1;
          const bBeforeA = 1;
          let toReturn = 0;
          const introName = 'Introduction';
          const configName = 'Configurable';

          if(a.title === b.title){
            if(a.name === introName || b.name === introName){
              if(a.name === introName){
                toReturn = aBeforeB
              } else if(b.name === introName){
                toReturn = bBeforeA;
              }
            } else if(a.name === configName || b.name === configName){
              if(a.name === configName){
                toReturn = aBeforeB
              } else if(b.name === configName){
                toReturn = bBeforeA;
              }
            } else {
              toReturn = a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
            }
          } else {
            toReturn = a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
          }
          return toReturn;
        }
    },
  },
};

export default preview;
