import {Routes} from '@angular/router';
import {Home} from './e2e-app-layout';
import {FooterE2E} from '../footer/footer-e2e';

export const E2E_APP_ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'footer', component: FooterE2E},
];
