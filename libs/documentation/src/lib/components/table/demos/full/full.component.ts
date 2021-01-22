import { Component } from '@angular/core';
import tableDataFull from './data';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './full.component.html',
  styleUrls: [ './full.component.scss' ],
  selector: `sds-table-full-demo`,
})

export class TableFullComponent {

  constructor(private http: HttpClient) {
    this.sliceData(0,10);
  }

  rowEdit: any;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date', 'tags', 'actions'];

  data: any;

  sliceData(start, end) {
    this.data = tableDataFull.slice(start,end);
  }

  getAsyncData() {
    this.http.get<any>('https://my.api.mockaroo.com/table_data?key=824f5960').subscribe(response => {
      this.data = response;
    });
  }

  getTotalRequests() {
    return this.data.map(t => t.requests).reduce((acc, value) => acc + value, 0);
  }

  edit(element) {
    console.log(element, "Called actions with element: ");
    this.rowEdit = element;
  }

  customSort(data, sortHeaderId) {
    switch (sortHeaderId) {
      case 'tags': return  data.tags[0].label;
      default: {
        if (typeof data[sortHeaderId] === 'string') {
          return data[sortHeaderId].toLocaleLowerCase();
        }

        return data[sortHeaderId];
      }
    }
  };

  onExpansionClicked(element:any) {
    console.log('Expansion Clicked', element);
  }

}
