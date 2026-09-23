import { TestBed } from '@angular/core/testing';
import { UntypedFormControl } from '@angular/forms';
import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { FormlyFieldConfig } from '@ngx-formly/core';

describe('SdsAdvancedFiltersService', () => {
  let service: SdsAdvancedFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SdsAdvancedFiltersService] });
    service = TestBed.inject(SdsAdvancedFiltersService);
  });

  const model = {
    searchEntity: {},
    hideGroup: {},
  };

  const advancedFilterModel = {
    showInactive: false,
    filterToggle: {
      selectAll: false,
      filters: {
        searchKeyword: false,
        searchEntity: ['uniqueEntityIdSam'],
        hideGroup: [],
      },
    },
  };

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('convertToCheckboxes', () => {
    it('should convert single fields without fieldGroup to simple checkbox configs', () => {
      const origFields: FormlyFieldConfig[] = [
        {
          key: 'keyword',
          type: 'input',
          props: { label: 'Keyword Search' },
        },
        {
          key: 'status',
          type: 'select',
          hide: true,
        },
        {
          // Field without key should be ignored
          type: 'text',
          props: { label: 'Static Label' },
        },
      ];

      const result = service.convertToCheckboxes(origFields);

      expect(result).toEqual([
        {
          type: 'checkbox',
          key: 'keyword',
          defaultValue: true,
          props: {
            hideOptional: true,
            label: 'Keyword Search',
          },
        },
        {
          type: 'checkbox',
          key: 'status',
          defaultValue: false,
          props: {
            hideOptional: true,
          },
        },
      ]);
    });

    it('should convert field groups to multicheckbox configs', () => {
      const origFields: FormlyFieldConfig[] = [
        {
          key: 'entityGroup',
          props: { label: 'Entity Filters' },
          fieldGroup: [
            {
              key: 'entityName',
              props: { label: 'Entity Name', tagText: 'SAM', tagClass: 'usa-tag' },
            },
            {
              key: 'uei',
              hide: true,
              props: { label: 'Unique Entity ID' },
            },
            {
              key: 'noLabelField',
              props: {},
            },
          ],
        },
      ];

      const result = service.convertToCheckboxes(origFields);

      expect(result.length).toBe(1);
      const multi = result[0];
      expect(multi.key).toBe('entityGroup');
      expect(multi.type).toBe('multicheckbox');
      expect(multi.props.label).toBe('Entity Filters');
      expect(multi.props.selectAllOption).toBe(true);
      expect(multi.props.type).toBe('array');
      expect(multi.props.options).toEqual([
        { value: 'entityName', label: 'Entity Name', tagText: 'SAM', tagClass: 'usa-tag' },
        { value: 'uei', label: 'Unique Entity ID', tagText: undefined, tagClass: undefined },
        { value: 'noLabelField', label: null, tagText: undefined, tagClass: undefined },
      ]);
      // Only unhidden children of an unhidden parent are included in defaultValue
      expect(multi.defaultValue).toEqual(['entityName', 'noLabelField']);
    });

    it('should not set defaultValue when the parent fieldGroup is hidden', () => {
      const origFields: FormlyFieldConfig[] = [
        {
          key: 'hiddenGroup',
          hide: true,
          props: { label: 'Hidden Group' },
          fieldGroup: [
            { key: 'child1', props: { label: 'Child 1' } },
            { key: 'child2', props: { label: 'Child 2' } },
          ],
        },
      ];

      const result = service.convertToCheckboxes(origFields);
      expect(result[0].defaultValue).toBeUndefined();
    });

    it('should treat fieldGroup as a single checkbox when hideChildrenGroups is true', () => {
      const origFields: FormlyFieldConfig[] = [
        {
          key: 'group1',
          props: { label: 'Group 1' },
          fieldGroup: [{ key: 'child1' }],
        },
      ];

      const result = service.convertToCheckboxes(origFields, true);
      expect(result.length).toBe(1);
      expect(result[0].type).toBe('checkbox');
      expect(result[0].key).toBe('group1');
      expect(result[0].defaultValue).toBe(true);
    });

    it('should treat fieldGroup as single checkbox when props.hideChildrenGroups is true', () => {
      const origFields: FormlyFieldConfig[] = [
        {
          key: 'groupPropsHide',
          props: { label: 'Group with hideChildrenGroups prop', hideChildrenGroups: true },
          fieldGroup: [{ key: 'child1' }],
        },
      ];

      const result = service.convertToCheckboxes(origFields);
      expect(result.length).toBe(1);
      expect(result[0].type).toBe('checkbox');
      expect(result[0].key).toBe('groupPropsHide');
    });

    it('should recursively handle nested fieldGroups within createMulticheckbox', () => {
      const origFields: FormlyFieldConfig[] = [
        {
          key: 'parentGroup',
          props: { label: 'Parent' },
          fieldGroup: [
            {
              key: 'subGroup',
              props: { label: 'Sub Group' },
              fieldGroup: [{ key: 'grandchild', props: { label: 'Grandchild' } }],
            },
          ],
        },
      ];

      const result = service.convertToCheckboxes(origFields);
      expect(result[0].type).toBe('multicheckbox');
      const subMulticheckboxOption = result[0].props.options[0];
      expect(subMulticheckboxOption.type).toBe('multicheckbox');
      expect(subMulticheckboxOption.key).toBe('subGroup');
      expect(subMulticheckboxOption.props.label).toBe('Sub Group');
    });
  });

  describe('updateFields', () => {
    it('should update filters based on selected filter options', () => {
      const fields: FormlyFieldConfig[] = [
        {
          key: 'searchKeyword',
          wrappers: ['filterwrapper'],
          props: { label: 'Keyword' },
          type: 'input',
        },
        {
          key: 'searchEntity',
          wrappers: ['accordionwrapper'],
          hide: true,
          props: { label: 'Entity' },
          fieldGroup: [
            {
              key: 'legalBusinessName',
              type: 'input',
              props: { label: 'Entity Name', inputType: 'text' },
            },
            {
              key: 'uniqueEntityIdSam',
              type: 'input',
              props: { label: 'Unique Entity ID (SAM)', inputType: 'text' },
            },
          ],
        },
        {
          key: 'hideGroup',
          wrappers: ['accordionwrapper'],
          fieldGroup: [
            { key: 'hideField1', type: 'input' },
            { key: 'hideField2', type: 'input' },
          ],
        },
      ];

      const testModel: any = {
        searchEntity: { legalBusinessName: 'Test Inc', uniqueEntityIdSam: 'XYZ123' },
        hideGroup: { hideField1: 'val1', hideField2: 'val2' },
        searchKeyword: 'test',
      };

      const result = service.updateFields(advancedFilterModel, fields, testModel);

      expect(result).toBeDefined();
      expect(result.fields).toBe(fields);
      expect(result.model).toBe(testModel);

      // searchKeyword was false -> hide = true and model was cleared
      expect(fields[0].hide).toBe(true);
      expect(testModel.searchKeyword).toBeNull();

      // searchEntity has length > 1:
      // parent was selected via ['uniqueEntityIdSam']
      expect(fields[1].hide).toBe(false);
      // legalBusinessName was not selected -> hide = true, model[key] = null on searchEntity model
      expect(fields[1].fieldGroup[0].hide).toBe(true);
      expect(testModel.searchEntity.legalBusinessName).toBeNull();
      // uniqueEntityIdSam was selected -> hide = false
      expect(fields[1].fieldGroup[1].hide).toBe(false);

      // hideGroup had empty array -> hide = true and children hidden
      expect(fields[2].hide).toBe(true);
      expect(fields[2].fieldGroup[0].hide).toBe(true);
      expect(fields[2].fieldGroup[1].hide).toBe(true);
    });

    it('should handle single field with array selectedField (empty vs non-empty)', () => {
      const field1: FormlyFieldConfig = { key: 'field1', hide: true };
      const field2: FormlyFieldConfig = { key: 'field2', hide: false };
      const fields = [field1, field2];
      const currentModel: any = { field1: null, field2: 'abc' };

      const selected = {
        filterToggle: {
          filters: {
            field1: ['someValue'],
            field2: [],
          },
        },
      };

      service.updateFields(selected, fields, currentModel);

      expect(field1.hide).toBe(false);
      expect(field2.hide).toBe(true);
      expect(currentModel.field2).toBeNull();
    });

    it('should handle fieldGroup when selectedField is boolean true', () => {
      const parentField: FormlyFieldConfig = {
        key: 'parent',
        hide: true,
        fieldGroup: [
          { key: 'childA', hide: true },
          { key: 'childB', hide: true },
        ],
      };
      const fields = [parentField];
      const currentModel: any = { childA: null, childB: null };

      const selected = {
        filterToggle: {
          filters: {
            parent: true,
          },
        },
      };

      service.updateFields(selected, fields, currentModel);

      expect(parentField.hide).toBe(false);
      expect(parentField.fieldGroup[0].hide).toBe(false);
      expect(parentField.fieldGroup[1].hide).toBe(false);
    });

    it('should handle nested fieldGroup within fieldGroup', () => {
      const nestedChild1: FormlyFieldConfig = { key: 'n1', hide: true, props: {} };
      const nestedChild2: FormlyFieldConfig = { key: 'n2', hide: true, props: {} };
      const subGroup: FormlyFieldConfig = {
        key: 'subGroup',
        hide: true,
        props: {},
        fieldGroup: [nestedChild1, nestedChild2],
      };
      const parentField: FormlyFieldConfig = {
        key: 'parent',
        hide: true,
        props: {},
        fieldGroup: [{ key: 'regularChild', hide: true, props: {} }, subGroup],
      };

      const selected = {
        filterToggle: {
          filters: {
            parent: ['regularChild', 'subGroup', 'n1'],
          },
        },
      };

      const currentModel: any = {
        parent: {
          regularChild: null,
          subGroup: { n1: null, n2: 'val' },
        },
      };
      service.updateFields(selected, [parentField], currentModel);

      expect(parentField.hide).toBe(false);
      expect(parentField.fieldGroup[0].hide).toBe(false);
      expect(subGroup.hide).toBe(false);
      expect(nestedChild1.hide).toBe(false);
      expect(nestedChild2.hide).toBe(true);
    });
  });

  describe('updateSingleField', () => {
    it('should unhide field when fieldSelected is true', () => {
      const field: FormlyFieldConfig = { key: 'sample', hide: true };
      service.updateSingleField(field, true, {});
      expect(field.hide).toBe(false);
    });

    it('should reset formControl if present when fieldSelected is false', () => {
      const control = new UntypedFormControl('initialValue');
      const resetSpy = vi.spyOn(control, 'reset');
      const field: FormlyFieldConfig = {
        key: 'withControl',
        hide: false,
        formControl: control,
        props: { required: true },
      };

      service.updateSingleField(field, false, {});

      expect(field.hide).toBe(true);
      expect(field.props.required).toBe(false);
      expect(resetSpy).toHaveBeenCalled();
    });

    it('should set numeric model key to null when no formControl', () => {
      const targetModel: any = ['item0', 'item1'];
      const field: any = { key: 1, hide: false };

      service.updateSingleField(field, false, targetModel);

      expect(field.hide).toBe(true);
      expect(targetModel[1]).toBeNull();
    });

    it('should guard against prototype pollution keys', () => {
      const targetModel: any = {};
      const dangerousKeys = ['__proto__', 'constructor', 'prototype'];

      dangerousKeys.forEach((key) => {
        const field: any = { key, hide: false };
        service.updateSingleField(field, false, targetModel);
        expect(field.hide).toBe(true);
      });

      // Verify Object prototype has not been polluted
      expect((Object.prototype as any).polluted).toBeUndefined();
      expect(({} as any).polluted).toBeUndefined();
    });
  });
});
