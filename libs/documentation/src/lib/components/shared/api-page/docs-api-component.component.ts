import {Component, ChangeDetectionStrategy, Input, OnInit} from '@angular/core';
import apis from 'libs/documentation/src/lib/apidoc';


interface apiDesc {
  inputs: any;
  outputs: any;
  methods: any;
  properties: any;
}

export function getAPI(pkg, component) {

  const api:apiDesc = {
    inputs: {},
    outputs: {},
    methods: {},
    properties: {},
  };


  Object.values(apis[pkg].components)
    .filter((entity): entity is any => <any>entity)
    .filter((entity): entity is any => entity.name.startsWith(`${component}`))
    .forEach(entity => {
      api.inputs = entity.inputsClass;
      api.outputs = entity.outputsClass;
      api.methods = entity.methodsClass;
      api.properties = entity.propertiesClass;
    });

    console.log(api);
  return api;
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

  constructor() {}

  @Input() component: string;

  @Input() pkg: string;

  ngOnInit(): void {
    this.api = getAPI(this.pkg, this.component);
  }

  getArgs(method) {
    const argString: String[] = [];
    method.args
    .forEach(argument => {
      argString.push(`${argument.name}: ${argument.type}`);
    });
    return argString.join(", ");
  }

}
