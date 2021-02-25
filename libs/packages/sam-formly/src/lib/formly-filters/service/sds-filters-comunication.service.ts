import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SDSFormlyUpdateComunicationService {
  /**
   * Filter update subject - This is a BehaviorSubject in case layout
   * component initializes and fires a filter model event before 
   * sds-filters subscribes. 
   */
  private updateFilterSource = new BehaviorSubject<any>(null);

  /**
   * Observable to subscribe to for get updates of the filter
   */
  filterUpdate = this.updateFilterSource.asObservable();

  /**
   * Update the filter
   * @param filterData
   */
  updateFilter(filterData: any) {
    this.updateFilterSource.next(filterData);
  }
}
