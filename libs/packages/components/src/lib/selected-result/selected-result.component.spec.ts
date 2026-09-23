import { Component, Input } from '@angular/core';

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
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SDSSelectedResultComponent } from './selected-result.component';
import { SDSSelectedItemModel } from './models/sds-selectedItem.model';
import { SDSSelectedItemModelHelper, SelectionMode } from './models/sds-selected-item-model-helper';
import { By } from '@angular/platform-browser';
import { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('SDSSelectedResultComponent', () => {
  let component: SDSSelectedResultComponent;
  let fixture: ComponentFixture<SDSSelectedResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SDSSelectedResultComponent, UsaIconStubComponent],
      imports: [CommonModule, FormsModule, RouterModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDSSelectedResultComponent);
    component = fixture.componentInstance;
    component.model = new SDSSelectedItemModel();
    component.configuration = new SDSSelectedResultConfiguration();
    component.configuration.primaryKeyField = 'id';
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.primaryTextField = 'name';
    component.configuration.secondaryTextField = 'subtext';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be empty', () => {
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete-selected'));
    expect(list.nativeElement.children.length).toBe(0);
  });

  it('should have an item', () => {
    SDSSelectedItemModelHelper.addItem(
      { id: '1', parentId: null, name: 'Level 1', subtext: 'id 1', type: 'Level 1' },
      'id',
      SelectionMode.SINGLE,
      component.model,
    );
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete-selected'));
    expect(list.nativeElement.children.length).toBe(1);
  });

  it('should have a single item based on mode', () => {
    SDSSelectedItemModelHelper.addItem(
      { id: '1', parentId: null, name: 'Level 1', subtext: 'id 1', type: 'Level 1' },
      'id',
      SelectionMode.SINGLE,
      component.model,
    );
    SDSSelectedItemModelHelper.addItem(
      { id: '2', parentId: null, name: 'Level 2', subtext: 'id 2', type: 'Level 2' },
      'id',
      SelectionMode.SINGLE,
      component.model,
    );
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete-selected'));
    expect(list.nativeElement.children.length).toBe(1);
  });

  it('should have an 2 items', () => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    SDSSelectedItemModelHelper.addItem(
      { id: '1', parentId: null, name: 'Level 1', subtext: 'id 1', type: 'Level 1' },
      'id',
      SelectionMode.MULTIPLE,
      component.model,
    );
    SDSSelectedItemModelHelper.addItem(
      { id: '2', parentId: null, name: 'Level 2', subtext: 'id 2', type: 'Level 2' },
      'id',
      SelectionMode.MULTIPLE,
      component.model,
    );
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete-selected'));
    expect(list.nativeElement.children.length).toBe(2);
  });

  it('Tests remove item', () => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    let item2 = { id: '2', parentId: null, name: 'Level 2', subtext: 'id 2', type: 'Level 2' };
    SDSSelectedItemModelHelper.addItem(
      { id: '1', parentId: null, name: 'Level 1', subtext: 'id 1', type: 'Level 1' },
      'id',
      SelectionMode.MULTIPLE,
      component.model,
    );
    SDSSelectedItemModelHelper.addItem(item2, 'id', SelectionMode.MULTIPLE, component.model);
    fixture.detectChanges();
    component.removeItem(item2);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete-selected'));
    expect(list.nativeElement.children.length).toBe(1);
  });

  it('should handle writeValue', () => {
    component.model = null;
    component.writeValue({});
    expect(component.model).toBe(null);
    let model = new SDSSelectedItemModel();
    component.writeValue(model);
    expect(component.model).toBe(model);
  });

  it('should handle disable', () => {
    expect(component.disabled).toBeFalsy();
    component.setDisabledState(true);
    expect(component.disabled).toBeTruthy();
    component.setDisabledState(false);
    expect(component.disabled).toBeFalsy();
  });

  it('should handle registerOnChange', () => {
    let item = {};
    component.registerOnChange(item);
    expect(component.propogateChange).toBe(item);
  });

  it('should handle registerOnTouched', () => {
    let item = {};
    component.registerOnTouched(item);
    expect(component.onTouchedCallback).toBe(item);
  });

  it('should handle multi value and depth of values', () => {
    let data = { level1: '1', sub: { level2: '2' } };
    expect(component.getObjectValue(data, 'level1')).toBe('1');
    expect(component.getObjectValue(data, 'sub.level2')).toBe('2');
    expect(component.getObjectValue(data, 'level1,sub.level2')).toBe('1 2');
    expect(component.getObjectValue(data, 'sub.level2,level1')).toBe('2 1');
    let data2 = { level1: '1' };
    expect(component.getObjectValue(data2, 'level1,sub.level2')).toBe('1');
  });

  it('should remove chip when close button is clicked in template', () => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    const item1 = { id: '1', name: 'Item 1', subtext: 'first' };
    const item2 = { id: '2', name: 'Item 2', subtext: 'second' };
    component.model.items = [item1, item2];
    fixture.detectChanges();

    const closeButtons = fixture.debugElement.queryAll(By.css('.sds-tag__close'));
    expect(closeButtons.length).toBe(2);

    closeButtons[0].nativeElement.click();
    fixture.detectChanges();

    expect(component.model.items.length).toBe(1);
    expect((component.model.items[0] as any).id).toBe('2');
  });

  it('should remove chip when Enter key is pressed on close button', () => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    const item1 = { id: '1', name: 'Item 1', subtext: 'first' };
    component.model.items = [item1];
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(By.css('.sds-tag__close'));
    closeButton.triggerEventHandler('keyup.enter', {});
    fixture.detectChanges();

    expect(component.model.items.length).toBe(0);
  });

  it('should not allow chip removal when component is disabled', () => {
    const item1 = { id: '1', name: 'Item 1', subtext: 'first' };
    component.model.items = [item1];
    component.setDisabledState(true);
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(By.css('.sds-tag__close'));
    expect(closeButton).toBeNull();

    const tag = fixture.debugElement.query(By.css('.sds-tag'));
    expect(tag.nativeElement.classList.contains('sds-tag--disabled')).toBe(true);

    const changeSpy = vi.fn();
    const touchSpy = vi.fn();
    component.registerOnChange(changeSpy);
    component.registerOnTouched(touchSpy);

    component.removeItem(item1);
    expect(component.model.items.length).toBe(1);
    expect(changeSpy).not.toHaveBeenCalled();
    expect(touchSpy).not.toHaveBeenCalled();
  });

  it('should apply displayModifierFn when defined on configuration', () => {
    component.configuration.displayModifierFn = (val: string, index?: number) => {
      return `Chip #${index}: ${val.toUpperCase()}`;
    };
    const item = { id: '1', name: 'test item' };
    const display = component.getObjectValue(item, 'name', 3);
    expect(display).toBe('Chip #3: TEST ITEM');
  });

  it('should render secondary text when secondaryTextField is configured and present', () => {
    const item = { id: '1', name: 'Primary Title', subtext: 'Secondary Subtitle' };
    component.model.items = [item];
    fixture.detectChanges();

    const textElements = fixture.debugElement.query(By.css('.sds--tag__item'));
    expect(textElements.nativeElement.textContent).toContain('Primary Title');
    expect(textElements.nativeElement.textContent).toContain('Secondary Subtitle');
  });
});

