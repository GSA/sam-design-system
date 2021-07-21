import { Pipe, PipeTransform } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Pipe({
  name: 'sdsFormlyChips'
})
export class SdsFormlyChips implements PipeTransform {

  transform(model: any, fieldConfig: FormlyFieldConfig[]) {
    const chips = [];
    this.getChips(model, fieldConfig, '', chips);
    console.log(chips);
    return chips;
  }

  private getChips(model: any, fieldConfigs: FormlyFieldConfig[], key = '', chips = []) {
    let appendedKey = key;
    fieldConfigs.forEach(fieldConfig => {
      if (fieldConfig.key) {
        appendedKey = appendedKey.length ? (appendedKey + '.' + fieldConfig.key) : fieldConfig.key as string;
        if (!fieldConfig.fieldGroup && !fieldConfig.fieldArray) {
          let value = model;
          appendedKey.split('.').forEach(key => {
            value = value[key];
          })
          this.appendChips(value, fieldConfig, chips);
        }
      }

      if (fieldConfig.fieldGroup) {
        this.getChips(model, fieldConfig.fieldGroup, appendedKey, chips)
      }

      if (fieldConfig.fieldArray) {
        this.getChips(model, [fieldConfig.fieldArray], appendedKey, chips);
      }

      appendedKey = key;
    })
  }

  private appendChips(model: any, fieldConfig: FormlyFieldConfig, chips: any[]) {
    console.log('appending Chip', model);

    if (!model) {
      return;
    }

    if (Array.isArray(model)) {
      model.forEach(item => {
        chips.push({label: fieldConfig.templateOptions.label, value: item})
      });
    }

    chips.push({label: fieldConfig.templateOptions.label, value: model})
  }
}

