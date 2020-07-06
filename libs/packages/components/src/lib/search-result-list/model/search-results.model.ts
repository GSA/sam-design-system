import { EventEmitter } from '@angular/core';

export class SearchModel{
    results: any[];
    metadata: {
      messages:Message[];
    }
  };
  export class Message {
    type: string;
    title: string;
    message:string;
    classes: string;
    buttons:Button[];
  }
  export class Button{
    id: string;
    text:string;
    classes: string;
    action: any;
  } 