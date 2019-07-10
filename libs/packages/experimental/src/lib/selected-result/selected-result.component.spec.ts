import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDSSelectedResultComponent } from './selected-result.component';
import { SDSSelectedItemModel, TreeMode } from '../sds-selectedItem.model';
import { By } from '@angular/platform-browser';
import { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';


describe('SamHierarchicalSelectedResultComponent', () => {
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
    component.model.treeMode = TreeMode.SINGLE;
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
    component.model.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id');
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(1);
  });


  it('should have a single item based on mode', () => {
    component.model.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id');
    component.model.addItem({ 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' }, 'id');
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(1);
  });


  it('should have an 2 items', () => {
    component.model.treeMode = TreeMode.MULTIPLE;
    component.model.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id');
    component.model.addItem({ 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' }, 'id');
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(2);
  });


  it('Tests remove item', () => {
    component.model.treeMode = TreeMode.MULTIPLE;
    let item2 = { 'id': '2', 'parentId': null, 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' };
    component.model.addItem({ 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' }, 'id');
    component.model.addItem(item2, 'id');
    fixture.detectChanges();
    component.removeItem(item2);
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.resultsList'));
    expect(list.nativeElement.children.length).toBe(1);
  });

});
