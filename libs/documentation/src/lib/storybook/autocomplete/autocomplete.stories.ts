import { CommonModule } from '@angular/common';
import {
  SDSAutocompleteComponent,
  SDSAutocompletelConfiguration,
  SdsAutocompleteModule,
  SelectionMode as SDSSelectionMode,
} from '@gsa-sam/components';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { AutocompleteCheckboxModule } from './autocomplete-checkbox/autocomplete-checkbox.module';
import { AutocompleteConfigurableModule } from './autocomplete-configurable/autocomplete-configurable.module';
import { AutocompleteFreeTextModule } from './autocomplete-free-text/autocomplete-free-text.module';
import { AutocompleteGroupingModule } from './autocomplete-grouping/autocomplete-grouping.module';
import { AutocompleteIntroductionModule } from './autocomplete-introduction/autocomplete-introduction.module';
import { AutocompleteSelectionModeModule } from './autocomplete-selection-mode/autocomplete-selection-mode.module';

const disabled = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Components/Autocomplete',
  component: SDSAutocompleteComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsAutocompleteModule,
        AutocompleteGroupingModule,
        AutocompleteFreeTextModule,
        AutocompleteSelectionModeModule,
        AutocompleteConfigurableModule,
        AutocompleteIntroductionModule,
        AutocompleteCheckboxModule,
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
          0: 'Single',
          1: 'Multiple',
        },
      },
      description: 'Mode of the model either allows a single item or multiple items',
      table: {
        category: 'configuration',
      },
    },
    primaryKeyField: {
      description: 'This is the primary field used to identify each object in the results',
      table: {
        category: 'configuration',
      },
    },
    id: {
      description: 'Used for the Id of the control',
      table: {
        category: 'configuration',
      },
    },
    primaryTextField: {
      description: 'Property from supplied model used for the top part of the basic template',
      table: {
        category: 'configuration',
      },
    },
    secondaryTextField: {
      description: 'Property from supplied model used for the bottom part of the basic template',
      table: {
        category: 'configuration',
      },
    },
    labelText: {
      description: 'Used to describe the drop down (Text should match the label that will be supplied)',
      table: {
        category: 'configuration',
      },
    },
    autocompletePlaceHolderText: {
      description: 'Place holder text for autocomplete input',
      table: {
        category: 'configuration',
      },
    },
    debounceTime: {
      description: 'Sets the time waited for addional key actions Default is 250 milliseconds',
      table: {
        category: 'configuration',
      },
    },
    minimumCharacterCountSearch: {
      description: 'Mininumn Characters for search',
      table: {
        category: 'configuration',
      },
    },
    isFreeTextEnabled: {
      description: 'Allows option to allow user text not in the standard results',
      table: {
        category: 'configuration',
      },
    },
    freeTextSubtext: {
      description: 'Text appeneded ad the end of free text',
      table: {
        category: 'configuration',
      },
    },
    focusInSearch: {
      description: 'Focus into autocomplete search',
      table: {
        category: 'configuration',
      },
    },
    ariaLabelText: {
      description: 'The aria-label for the auto-complete',
      table: {
        category: 'configuration',
      },
    },
    isTagModeEnabled: {
      description: 'To enable the tag mode',
      table: {
        category: 'configuration',
      },
    },
    inputReadOnly: {
      description: 'To make input readonly',
      table: {
        category: 'configuration',
      },
    },
    groupByChild: {
      description: 'Name of the children filed',
      table: {
        category: 'configuration',
      },
    },
    isGroupingEnabled: {
      description: 'To enable the Grouping mode',
      table: {
        category: 'configuration',
      },
    },
    isSelectableGroup: {
      description: 'To enable the Group item selectable',
      table: {
        category: 'configuration',
      },
    },
    hideChips: {
      description:
        'Toggle whether or not to display chips. This can be useful if some custom UI is used for rendering autocomplete values in multi-select mode',
      table: {
        category: 'configuration',
      },
    },
    hideCloseIcon: {
      description: '',
      table: {
        category: 'configuration',
      },
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
): SDSAutocompletelConfiguration => {
  const base = new SDSAutocompletelConfiguration();
  base.primaryKeyField = primaryKeyField ?? 'id';
  base.id = id ?? 'autocomplete-1';
  base.primaryTextField = primaryTextField ?? 'name';
  base.secondaryTextField = secondaryTextField ?? 'subtext';
  base.labelText = labelText ?? 'Some Autocomplete';
  base.selectionMode = selectionMode ?? SDSSelectionMode.SINGLE;
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
};

// const Template: StoryObj<SDSAutocompletelConfiguration> =

export const Configurable = (args) => {
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
    hideCloseIcon,
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
  disabled: false,
};
Configurable.parameters = {
  sdsCodePreview: { disable: true },
  controls: { expanded: true },
};

export const SelectionMode: StoryObj = (args) => ({
  template: `<sds-autocomplete-selection-mode-demo></sds-autocomplete-selection-mode-demo>`,
  props: {
    ...args,
  },
});
SelectionMode.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/autocomplete/autocomplete-selection-mode',
    'AutocompleteSelectionModeModule',
    'sds-autocomplete-selection-mode-demo'
  ),
  stackblitzLink: generateStackblitzLink('autocomplete', 'selection-mode'),
};

export const Grouping: StoryObj = (args) => ({
  template: `<sds-autocomplete-grouping-demo></sds-autocomplete-grouping-demo>`,
  props: {
    ...args,
  },
});
Grouping.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/autocomplete/autocomplete-grouping',
    'AutocompleteGroupModule',
    'sds-autocomplete-grouping-demo'
  ),
  stackblitzLink: generateStackblitzLink('autocomplete', 'grouping'),
};

export const FreeText: StoryObj = (args) => ({
  template: `<sds-autocomplete-free-text-demo></sds-autocomplete-free-text-demo>`,
  props: {
    ...args,
  },
});
FreeText.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/autocomplete/autocomplete-free-text',
    'AutocompleteFreeTextModule',
    'sds-autocomplete-free-text-demo'
  ),
  stackblitzLink: generateStackblitzLink('autocomplete', 'free-text'),
};

export const CheckBox: StoryObj = (args) => ({
  template: `<sds-autocomplete-checkbox-demo></sds-autocomplete-checkbox-demo>`,
  props: {
    ...args,
  },
});
CheckBox.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/autocomplete/autocomplete-checkbox',
    'AutocompleteCheckboxModule',
    'sds-autocomplete-checkbox-demo'
  ),
  stackblitzLink: generateStackblitzLink('autocomplete', 'checkbox'),
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-autocomplete-introduction></sds-autocomplete-introduction>',
  props: args,
});
Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

