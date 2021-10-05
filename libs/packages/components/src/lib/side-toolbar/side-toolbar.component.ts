import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { SdsDialogRef } from '../dialog/dialog-ref';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { SdsDialogConfig } from '../dialog/dialog-config';
import { SdsDialogService } from '../dialog/dialog';

@Component({
  selector: 'sds-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss'],
})
export class SdsSideToolbarComponent implements OnInit, OnDestroy {
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  // Text for button in responsive view
  @Input() responsiveButtonText: string;

  @Input() responsiveDialogOptions: SdsDialogConfig

  // default value is size of mobile view in px
  @Input() responsiveSize = 480;

  @Output() responsiveDialog = new EventEmitter();
  @Output() responsiveView = new EventEmitter();

  isResponsiveView = false;

  private subscription: Subscription = new Subscription();
  private openResponsiveDialog: SdsDialogRef<TemplateRef<any>>;

  constructor(
    private sdsDialogService: SdsDialogService,
    private breakpointObserver: BreakpointObserver // Will watch for changes between mobile and non-mobile screen size
  ) {}

  ngOnInit() {
    this.observeViewChange();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onResponsiveViewButtonClicked() {
    let dialogOptions = {
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      displayCloseBtn: false,
      panelClass: ['sds-dialog--full']
    };

    let allOptions = this.responsiveDialogOptions ? {...dialogOptions, ...this.responsiveDialogOptions} : dialogOptions;

    this.openResponsiveDialog = this.sdsDialogService.open(this.template, allOptions);

    this.responsiveDialog.emit(this.openResponsiveDialog);

    this.openResponsiveDialog.afterClosed().subscribe(() => {
      this.openResponsiveDialog = undefined;
    })
  }

  private observeViewChange() {
    const breakpointUnsubscription = this.breakpointObserver
      .observe([`(max-width: ${this.responsiveSize}px)`])
      .subscribe((result) => {
        if (result.matches) {
          this.isResponsiveView = true;
        } else {
          this.isResponsiveView = false;
          if (this.openResponsiveDialog) {
            this.openResponsiveDialog.close();
            this.openResponsiveDialog = undefined;
            this.responsiveDialog.emit(this.openResponsiveDialog);
          }
        }

        this.responsiveView.emit(this.isResponsiveView);
      });

    this.subscription.add(breakpointUnsubscription);
  }
}