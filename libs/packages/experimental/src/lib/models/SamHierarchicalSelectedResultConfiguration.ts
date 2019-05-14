export class SelectedResultConfiguration {
   
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
  }
  