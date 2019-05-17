import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormlySampleModule } from './formly/formly.module';
import { SdsFormlyModule } from '@sam-design-system/sam-formly'
import { FormlyModule } from '@ngx-formly/core';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    SdsFormlyModule,
    FormlyModule,
    FormlySampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
