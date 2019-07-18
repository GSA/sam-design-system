import { SDSSelectedResultConfiguration } from '../../selected-result/models/SDSSelectedResultConfiguration';
import { SDSAutocompleteSearchConfiguration } from '../../autocomplete-search/models/SDSAutocompleteConfiguration';
import { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';

export class SDSAutocompletelConfiguration implements SDSSelectedResultConfiguration, SDSAutocompleteSearchConfiguration {
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
  public selectionMode:SelectionMode = SelectionMode.SINGLE;

}