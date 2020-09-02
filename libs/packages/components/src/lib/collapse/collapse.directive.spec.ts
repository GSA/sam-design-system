import { CollapseDirective } from "./collapse.directive";
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
   <div class="text-center">
  <button type="button"
  class="usa-button text-center"
  [attr.aria-expanded]="!isCollapsedContent"
  aria-controls="collapseID"
  (click)="isCollapsedContent = !isCollapsedContent"
  > Show / Hide Content
  </button>
 </div>
<p
  id="collapseID"
  [sdsCollapse]="isCollapsedContent"
   class="bg-base-lighter margin-top-1 padding-2">
   What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.
</p>`
})
class TestComponent {
  public isCollapsedContent:boolean = true;
}


describe('CollapseSampleComponent', () => {
  let component: TestComponent;

  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [ CollapseDirective, TestComponent]
    })
    .compileComponents();
  });

  it('check directive value', () => {
      const fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      expect(component.isCollapsedContent).toBeTruthy();
      const directiveEl = fixture.debugElement.query(By.directive(CollapseDirective));
      expect(directiveEl).not.toBeNull();
      const directiveInstance = directiveEl.injector.get(CollapseDirective);
      expect(directiveInstance.collapsed).toBeTruthy();
  });

});
