import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogWidthComponent } from './dialog-width.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SdsDialogModule } from '@gsa-sam/components';
import { DialogWidthTypeTemplate } from './dialog-template.component';

@NgModule({
  imports: [
    CommonModule,
    SdsDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [DialogWidthComponent, DialogWidthTypeTemplate],
  bootstrap: [DialogWidthComponent],
  exports: [DialogWidthComponent],
})
export class DialogWidthModule { }
