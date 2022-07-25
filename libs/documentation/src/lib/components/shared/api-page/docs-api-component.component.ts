import { FORMLY_CONFIG, FORMLY_WRAPPERS } from '@gsa-sam/sam-formly';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import apis from 'libs/documentation/src/lib/apidoc';

interface apiDesc {
  inputs: any;
  outputs: any;
  methods: any;
  properties: any;
  jsdoctags: any;
}

export function findComponentAPI(pkg, type, name) {
  let target: any;

  Object.values(apis[pkg][type])
    .filter((entity): entity is any => <any>entity)
    .filter((entity): entity is any => entity.name.startsWith(`${name}`))
    .forEach((entity) => {
      target = entity;
    });

  return target;
}

export function getAPI(pkg, type, name) {
  const api: apiDesc = {
    inputs: [],
    outputs: [],
    methods: [],
    properties: [],
    jsdoctags: [],
  };

  const entity: any = findComponentAPI(pkg, type, name);

  if (entity) {
    api.inputs = entity.inputsClass;
    api.outputs = entity.outputsClass;
    api.methods = entity.methodsClass;
    api.properties = entity.propertiesClass;
    api.jsdoctags = entity.jsdoctags;
  }

  return api;
}

export function getFormWrapper(name) {
  let wrappers: string[];
  Object.values(FORMLY_CONFIG.types)
    .filter((entity) => {
      if (entity && entity.name) {
        if (entity.name === name) {
          return entity;
        }
      }
    })
    .forEach((entity) => {
      wrappers = entity.wrappers;
    });
  return wrappers;
}

@Component({
  selector: 'docs-api-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './docs-api-component.component.html',
  styles: [
    `
      code::before,
      code::after {
        content: '';
      }
      .api-label {
        width: 25%;
      }
      .api-content {
        width: 75%;
      }
    `,
  ],
})
export class DocumentationAPIComponent implements OnInit {
  api: apiDesc;
  formlyConfig: any;

  @Input() pkg: string;

  @Input() type = 'components';

  @Input() name: string;

  @Input() formType: string;

  @Input() wrappers: string[];

  constructor() {}

  ngOnInit(): void {
    this.api = getAPI(this.pkg, this.type, this.name);

    if (this.pkg === 'formly') {
      if (this.formType) {
        this.wrappers = getFormWrapper(this.formType);
      } else {
        this.wrappers = [];
      }
    } else {
      this.wrappers = [];
    }
  }

  getWrapper(wrapper) {
    let wrapperComponentName: string;

    Object.values(FORMLY_WRAPPERS)
      .filter((entity): entity is any => <any>entity)
      .filter((entity): entity is any => {
        if (entity && entity.name) {
          if (entity.name === wrapper) {
            return entity;
          }
        }
      })
      .forEach((entity) => {
        wrapperComponentName = entity.componentName;
      });

    const component: any = findComponentAPI(
      this.pkg,
      'components',
      wrapperComponentName
    );
    return component;
  }

  getTags(tags) {
    const tagList: any[] = [];

    if (tags && tags.length) {
      tags.forEach((tag) => {
        if (tag.name) {
          tagList.push({
            name: tag.name.left.escapedText + '.' + tag.name.right.escapedText,
            comment: tag.comment,
          });
        }
      });
    }

    return tagList;
  }

  getArgs(method) {
    const argString: String[] = [];
    method.args.forEach((argument) => {
      argString.push(`${argument.name}: ${argument.type}`);
    });
    return argString.join(', ');
  }
}
