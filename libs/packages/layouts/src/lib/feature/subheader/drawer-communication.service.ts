import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SdsDrawerCommunicationService {
  private isOpen = new BehaviorSubject(false);
  isDrawerOpen = this.isOpen.asObservable();

  private currentTemplate= new BehaviorSubject<TemplateRef<any>>(null);
  contentTemplate = this.currentTemplate.asObservable();

  onDrawerOpen(open: boolean, temp : TemplateRef<any>){
    this.isOpen.next(open);
    this.currentTemplate.next(temp);  
  }
}