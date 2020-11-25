import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sds-system-alert',
  templateUrl: './system-alert.component.html',
  styleUrls: ['./system-alert.component.scss']
})
export class SystemAlertComponent implements OnInit {

  @Input() alerts: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
