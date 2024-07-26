import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SdsTableComponent } from '@gsa-sam/sam-material-extensions';
import tableDataFull from '../table-pagination/data';
import { Options } from '@popperjs/core';
import { filter } from 'rxjs';

@Component({
  selector: 'sds-table-select-rows',
  templateUrl: './table-select-rows.component.html',
  styleUrls: ['./table-select-rows.component.scss']
})
export class TableSelectRowsComponent implements AfterViewInit {

  @ViewChild(SdsTableComponent) table: SdsTableComponent;

  data = tableDataFull.map((data => {
    data['status'] = this.getRandomStatus()
    return data;
  }));
  displayedColumns: string[] = ['selectBox', 'status', 'id', 'firstName', 'lastName', 'email', 'requests', 'navigate'];

  numberOfRows = 25;
  currentPageIndex = 0;
  selectedRows = [];
  selectAllChecked = false;

  popperOptions = (options: Partial<Options>) => {
    options.modifiers!.push({
      name: 'offset',
      options: {
        offset: [-8, 10],
      },
    });

    return options;
  };

  get deleteButtonEnabled(): boolean{
    return this.selectedRows.length === 0;
  }

  getRandomStatus(): string{
    const possibleStatuses = ['Draft', 'Reopened', 'Published'];
    const statusIndex = Math.floor(Math.random() * 3);
    return possibleStatuses[statusIndex];
  }

  ngAfterViewInit(): void {
    this.table.matPaginator.page.subscribe((pageEvent: PageEvent) => {
      this.numberOfRows = pageEvent.pageSize;
      this.currentPageIndex = pageEvent.pageIndex;
    })
  }

  onSingleRowSelect(element: any){
    console.log('test')
    const elementIndex = this.selectedRows.indexOf(element)
    if(elementIndex !== -1){
      this.selectedRows.splice(elementIndex,1);
      element = element.checked = false
    }else {
      this.selectedRows.push(element)
      element = element.checked = true
    }

    console.log('this.selectedRows', this.selectedRows)
  }

  onSelectAllRows(){
    if(!this.selectAllChecked){
      const startIndex = this.currentPageIndex * this.numberOfRows;
      const endIndex = startIndex + this.numberOfRows;
      const dataToSelect = this.data.slice(startIndex, endIndex);
      this.selectedRows = dataToSelect;
      this.selectedRows.forEach(row => row.checked = true);
      this.selectAllChecked = true;
    } else {
      this.selectedRows.forEach(row => row.checked = false);
      this.selectedRows = [];
      this.selectAllChecked = false;
    }
    console.log('this.selectedRows', this.selectedRows)
  }

  onSelectAllStatus(statusToSelect: string){
    const startIndex = this.currentPageIndex * this.numberOfRows;
    const endIndex = startIndex + this.numberOfRows;
    const dataToSelect = this.data.slice(startIndex, endIndex);
    const filteredData = dataToSelect.filter(data => data['status']===statusToSelect)
    this.selectedRows = filteredData;
    this.selectedRows.forEach(row => row.checked = true);
    this.selectAllChecked = true;
  }

  deleteFunction(){
    console.log('Do the deleting action with this data', this.selectedRows)
  }

  handleRowClicked(i: number){
    console.log('Navigate with this data', this.data[i])
  }

}
