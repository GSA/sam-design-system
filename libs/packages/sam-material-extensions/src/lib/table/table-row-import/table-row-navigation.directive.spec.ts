import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableRowNavigationDirective } from './table-row-navigation.directive';
import { RouterTestingModule } from '@angular/router/testing'

@Component({
  template: `
    <tr mat-row
        sdsTableRowNavigation
        [highlightOnHover]=true
    ></tr>
  `
})
class TestHoverFocusComponent {
}


describe('TableRowNavigationDirective', () => {

  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let trEl: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestHoverFocusComponent, TableRowNavigationDirective ],
      imports: [ RouterTestingModule ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance
    trEl = fixture.debugElement.query(By.css('tr'));
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance of component', () => {
    expect(component).toBeTruthy();
  });

  it('should not contain hover class by default', () => {
    expect(trEl.nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
  })
  it('should contain hover class when hovered', () => {
    trEl.triggerEventHandler('mouseenter', null);
    expect(trEl.nativeElement.classList.contains('sds-table__row--hovered')).toBeTruthy();
  })
  it('should not contain hover class after mouse has left row', () => {
    trEl.triggerEventHandler('mouseenter', null);
    expect(trEl.nativeElement.classList.contains('sds-table__row--hovered')).toBeTruthy();
    trEl.triggerEventHandler('mouseleave', null);
    expect(trEl.nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
  })


});
