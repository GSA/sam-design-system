import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { TableSelectRowsComponent } from './table-select-rows.component';
import { TableSelectRowsModule } from './table-select-rows.module';

// The real `usa-icon` chain (`IconModule` -> `NgxBootstrapIconsModule`) needs
// its `Icons` provider populated via `NgxBootstrapIconsModule.pick(...)`, which
// this component's own module already does for the icons it actually uses
// (`caretDownFill`, `chevronRight`). Rather than duplicate that wiring here,
// swap in a lightweight stub for `usa-icon` (same approach `dialog.spec.ts`
// uses), since no spec below asserts on icon rendering.
@Component({ selector: 'usa-icon', template: '', standalone: false })
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: unknown;
}

describe('TableSelectRowsComponent', () => {
  let component: TableSelectRowsComponent;
  let fixture: ComponentFixture<TableSelectRowsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, TableSelectRowsModule],
    });

    TestBed.overrideModule(TableSelectRowsModule, {
      remove: { imports: [IconModule, NgxBootstrapIconsModule] },
      add: { declarations: [UsaIconStubComponent], exports: [UsaIconStubComponent] },
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selects and deselects a row via the checkbox change event', () => {
    // Locate the first rendered row's checkbox input
    const rowCheckbox: HTMLInputElement | null = fixture.nativeElement.querySelector('tbody tr input[type="checkbox"]');
    expect(rowCheckbox).toBeTruthy();

    const targetRow = component.data[0] as { checked?: boolean };

    // Trigger change event to select the row
    rowCheckbox!.checked = true;
    rowCheckbox!.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.selectedRows).toContain(targetRow as any);
    expect(targetRow.checked).toBe(true);

    // Trigger change event again to deselect
    rowCheckbox!.checked = false;
    rowCheckbox!.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.selectedRows).not.toContain(targetRow as any);
    expect(targetRow.checked).toBe(false);
  });

  it('disables the delete button when no rows are selected and enables it when rows are selected', () => {
    const deleteButton: HTMLButtonElement | null = fixture.nativeElement.querySelector('button.usa-button--primary');
    expect(deleteButton).toBeTruthy();
    expect(component.deleteButtonEnabled).toBe(true);
    expect(deleteButton!.disabled).toBe(true);

    // Select a row via the checkbox
    const rowCheckbox: HTMLInputElement | null = fixture.nativeElement.querySelector('tbody tr input[type="checkbox"]');
    rowCheckbox!.checked = true;
    rowCheckbox!.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.deleteButtonEnabled).toBe(false);
    expect(deleteButton!.disabled).toBe(false);
  });

  it('selects and deselects all rows via onSelectAllRows', () => {
    // Initially no rows selected
    expect(component.selectedRows.length).toBe(0);
    expect(component.selectAllChecked).toBe(false);

    // Call select all
    component.onSelectAllRows();
    expect(component.selectAllChecked).toBe(true);
    expect(component.selectedRows.length).toBe(component.numberOfRows);
    component.selectedRows.forEach((row: { checked?: boolean }) => {
      expect(row.checked).toBe(true);
    });

    // Call select all again to clear
    component.onSelectAllRows();
    expect(component.selectAllChecked).toBe(false);
    expect(component.selectedRows.length).toBe(0);
  });

  it('selects only rows matching a specific status via onSelectAllStatus', () => {
    // Collect the status of the first page's rows
    const firstPageRows = component.data.slice(0, component.numberOfRows) as Array<{
      status?: string;
      checked?: boolean;
    }>;
    const draftRows = firstPageRows.filter((r) => r.status === 'Draft');

    component.onSelectAllStatus('Draft');

    expect(component.selectAllChecked).toBe(true);
    expect(component.selectedRows.length).toBe(draftRows.length);
    component.selectedRows.forEach((row: { status?: string; checked?: boolean }) => {
      expect(row.status).toBe('Draft');
      expect(row.checked).toBe(true);
    });
  });
});
