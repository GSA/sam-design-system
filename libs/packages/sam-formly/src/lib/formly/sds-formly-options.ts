export let sdsFieldWrapper = ['label', 'description', 'validation'];
export let sdsGroupWrapper = ['group']
export let sdsFieldGroupWrapper = [...sdsGroupWrapper, ...sdsFieldWrapper];
export let sdsWrappers = [...sdsGroupWrapper, ...sdsFieldWrapper];

export class SdsFormlyOptions {
    /**
  * Used to add the tag text for the fields
  */
    public tagText: string;

    /**
   * Used to add the tag class for the tag text
   */
    public tagClass: string;

    /**
    * Used to hide the label for 508
    */
    public labelClass: string;

    /**
    * Used to hide the optional label
    */
    public hideOptional: boolean;

    /**
    * Used to set the accordion behaviour for the filters
    */
   public accordionFilter = false;
}
