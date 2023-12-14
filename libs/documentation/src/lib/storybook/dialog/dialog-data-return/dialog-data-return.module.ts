import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDataReturnComponent } from './dialog-data-return.component';
import { SdsDialogModule } from '@gsa-sam/components';
import { DialogDataReturnTemplateComponent } from './dialog-template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SdsDialogModule, FormsModule],
  declarations: [DialogDataReturnComponent, DialogDataReturnTemplateComponent],
  bootstrap: [DialogDataReturnComponent],
  exports: [DialogDataReturnComponent],
})
export class DialogDataReturnModule {}
