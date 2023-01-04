import { makeDecorator } from "@storybook/addons";
export const stackblitzLink = makeDecorator({
  name: 'stackblitzLink',
  parameterName: 'stackblitzLink',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    // get a reference to the active story
    const story = getStory(context);
    // modify the story's content as a string
    story.template = `
        <div style="float: right;">
          <a href="${parameters}" target="_blank">Link To Stackblitz</a>
        </div>
        <div>${ story.template }</div>
    `;
    // return the modified story string
    return story;
  }
});