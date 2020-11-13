import { FormGroup } from '@angular/forms';
import { NavigationLink, SideNavigationModel } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface FilterPanelConfig {
  title: string;
  form: FormGroup;
  fields: FormlyFieldConfig[];
  model: any;
  options: FormlyFormOptions;
  isHistoryEnabled: boolean;
}

export interface SelectionPanelConfig {
  title: string;
  selectionPanelModel: SideNavigationModel;
}