import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfigurableComponent } from './dialog-configurable.component';
import { DialogConfigurableTemplateComponent } from './dialog-configurable-template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogConfigurableComponent, DialogConfigurableTemplateComponent],
  exports: [DialogConfigurableComponent],
  bootstrap: [DialogConfigurableComponent],
})
export class DialogConfigurableModule {}