describe('SDSSelectedItemModelHelper', () => {
  let model: SDSSelectedItemModel;

  beforeEach(() => {
    model = new SDSSelectedItemModel();
  });

  it('addItem should replace existing item when selectionMode is SINGLE', () => {
    const item1 = { id: '1', name: 'First' };
    const item2 = { id: '2', name: 'Second' };
    SDSSelectedItemModelHelper.addItem(item1, 'id', SelectionMode.SINGLE, model);
    expect(model.items.length).toBe(1);
    expect(model.items[0]).toEqual(item1);

    SDSSelectedItemModelHelper.addItem(item2, 'id', SelectionMode.SINGLE, model);
    expect(model.items.length).toBe(1);
    expect(model.items[0]).toEqual(item2);
  });

  it('addItem should append items when selectionMode is MULTIPLE', () => {
    const item1 = { id: '1', name: 'First' };
    const item2 = { id: '2', name: 'Second' };
    SDSSelectedItemModelHelper.addItem(item1, 'id', SelectionMode.MULTIPLE, model);
    SDSSelectedItemModelHelper.addItem(item2, 'id', SelectionMode.MULTIPLE, model);
    expect(model.items.length).toBe(2);
    expect(model.items).toEqual([item1, item2]);
  });

  it('addItem should not add duplicate items by keyField', () => {
    const item1 = { id: '1', name: 'First' };
    const item1Duplicate = { id: '1', name: 'First Duplicate' };
    SDSSelectedItemModelHelper.addItem(item1, 'id', SelectionMode.MULTIPLE, model);
    SDSSelectedItemModelHelper.addItem(item1Duplicate, 'id', SelectionMode.MULTIPLE, model);
    expect(model.items.length).toBe(1);
    expect((model.items[0] as any).name).toBe('First');
  });

  it('addItems should add multiple non-duplicate items', () => {
    const items = [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
      { id: '1', name: 'Item 1 Duplicate' },
      { id: '3', name: 'Item 3' },
    ];
    SDSSelectedItemModelHelper.addItems(items, 'id', SelectionMode.MULTIPLE, model);
    expect(model.items.length).toBe(3);
    expect(model.items.map((i: any) => i.id)).toEqual(['1', '2', '3']);
  });

  it('replaceItems should clear existing items and add the new collection', () => {
    model.items = [{ id: '99', name: 'Old Item' }];
    const newItems = [
      { id: '1', name: 'New 1' },
      { id: '2', name: 'New 2' },
    ];
    SDSSelectedItemModelHelper.replaceItems(newItems, 'id', SelectionMode.MULTIPLE, model);
    expect(model.items.length).toBe(2);
    expect(model.items.map((i: any) => i.id)).toEqual(['1', '2']);
  });

  it('containsItem should return true if item exists, false otherwise', () => {
    model.items = [{ id: '10' }, { id: '20' }];
    expect(SDSSelectedItemModelHelper.containsItem('10', 'id', model.items)).toBe(true);
    expect(SDSSelectedItemModelHelper.containsItem('20', 'id', model.items)).toBe(true);
    expect(SDSSelectedItemModelHelper.containsItem('30', 'id', model.items)).toBe(false);
    expect(SDSSelectedItemModelHelper.containsItem('10', 'id', [])).toBe(false);
  });

  it('removeItem should remove matching item and do nothing if item does not exist', () => {
    const item1 = { id: '1' };
    const item2 = { id: '2' };
    const notInList = { id: '99' };
    model.items = [item1, item2];

    SDSSelectedItemModelHelper.removeItem(notInList, 'id', model);
    expect(model.items.length).toBe(2);

    SDSSelectedItemModelHelper.removeItem(item1, 'id', model);
    expect(model.items.length).toBe(1);
    expect(model.items[0]).toEqual(item2);
  });

  it('clearItems should remove all items from array', () => {
    const items = [{ id: '1' }, { id: '2' }, { id: '3' }];
    SDSSelectedItemModelHelper.clearItems(items);
    expect(items.length).toBe(0);
  });
});
