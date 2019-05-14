import { SamHierarchicalTreeGridConfiguration } from './SamHierarchicalTreeGridConfiguration';
import { SamHierarchicalTreeHeaderConfiguration } from './SamHierarchicalTreeHeaderConfiguration';
import { SamHierarchicalTreeGridColumn } from './SamHierarchicalTreeGridColumn';

export class SamHierarchicalTreeConfiguration implements SamHierarchicalTreeGridConfiguration, SamHierarchicalTreeHeaderConfiguration {

    /**
     * Mininumn Characters for search
     */
    public minimumCharacterCountSearch: number;

    /**
     *  This is the primary field used to identify each object in the results
     */
    public primaryKeyField: string;

    /**
     *  Property from supplied model used for the top part of the basic template
     */
    public primaryTextField: string;

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
    * Used for the Grid hidden button Screen Reader text to traverse down the tree
    */
    public navigateScreenReaderText: string = 'Go to';

    /**
    * Text when no results in advanced
    */
    public emptyResultText: string = 'There are no results. Try again with another selection.';

}
