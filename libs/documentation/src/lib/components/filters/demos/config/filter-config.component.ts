import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { formlyFieldConfig } from './fields';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './filter-config.component.html',
  selector: `sds-filter-config-demo`,
})
export class FiltersConfig implements OnInit {
  results: any;
  form = new FormGroup({});
  model = {
    keyword: 20
  };
  public filterChange$ = new BehaviorSubject<object>(null);

  formlyFieldConfig: FormlyFieldConfig[] = formlyFieldConfig;
  public ngOnInit() {
    this.filterChange$.subscribe(res => {
      this.results = res;
    });
  }
}
