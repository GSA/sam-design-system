import { Component } from '@angular/core';
import { uswdsAllIcons } from '@gsa-sam/ngx-uswds-icons';
import { kebabCase } from 'lodash-es';

@Component({
	standalone: false,
  templateUrl: './icons-uswds.component.html',
  selector: `usa-icon-icons-demo`,
  preserveWhitespaces: true,
})
export class IconsUswds {
  bootstrapIcons = Object.keys(uswdsAllIcons).map((iconName) => kebabCase(iconName));
}
