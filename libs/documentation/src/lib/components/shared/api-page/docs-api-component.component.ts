import { FORMLY_CONFIG } from './../../../../../../packages/sam-formly/src/lib/formly/formly.config';
import {Component, ChangeDetectionStrategy, Input, OnInit} from '@angular/core';
import apis from 'libs/documentation/src/lib/apidoc';

interface apiDesc {
  inputs: any;
  outputs: any;
  methods: any;
  properties: any;
  jsdoctags: any;
}

export function findComponentAPI(pkg, component) {
  console.log('in get comp api');
  let target: any;

  Object.values(apis[pkg].components)
  .filter((entity): entity is any => <any>entity)
  .filter((entity): entity is any => entity.name.startsWith(`${component}`))
  .forEach(entity => {
    target = entity;
  });

  return target;
}

export function getAPI(pkg, component) {
  console.log('in get api');
  const api:apiDesc = {
    inputs: {},
    outputs: {},
    methods: {},
    properties: {},
    jsdoctags: {},
  };

  const entity:any = findComponentAPI(pkg, component);

  if(entity) {
    api.inputs = entity.inputsClass;
    api.outputs = entity.outputsClass;
    api.methods = entity.methodsClass;
    api.properties = entity.propertiesClass;
    api.jsdoctags = entity.jsdoctags;
  }

  console.log(api);
  return api;
}

export function getFormWrapper(component) {
  console.log('in get form wrapper');
  let wrappers: string[];

  Object.values(FORMLY_CONFIG.types)
    .filter(entity => {
      if(entity && entity.component){
        if(entity.component.name === component){
          return entity;
        }
      }
    })
    .forEach(entity => {
      wrappers = entity.wrappers;
    });
  return wrappers;
}

@Component({
  selector: 'docs-api-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './docs-api-component.component.html',
  styles: [`
    code::before, code::after {
      content: '';
    }
    .api-label {
      width: 25%;
    }
    .api-content {
      width: 75%;
    }
    `
  ]
})
export class DocumentationAPIComponent implements OnInit {
  api: apiDesc;
  wrappers: string[] = [];

  constructor() {}

  @Input() component: string;

  @Input() pkg: string;

  ngOnInit(): void {
    this.api = getAPI(this.pkg, this.component);

    if(this.pkg === 'formly') {
      this.wrappers = getFormWrapper(this.component);
    }
  }

  getWrapper(wrapper) {
    console.log('in wrapper');
    let wrapperComponentName: string;

    Object.values(FORMLY_CONFIG.wrappers)
      .filter(entity => {
        if(entity && entity.name){
          if(entity.name === wrapper){
            return entity;
          }
        }
      })
      .forEach(entity => {
        wrapperComponentName = entity.component.name;
      });

    const component:any = findComponentAPI(this.pkg, wrapperComponentName);

    return component;
  }

  getTags(tags) {
    console.log('in tags');
    const tagList: any[] = [];

    tags.forEach(tag => {
      if(tag.name) {
        tagList.push({"name": tag.name.left.escapedText + "." + tag.name.right.escapedText, "comment":tag.comment})
      }
    })
    console.log(tagList);

    return tagList;
  }

  getArgs(method) {
    console.log('in args');
    const argString: String[] = [];
    method.args
    .forEach(argument => {
      argString.push(`${argument.name}: ${argument.type}`);
    });
    return argString.join(", ");
  }

}
