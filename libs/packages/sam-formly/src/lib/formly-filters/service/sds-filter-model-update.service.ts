import { BehaviorSubject, Subject } from 'rxjs';
export class SDSFormlyUpdateModelService {
  /**
   * Filter update subject - This is a BehaviorSubject in case layout
   * component initializes and fires a filter model event before
   * sds-filters subscribes.
   */
  private updateFilterModel = new BehaviorSubject<any>(null);

  /**
   * Observable to subscribe to for get updates of the filter
   */
  filterModel = this.updateFilterModel.asObservable();

  /**
   * Update the filter
   * @param filterData
   */
  updateModel(filterData: any) {
    this.updateFilterModel.next(filterData);
  }
}
