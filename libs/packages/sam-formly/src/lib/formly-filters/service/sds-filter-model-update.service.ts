import { Subject } from 'rxjs';
export class SDSFormlyUpdateModelService {
  /**
   * Filter update subject
   */
  private updateFilterModel = new Subject<any>();

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
