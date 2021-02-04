import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSideNavigationComponent } from './side-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [SdsSideNavigationComponent],
  exports: [SdsSideNavigationComponent]
})
export class SdsSideNavigationModule { }
