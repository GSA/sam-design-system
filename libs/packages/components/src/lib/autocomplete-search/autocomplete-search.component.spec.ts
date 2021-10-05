/* tslint:disable */
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { SDSAutocompleteSearchComponent } from './autocomplete-search.component';
import { SDSAutocompleteSearchConfiguration } from './models/SDSAutocompleteConfiguration';
import { FormsModule } from '@angular/forms';
import { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';
import { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';
import { By } from '@angular/platform-browser';
import { AutoCompleteSampleDataService } from './autocomplete-seach-test-service.spec';

import { OverlayModule } from '@angular/cdk/overlay';
import { IconModule, allIcons as sdsAllIcons } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

describe('SamAutocompleteComponent', () => {
  let component: SDSAutocompleteSearchComponent;
  let fixture: ComponentFixture<SDSAutocompleteSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SDSAutocompleteSearchComponent],

      imports: [FormsModule, OverlayModule, IconModule, NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons))]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDSAutocompleteSearchComponent);
    component = fixture.componentInstance;
    component.service = new AutoCompleteSampleDataService();
    component.model = new SDSSelectedItemModel();
    component.configuration = new SDSAutocompleteSearchConfiguration();
    component.configuration.id = 'autoId';
    component.configuration.primaryKeyField = 'element_id';
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.primaryTextField = 'value';
    component.configuration.secondaryTextField = 'description';
    component.configuration.debounceTime = 0;
    component.configuration.autocompletePlaceHolderText = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an input', () => {
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).toBeDefined();
  });

  it('Should check for focus', () => {
    const event = {};
    component.checkForFocus(event);
    fixture.detectChanges();
    expect(component.inputValue).toBe('');
    expect(component.showResults).toBeFalsy();
  });

  it('Should have an input id', () => {
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.attributes.id).toBe('autoId');
  });

  it('Should have empty results not exist', () => {
    fixture.detectChanges();
    expect(component.resultsListElement).toBe(undefined);
  });

  it('Should have empty results with invalid search', fakeAsync(() => {
    const event = {
      preventDefault: () => { },
      target: component.input.nativeElement,
    };
    component.input.nativeElement.value = 'search';
    component.input.nativeElement.focus();
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(1);
    const emptyItem = fixture.debugElement.query(By.css('.emptyResults'));
    expect(emptyItem).toBeTruthy();
  }));

  it('Should have results with minimumCharacterCountSearch', fakeAsync(() => {
    const event = {
      preventDefault: () => { },
      target: component.input.nativeElement,
    };
    component.input.nativeElement.value = 'R';
    component.input.nativeElement.focus();
    component.configuration.minimumCharacterCountSearch = 2;
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
  }));

  it('Should have results with input and free text search on', fakeAsync(() => {
    component.inputValue = 'search text';
    const event = {
      preventDefault: () => { },
      key: 'Enter',
      target: { value: component.inputValue },
    };
    component.configuration.isFreeTextEnabled = true;
    component.highlightedIndex = -1;
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.inputValue).toBe('search text');
  }));

  it('Should have results key press', fakeAsync(() => {
    const event = {
      preventDefault: () => { },
      target: component.input.nativeElement,
    };
    component.input.nativeElement.value = 'Formu';
    component.input.nativeElement.focus();
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(2);
    component.onScroll();
    tick();
    fixture.detectChanges();
  }));

  it('Should not highlight first result if free text is on', fakeAsync(() => {
    const event = {
      preventDefault: () => { },
      target: component.input.nativeElement,
    };
    component.configuration.isFreeTextEnabled = true;
    component.input.nativeElement.value = 'id';
    component.input.nativeElement.focus();
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(1);
    expect(component.highlightedIndex).toBe(-1);
  }));

  it('Should have empty results key press minimumCharacterCountSearch', fakeAsync(() => {
    const event = {
      preventDefault: () => { },
      key: 'd',
      target: { value: 'id' },
    };
    component.configuration.minimumCharacterCountSearch = 3;
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list).toBe(null);
  }));

  it('Should have results on focus', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(16);
    expect(component.results[0]['highlighted']).toBeTruthy();
  }));

  it('Should not have results on focus', fakeAsync(() => {
    component.configuration.focusInSearch = false;
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list).toBeNull();
  }));

  it('Select second item with down and up arrows', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const downEvent = {
      key: 'Down',
      target: { value: 'id' },
      preventDefault: jasmine.createSpy(),
    };
    component.onKeydown(downEvent);
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    const items = component.getFlatElements();
    expect(list.nativeElement.children.length).toBe(16);
    expect(items[1]['highlighted']).toBeTruthy();
    const upEvent = {
      key: 'Up',
      target: { value: 'id' },
      preventDefault: jasmine.createSpy(),
    };
    component.onKeydown(upEvent);
    tick();
    fixture.detectChanges();

    expect(items[0]['highlighted']).toBeTruthy();
  }));

  it('Select on top element selected up arrows with grouping', fakeAsync(() => {
    component.inputFocusHandler();
    component.configuration.isGroupingEnabled = true;
    component.configuration.groupByChild = 'elements';
    component.highlightedIndex = 0;
    component.highlightedChildIndex = 0;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const downEvent = {
      key: 'Up',
      target: { value: 'id' },
      preventDefault: jasmine.createSpy(),
    };
    component.onKeydown(downEvent);
    tick();
    fixture.detectChanges();
    const items = component.getFlatElements();
    expect(items[0]['highlighted']).toBeTruthy();
    fixture.detectChanges();
    tick();
    component.highlightedIndex = 1;
    component.highlightedChildIndex = 0;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    component.onKeydown(downEvent);
  }));

  it('Select last child item with down arrows with grouping', fakeAsync(() => {
    component.inputFocusHandler();
    component.configuration.isGroupingEnabled = true;
    component.configuration.groupByChild = 'elements';
    tick();
    fixture.detectChanges();
    component.highlightedIndex = 0;
    component.highlightedChildIndex = 4;

    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const downEvent = {
      key: 'Down',
      target: { value: 'id' },
      preventDefault: jasmine.createSpy(),
    };
    component.onKeydown(downEvent);
    tick();
    fixture.detectChanges();
    const items = component.getFlatElements();
    expect(items[1]['highlighted']).toBeTruthy();
  }));

  it('Select second item with down and up arrows with grouping', fakeAsync(() => {
    component.inputFocusHandler();
    component.configuration.isGroupingEnabled = true;
    component.configuration.groupByChild = 'elements';

    component.highlightedIndex = 2;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const downEvent = {
      key: 'Down',
      target: { value: 'id' },
      preventDefault: jasmine.createSpy(),
    };
    component.onKeydown(downEvent);
    tick();
    fixture.detectChanges();
    const items = component.getFlatElements();
    expect(items[1]['highlighted']).toBeTruthy();

    const upEvent = {
      key: 'Up',
      target: { value: 'id' },
      preventDefault: jasmine.createSpy(),
    };
    component.highlightedChildIndex = 3;
    component.onKeydown(upEvent);
    tick();
    fixture.detectChanges();
    expect(items[0]['highlighted']).toBeTruthy();
  }));

  it('Up arrow when on first item', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(16);
    const items = component.getFlatElements();
    expect(items[0]['highlighted']).toBeTruthy();
    const upEvent = {
      key: 'Up',
      target: { value: 'id' },
      preventDefault: () => true,
    };
    component.onKeydown(upEvent);
    tick();
    fixture.detectChanges();
    expect(items[2]['highlighted']).toBeFalsy();
  }));

  it('Down arrow when on over lists item', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();

    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(16);
    expect(component.results[0]['highlighted']).toBeTruthy();
    fixture.detectChanges();
    tick();
    const upEvent = {
      key: 'Down',
      target: { value: 'id' },
      preventDefault: jasmine.createSpy(),
    };
    component.onKeydown(upEvent);
    tick();
    fixture.detectChanges();
    const items = component.getFlatElements();
    expect(items[1]['highlighted']).toBeTruthy();
  }));

  it('Should have delete have results', fakeAsync(() => {
    const event = {
      preventDefault: () => { },
      target: component.input.nativeElement,
    };
    component.input.nativeElement.value = 'id';
    component.input.nativeElement.focus();
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(1);
  }));

  it('Should have results Escape press', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();
    const listBefore = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(listBefore.nativeElement.children.length).toBe(16);
    const event = {
      key: 'Escape',
      target: { value: 'id' },
      preventDefault: () => { },
    };
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const listAfter = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(listAfter).toBeFalsy();
  }));

  it('Should have reuslts on focus', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(16);
    expect(component.results[0]['highlighted']).toBeTruthy();
  }));

  it('select item with enter key', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(16);
    expect(component.results[0]['highlighted']).toBeTruthy();
    const event = {
      key: 'Enter',
      target: { value: 'id' },
      preventDefault: () => { },
    };
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.model.items.length).toBe(1);
  }));

  it('Should return only essentialModelFields', fakeAsync(() => {
    component.essentialModelFields = true;
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    const event = {
      key: 'Enter',
      target: { value: 'id' },
      preventDefault: () => { },
    };
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.model.items.length).toBe(1);

    expect(Object.keys(component.model.items[0]).length).toBe(3);
  }));

  it('clearInput and results closed', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(list.nativeElement.children.length).toBe(16);
    component.clearInput();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const listAfter = fixture.debugElement.query(By.css('#autoId-listbox'));
    expect(listAfter).toBeFalsy();
  }));

  it('should handle writeValue', () => {
    component.model = null;
    component.writeValue({});
    expect(component.model).toBe(null);
    let model = new SDSSelectedItemModel();
    component.writeValue(model);
    expect(component.model).toBe(model);
    expect(component.inputValue).toBe('');
    model = new SDSSelectedItemModel();
    model.items = [
      {
        id: 'aaa',
        value: 'bbb',
      },
    ];
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.primaryTextField = 'value';
    component.writeValue(model);
    expect(component.model).toBe(model);
    expect(component.inputValue).toBe('bbb');
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

  it('should free text be shown', () => {
    let textValue = 'Some value';
    expect(component.showFreeText()).toBeFalsy();
    component.configuration.isFreeTextEnabled = true;
    expect(component.showFreeText()).toBeFalsy();
    component.inputValue = textValue;
    expect(component.showFreeText()).toBeTruthy();
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

  it('should have reference to resultslist element defined after results on focus are populated', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    expect(component.resultsListElement).toBeDefined();
  }));

  it('Should have enable tag mode', fakeAsync(() => {
    component.configuration.isTagModeEnabled = true;
    component.inputValue = 'searchtext';
    const event = {
      key: 'Enter',
      target: { value: component.inputValue },
      preventDefault: () => { },
    };
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.model.items.length).toBe(1);
  }));

  it('Should have input read only', fakeAsync(() => {
    component.configuration.inputReadOnly = true;
    const event = {
      key: 'a',
      preventDefault: () => { },
    };
    component.onkeypress(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('.usa-input'));
    expect(input.nativeElement.value).toBe('');
  }));

  it('Should not trigger backspace event input read only', fakeAsync(() => {
    component.inputValue = 'Search';
    component.configuration.inputReadOnly = true;
    const event = {
      key: 'Backspace',
      preventDefault: () => { },
      target: {
        value: component.inputValue,
      },
    };
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    console.log(event);
    const input = fixture.debugElement.query(By.css('.usa-input'));
    expect(input.nativeElement.value).toBe('Search');
  }));
  it('Should have input not read only', fakeAsync(() => {
    component.inputValue = 'a';
    const event = {
      key: 'a',
      target: { value: component.inputValue },
      preventDefault: () => { },
    };
    component.onkeypress(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('.usa-input'));
    expect(input.nativeElement.value).toBe('a');
  }));
});
