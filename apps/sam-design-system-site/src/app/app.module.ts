import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
