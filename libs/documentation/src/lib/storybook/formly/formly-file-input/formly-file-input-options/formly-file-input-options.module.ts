import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputApiComponent } from './formly-file-input-options.component';

@NgModule({
  declarations: [FileInputApiComponent],
  imports: [CommonModule],
  exports: [FileInputApiComponent],
  bootstrap: [FileInputApiComponent],
})
export class FormlyFileInputOptionsModule {}
