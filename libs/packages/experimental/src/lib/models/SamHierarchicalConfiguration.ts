import { SamHierarchicalAutocompleteConfiguration } from './SamHierarchicalAutocompleteConfiguration';
import { SelectedResultConfiguration } from './SamHierarchicalSelectedResultConfiguration';
import { SamHierarchicalTreeConfiguration } from './SamHierarchicalTreeConfiguration';
import { SamHierarchicalTreeGridColumn } from './SamHierarchicalTreeGridColumn';


export class SamHierarchicalConfiguration implements SamHierarchicalAutocompleteConfiguration, SelectedResultConfiguration, SamHierarchicalTreeConfiguration {



  /**
    * sets the default debounce time to 250 milliseconds 
    */
  constructor() {
    this.debounceTime = 250;
    this.modalCancelButtonLabel = "Cancel";
    this.modalSelectButtonLabel = "Select";
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
   * Title property for the modal window
   */
  public modalTitle: string;

  /**
   * Label for the select button on the modal
   */
  public modalSelectButtonLabel: string;

  /**
   * Label for the cancel button on the modal
   */
  public modalCancelButtonLabel: string;

  /**
   * Column definitions to be displayed
   */
  public gridColumnsDisplayed: SamHierarchicalTreeGridColumn[]

  /**
  *  Field for model that determines number of child elements
  */
  public childCountField: string;

  /**
   * Placeholder text for the Filter in the grid
   */
  public filterPlaceholderText: String;

  /**
   * Top Level Breadcrumb Text 
   */
  public topLevelBreadcrumbText: string;

  /**
   * Mininumn Characters for search
   */
  public minimumCharacterCountSearch: number;


  /**
   * Determines if the the advanced lookup is hidden
   */
  public hideAdvancedLookup: boolean;

  /**
  * Used for the Grid hidden button Screen Reader text to traverse down the tree
  */
  public navigateScreenReaderText: string = 'Go to';

  /**
  * Text when no results in advanced
  */
  public emptyResultText: string = 'There are no results. Try again with another selection.';

}
