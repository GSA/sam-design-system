import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsTextEditorComponent } from './text-editor.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  imports: [CommonModule, FormsModule,CKEditorModule],
  exports: [SdsTextEditorComponent],
  declarations: [SdsTextEditorComponent],
  providers: [],
  bootstrap: [SdsTextEditorComponent]
})
export class SdsTextEditorModule {}