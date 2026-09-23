import { Component, Input } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { SdsTreeTableData } from './tree-table.model';
import { SdsTreeTableModule } from './tree-table.module';
import { SdsTreeTableComponent } from './tree-table.component';

@Component({
  selector: 'usa-icon',
  template: '',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}

@Component({
  template: `
    <sds-tree-table
      #treeTable
      [dataSource]="data"
      [displayColumns]="columns"
      [childrenLimit]="childrenLimit"
      [numChildrenToDisplay]="numChildrenToDisplay"
      (viewAll)="onViewAll($event)"
      (rowExpanded)="onRowExpanded($event)"
    >
      <ng-container *sdsTreeTableRow="let row; let level = level">
        <td class="col-title">{{ row.title }}</td>
        <td class="col-value">{{ row.value }}</td>
      </ng-container>
    </sds-tree-table>
  `,
  standalone: false,
})
class TestHostComponent {
  data: SdsTreeTableData[] = [];
  columns = ['Title', 'Value'];
  childrenLimit = Number.MAX_SAFE_INTEGER;
  numChildrenToDisplay = Number.MAX_SAFE_INTEGER;
  onViewAll = vi.fn();
  onRowExpanded = vi.fn();
}

describe('SdsTreeTableComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let treeTableComponent: SdsTreeTableComponent;

  const createSampleData = (): SdsTreeTableData[] => [
    {
      id: 'row-1',
      title: 'Parent 1',
      value: 'val-1',
      totalChildren: 2,
      children: [
        {
          id: 'row-1-1',
          title: 'Child 1.1',
          value: 'val-1-1',
          totalChildren: 2,
          children: [
            {
              id: 'row-1-1-1',
              title: 'Grandchild 1.1.1',
              value: 'val-1-1-1',
              totalChildren: 0,
            },
            {
              id: 'row-1-1-2',
              title: 'Grandchild 1.1.2',
              value: 'val-1-1-2',
              totalChildren: 0,
            },
          ],
        },
        {
          id: 'row-1-2',
          title: 'Child 1.2',
          value: 'val-1-2',
          totalChildren: 0,
        },
      ],
    },
    {
      id: 'row-2',
      title: 'Parent 2 (Leaf)',
      value: 'val-2',
      totalChildren: 0,
      children: [],
    },
    {
      id: 'row-3',
      title: 'Parent 3 (No Children Array)',
      value: 'val-3',
      totalChildren: 0,
    },
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SdsTreeTableModule],
      declarations: [TestHostComponent, UsaIconStubComponent],
    });

    TestBed.overrideModule(SdsTreeTableModule, {
      remove: { imports: [IconModule, NgxBootstrapIconsModule] },
      add: { declarations: [UsaIconStubComponent], exports: [UsaIconStubComponent] },
    });

    await TestBed.compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    host.data = createSampleData();
    fixture.detectChanges();
    treeTableComponent = fixture.debugElement.query(By.directive(SdsTreeTableComponent)).componentInstance;
  });

  it('should create and render header columns and root rows', () => {
    expect(treeTableComponent).toBeTruthy();

    const headers = fixture.debugElement.queryAll(By.css('thead th'));
    // "Related", "Title", "Value"
    expect(headers.length).toBe(3);
    expect(headers[0].nativeElement.textContent.trim()).toBe('Related');
    expect(headers[1].nativeElement.textContent.trim()).toBe('Title');
    expect(headers[2].nativeElement.textContent.trim()).toBe('Value');

    const rows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
    expect(rows.length).toBe(3);
  });

  it('should set tabindex 0 on first root row initially', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
    expect(rows[0].nativeElement.getAttribute('tabindex')).toBe('0');
    expect(rows[1].nativeElement.getAttribute('tabindex')).toBeNull();
  });

  describe('Node expansion and collapse', () => {
    it('should expand and collapse a row on expand/collapse button click', fakeAsync(() => {
      const expandBtn = fixture.debugElement.query(By.css('#row-1 button'));
      expect(expandBtn).toBeTruthy();

      // Click to expand
      expandBtn.nativeElement.click();
      tick();
      fixture.detectChanges();

      expect(host.data[0].expanded).toBe(true);
      expect(host.onRowExpanded).toHaveBeenCalledWith(host.data[0]);

      let renderedRows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      // row-1, row-1-1, row-1-2, row-2, row-3
      expect(renderedRows.length).toBe(5);

      // Selected row styling
      const selectedRow = fixture.debugElement.query(By.css('.sds-tree-table__row--selected'));
      expect(selectedRow.nativeElement.id).toBe('row-1');

      // Click again to collapse
      const collapseBtn = fixture.debugElement.query(By.css('#row-1 button'));
      collapseBtn.nativeElement.click();
      tick();
      fixture.detectChanges();

      expect(host.data[0].expanded).toBe(false);
      renderedRows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      expect(renderedRows.length).toBe(3);
    }));

    it('should toggle row on Enter keydown', fakeAsync(() => {
      const row1 = fixture.debugElement.query(By.css('#row-1'));
      row1.triggerEventHandler('keydown.enter', {});
      tick();
      fixture.detectChanges();

      expect(host.data[0].expanded).toBe(true);
      expect(treeTableComponent._selectedRow).toBe(host.data[0]);

      row1.triggerEventHandler('keydown.enter', {});
      tick();
      fixture.detectChanges();

      expect(host.data[0].expanded).toBe(false);
    }));

    it('should not toggle expanded state when clicking a leaf row without children', fakeAsync(() => {
      const row3 = fixture.debugElement.query(By.css('#row-3'));
      row3.triggerEventHandler('keydown.enter', {});
      tick();
      fixture.detectChanges();

      expect(host.data[2].expanded).toBeFalsy();
      expect(treeTableComponent._selectedRow).toBe(host.data[2]);
      expect(host.onRowExpanded).toHaveBeenCalledWith(host.data[2]);
    }));

    it('should expand all nodes with expandAll() and collapse with collapseAll()', () => {
      treeTableComponent.expandAll();
      fixture.detectChanges();

      expect(host.data[0].expanded).toBe(true);
      expect(host.data[0].children![0].expanded).toBe(true);

      const allRows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      // row-1, row-1-1, row-1-1-1, row-1-1-2, row-1-2, row-2, row-3 = 7 rows
      expect(allRows.length).toBe(7);

      treeTableComponent.collapseAll();
      fixture.detectChanges();

      expect(host.data[0].expanded).toBe(false);
      expect(host.data[0].children![0].expanded).toBe(false);
      expect(host.data[0].children![0].viewAllChildren).toBe(false);

      const rootRows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      expect(rootRows.length).toBe(3);
    });

    it('should expand a specific row and its ancestors with expandRow()', () => {
      treeTableComponent.expandRow('row-1-1-1');
      fixture.detectChanges();

      expect(host.data[0].expanded).toBe(true);
      expect(host.data[0].children![0].expanded).toBe(true);

      const renderedRows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      expect(renderedRows.length).toBe(7);
    });

    it('should collapse a specific row with collapseRow()', () => {
      treeTableComponent.expandAll();
      fixture.detectChanges();

      treeTableComponent.collapseRow('row-1-1');
      fixture.detectChanges();

      expect(host.data[0].expanded).toBe(true);
      expect(host.data[0].children![0].expanded).toBe(false);

      // Calling collapseRow with unknown id does not throw
      expect(() => treeTableComponent.collapseRow('non-existent')).not.toThrow();
    });

    it('should highlight parent row border when child is selected', fakeAsync(() => {
      treeTableComponent.expandAll();
      fixture.detectChanges();

      const childBtn = fixture.debugElement.query(By.css('#row-1-1 button'));
      childBtn.nativeElement.click();
      tick();
      fixture.detectChanges();

      expect(treeTableComponent._selectedRow).toBe(host.data[0].children![0]);
      expect(treeTableComponent._selectedRowParent).toBe(host.data[0]);

      const parentEl = fixture.debugElement.query(By.css('#row-1'));
      expect(parentEl.nativeElement.classList.contains('sds-tree-table__row--highlight-border')).toBe(true);
    }));
  });

  describe('Truncation and View All interactions', () => {
    beforeEach(() => {
      const truncationChildren: SdsTreeTableData[] = [];
      for (let i = 1; i <= 6; i++) {
        truncationChildren.push({
          id: `child-${i}`,
          title: `Truncated Child ${i}`,
          value: `val-${i}`,
          totalChildren: 0,
        });
      }

      host.data = [
        {
          id: 'trunc-parent',
          title: 'Trunc Parent',
          value: 'tp',
          childrenLimit: 3,
          totalChildren: 10,
          children: truncationChildren,
        },
      ];
      host.childrenLimit = 3;
      host.numChildrenToDisplay = 2;
      fixture.detectChanges();
    });

    it('should render only numChildrenToDisplay rows and a View All button', fakeAsync(() => {
      const expandBtn = fixture.debugElement.query(By.css('#trunc-parent button'));
      expandBtn.nativeElement.click();
      tick();
      fixture.detectChanges();

      const renderedItems = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      // Parent + 2 displayed children
      expect(renderedItems.length).toBe(3);

      const viewAllBtn = fixture.debugElement.query(By.css('tbody tr.text-center button'));
      expect(viewAllBtn).toBeTruthy();
      expect(viewAllBtn.nativeElement.textContent.replace(/\s+/g, ' ').trim()).toBe('View All ( 10 )');
    }));

    it('should expand all children and emit viewAll on clicking View All', fakeAsync(() => {
      const expandBtn = fixture.debugElement.query(By.css('#trunc-parent button'));
      expandBtn.nativeElement.click();
      tick();
      fixture.detectChanges();

      const viewAllBtn = fixture.debugElement.query(By.css('tbody tr.text-center button'));
      viewAllBtn.nativeElement.click();
      tick();
      fixture.detectChanges();

      expect(host.onViewAll).toHaveBeenCalledWith(host.data[0]);
      expect(host.data[0].viewAllChildren).toBe(true);

      const allChildren = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      // Parent + 6 children
      expect(allChildren.length).toBe(7);

      // View All button row is now gone
      const viewAllRow = fixture.debugElement.query(By.css('tbody tr.text-center'));
      expect(viewAllRow).toBeNull();
    }));

    it('should trigger viewAll on Enter key on viewAllRow', fakeAsync(() => {
      const expandBtn = fixture.debugElement.query(By.css('#trunc-parent button'));
      expandBtn.nativeElement.click();
      tick();
      fixture.detectChanges();

      const viewAllRow = fixture.debugElement.query(By.css('tbody tr.text-center'));
      viewAllRow.triggerEventHandler('keydown.enter', {});
      tick();
      fixture.detectChanges();

      expect(host.onViewAll).toHaveBeenCalledWith(host.data[0]);
    }));

    it('should display children length if totalChildren does not exceed children length', fakeAsync(() => {
      host.data[0].totalChildren = 5; // children length is 6
      fixture.detectChanges();

      const expandBtn = fixture.debugElement.query(By.css('#trunc-parent button'));
      expandBtn.nativeElement.click();
      tick();
      fixture.detectChanges();

      const viewAllBtn = fixture.debugElement.query(By.css('tbody tr.text-center button'));
      expect(viewAllBtn.nativeElement.textContent.replace(/\s+/g, ' ').trim()).toBe('View All ( 6 )');
    }));

    it('should return early from viewAllClicked when row has no children and no totalChildren', () => {
      const dummyRow: any = { id: 'dummy' };
      const currentTr = document.createElement('tr');
      const tableTr = document.createElement('tr');

      treeTableComponent.viewAllClicked(dummyRow, currentTr, tableTr);
      expect(host.onViewAll).not.toHaveBeenCalled();
    });
  });

  describe('Keyboard navigation (onKeyDown)', () => {
    beforeEach(fakeAsync(() => {
      treeTableComponent.expandAll();
      fixture.detectChanges();
      tick();
    }));

    it('should ignore keydown when event target is not the tableRow', () => {
      const rows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      const firstRowEl = rows[0].nativeElement;
      const childEl = document.createElement('div');
      firstRowEl.appendChild(childEl);

      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      Object.defineProperty(event, 'target', { value: childEl });
      const preventSpy = vi.spyOn(event, 'preventDefault');

      treeTableComponent.onKeyDown(event, firstRowEl);
      expect(preventSpy).not.toHaveBeenCalled();
    });

    it('should navigate to next row on ArrowDown', () => {
      const rows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      const firstRowEl = rows[0].nativeElement as HTMLTableRowElement;
      const secondRowEl = rows[1].nativeElement as HTMLTableRowElement;

      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      Object.defineProperty(event, 'target', { value: firstRowEl });
      const preventSpy = vi.spyOn(event, 'preventDefault');
      const focusSpy = vi.spyOn(secondRowEl, 'focus');

      treeTableComponent.onKeyDown(event, firstRowEl);

      expect(preventSpy).toHaveBeenCalled();
      expect(focusSpy).toHaveBeenCalled();
      expect(secondRowEl.getAttribute('tabindex')).toBe('0');
      expect(firstRowEl.getAttribute('tabindex')).toBe('undefined');
    });

    it('should navigate to previous row on ArrowUp', () => {
      const rows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      const firstRowEl = rows[0].nativeElement as HTMLTableRowElement;
      const secondRowEl = rows[1].nativeElement as HTMLTableRowElement;

      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      Object.defineProperty(event, 'target', { value: secondRowEl });
      const preventSpy = vi.spyOn(event, 'preventDefault');
      const focusSpy = vi.spyOn(firstRowEl, 'focus');

      treeTableComponent.onKeyDown(event, secondRowEl);

      expect(preventSpy).toHaveBeenCalled();
      expect(focusSpy).toHaveBeenCalled();
      expect(firstRowEl.getAttribute('tabindex')).toBe('0');
    });

    it('should navigate to first row on Home and last row on End', () => {
      const rows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      const middleRowEl = rows[2].nativeElement as HTMLTableRowElement;
      const firstRowEl = rows[0].nativeElement as HTMLTableRowElement;
      const lastRowEl = rows[rows.length - 1].nativeElement as HTMLTableRowElement;

      // Home
      const homeEvent = new KeyboardEvent('keydown', { key: 'Home' });
      Object.defineProperty(homeEvent, 'target', { value: middleRowEl });
      const homeFocusSpy = vi.spyOn(firstRowEl, 'focus');
      treeTableComponent.onKeyDown(homeEvent, middleRowEl);
      expect(homeFocusSpy).toHaveBeenCalled();

      // End
      const endEvent = new KeyboardEvent('keydown', { key: 'End' });
      Object.defineProperty(endEvent, 'target', { value: middleRowEl });
      const endFocusSpy = vi.spyOn(lastRowEl, 'focus');
      treeTableComponent.onKeyDown(endEvent, middleRowEl);
      expect(endFocusSpy).toHaveBeenCalled();
    });

    it('should do nothing when there is no sibling in direction or key is unsupported', () => {
      const rows = fixture.debugElement.queryAll(By.css('tbody tr[role="treeitem"]'));
      const firstRowEl = rows[0].nativeElement as HTMLTableRowElement;

      // ArrowUp from first row has no previousElementSibling
      const upEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      Object.defineProperty(upEvent, 'target', { value: firstRowEl });
      const preventSpy = vi.spyOn(upEvent, 'preventDefault');
      treeTableComponent.onKeyDown(upEvent, firstRowEl);
      expect(preventSpy).not.toHaveBeenCalled();

      // Unsupported key
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      Object.defineProperty(tabEvent, 'target', { value: firstRowEl });
      treeTableComponent.onKeyDown(tabEvent, firstRowEl);
      expect(preventSpy).not.toHaveBeenCalled();
    });
  });

  describe('Vertical border and height calculations', () => {
    it('displayVerticalBorder should return false when siblingRows is null/undefined', () => {
      expect(treeTableComponent.displayVerticalBorder({} as any, 0, null as any)).toBe(false);
      expect(treeTableComponent.displayVerticalBorder({} as any, 0, undefined as any)).toBe(false);
    });

    it('displayVerticalBorder should return true for last child when not truncated', () => {
      const parentRow: any = { viewAllChildren: false };
      const siblings: any = [{}, {}, {}];
      treeTableComponent.childrenLimit = 5;

      expect(treeTableComponent.displayVerticalBorder(parentRow, 0, siblings)).toBe(false);
      expect(treeTableComponent.displayVerticalBorder(parentRow, 1, siblings)).toBe(false);
      expect(treeTableComponent.displayVerticalBorder(parentRow, 2, siblings)).toBe(true);
    });

    it('displayVerticalBorder should return true for numChildrenToDisplay - 1 when truncated', () => {
      const parentRow: any = { viewAllChildren: false };
      const siblings: any = [{}, {}, {}, {}, {}];
      treeTableComponent.childrenLimit = 3;
      treeTableComponent.numChildrenToDisplay = 2;

      expect(treeTableComponent.displayVerticalBorder(parentRow, 0, siblings)).toBe(false);
      expect(treeTableComponent.displayVerticalBorder(parentRow, 1, siblings)).toBe(true);
      expect(treeTableComponent.displayVerticalBorder(parentRow, 4, siblings)).toBe(false);
    });

    it('setHeight should safely handle null elements', () => {
      const border = document.createElement('span');
      expect(() => treeTableComponent.setHeight(null as any, null as any, border)).not.toThrow();
    });

    it('setHeight should compute border height and bottom when rows are provided', fakeAsync(() => {
      const parentTr = document.createElement('tr');
      const rowTr = document.createElement('tr');
      const border = document.createElement('span');

      vi.spyOn(parentTr, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        height: 40,
        bottom: 140,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 100,
        toJSON: () => {},
      });

      vi.spyOn(rowTr, 'getBoundingClientRect').mockReturnValue({
        top: 200,
        height: 40,
        bottom: 240,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 200,
        toJSON: () => {},
      });

      treeTableComponent.setHeight(rowTr, parentTr, border);
      tick();

      // yFirstRect = 100 + 20 = 120
      // yRowRect = 200 + 20 = 220
      // height = 220 - 120 - 20 = 80
      expect(border.style.height).toBe('80px');
      expect(border.style.bottom).toBe('20px');
    }));
  });

  describe('Helper methods and template context', () => {
    it('getTemplateContext should return properly incremented level and index', () => {
      const parent: any = { children: [{}, {}] };
      const row: any = { id: 'test' };
      const context = treeTableComponent.getTemplateContext(parent, row, 1, 0, true);

      expect(context.row).toBe(row);
      expect(context.level).toBe(1);
      expect(context.index).toBe(2);
      expect(context.size).toBe(2);
      expect(context.parentSelected).toBe(true);
      expect(context.parent).toBe(parent);
    });

    it('getParentOfRow should return null when row is not found in data', () => {
      const dummy: any = { id: 'unknown' };
      expect(treeTableComponent.getParentOfRow(host.data, dummy)).toBeNull();
    });
  });
});
