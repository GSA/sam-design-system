import { Component, Input, ViewChild, TemplateRef, ElementRef, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SDSAutocompleteServiceInterface } from './models/SDSAutocompleteServiceInterface';
import { KeyHelper, KEYS } from '../key-helper/key-helper';
import { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';
import { SelectionMode, SDSSelectedItemModelHelper } from '../selected-result/models/sds-selected-item-model-helper';
import { SDSAutocompleteSearchConfiguration } from './models/SDSAutocompleteConfiguration';
const Autocomplete_Autocomplete_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),
  multi: true
};

@Component({
  selector: 'sds-search-autocomplete',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss'],
  providers: [Autocomplete_Autocomplete_VALUE_ACCESSOR]
})
export class SDSAutocompleteSearchComponent implements ControlValueAccessor {

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }
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
   * Stored Event for ControlValueAccessor
   */
  public onTouchedCallback: () => void = () => null;

  /**
   * Stored Event for ControlValueAccessor
   */
  public propogateChange: (_: any) => void = (_: any) => null;

  @Input()
  public disabled: boolean;

  private resultsAvailableMessage: string = ' results available. Use up and down arrows\
  to scroll through results. Hit enter to select.';

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
    this.onTouchedCallback();
    this.clearAndHideResults();
  }

  /**
   * 
   * @param event 
   */
  checkForFocus(event): void {
    this.focusRemoved();
    this.showResults = false;
  }

  /**
   * 
   */
  private focusRemoved() {
    if (this.configuration.selectionMode === SelectionMode.SINGLE) {
      if (this.model.items.length > 0) {
        if (this.inputValue.length === 0) {
          SDSSelectedItemModelHelper.clearItems(this.model.items);
          this.propogateChange(this.model);
        } else {
          this.inputValue = this.getObjectValue(this.model.items[0], this.configuration.primaryTextField);
        }
      } else {
        this.inputValue = '';
      }
    } else {
      this.inputValue = '';
    }
  }

  textChange(event) {
    // ie 11 placeholders will incorrectly trigger input events (known bug)
    // if input isn't active element then don't do anything
    if (event.target != document.activeElement) {
      event.preventDefault();
      return;
    }
    const searchString = event.target.value || '';
    this.getResults(searchString);
  }

  /**
   * Event method used when focus is gained to the input
   */
  inputFocusHandler(): void {
    if (this.configuration.focusInSearch) {
      this.getResults(this.inputValue || '');
    }
    this.onTouchedCallback();
  }

  /**
   * Key event
   * @param event 
   */
  onKeydown(event): void {
    if (KeyHelper.is(KEYS.TAB, event)) {
      return;
    }
    else if (KeyHelper.is(KEYS.DOWN, event)) {
      this.onArrowDown();
    }
    else if (KeyHelper.is(KEYS.UP, event)) {
      event.preventDefault();
      this.onArrowUp();
    }
    else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex >= 0) {
      this.selectItem(this.highlightedItem);
    }
    else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex < 0) {
      const item = this.createFreeTextItem();
      this.selectItem(item);
    }
    else if (KeyHelper.is(KEYS.ESC, event)) {
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
    SDSSelectedItemModelHelper.addItem(item, this.configuration.primaryKeyField, this.configuration.selectionMode, this.model.items);
    this.propogateChange(this.model);
    let message = this.getObjectValue(item, this.configuration.primaryTextField);
    this.inputValue = message;
    this.focusRemoved();
    this.showResults = false;
  }

  /**
   *  clears the results and closes result drop down
   */
  private clearAndHideResults(): void {
    this.results = [];
    this.showResults = false;
    this.focusRemoved();
  }

  /**
   *  handles the arrow up key event
   */
  private onArrowUp(): void {
    if (this.results && this.results.length > 0) {
      if (this.highlightedIndex >= 0) {
        this.highlightedIndex--;
        this.setHighlightedItem(this.results[this.highlightedIndex]);
        this.scrollSelectedItemIntoView();
      }
    }
  }

  /**
   *  handles the arrow down key event
   */
  private onArrowDown(): void {
    if (this.results && this.results.length > 0) {
      if (this.highlightedIndex < this.results.length - 1) {
        this.highlightedIndex++;
        this.setHighlightedItem(this.results[this.highlightedIndex]);
        this.scrollSelectedItemIntoView();
      }
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
    let item = { 'type': 'custom' };
    item[this.configuration.primaryTextField] = this.inputValue;
    item[this.configuration.primaryKeyField] = this.inputValue;
    return item;
  }

  /**
   *  gets the inital results
   * @param searchString 
   */
  private getResults(searchString: string): void {
    if (searchString.length >= this.configuration.minimumCharacterCountSearch) {
      if (!this.matchPastSearchString(searchString) ||
        (this.matchPastSearchString(searchString) && !this.showResults)
        || this.matchPastSearchString('')) {
        this.searchString = searchString;
        window.clearTimeout(this.timeoutNumber);
        this.timeoutNumber = window.setTimeout(() => {
          this.showLoad = true;
          this.service.getDataByText(0, searchString).subscribe(
            (result) => {
              this.results = result.items;
              this.showLoad = false;
              this.maxResults = result.totalItems;

              this.highlightedIndex = this.configuration.isFreeTextEnabled ? -1 : 0;
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
   * highlights the index being hovered
   * @param index 
   */
  listItemHover(index: number): void {
    this.highlightedIndex = index;
    this.setHighlightedItem(this.results[this.highlightedIndex]);
  }

  /**
   * Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)
   */
  onScroll() {
    if (this.maxResults > this.results.length) {
      let scrollAreaHeight = this.resultsListElement.nativeElement.offsetHeight;
      let scrollTopPos = this.resultsListElement.nativeElement.scrollTop;
      let scrollAreaMaxHeight = this.resultsListElement.nativeElement.scrollHeight;
      if ((scrollTopPos + scrollAreaHeight * 2) >= scrollAreaMaxHeight) {
        this.getAdditionalResults();
      }
    }
  }

  /**
   * gets more results based when scrolling and adds the items
   */
  private getAdditionalResults() {
    this.showLoad = true;
    this.service.getDataByText(this.results.length, this.searchString).subscribe(
      (result) => {
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
   * When paging up and down with arrow key it sets the highlighted item into view
   */
  private scrollSelectedItemIntoView() {
    if (this.highlightedIndex >= 0) {
      const selectedChild = this.resultsListElement.nativeElement.children[this.highlightedIndex];
      selectedChild.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
    }
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
      if (this.model.items.length === 0) {
        this.inputValue = '';
      } else {
        if (this.configuration.selectionMode === SelectionMode.SINGLE) {
          this.inputValue = this.getObjectValue(this.model.items[0], this.configuration.primaryTextField);
        }
      }
    }
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