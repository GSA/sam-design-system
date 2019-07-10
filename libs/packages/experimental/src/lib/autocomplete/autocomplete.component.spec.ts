/* tslint:disable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SDSAutocompleteComponent } from './autocomplete.component';
//import { SamHierarchicalAutocompleteConfiguration } from '../models/SamHierarchicalAutocompleteConfiguration';
import { FormsModule } from '@angular/forms';
//import { HierarchicalTreeSelectedItemModel, TreeMode } from '../hierarchical-tree-selectedItem.model';
import { By } from '@angular/platform-browser';
import 'rxjs/add/observable/of';
//import { HierarchicalDataService } from '../hierarchical-test-service.spec';


describe('SDSAutocompleteComponent', () => {
  let component: SDSAutocompleteComponent;
  let fixture: ComponentFixture<SDSAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SDSAutocompleteComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDSAutocompleteComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

