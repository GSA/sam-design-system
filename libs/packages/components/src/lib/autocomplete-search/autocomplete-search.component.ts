import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  forwardRef,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SDSAutocompleteServiceInterface } from './models/SDSAutocompleteServiceInterface';
import { KeyHelper, KEYS } from '../key-helper/key-helper';
import { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';
import { SelectionMode, SDSSelectedItemModelHelper } from '../selected-result/models/sds-selected-item-model-helper';

import { SDSAutocompleteSearchConfiguration } from './models/SDSAutocompleteConfiguration';

const Autocomplete_Autocomplete_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),
  multi: true,
};

@Component({
  selector: 'sds-search-autocomplete',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss'],
  providers: [Autocomplete_Autocomplete_VALUE_ACCESSOR],
})
export class SDSAutocompleteSearchComponent implements ControlValueAccessor {
  constructor(private _changeDetectorRef: ChangeDetectorRef) {}
  /**
   * Ul list of elements
   */
  @ViewChild('resultsList') resultsListElement: ElementRef;

  /**
   * input control
   */
  @ViewChild('input') input: ElementRef;

  /**
   * Allow to insert a customized template for suggestions to use
   */
  @Input() itemTemplate: TemplateRef<any>;

  /**
   * The data model that has the selected item
   */
  public model: SDSSelectedItemModel;

  /**
   * Model contain only the primary key, primary value, and secondary value.
   */
  @Input() public essentialModelFields: boolean = false;

  /**
   * Configuration for the Autocomplete control
   */
  @Input()
  public configuration: SDSAutocompleteSearchConfiguration;

  /**
   * Instance of the SamHiercarchicalServiceInterface provided
   */
  @Input()
  public service: SDSAutocompleteServiceInterface;

  /**
   * Timer id for the timer awaiting the service call for more typeing
   */
  private timeoutNumber: number;

  /**
   *  result set to be rendered
   */
  results: object[];

  /**
   * max number of results to be shown
   */
  private maxResults: number;

  /**
   * selected index
   */
  public highlightedIndex: number = 0;

  /**
   * selected child index
   */
  public highlightedChildIndex = 0;

  /**
   * highlighted object in drop down
   */
  private highlightedItem: object;

  /**
   * value of the input field
   */
  public inputValue: string = '';

  /**
   * Proprty being set on the object is highlighted
   */
  private HighlightedPropertyName = 'highlighted';

  public showLoad: boolean = true;

  /**
   * Search string
   */
  private searchString: string = null;

  /**
   * Message announced by screen readers when
   * autocomplete results are updated or new item
   * is highlighted
   */
  public srOnlyText: string;

  /**
   * To make input readonly
   */
  @Input() public inputReadOnly = false;

  /**
   * Stored Event for ControlValueAccessor
   */
  public onTouchedCallback: () => void = () => null;

  /**
   * Stored Event for ControlValueAccessor
   */
  public propogateChange: (_: any) => void = (_: any) => null;

  @Input()
  public disabled: boolean;

  private resultsAvailableMessage: string =
    ' results available. Use up and down arrows\
  to scroll through results. Hit enter to select.';

  private index = 0;

  /**
   * Gets the string value from the specifed properties of an object
   * @param object
   * @param propertyFields comma seperated list with periods depth of object
   */

  getObjectValue(object: Object, propertyFields: string): string {
    let value = '';
    let current = object;
    let fieldSplit = propertyFields.split(',');
    for (let i = 0; i < fieldSplit.length; i++) {
      let fieldValue = fieldSplit[i];
      let fieldPartSplit = fieldValue.split('.');
      for (let j = 0; j < fieldPartSplit.length; j++) {
        let fieldCheckValue = fieldPartSplit[j];
        if (current) {
          current = current[fieldCheckValue];
        }
      }

      if (current) {
        value += current.toString() + ' ';
      }
      current = object;
    }
    return value.trim();
  }

