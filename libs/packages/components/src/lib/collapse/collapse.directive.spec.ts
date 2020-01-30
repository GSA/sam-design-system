import { CollapseDirective } from "./collapse.directive";
import { Directive } from '@angular/core';

describe('CollapseDirective', ()=>{
  let directive: CollapseDirective;

  beforeEach(() => {
    directive = new CollapseDirective();
  });

  it('check for input value', () => {
    expect(directive.collapsed).toEqual(true);
  });
});
