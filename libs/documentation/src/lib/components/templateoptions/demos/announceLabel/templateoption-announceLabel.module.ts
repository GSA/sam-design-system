import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionAnnounceLabel } from './templateoption-announceLabel.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [TemplateOptionAnnounceLabel],
  exports: [TemplateOptionAnnounceLabel],
  bootstrap: [TemplateOptionAnnounceLabel]
})
export class TemplateOptionsAnnounceLabelModule {}
