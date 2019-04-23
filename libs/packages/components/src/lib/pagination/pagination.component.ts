import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'iae-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  @Output() public pageChange = new EventEmitter<number>();

  totalPages: number;
  currentPage: number = 1;
  id: string;
  options: [{ label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '100', value: 100 }];


  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      //raise event
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      //raise event
    }
  }

  // pageChange() {


  // }


  ngOnInit() {

  }

}
