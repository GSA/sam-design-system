import { CollapseDirective } from "./collapse.directive";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseSampleComponent } from '../../../../../component-sample/src/lib/feature/collapse-sample/collapse-sample.component';
import { By } from '@angular/platform-browser';



describe('CollapseSampleComponent', () => {
  let component: CollapseSampleComponent;

  beforeEach(async(() => {

    component = new CollapseSampleComponent();

    TestBed.configureTestingModule({
      declarations: [ CollapseDirective, CollapseSampleComponent]
    })
    .compileComponents();
  }));

   it('should be able to test directive', async(() => {
    TestBed.overrideComponent(CollapseSampleComponent, {
      set: {
        template: '<div sdsCollapse></div>'
      }
    });
  }));

  it('check directive value', () => {
      const fixture = TestBed.createComponent(CollapseSampleComponent);
      component = fixture.componentInstance;
      expect(component.isCollapsedContent).toBeTruthy();
      const directiveEl = fixture.debugElement.query(By.directive(CollapseDirective));
      expect(directiveEl).not.toBeNull();
      const directiveInstance = directiveEl.injector.get(CollapseDirective);
      expect(directiveInstance.collapsed).toBeTruthy();
  });

});
