import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SDSAutocompleteComponent, SDSAutocompletelConfiguration, SdsAutocompleteModule, SelectionMode as SDSSelectionMode } from '@gsa-sam/components';
import {
  SdsButtonGroupComponent,
  SdsButtonGroupModule,
  SdsButtonGroupOptionComponent,
} from '@gsa-sam/sam-material-extensions';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';
import { AutocompleteConfigurableModule } from './demos/configurable/autocomplete-configurable.module';
import { AutocompleteGroupingModule } from './demos/autocomplete-grouping/autocomplete-grouping.module';
import { AutocompleteSelectionModeModule } from './demos/autocomplete-selection-mode/autocomplete-selection-mode.module';
import { AutocompleteFreeTextModule } from './demos/autocomplete-free-text/autocomplete-free-text.module';

const disabled = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Example/Autocomplete',
  component: SDSAutocompleteComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsAutocompleteModule,
        AutocompleteConfigurableModule,
        AutocompleteSelectionModeModule,
        AutocompleteGroupingModule,
        AutocompleteFreeTextModule
      ],
    }),
  ],
  argTypes: {
    configuration: disabled,
    _subscriptions: disabled,
    model: disabled,
    onChange: disabled,
    onTouched: disabled,
    service: disabled,
    addItem: disabled,
    addItems: disabled,
    getModel: disabled,
    isSingleMode: disabled,
    ngOnDestroy: disabled,
    ngOnInit: disabled,
    registerOnChange: disabled,
    registerOnTouched: disabled,
    setDisabledState: disabled,
    updateItems: disabled,
    updateModel: disabled,
    writeValue: disabled,
    autocompleteSearch: disabled,
    selectedItemTemplate: disabled,
    suggestionTemplate: disabled,
    selectionMode: {
      control: {
        options: [SDSSelectionMode.SINGLE, SDSSelectionMode.MULTIPLE],
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          0: "Single",
          1: "Multiple",
        },
      },
      description: 'Mode of the model either allows a single item or multiple items'
    },
    primaryKeyField:{
      description: 'This is the primary field used to identify each object in the results'
    },
    id:{
      description: 'Used for the Id of the control'
    },
    primaryTextField:{
      description: 'Property from supplied model used for the top part of the basic template'
    },
    secondaryTextField:{
      description: 'Property from supplied model used for the bottom part of the basic template'
    },
    labelText:{
      description: 'Used to describe the drop down (Text should match the label that will be supplied)'
    },
    autocompletePlaceHolderText:{
      description: 'Place holder text for autocomplete input'
    },
    debounceTime:{
      description: 'Sets the time waited for addional key actions Default is 250 milliseconds'
    },
    minimumCharacterCountSearch:{
      description: 'Mininumn Characters for search'
    },
    isFreeTextEnabled:{
      description: 'Allows option to allow user text not in the standard results'
    },
    freeTextSubtext:{
      description: 'Text appeneded ad the end of free text'
    },
    focusInSearch:{
      description: 'Focus into autocomplete search'
    },
    ariaLabelText:{
      description: 'The aria-label for the auto-complete'
    },
    isTagModeEnabled:{
      description: 'To enable the tag mode'
    },
    inputReadOnly:{
      description: 'To make input readonly'
    },
    groupByChild:{
      description: 'Name of the children filed'
    },
    isGroupingEnabled:{
      description: 'To enable the Grouping mode'
    },
    isSelectableGroup:{
      description: 'To enable the Group item selectable'
    },
    hideChips:{
      description: 'oggle whether or not to display chips. This can be useful if some custom UI is used for rendering autocomplete values in multi-select mode'
    },
    hideCloseIcon:{
      description: ''
    },
  },
} as Meta;

const autocompleteSettingsFunction = (
  primaryKeyField,
  id,
  primaryTextField,
  secondaryTextField,
  labelText,
  selectionMode,
  autocompletePlaceHolderText,
  debounceTime,
  minimumCharacterCountSearch,
  isFreeTextEnabled,
  freeTextSubtext,
  focusInSearch,
  ariaLabelText,
  isTagModeEnabled,
  inputReadOnly,
  groupByChild,
  isGroupingEnabled,
  isSelectableGroup,
  hideChips,
  hideCloseIcon
):SDSAutocompletelConfiguration  => {
    const base = new SDSAutocompletelConfiguration();
    base.primaryKeyField = primaryKeyField ?? 'id';
    base.id = id ?? 'autocomplete-1';
    base.primaryTextField = primaryTextField ?? 'name';
    base.secondaryTextField = secondaryTextField ?? 'subtext';
    base.labelText = labelText ?? 'Some Autocomplete';
    base.selectionMode = selectionMode ?? SDSSelectionMode.SINGLE
    base.autocompletePlaceHolderText = autocompletePlaceHolderText ?? 'eg: Level 1';
    base.debounceTime = debounceTime ?? 250;
    base.minimumCharacterCountSearch = minimumCharacterCountSearch ?? 0;
    base.isFreeTextEnabled = isFreeTextEnabled ?? false;
    base.freeTextSubtext = freeTextSubtext ?? 'search';
    base.focusInSearch = focusInSearch ?? true;
    base.ariaLabelText = ariaLabelText;
    base.isTagModeEnabled = isTagModeEnabled ?? false;
    base.inputReadOnly = inputReadOnly ?? false;
    base.groupByChild = groupByChild ?? 'children';
    base.isGroupingEnabled = isGroupingEnabled ?? false;
    base.isSelectableGroup = isSelectableGroup ?? true;
    base.hideChips = hideChips ?? false;
    base.hideCloseIcon = hideCloseIcon ?? false;

    return base;


}

