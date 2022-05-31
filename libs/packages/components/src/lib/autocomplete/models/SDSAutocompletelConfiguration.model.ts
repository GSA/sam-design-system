import { SDSSelectedResultConfiguration } from '../../selected-result/models/SDSSelectedResultConfiguration';
import { SDSAutocompleteSearchConfiguration } from '../../autocomplete-search/models/SDSAutocompleteConfiguration';
import { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';
import { Observable } from 'rxjs';

export class SDSAutocompletelConfiguration
  implements SDSSelectedResultConfiguration, SDSAutocompleteSearchConfiguration {
  /**
   * sets the default debounce time to 250 milliseconds
   */
  constructor() {
    this.debounceTime = 250;
    this.minimumCharacterCountSearch = 0;
  }

  /**
   * Used to describe the drop down (Text should match the label that will be supplied)
   */
  public labelText: string;

  /**
   * Used for the Id of the control
   */
  public id: string;

  /**
   *  This is the primary field used to identify each object in the results
   */
  public primaryKeyField: string;

  /**
   *  Property from supplied model used for the top part of the basic template
   */
  public primaryTextField: string;

  /**
   *  Property from supplied model used for the bottom part of the basic template
   */
  public secondaryTextField: string;

  /**
   *  Sets the time waited for addional key actions Default is 250 milliseconds
   */
  public debounceTime: number;

  /**
   * Place holder text for autocomplete input
   */
  public autocompletePlaceHolderText: string;

  /**
   * Mininumn Characters for search
   */
  public minimumCharacterCountSearch: number;

  /**
   * Mode of the model either allows a single item or multiple items
   */
  public selectionMode: SelectionMode = SelectionMode.SINGLE;

  /**
   * Allows option to allow user text not in the standard results
   */
  public isFreeTextEnabled: boolean = false;

  /**
   * Text appeneded ad the end of free text
   */
  public freeTextSubtext: string = 'search';

  /**
   * Focus into autocomplete search
   */
  public focusInSearch: boolean = true;

  /**
   * The aria-label for the auto-complete
   */
  public ariaLabelText: string;

  /**
   * To enable the tag mode
   */
  public isTagModeEnabled: boolean = false;

  /**
   * To make input readonly
   */
  public inputReadOnly = false;

  /**
   * Name of the children filed
   */
  public groupByChild: string = 'children';

  /**
   * To enable the Grouping mode
   */
  public isGroupingEnabled: boolean = false;

  /**
   * To enable the Group item selectable
   */
  public isSelectableGroup: boolean = true;

  /**
   * Toggle whether or not to display chips. This can be useful if some custom UI is used
   * for rendering autocomplete values in multi-select mode
   * @default false
   */
  public hideChips: boolean = false;

  /**
   * Modifiier function to change display of how primary text field is shown
   * Allows adding prefix / suffix values when displaying tags
   */
  public displayModifierFn: (displayValue: string, index?: number) => string;

  /**
   * Provides a way for external components to force change detection
   * on internal components. Any time this observable is emitted, a change
   * detection will be preformed, ensuring data model and template values are
   * in sync. This can be useful if some external changes are made and visual
   * updates need to be made
   */
  public registerChanges$: Observable<void>;

  public hideCloseIcon: boolean = false;
}
