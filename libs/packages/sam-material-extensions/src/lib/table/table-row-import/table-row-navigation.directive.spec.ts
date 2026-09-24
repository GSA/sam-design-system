import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableRowNavigationDirective } from './table-row-navigation.directive';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  template: `
    <table>
      <tbody>
        <tr mat-row sdsTableRowNavigation [highlightOnHover]="highlightFirst" tabindex="0">
          <td>Row 1</td>
        </tr>
        <tr mat-row sdsTableRowNavigation [highlightOnHover]="highlightSecond" tabindex="0">
          <td>Row 2</td>
        </tr>
      </tbody>
    </table>
  `,
  standalone: false,
})
class TestHoverFocusComponent {
  highlightFirst = true;
  highlightSecond = false;
}

describe('TableRowNavigationDirective', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let trElements: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, TableRowNavigationDirective],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // initial binding
    trElements = fixture.debugElement.queryAll(By.directive(TableRowNavigationDirective));
  });

  it('should create an instance of component', () => {
    expect(component).toBeTruthy();
    expect(trElements.length).toBe(2);
  });

  it('should not contain hover class by default', () => {
    expect(trElements[0].nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
  });

  it('should contain hover class when hovered with highlightOnHover=true', () => {
    trElements[0].triggerEventHandler('mouseenter', null);
    expect(trElements[0].nativeElement.classList.contains('sds-table__row--hovered')).toBeTruthy();
  });

  it('should not contain hover class after mouse has left row', () => {
    trElements[0].triggerEventHandler('mouseenter', null);
    expect(trElements[0].nativeElement.classList.contains('sds-table__row--hovered')).toBeTruthy();
    trElements[0].triggerEventHandler('mouseleave', null);
    expect(trElements[0].nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
  });

  it('should not add hover class when hovered with highlightOnHover=false', () => {
    trElements[1].triggerEventHandler('mouseenter', null);
    expect(trElements[1].nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
    trElements[1].triggerEventHandler('mouseleave', null);
    expect(trElements[1].nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
  });

  it('should support direct addHoverClass and removeHoverClass calls', () => {
    const directive = trElements[0].injector.get(TableRowNavigationDirective);
    directive.addHoverClass();
    expect(trElements[0].nativeElement.classList.contains('sds-table__row--hovered')).toBeTruthy();
    directive.removeHoverClass();
    expect(trElements[0].nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
  });

  it('should not alter row focus on ArrowDown keydown event since directive only handles hover', () => {
    const firstRow: HTMLTableRowElement = trElements[0].nativeElement;
    const secondRow: HTMLTableRowElement = trElements[1].nativeElement;

    firstRow.focus();
    expect(document.activeElement).toBe(firstRow);

    // TableRowNavigationDirective manages row hover states and does not implement arrow navigation.
    const downEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', code: 'ArrowDown', bubbles: true });
    firstRow.dispatchEvent(downEvent);
    expect(document.activeElement).toBe(firstRow);
    expect(document.activeElement).not.toBe(secondRow);
  });

  it('should not add hover class when highlightOnHover is false', () => {
    const directive = trElements[0].injector.get(TableRowNavigationDirective);
    directive.highlightOnHover = false;
    trElements[0].triggerEventHandler('mouseenter', null);
    expect(trElements[0].nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
    trElements[0].triggerEventHandler('mouseleave', null);
    expect(trElements[0].nativeElement.classList.contains('sds-table__row--hovered')).toBeFalsy();
  });
});
