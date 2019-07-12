import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDSSelectedResultComponent } from './selected-result.component';
import { SDSSelectedItemModel } from './models/sds-selectedItem.model';
import { SDSSelectedItemModelHelper, TreeMode } from './models/sds-selected-item-model-helper';
import { By } from '@angular/platform-browser';
import { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';


describe('SDSSelectedResultComponent', () => {
  let component: SDSSelectedResultComponent;
  let fixture: ComponentFixture<SDSSelectedResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SDSSelectedResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDSSelectedResultComponent);
    component = fixture.componentInstance;
    component.model = new SDSSelectedItemModel();
    component.configuration = new SDSSelectedResultConfiguration();
    component.configuration.primaryKeyField = 'id';
    component.configuration.treeMode = TreeMode.SINGLE;
    component.configuration.primaryTextField = 'name';
    component.configuration.secondaryTextField = 'subtext';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be empty', () => {
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(0);
  });

  it('should have an item', () => {
    SDSSelectedItemModelHelper.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id', TreeMode.SINGLE, component.model.items);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(1);
  });


  it('should have a single item based on mode', () => {
    SDSSelectedItemModelHelper.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id', TreeMode.SINGLE, component.model.items);
    SDSSelectedItemModelHelper.addItem({ 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' }, 'id', TreeMode.SINGLE, component.model.items);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(1);
  });


  it('should have an 2 items', () => {
    component.configuration.treeMode = TreeMode.MULTIPLE;
    SDSSelectedItemModelHelper.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id', TreeMode.MULTIPLE, component.model.items);
    SDSSelectedItemModelHelper.addItem({ 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' }, 'id', TreeMode.MULTIPLE, component.model.items);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(2);
  });


  it('Tests remove item', () => {
    component.configuration.treeMode = TreeMode.MULTIPLE;
    let item2 = { 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' };
    SDSSelectedItemModelHelper.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id', TreeMode.MULTIPLE, component.model.items);
    SDSSelectedItemModelHelper.addItem(item2, 'id', TreeMode.MULTIPLE, component.model.items);
    fixture.detectChanges();
    component.removeItem(item2);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(1);
  });

});
