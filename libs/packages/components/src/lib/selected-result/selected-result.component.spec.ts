import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDSSelectedResultComponent } from './selected-result.component';
import { SDSSelectedItemModel } from './models/sds-selectedItem.model';
import { SDSSelectedItemModelHelper, SelectionMode } from './models/sds-selected-item-model-helper';
import { By } from '@angular/platform-browser';
import { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


describe('SDSSelectedResultComponent', () => {
  let component: SDSSelectedResultComponent;
  let fixture: ComponentFixture<SDSSelectedResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SDSSelectedResultComponent],
      imports: [
        CommonModule, FormsModule, RouterModule, FontAwesomeModule
      ],
    })
      .compileComponents();
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

  xit('should be empty', () => {
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(0);
  });

  xit('should have an item', () => {
    SDSSelectedItemModelHelper.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id', SelectionMode.SINGLE, component.model.items);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(1);
  });


  xit('should have a single item based on mode', () => {
    SDSSelectedItemModelHelper.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id', SelectionMode.SINGLE, component.model.items);
    SDSSelectedItemModelHelper.addItem({ 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' }, 'id', SelectionMode.SINGLE, component.model.items);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(1);
  });


  xit('should have an 2 items', () => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    SDSSelectedItemModelHelper.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id', SelectionMode.MULTIPLE, component.model.items);
    SDSSelectedItemModelHelper.addItem({ 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' }, 'id', SelectionMode.MULTIPLE, component.model.items);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(2);
  });


  xit('Tests remove item', () => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    let item2 = { 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' };
    SDSSelectedItemModelHelper.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id', SelectionMode.MULTIPLE, component.model.items);
    SDSSelectedItemModelHelper.addItem(item2, 'id', SelectionMode.MULTIPLE, component.model.items);
    fixture.detectChanges();
    component.removeItem(item2);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
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

});
