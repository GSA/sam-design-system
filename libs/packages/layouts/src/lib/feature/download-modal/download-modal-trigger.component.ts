import { Component, OnInit, Input } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { SdsDownloadModalComponent } from './download-modal.component';

@Component({
  selector: 'sds-download-modal-trigger',
  template: `<button (click)="openModal()" class="usa-button usa-button--base">Open</button>`
})
export class SdsDownloadModalTriggerComponent implements OnInit {
  @Input() message: string;

  constructor(private dialogService: SdsDialogService) { }

  ngOnInit() {
  }

  openModal(){
    let dialogRef = this.dialogService.open(SdsDownloadModalComponent);
    // form = new FormGroup({});



    dialogRef.afterClosed().subscribe(res => {
      //Do something after close
    })


  }

}
