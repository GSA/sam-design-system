/* tslint:disable */
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { SDSAutocompleteComponent } from './autocomplete.component';
import { AutoCompleteSampleDataService } from '../autocomplete-search/autocomplete-seach-test-service.spec';
import { SDSAutocompletelConfiguration } from './models/SDSAutocompletelConfiguration.model';
import { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';
import { FormsModule } from '@angular/forms';
import { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';
import { SdsSelectedResultsModule } from '../selected-result/selected-result.module';
import { SdsAutocompleteSearchModule } from '../autocomplete-search/autocomplete-search.module';
import { allIcons as sdsAllIcons } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

describe('SDSAutocompleteComponent', () => {
  let component: SDSAutocompleteComponent;
  let fixture: ComponentFixture<SDSAutocompleteComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SDSAutocompleteComponent],
        imports: [
          FormsModule,
          SdsSelectedResultsModule,
          SdsAutocompleteSearchModule,
          NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons)),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SDSAutocompleteComponent);
    component = fixture.componentInstance;
    component.service = new AutoCompleteSampleDataService();
    component.model = new SDSSelectedItemModel();
    component.configuration = new SDSAutocompletelConfiguration();
    component.configuration.id = 'autoId';
    component.configuration.primaryKeyField = 'id';
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.primaryTextField = 'name';
    component.configuration.secondaryTextField = 'subtext';
    component.configuration.debounceTime = 0;
    component.configuration.autocompletePlaceHolderText = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle modes', () => {
    expect(component.isSingleMode()).toBeTruthy();
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    expect(component.isSingleMode()).toBeFalsy();
    component.configuration = null;
    expect(component.isSingleMode()).toBeFalsy();
  });

  it('should handle writeValue', () => {
    // Set by Array
    const myItems = { test: '123' };
    component.writeValue([myItems]);
    expect(component.model.items[0]).toEqual(myItems);

    // Set by empty Array
    component.writeValue([]);
    expect(component.model.items).toEqual([]);

    // Set by Object
    const myObjItems = new SDSSelectedItemModel([{ test: '123' }]);
    component.writeValue(myObjItems);
    expect(component.model.items[0]).toEqual(myItems);

    // Set by empty Object
    let myEmptyObjItems = new SDSSelectedItemModel();
    component.writeValue(myEmptyObjItems);
    expect(component.model.items).toEqual([]);

    // Pass null
    component.writeValue(null);
    expect(component.model.items).toEqual([]);

    // Pass empty string
    component.writeValue('');
    expect(component.model.items).toEqual([]);
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
    expect(component.onChange).toBe(item);
  });

  it('should handle registerOnTouched', () => {
    let item = {};
    component.registerOnTouched(item);
    expect(component.onTouched).toBe(item);
  });
});
