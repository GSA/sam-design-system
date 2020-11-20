import { Component, ContentChild, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sds-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss'],
})
export class SideToolbarComponent implements OnInit, OnDestroy {
  
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  @Input() mobileButtonText: string;

  @Output() mobileDialog = new EventEmitter();
  @Output() mobileView = new EventEmitter();

  isMobileView = false;

  private readonly mobileSize = 480;
  private subscription: Subscription = new Subscription();

  constructor(
    private sdsDialogService: SdsDialogService,
    private breakpointObserver: BreakpointObserver, // Will watch for changes between mobile and non-mobile screen size
  ) { }

  ngOnInit() {
    this.observeViewChange();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onMobileButtonClicked() {
    const dialog = this.sdsDialogService.open(this.template, {
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      displayCloseBtn: false,
    });

    this.mobileDialog.emit(dialog);
  }

  private observeViewChange() {
    const breakpointUnsubscription = this.breakpointObserver.observe([
      `(max-width: ${this.mobileSize}px)`
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobileView = true;
      } else {
        this.isMobileView = false;
      }
      this.mobileView.emit(this.isMobileView);
    });

    this.subscription.add(breakpointUnsubscription);
  }

}
