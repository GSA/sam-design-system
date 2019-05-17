import { Routes } from '@angular/router';
import { FormlyInputComponent } from './formly-input/formly-input.component';


export const FORMLY_COMPONENTS = [
    FormlyInputComponent,
];

export const FORMLY_ROUTES: Routes = [
    {
        path: 'formly',
        children:[{
            path: 'formly-input' , component: FormlyInputComponent
        }] 
    },
   
];
