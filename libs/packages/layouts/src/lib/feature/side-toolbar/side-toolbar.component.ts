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
import { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sds-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss'],
})
export class SideToolbarComponent implements OnInit, OnDestroy {
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  // Text for button in responsive view
  @Input() responsiveButtonText: string;

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
    this.openResponsiveDialog = this.sdsDialogService.open(this.template, {
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      displayCloseBtn: false,
      panelClass: ['sds-dialog--full'],
    });

    this.responsiveDialog.emit(this.openResponsiveDialog);
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
