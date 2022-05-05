import { Observable } from 'rxjs';
import { SelectionMode } from './sds-selected-item-model-helper';

export class SDSSelectedResultConfiguration {
  /**
   * Used to describe the drop down (Text should match the label that will be supplied)
   */
  public labelText: string;

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
   * Mode of the model either allows a single item or multiple items
   */
  public selectionMode: SelectionMode = SelectionMode.SINGLE;

  /**
   * Modifiier function to change display of how primary text field is shown
   * Allows adding prefix / suffix values when displaying tags
   */
  public displayModifierFn?: (displayValue: string, index?: number) => string;
}
