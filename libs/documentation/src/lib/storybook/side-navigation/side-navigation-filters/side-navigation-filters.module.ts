import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { SideNavigationFiltersComponent } from './side-navigation-filters.component';

@NgModule({
  imports: [CommonModule, RouterTestingModule],
  declarations: [SideNavigationFiltersComponent],
  bootstrap: [SideNavigationFiltersComponent],
  exports: [SideNavigationFiltersComponent],
})
export class SideNavigationFiltersModule {}
