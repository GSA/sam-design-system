import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDataReturnComponent } from './dialog-data-return.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SdsDialogModule } from '@gsa-sam/components';
import { DialogDataReturnTemplateComponent } from './dialog-template.component';

@NgModule({
  imports: [CommonModule, SdsDialogModule, BrowserAnimationsModule],
  declarations: [DialogDataReturnComponent, DialogDataReturnTemplateComponent],
  bootstrap: [DialogDataReturnComponent],
  exports: [DialogDataReturnComponent],
})
export class DialogDataReturnModule {}
