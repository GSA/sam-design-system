import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

// Load the implementations that should be tested
import {SdsEllipsisDirective} from './ellipsis.directive';

@Component({
  selector: 'test-ellipsis',
  template: `
<div sdstextEllipsis>
Add the long text here to check the ellipsis at the end of the line.    
</div>`
})
class TestEllipsisComponent {
 
}
describe('The Sam Text Ellipsis directive', () => {
    let directive: SdsEllipsisDirective;
    let component: TestEllipsisComponent;
    let fixture: any;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [SdsEllipsisDirective, TestEllipsisComponent],
      });
  
      fixture = TestBed.createComponent(TestEllipsisComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      directive = fixture.debugElement
        .query(
            By.directive(SdsEllipsisDirective)
        )
        .injector.get(SdsEllipsisDirective);
    });
  
    it('should compile', () => {
        expect(true).toBe(true);
    });

    it('should add ellipsis', () => {
        const el = fixture.debugElement.query(By.directive(SdsEllipsisDirective));
        directive.ngAfterViewInit();
    });
});