const Template: Story<SDSAutocompletelConfiguration> = (args) => {
    const {
      primaryKeyField,
      id,
      primaryTextField,
      secondaryTextField,
      labelText,
      selectionMode,
      autocompletePlaceHolderText,
      debounceTime,
      minimumCharacterCountSearch,
      isFreeTextEnabled,
      freeTextSubtext,
      focusInSearch,
      ariaLabelText,
      isTagModeEnabled,
      inputReadOnly,
      groupByChild,
      isGroupingEnabled,
      isSelectableGroup,
      hideChips,
      hideCloseIcon
    } = args;
    const combined = autocompleteSettingsFunction(
      primaryKeyField,
      id,
      primaryTextField,
      secondaryTextField,
      labelText,
      selectionMode,
      autocompletePlaceHolderText,
      debounceTime,
      minimumCharacterCountSearch,
      isFreeTextEnabled,
      freeTextSubtext,
      focusInSearch,
      ariaLabelText,
      isTagModeEnabled,
      inputReadOnly,
      groupByChild,
      isGroupingEnabled,
      isSelectableGroup,
      hideChips,
      hideCloseIcon
    );
    console.log('combined', combined)
    return {
        template: `
        <sds-autocomplete-configurable-demo
        [settings]="settings"
        [disabled]=disabled
        >
        </sds-autocomplete-configurable-demo>
    `,
    props: {
        settings: combined,
        ...args,    
    },
    // props: args
    };
};

export const Configurable = Template.bind({});
Configurable.args = {
    /**
     Test
     */
    primaryKeyField: 'id',
    id: 'autocomplete-1',
    primaryTextField: 'name',
    secondaryTextField: 'subtext',
    labelText: 'Some Autocomplete',
    autocompletePlaceHolderText: 'eg: Level 1',
    debounceTime: 250,
    minimumCharacterCountSearch: 0,
    isFreeTextEnabled: false,
    freeTextSubtext: 'search',
    focusInSearch: true,
    ariaLabelText: '',
    isTagModeEnabled: false,
    inputReadOnly: false,
    groupByChild: 'children',
    isGroupingEnabled: false,
    isSelectableGroup: true,
    hideChips: false,
    hideCloseIcon: false,
    disabled: false
};
Configurable.parameters = {
  preview: { disabled: true },
  controls: { expanded: true },
};

export const SelectionMode: Story = (args) => ({
    template: `<sds-autocomplete-selection-mode-demo></sds-autocomplete-selection-mode-demo>`,
    props: {
      ...args,
    },
  });
  SelectionMode.parameters = {
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
    actions: { disabled: true },
    preview: generateConfig(
      'components/autocomplete/demos/autocomplete-selection-mode',
      'AutocompleteSelectionModeModule',
      'sds-autocomplete-selection-mode-demo'
    ),
  };

  export const Grouping: Story = (args) => ({
    template: `<sds-autocomplete-grouping-demo></sds-autocomplete-grouping-demo>`,
    props: {
      ...args,
    },
  });
  Grouping.parameters = {
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
    actions: { disabled: true },
    preview: generateConfig(
      'components/autocomplete/demos/autocomplete-grouping',
      'AutocompleteGroupModule',
      'sds-autocomplete-grouping-demo'
    ),
  };
  
  export const FreeText: Story = (args) => ({
    template: `<sds-autocomplete-free-text-demo></sds-autocomplete-free-text-demo>`,
    props: {
      ...args,
    },
  });
  FreeText.parameters = {
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
    actions: { disabled: true },
    preview: generateConfig(
      'components/autocomplete/demos/autocomplete-free-text',
      'AutocompleteFreeTextModule',
      'sds-autocomplete-free-text-demo'
    ),
  };