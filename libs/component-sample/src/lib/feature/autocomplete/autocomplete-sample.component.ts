import { Component, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, TreeMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from './service/autocomplete-sample.data';
import { AutocompleteSampleDataService } from './service/autocomplete-sample.service';

@Component({
  selector: 'gsa-sam-autocomplete-sample',
  templateUrl: './autocomplete-sample.component.html',
  styleUrls: ['./autocomplete-sample.component.scss'],
  providers: [AutocompleteSampleDataService]
})
export class AutocompleteSampleComponent implements OnInit {

  private data = SampleAutocompleteData;
  public settings = new SDSAutocompletelConfiguration();
  public settings2 = new SDSAutocompletelConfiguration();
  public settings3 = new SDSAutocompletelConfiguration();
  public settings4 = new SDSAutocompletelConfiguration();
  public settings5 = new SDSAutocompletelConfiguration();

  public model = new SDSSelectedItemModel();
  public model2 = new SDSSelectedItemModel();
  public model3 = new SDSSelectedItemModel();
  public model4 = new SDSSelectedItemModel();
  public model5 = new SDSSelectedItemModel();


  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {
  }

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';

    this.settings.autocompletePlaceHolderText = 'Enter text';



    this.settings2.primaryKeyField = 'id';
    this.settings2.id = 'autocomplete2';
    this.settings2.labelText = 'Autocomplete 2';
    this.settings2.primaryTextField = 'name';
    this.settings2.secondaryTextField = 'subtext';
    this.settings2.autocompletePlaceHolderText = 'Enter text';



    this.settings3.primaryKeyField = 'id';
    this.settings3.id = 'autocomplete3';
    this.settings3.labelText = 'Autocomplete 3';
    this.settings3.primaryTextField = 'name';
    this.settings3.secondaryTextField = 'subtext';
    this.settings3.autocompletePlaceHolderText = 'Enter text';



    this.settings4.primaryKeyField = 'id';
    this.settings4.id = 'autocomplete4';
    this.settings4.labelText = 'Autocomplete 4';
    this.settings4.primaryTextField = 'name';
    this.settings4.secondaryTextField = 'subtext';
    this.settings4.autocompletePlaceHolderText = 'Enter text';
    //this.settings4.minimumCharacterCountSearch = 3;


    this.settings5.primaryKeyField = 'id';
    this.settings5.id = 'autocomplete5';
    this.settings5.labelText = 'Autocomplete 5 Disabled';
    this.settings5.primaryTextField = 'name';
    this.settings5.secondaryTextField = 'subtext';
    this.settings5.autocompletePlaceHolderText = 'Enter text';



    this.model.treeMode = TreeMode.SINGLE;
    this.model2.treeMode = TreeMode.SINGLE;
    this.model3.treeMode = TreeMode.MULTIPLE;
    this.model4.treeMode = TreeMode.MULTIPLE;
    this.model5.treeMode = TreeMode.MULTIPLE;

    this.model5.addItem(this.data[0], this.settings5.primaryKeyField);
    this.model5.addItem(this.data[1], this.settings5.primaryKeyField);


  }




}
