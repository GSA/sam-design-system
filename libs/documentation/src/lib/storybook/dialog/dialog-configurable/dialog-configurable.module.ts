import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfigurableComponent } from './dialog-configurable.component';
import { DialogConfigurableTemplateComponent } from './dialog-configurable-template.component';
import { SdsDialogModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsDialogModule],
  declarations: [DialogConfigurableComponent, DialogConfigurableTemplateComponent],
  exports: [DialogConfigurableComponent],
  bootstrap: [DialogConfigurableComponent],
})
export class DialogConfigurableModule {}
