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
/* tslint:disable */
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { SDSAutocompleteSearchComponent } from './autocomplete-search.component';
import { SDSAutocompleteSearchConfiguration } from './models/SDSAutocompleteConfiguration';
import { FormsModule } from '@angular/forms';
import { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';
import { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';
import { By } from '@angular/platform-browser';
import { AutoCompleteSampleDataService } from './autocomplete-seach-test-service';

import { OverlayModule } from '@angular/cdk/overlay';

describe('SamAutocompleteComponent', () => {
  let component: SDSAutocompleteSearchComponent;
  let fixture: ComponentFixture<SDSAutocompleteSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SDSAutocompleteSearchComponent, UsaIconStubComponent],

      imports: [FormsModule, OverlayModule],
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
      preventDefault: () => {},
      target: component.input.nativeElement,
    };
    component.input.nativeElement.value = 'search';
    component.input.nativeElement.focus();
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(1);
    const emptyItem = fixture.debugElement.query(By.css('.emptyResults'));
    expect(emptyItem).toBeTruthy();
  }));

  it('Should have results with minimumCharacterCountSearch', fakeAsync(() => {
    const event = {
      preventDefault: () => {},
      target: component.input.nativeElement,
    };
    component.input.nativeElement.value = 'R';
    component.input.nativeElement.focus();
    component.configuration.minimumCharacterCountSearch = 2;
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
  }));

  it('Should have results with input and free text search on', fakeAsync(() => {
    component.inputValue = 'search text';
    const event = {
      preventDefault: () => {},
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
      preventDefault: () => {},
      target: component.input.nativeElement,
    };
    component.input.nativeElement.value = 'Formu';
    component.input.nativeElement.focus();
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(2);
    component.onScroll();
    tick();
    fixture.detectChanges();
  }));

  it('Should not highlight first result if free text is on', fakeAsync(() => {
    const event = {
      preventDefault: () => {},
      target: component.input.nativeElement,
    };
    component.configuration.isFreeTextEnabled = true;
    component.input.nativeElement.value = 'id';
    component.input.nativeElement.focus();
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(1);
    expect(component.highlightedIndex).toBe(-1);
  }));

  it('Should have empty results key press minimumCharacterCountSearch', fakeAsync(() => {
    const event = {
      preventDefault: () => {},
      key: 'd',
      target: { value: 'id' },
    };
    component.configuration.minimumCharacterCountSearch = 3;
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list).toBe(null);
  }));

  it('Should have results on focus', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(16);
    expect(component.results[0]['highlighted']).toBeTruthy();
  }));

  it('Should not have results on focus', fakeAsync(() => {
    component.configuration.focusInSearch = false;
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
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
      preventDefault: vi.fn(),
    };
    component.onKeydown(downEvent);
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    const items = component.getFlatElements();
    expect(list.nativeElement.children.length).toBe(16);
    expect(items[1]['highlighted']).toBeTruthy();
    const upEvent = {
      key: 'Up',
      target: { value: 'id' },
      preventDefault: vi.fn(),
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
      preventDefault: vi.fn(),
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
      preventDefault: vi.fn(),
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
      preventDefault: vi.fn(),
    };
    component.onKeydown(downEvent);
    tick();
    fixture.detectChanges();
    const items = component.getFlatElements();
    expect(items[3]['highlighted']).toBeTruthy();

    const upEvent = {
      key: 'Up',
      target: { value: 'id' },
      preventDefault: vi.fn(),
    };
    component.highlightedChildIndex = 3;
    component.onKeydown(upEvent);
    tick();
    fixture.detectChanges();
    expect(items[2]['highlighted']).toBeTruthy();
  }));

  it('Up arrow when on first item', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
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

    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(16);
    expect(component.results[0]['highlighted']).toBeTruthy();
    fixture.detectChanges();
    tick();
    const upEvent = {
      key: 'Down',
      target: { value: 'id' },
      preventDefault: vi.fn(),
    };
    component.onKeydown(upEvent);
    tick();
    fixture.detectChanges();
    const items = component.getFlatElements();
    expect(items[1]['highlighted']).toBeTruthy();
  }));

  it('Should have delete have results', fakeAsync(() => {
    const event = {
      preventDefault: () => {},
      target: component.input.nativeElement,
    };
    component.input.nativeElement.value = 'id';
    component.input.nativeElement.focus();
    component.textChange(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(1);
  }));

  it('Should have results Escape press', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();
    const listBefore = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(listBefore.nativeElement.children.length).toBe(16);
    const event = {
      key: 'Escape',
      target: { value: 'id' },
      preventDefault: () => {},
    };
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const listAfter = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(listAfter).toBeFalsy();
  }));

  it('Should have reuslts on focus', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(16);
    expect(component.results[0]['highlighted']).toBeTruthy();
  }));

  it('select item with enter key', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(16);
    expect(component.results[0]['highlighted']).toBeTruthy();
    const event = {
      key: 'Enter',
      target: { value: 'id' },
      preventDefault: () => {},
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
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    const event = {
      key: 'Enter',
      target: { value: 'id' },
      preventDefault: () => {},
    };
    component.onKeydown(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.model.items.length).toBe(1);
  }));

  it('clearInput and results closed', fakeAsync(() => {
    component.inputFocusHandler();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.sds-autocomplete'));
    expect(list.nativeElement.children.length).toBe(16);
    component.clearInput();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const listAfter = fixture.debugElement.query(By.css('.sds-autocomplete'));
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
      preventDefault: () => {},
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
      preventDefault: () => {},
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
      preventDefault: () => {},
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
      preventDefault: () => {},
    };
    component.onkeypress(event);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('.usa-input'));
    expect(input.nativeElement.value).toBe('a');
  }));

  it('should debounce search dispatch and fetch results asynchronously', fakeAsync(() => {
    component.configuration.debounceTime = 200;
    component.configuration.minimumCharacterCountSearch = 2;
    component.input.nativeElement.value = 'Form';
    component.input.nativeElement.focus();

    const event = {
      preventDefault: vi.fn(),
      target: component.input.nativeElement,
    };
    component.textChange(event);
    fixture.detectChanges();

    // Before debounce elapsed
    tick(100);
    expect(component.showResults).toBe(false);

    // After debounce elapsed
    tick(100);
    fixture.detectChanges();
    expect(component.showResults).toBe(true);
    expect(component.results.length).toBeGreaterThan(0);
    expect(component.srOnlyText).toContain('results available');
  }));

  it('should cancel pending search timer if new textChange occurs', fakeAsync(() => {
    component.configuration.debounceTime = 200;
    component.configuration.minimumCharacterCountSearch = 2;
    component.input.nativeElement.focus();

    component.input.nativeElement.value = 'First';
    component.textChange({ preventDefault: vi.fn(), target: component.input.nativeElement });
    tick(100);

    // User types more before first timer fires
    component.input.nativeElement.value = 'Second';
    component.textChange({ preventDefault: vi.fn(), target: component.input.nativeElement });
    tick(100);
    expect(component.showResults).toBe(false);

    tick(100);
    fixture.detectChanges();
    expect(component.showResults).toBe(true);
  }));

  it('should not search if event target is not activeElement', () => {
    const preventSpy = vi.fn();
    const otherElement = document.createElement('input');
    const event = {
      preventDefault: preventSpy,
      target: otherElement,
    };
    component.textChange(event);
    expect(preventSpy).toHaveBeenCalled();
  });

  it('should handle Alt keydown by opening/focusing search', () => {
    const focusSpy = vi.spyOn(component, 'inputFocusHandler');
    const event = {
      key: 'Alt',
      preventDefault: vi.fn(),
    };
    component.onKeydown(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(focusSpy).toHaveBeenCalled();
  });

  it('should handle Tab keydown by returning early', () => {
    const event = {
      key: 'Tab',
      preventDefault: vi.fn(),
    };
    component.onKeydown(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('should stopPropagation on Escape key when results are open', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();
    expect(component.showResults).toBe(true);

    const stopPropagationSpy = vi.fn();
    const event = {
      key: 'Escape',
      stopPropagation: stopPropagationSpy,
      preventDefault: vi.fn(),
    };
    component.onKeydown(event);
    expect(stopPropagationSpy).toHaveBeenCalled();
    expect(component.showResults).toBe(false);
  }));

  it('should not decrement highlightedIndex below 0 on arrow up', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();
    component.highlightedIndex = 0;

    const upEvent = {
      key: 'Up',
      preventDefault: vi.fn(),
    };
    component.onKeydown(upEvent);
    expect(component.highlightedIndex).toBe(0);
  }));

  it('should not increment highlightedIndex past end on arrow down', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();
    const flat = component.getFlatElements();
    component.highlightedIndex = flat.length - 1;

    const downEvent = {
      key: 'Down',
      preventDefault: vi.fn(),
    };
    component.onKeydown(downEvent);
    expect(component.highlightedIndex).toBe(flat.length - 1);
  }));

  it('should handle Space key to select highlighted item when useCheckBoxes is enabled', fakeAsync(() => {
    component.configuration.useCheckBoxes = true;
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();

    component.inputValue = '';
    component.highlightedIndex = 0;
    const itemToSelect = component.results[0];
    (component as any).highlightedItem = itemToSelect;

    const spaceEvent = {
      key: ' ',
      preventDefault: vi.fn(),
    };
    component.onKeydown(spaceEvent);
    expect(spaceEvent.preventDefault).toHaveBeenCalled();
    expect(component.model.items.length).toBe(1);
  }));

  it('should unselect already selected item in MULTIPLE mode when useCheckBoxes is enabled', fakeAsync(() => {
    component.configuration.useCheckBoxes = true;
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();

    const item = component.results[0];
    component.selectItem(item);
    expect(component.checkItemSelected(item)).toBe(true);
    expect(component.model.items.length).toBe(1);

    // Select again to unselect
    component.selectItem(item);
    expect(component.checkItemSelected(item)).toBe(false);
    expect(component.model.items.length).toBe(0);
  }));

  it('should keep results open and update highlightedIndex when selecting in MULTIPLE mode without tag mode', fakeAsync(() => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    component.configuration.isTagModeEnabled = false;
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();

    const flat = component.getFlatElements();
    const itemToSelect = flat[2];
    component.selectItem(itemToSelect);

    expect(component.showResults).toBe(true);
    expect(component.highlightedIndex).toBe(2);
    expect(component.inputValue).toBe('');
  }));

  it('unselectItem should remove item and propagate change', () => {
    const changeSpy = vi.fn();
    component.registerOnChange(changeSpy);
    const item = { element_id: 'abc', value: 'Abc' };
    component.model.items = [item];

    component.unselectItem(item);
    expect(component.model.items.length).toBe(0);
    expect(changeSpy).toHaveBeenCalledWith(component.model);
  });

  it('tabOutside should close results and remove focus when useCheckBoxes is false', () => {
    component.configuration.useCheckBoxes = false;
    component.showResults = true;
    component.tabOutside({});
    expect(component.showResults).toBe(false);
  });

  it('tabOutside should not close results when useCheckBoxes is true', () => {
    component.configuration.useCheckBoxes = true;
    component.showResults = true;
    component.tabOutside({});
    expect(component.showResults).toBe(true);
  });

  it('focusRemoved should restore inputValue from model in SINGLE mode when not free text', () => {
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.isFreeTextEnabled = false;
    component.model.items = [{ element_id: '1', value: 'Existing Value' }];
    component.inputValue = 'dirty edited input';

    component.checkForFocus({});
    expect(component.inputValue).toBe('Existing Value');
  });

  it('focusRemoved should clear inputValue in SINGLE mode when model has no items and not free text', () => {
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.isFreeTextEnabled = false;
    component.model.items = [];
    component.inputValue = 'some text';

    component.checkForFocus({});
    expect(component.inputValue).toBe('');
  });

  it('focusRemoved should clear inputValue in MULTIPLE mode', () => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    component.inputValue = 'some text';

    component.checkForFocus({});
    expect(component.inputValue).toBe('');
  });

  it('focusRemoved with freeText in SINGLE mode should replace changed item with free text', () => {
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.isFreeTextEnabled = true;
    component.model.items = [{ element_id: 'old', name: 'old', value: 'old' }];
    component.inputValue = 'new free text';

    component.checkForFocus({});
    expect(component.model.items.length).toBe(1);
    expect((component.model.items[0] as any).value).toBe('new free text');
  });

  it('focusRemoved with freeText in SINGLE mode should add free text item if model is empty', () => {
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.isFreeTextEnabled = true;
    component.model.items = [];
    component.inputValue = 'custom item';

    component.checkForFocus({});
    expect(component.model.items.length).toBe(1);
    expect((component.model.items[0] as any).value).toBe('custom item');
  });

  it('focusRemoved with freeText in SINGLE mode should do nothing if inputValue is empty', () => {
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.configuration.isFreeTextEnabled = true;
    component.model.items = [];
    component.inputValue = '';

    component.checkForFocus({});
    expect(component.model.items.length).toBe(0);
  });

  it('clearInput should clear model items and propagate change in SINGLE mode', () => {
    component.configuration.selectionMode = SelectionMode.SINGLE;
    component.model.items = [{ element_id: '1', value: 'One' }];
    const changeSpy = vi.fn();
    component.registerOnChange(changeSpy);

    component.clearInput();
    expect(component.model.items.length).toBe(0);
    expect(component.inputValue).toBe('');
    expect(changeSpy).toHaveBeenCalledWith(component.model);
  });

  it('openOptions should focus input and invoke inputFocusHandler', () => {
    const focusHandlerSpy = vi.spyOn(component, 'inputFocusHandler');
    component.openOptions();
    expect(focusHandlerSpy).toHaveBeenCalled();
  });

  it('getClass should return hide-cursor when inputReadOnly is true', () => {
    component.configuration.inputReadOnly = true;
    expect(component.getClass()).toBe('hide-cursor');
    component.configuration.inputReadOnly = false;
    expect(component.getClass()).toBe('');
  });

  it('isClearIconVisible should reflect disabled, hideCloseIcon, and inputValue states', () => {
    component.inputValue = 'something';
    component.disabled = false;
    expect(component.isClearIconVisible()).toBeTruthy();

    component.disabled = true;
    expect(component.isClearIconVisible()).toBeFalsy();

    component.disabled = false;
    component.inputValue = '';
    expect(component.isClearIconVisible()).toBeFalsy();

    component.inputValue = 'val';
    component.configuration.hideCloseIcon = true;
    component.model.items = [{ element_id: '1' }];
    expect(component.isClearIconVisible()).toBe(false);
  });

  it('showFreeText should return false if inputValue matches existing results or model items', fakeAsync(() => {
    component.configuration.isFreeTextEnabled = true;
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();

    // Match an existing result item
    component.inputValue = component.results[0]['value'];
    expect(component.showFreeText()).toBe(false);

    // Empty input
    component.inputValue = '';
    expect(component.showFreeText()).toBe(false);

    // Match an item in model
    component.results = [];
    component.model.items = [{ element_id: '99', value: 'In Model' }];
    component.inputValue = 'In Model';
    expect(component.showFreeText()).toBe(false);

    // Completely new input
    component.inputValue = 'Unique New Text';
    expect(component.showFreeText()).toBe(true);
  }));

  it('setHighlightedItem should handle undefined/null item with announcement', () => {
    component.results = [{ element_id: '1', value: 'One' }];
    (component as any).setHighlightedItem(null);
    expect((component as any).highlightedItem).toBeUndefined();
    expect(component.srOnlyText).toBe('No item selected');
  });

  it('setHighlightedItem should include secondary text when available', () => {
    component.results = [{ element_id: '1', value: 'One', description: 'Desc' }];
    (component as any).setHighlightedItem(component.results[0]);
    expect(component.srOnlyText).toBe('One: Desc');
  });

  it('onScroll should fetch additional results when scroll reaches threshold', fakeAsync(() => {
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();

    // Start with a subset of results so additional items can be fetched
    component.results = component.results.slice(0, 5);
    (component as any).maxResults = 16;
    const initialCount = component.results.length;

    // Emulate results container dimensions
    const resultsNative = component.resultsListElement.nativeElement;
    Object.defineProperty(resultsNative, 'offsetHeight', { value: 100, configurable: true });
    Object.defineProperty(resultsNative, 'scrollTop', { value: 150, configurable: true });
    Object.defineProperty(resultsNative, 'scrollHeight', { value: 300, configurable: true });

    component.onScroll();
    tick();
    fixture.detectChanges();

    expect(component.results.length).toBeGreaterThan(initialCount);
    expect(component.showLoad).toBe(false);
  }));

  it('onScroll should not fetch additional results if not scrolled far enough', () => {
    component.results = [{ element_id: '1' }];
    (component as any).maxResults = 50;
    (component as any).resultsListElement = {
      nativeElement: {
        offsetHeight: 100,
        scrollTop: 10,
        scrollHeight: 500,
      },
    };
    const getAdditionalSpy = vi.spyOn(component as any, 'getAdditionalResults');
    component.onScroll();
    expect(getAdditionalSpy).not.toHaveBeenCalled();
  });

  it('should reset inputValue in MULTIPLE mode when tag mode is enabled during selectItem', () => {
    component.configuration.selectionMode = SelectionMode.MULTIPLE;
    component.configuration.isTagModeEnabled = true;
    component.inputValue = 'some tag text';

    component.selectItem({ element_id: 't1', value: 'Tag Item 1' });
    expect(component.inputValue).toBe('');
    expect(component.showResults).toBe(false);
  });

  it('should attach scroll listener when autocomplete is within modal dialog', () => {
    const dialogDiv = document.createElement('div');
    dialogDiv.className = 'sds-dialog-content';
    document.body.appendChild(dialogDiv);

    try {
      expect(component.isAutocompleteWithinModal()).toBe(true);
      const addListenerSpy = vi.spyOn(component, 'addListener');
      component.inputFocusHandler();
      expect(addListenerSpy).toHaveBeenCalled();

      // Trigger scroll event on dialog with parent style.bottom to cover both branches
      const dropdownParent = document.createElement('div');
      dropdownParent.style.bottom = '100px';
      const dropdownDiv = document.createElement('div');
      dropdownDiv.className = 'sds-autocomplete';
      dropdownParent.appendChild(dropdownDiv);
      document.body.appendChild(dropdownParent);
      try {
        dialogDiv.dispatchEvent(new Event('scroll'));
        dropdownParent.style.bottom = '';
        dialogDiv.dispatchEvent(new Event('scroll'));
      } finally {
        dropdownParent.remove();
      }
    } finally {
      dialogDiv.remove();
    }
  });

  it('scrollToSelectedItem should handle checkbox class selector', fakeAsync(() => {
    component.configuration.useCheckBoxes = true;
    component.inputFocusHandler();
    tick();
    fixture.detectChanges();

    component.highlightedIndex = 1;
    (component as any).scrollToSelectedItem();
    expect(component.highlightedIndex).toBe(1);
  }));
});
