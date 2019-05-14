import { SamHierarchicalTreeGridColumn } from './SamHierarchicalTreeGridColumn';
export class SamHierarchicalTreeGridConfiguration {

    /**
     *  This is the primary field used to identify each object in the results
     */
    public primaryKeyField: string;

    /**
     * Column definitions to be displayed
     */
    public gridColumnsDisplayed: SamHierarchicalTreeGridColumn[]

    /**
    *  Field for model that determines number of child elements
    */
    public childCountField: string;


    /**
    *  Property from supplied model used for the top part of the basic template
    */
    public primaryTextField: string;

    /**
     * Used for the Grid hidden button Screen Reader text to traverse down the tree
     */
    public navigateScreenReaderText: string = 'Go to';

    /**
    * Text when no results in advanced
    */
    public emptyResultText: string = 'There are no results. Try again with another selection.';
}
