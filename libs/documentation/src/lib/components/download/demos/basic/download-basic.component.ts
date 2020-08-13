import { Component, OnInit, Input } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { SdsDownloadDisplayComponent } from './download-modal-display.component';


@Component({
  selector: 'gsa-sam-downloadbasic',
  templateUrl: 'download-basic.component.html'
})

export class DownloadBasic implements OnInit {
  @Input() message: string;

  constructor(private dialogService: SdsDialogService) { }

  ngOnInit() {
  }

  openModal(){
    let dialogRef = this.dialogService.open(SdsDownloadDisplayComponent);


    dialogRef.afterClosed().subscribe(res => {
    })
  }


}