  /**
   * Determines if the dropdown should be shown
   */
  public showResults = false;

  /**
   * Clears the input fields and value
   */
  public clearInput(): void {
    this.inputValue = '';
    if (this.configuration.selectionMode === SelectionMode.SINGLE) {
      if (this.model.items.length > 0) {
        SDSSelectedItemModelHelper.clearItems(this.model.items);
        this.input.nativeElement.focus();
        this.propogateChange(this.model);
      }
    }
    this.onTouchedCallback();
    this.clearAndHideResults();
  }

  /**
   * Triggered when user clicks or enters on the up carat OR clicks outside this component
   * @param event
   */
  checkForFocus(event): void {
    this.focusRemoved();
    this.showResults = false;
  }
  tabOutside(event): void {
    if (!this.configuration.useCheckBoxes) {
      this.focusRemoved();
      this.showResults = false;
    }
  }

  /**
   *
   */
  private focusRemoved() {
    if (this.configuration?.selectionMode === SelectionMode.SINGLE) {
      if (this.configuration.isFreeTextEnabled) {
        // Only one option allowed and that one option has been made so delete to user input.
        if (this.model.items.length > 0 && this.model.items[0]['name'] !== this.inputValue) {
          SDSSelectedItemModelHelper.clearItems(this.model.items);
          this.propogateChange(this.model);
        }
        if (this.inputValue === '') {
        } else if (this.model.items.length === 0 && this.inputValue !== '') {
          const customItem = this.createFreeTextItem();
          this.selectItem(customItem);
        } else if (this.model.items.length > 0 && this.model.items[0]['name'] !== this.inputValue) {
          const customItem = this.createFreeTextItem();
          this.selectItem(customItem);
        }
      } else if (this.model.items.length > 0) {
        this.inputValue = this.getObjectValue(this.model.items[0], this.configuration.primaryTextField);
      } else {
        this.inputValue = '';
      }
    } else {
      this.inputValue = '';
    }
  }

  onkeypress(ev) {
    return this.configuration.inputReadOnly ? false : true;
  }
  textChange(event) {
    if (!this.configuration.isTagModeEnabled) {
      // ie 11 placeholders will incorrectly trigger input events (known bug)
      // if input isn't active element then don't do anything
      if (event.target != document.activeElement) {
        event.preventDefault();
        return;
      }
      const searchString = event.target.value || '';
      this.getResults(searchString);
    }
  }
  isClearIconVisible(): boolean {
    if (this.model && this.model.items.length > 0 && this.configuration.hideCloseIcon) return false;

    return this.inputValue && !this.disabled;
  }
  //
  /**
   * Event method used when focus is gained to the input
   */
  inputFocusHandler(): void {
    if (!this.configuration.isTagModeEnabled) {
      if (this.configuration.focusInSearch) {
        this.highlightedIndex = 0;
        this.highlightedChildIndex = this.configuration.isSelectableGroup ? 0 : null;
        this.getResults(this.inputValue || '');
      }
      this.onTouchedCallback();
      if (this.isAutocompleteWithinModal()) {
        this.addListener();
      }
    }
  }
  isAutocompleteWithinModal() {
    return document.getElementsByClassName('sds-dialog-content').length > 0;
  }

