import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/angular/types-6-0';
import {
    TabPanelComponent,
    TabsComponent,
    SdsTabsModule,
} from '@gsa-sam/components';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';

export default {
    title: 'Example/TabPanel',
    component: TabPanelComponent, TabsComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [
          CommonModule, 
          SdsTabsModule
      ],
      }),
    ], 
} 

const Template: Story<TabPanelComponent> = (args: TabPanelComponent) => {
    return {
        template: `
        <sds-tabs>
            <sds-tab-panel tabHeader="{{tabHeader}}" #Tab1 [selected]=selected>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </sds-tab-panel>
            <sds-tab-panel tabHeader="Tab2" #Tab2 [disabled]=disabled>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </sds-tab-panel>
        </sds-tabs>
        `,
        props: args,
    }
}
export const Configurable = Template.bind({});
Configurable.args = {
    selected: 'true',
    disabled: 'true',
    tabHeader: 'Tab1',
}
Configurable.parameters = {
    controls: { exclude: ['id', 'ariaLabel'] },
    preview: { disabled: true },
  };