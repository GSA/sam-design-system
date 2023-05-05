
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import asyncData from './async-data';

@Injectable({
 providedIn: 'root'
})
export class DataService {

 constructor () {}

 getData (): Observable<any> {
   return of(asyncData)
 }
}