import { TemplateRef } from '@angular/core';
export class OptionalButton {
  id?: string;
  text?: string;
  classes?: string;
  action?: any;
  ariaLabel?: string;
}
export class OptionalMessage {
  type?: string;
  title?: string;
  message?: string;
  classes?: string;
  buttons?: OptionalButton[];
}

export class OptionalSearchModel {
  results?: any[];
  metadata?: {
    messages?: OptionalMessage[] | TemplateRef<any>;
  };
}
