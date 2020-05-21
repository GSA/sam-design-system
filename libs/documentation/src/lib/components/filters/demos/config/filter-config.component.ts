import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { formlyFieldConfig } from './fields';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './filter-config.component.html'
})
export class FiltersConfig implements OnInit {
  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  formlyFieldConfig: FormlyFieldConfig[] = formlyFieldConfig;
  public ngOnInit() {
    this.filterChange$.subscribe(res => {
      this.results = res;
    });
  }
}