  /**
   * Key event
   * @param event
   */
  onKeydown(event): void {
    if (KeyHelper.is(KEYS.ALT, event)) {
      event.preventDefault();
      this.inputFocusHandler();
    }
    if (KeyHelper.is(KEYS.TAB, event)) {
      return;
    } else if (KeyHelper.is(KEYS.BACKSPACE, event)) {
      if (this.configuration.inputReadOnly) {
        event.preventDefault();
      }
    } else if (KeyHelper.is(KEYS.DOWN, event)) {
      event.preventDefault();
      this.onArrowGroupDown();
    } else if (KeyHelper.is(KEYS.UP, event)) {
      event.preventDefault();
      this.onArrowGroupUp();
    } else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex >= 0) {
      if (this.configuration.isTagModeEnabled && this.inputValue.length > 0) {
        const val = this.createFreeTextItem();
        this.selectItem(val);
      } else {
        this.selectItem(this.highlightedItem);
      }
    } else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex < 0) {
      if (this.configuration.isFreeTextEnabled && this.inputValue.length > 0) {
        const val = this.createFreeTextItem();
        this.selectItem(val);
        this.clearAndHideResults();
      }
    } else if (
      KeyHelper.is(KEYS.SPACE, event) &&
      this.configuration.useCheckBoxes &&
      this.highlightedIndex >= 0 &&
      this.inputValue === ''
    ) {
      event.preventDefault();
      this.selectItem(this.highlightedItem);
    } else if (KeyHelper.is(KEYS.ESC, event)) {
      if (this.showResults) {
        this.clearAndHideResults();
        if (event.stopPropagation) {
          event.stopPropagation();
        }
      }
    }
  }

  /**
   * selects the item adding it to the model and closes the results
   * @param item
   */
  public selectItem(item: object): void {
    let filterItem = {};
    if (this.essentialModelFields) {
      filterItem[this.configuration.primaryKeyField] = item[this.configuration.primaryKeyField];
      filterItem[this.configuration.primaryTextField] = item[this.configuration.primaryTextField];
      if (this.configuration.secondaryTextField) {
        filterItem[this.configuration.secondaryTextField] = item[this.configuration.secondaryTextField];
      }
    } else {
      filterItem = item;
    }

    if (this.configuration.useCheckBoxes) {
      const isSelected = this.checkItemSelected(item);
      if (!isSelected) {
        this.addItemToModel(filterItem);
      } else if (this.configuration.selectionMode === SelectionMode.MULTIPLE) {
        this.unselectItem(item);
      }
    } else {
      this.addItemToModel(filterItem);
    }

    if (this.configuration.selectionMode === SelectionMode.MULTIPLE && !this.configuration.isTagModeEnabled) {
      this.showResults = true;
      this.input.nativeElement.focus();
      const flat = this.getFlatElements();
      const index = flat.findIndex(
        (element) => element[this.configuration.primaryKeyField] === item[this.configuration.primaryKeyField]
      );
      this.highlightedIndex = index;
      this.setHighlightedItem(flat[this.highlightedIndex]);
    } else {
      this.showResults = false;
      if (this.configuration.selectionMode === SelectionMode.MULTIPLE) {
        this.inputValue = '';
      }
      this.input.nativeElement.focus();
    }
  }

  private addItemToModel(item: object) {
    SDSSelectedItemModelHelper.addItem(
      item,
      this.configuration.primaryKeyField,
      this.configuration.selectionMode,
      this.model
    );
    this.propogateChange(this.model);
    let message = this.getObjectValue(item, this.configuration.primaryTextField);
    if (this.configuration.selectionMode === SelectionMode.SINGLE) {
      this.inputValue = message;
    }
  }

  public unselectItem(item: any): void {
    SDSSelectedItemModelHelper.removeItem(item, this.configuration.primaryKeyField, this.model);
    this.propogateChange(this.model);
  }
  /**
   *  clears the results and closes result drop down
   */
  private clearAndHideResults(): void {
    this.results = [];
    this.showResults = false;
    this.focusRemoved();
  }

  openOptions() {
    this.input.nativeElement.focus();
    this.inputFocusHandler();
  }

  public getFlatElements() {
    const results = this.results;
    const flat = [];
    const flatten = (array: any) => {
      for (let i in array) {
        const item = array[i];
        flat.push(item);
        if (item[this.configuration.groupByChild] && item[this.configuration.groupByChild].length) {
          flatten(item[this.configuration.groupByChild]);
        }
      }
    };
    flatten(results);
    return flat;
  }

  /**
   * When paging up and down with arrow key it sets the highlighted item into view
   */
  private scrollToSelectedItem() {
    if (this.highlightedIndex >= 0) {
      this._changeDetectorRef.detectChanges();
      const dom = this.resultsListElement.nativeElement;
      let selectedClass = this.configuration.useCheckBoxes
        ? '.sds-autocomplete__checkbox--highlighted'
        : '.sds-autocomplete__item--highlighted';
      const selectedChild = dom.querySelector(selectedClass);
      if (selectedChild) {
        // Manually set scroll top rather than invoke scroll functions for browser compatibility
        const containerCenter = this.resultsListElement.nativeElement.getBoundingClientRect().height / 2;
        this.resultsListElement.nativeElement.scrollTop = selectedChild.offsetTop - containerCenter;
      }
    }
  }

  /**
   *  handles the arrow down key event
   */
  private onArrowGroupDown(): void {
    if (this.results && this.results.length > 0) {
      const flat = this.getFlatElements();
      if (this.highlightedIndex < flat.length - 1) {
        this.highlightedIndex++;
      }
      this.setHighlightedItem(flat[this.highlightedIndex]);
      this.scrollToSelectedItem();
    }
  }

  /**
   *  handles the arrow up key event
   */
  private onArrowGroupUp(): void {
    if (this.results && this.results.length > 0) {
      const flat = this.getFlatElements();
      if (this.highlightedIndex != 0) {
        this.highlightedIndex--;
      }
      this.setHighlightedItem(flat[this.highlightedIndex]);
      this.scrollToSelectedItem();
    }
  }
  showFreeText() {
    if (this.configuration.isFreeTextEnabled) {
      if (this.inputValue) {
        if (this.inputValue.length !== 0) {
          let foundItem = false;
          if (this.results) {
            for (var i = 0; i < this.results.length && !foundItem; i++) {
              let item = this.results[i];
              foundItem = item[this.configuration.primaryTextField] === this.inputValue;
            }
          }
          if (this.model.items.length > 0 && !foundItem) {
            for (var i = 0; i < this.model.items.length && !foundItem; i++) {
              let item = this.model.items[i];
              foundItem = item[this.configuration.primaryTextField] === this.inputValue;
            }
          }

          return !foundItem;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return this.configuration.isFreeTextEnabled;
    }
  }

  private createFreeTextItem() {
    let item = { type: 'custom' };
    item[this.configuration.primaryTextField] = this.inputValue;
    item[this.configuration.primaryKeyField] = this.inputValue;
    return item;
  }
  /**
   *  return Item is already selected or not
   * @param result
   */
  checkItemSelected(result: any) {
    const selectedItem = this.model.items.filter(
      (item) => item[this.configuration.primaryKeyField] === result[this.configuration.primaryKeyField]
    );
    return selectedItem.length > 0 ? true : false;
  }
  /**
   *  gets the inital results
   * @param searchString
   */
  private getResults(searchString: string): void {
    if (searchString.length >= this.configuration.minimumCharacterCountSearch) {
      if (
        !this.matchPastSearchString(searchString) ||
        (this.matchPastSearchString(searchString) && !this.showResults) ||
        this.matchPastSearchString('')
      ) {
        this.searchString = searchString;
        window.clearTimeout(this.timeoutNumber);
        this.timeoutNumber = window.setTimeout(() => {
          this.showLoad = true;
          this.service.getDataByText(0, searchString).subscribe((result) => {
            this.results = result.items;
            this.showLoad = false;
            this.maxResults = result.totalItems;

            this.highlightedIndex =
              this.configuration.isFreeTextEnabled || this.maxResults == 0
                ? -1
                : this.highlightedIndex >= 0
                ? this.highlightedIndex
                : 0;
            if (!this.configuration.isFreeTextEnabled) {
              this.setHighlightedItem(this.results[this.highlightedIndex]);
            }
            this.showResults = true;
            this.addScreenReaderMessage(this.maxResults + ' ' + this.resultsAvailableMessage);
            this._changeDetectorRef.markForCheck();
          });
        }, this.configuration.debounceTime);
      }
    }
  }

  /**
   * Checks if the new search string matches the old search string
   * @param searchString
   */
  private matchPastSearchString(searchString: string) {
    return this.searchString === searchString;
  }
  /**
   * Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)
   */
  onScroll() {
    if (this.maxResults > this.results.length) {
      let scrollAreaHeight = this.resultsListElement.nativeElement.offsetHeight;
      let scrollTopPos = this.resultsListElement.nativeElement.scrollTop;
      let scrollAreaMaxHeight = this.resultsListElement.nativeElement.scrollHeight;
      if (scrollTopPos + scrollAreaHeight * 2 >= scrollAreaMaxHeight) {
        this.getAdditionalResults();
      }
    }
  }

  /**
   * gets more results based when scrolling and adds the items
   */
  private getAdditionalResults() {
    this.showLoad = true;
    this.service.getDataByText(this.results.length, this.searchString).subscribe((result) => {
      for (let i = 0; i < result.items.length; i++) {
        this.addResult(result.items[i]);
      }
      this.showLoad = false;
      this.maxResults = result.totalItems;
    });
  }

  /**
   * adds a single item to the list
   * @param item
   */
  private addResult(item: object) {
    //add check to make sure item does not exist
    this.results.push(item);
  }

  /**
   * Sets the highlighted item by keyboard or mouseover
   * @param item
   */
  private setHighlightedItem(item: Object): void {
    if (this.results && this.results.length > 0) {
      if (this.highlightedItem) {
        this.highlightedItem[this.HighlightedPropertyName] = false;
      }
      let message = '';
      if (item) {
        this.highlightedItem = item;
        this.highlightedItem[this.HighlightedPropertyName] = true;
        message = item[this.configuration.primaryTextField];
        if (this.configuration.secondaryTextField && item[this.configuration.secondaryTextField]) {
          message += ': ' + item[this.configuration.secondaryTextField];
        }
      } else {
        this.highlightedItem = undefined;
        message = 'No item selected';
      }
      this.addScreenReaderMessage(message);
    }
  }

  /**
   * Adds message to be read by screen reader
   * @param message
   */
  private addScreenReaderMessage(message: string) {
    this.srOnlyText = message;
  }

  writeValue(obj: any): void {
    if (obj instanceof SDSSelectedItemModel) {
      this.model = obj as SDSSelectedItemModel;
      this._changeDetectorRef.markForCheck();
      if (this.model.items.length === 0) {
        this.inputValue = '';
      } else if (this.configuration && this.configuration.selectionMode === SelectionMode.SINGLE) {
        this.inputValue = this.getObjectValue(this.model.items[0], this.configuration.primaryTextField);
      }
    }
  }

  addListener() {
    const autocompleteElement = document.getElementById(this.configuration.id);
    const dialogContainer = document.getElementsByClassName('sds-dialog-content');
    const resultsDropdown = document.getElementsByClassName('sds-autocomplete');

    let inputHeight = autocompleteElement.getBoundingClientRect().height;
    let modalHeight = dialogContainer[0].getBoundingClientRect().height;
    dialogContainer[0].addEventListener('scroll', function (event) {
      if (resultsDropdown.length > 0) {
        let inputTopValue = autocompleteElement.getBoundingClientRect().top;
        let inputBottomValue = modalHeight - inputTopValue;
        let listHeight = resultsDropdown[0].getBoundingClientRect().height;
        let element = resultsDropdown[0].parentElement;
        if (element && element.style.bottom) {
          element.style.bottom = inputBottomValue + listHeight - inputHeight + 30 + 'px';
        } else {
          element.style.top = inputTopValue + inputHeight + 'px';
        }
      }
    });
  }

  getClass() {
    return this.configuration.inputReadOnly ? 'hide-cursor' : '';
  }

  registerOnChange(fn: any): void {
    this.propogateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
