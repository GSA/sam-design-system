import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ComponentWrapperComponent} from './component-wrapper/component-wrapper.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule, RouterModule, ComponentWrapperComponent
  ],
  declarations: [
    ComponentWrapperComponent
  ],
  providers: []
})
export class DocumentationSharedModule {
}
