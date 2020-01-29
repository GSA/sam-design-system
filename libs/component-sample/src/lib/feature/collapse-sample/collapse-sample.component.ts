import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsa-sam-collapse-sample',
  templateUrl: './collapse-sample.component.html',
  styleUrls: ['./collapse-sample.component.scss']
})
export class CollapseSampleComponent implements OnInit {
  public isCollapsedContent:boolean = true;
  private collapseID: string;
  buttonText: string;
  collapseContentInput: string;

  constructor() { }

  ngOnInit() {
    this.collapseID = "myDataId";
    this.buttonText = 'Show / Hide Content'
    this.collapseContentInput = "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?";
  }

}
