import { SdsPopupDirective } from './popup.directive';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PopupSampleComponent } from '../../../../../component-sample/src/lib/feature/popup-sample/popup-sample.component';
import { ElementRef, Renderer, Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { element } from '@angular/core/src/render3';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSampleModule } from '../../../../../component-sample/src/lib/feature/icon-sample/icon-sample.module';
import { from } from 'rxjs';

// @Component({
//   template: '<div sdsPopup></div>'
// })


describe('PopupDirective', () => {
  let component: PopupSampleComponent;
  let fixture: ComponentFixture<PopupSampleComponent>;
  let directiveEl: DebugElement;

  beforeEach(async(()=>{
    // component = new PopupSampleComponent();
    TestBed.configureTestingModule({
      declarations:[SdsPopupDirective,
        PopupSampleComponent
      ],imports : [
        IconSampleModule, FontAwesomeModule
      ]
    })
    .compileComponents();
  }));


  it('should be able to test popup directive', async(() => {
    TestBed.overrideComponent(PopupSampleComponent, {
      set: {
        template: '<div sdsPopup></div>'
      }
    });
  }));

  it('Should apply class sds-popup on parent div', ()=>{
    fixture = TestBed.createComponent(PopupSampleComponent);
    component = fixture.componentInstance;
     directiveEl = fixture.debugElement.query(By.directive(SdsPopupDirective));
    // expect(directiveEl.nativeElement.query(By.css('div'))).toContain('.sds-popup');
    expect(directiveEl.classes['sds-popup']).toBeTruthy();
    console.log(directiveEl.nativeElement);
  });

  xit('should detect pop class', ()=> {
    const directiveEl = fixture.debugElement.query(By.directive(SdsPopupDirective));
    fixture.detectChanges();
    console.log(directiveEl);
    // console.log(de.injector.get(SdsPopupDirective));
    //  expect(directiveEl.hasClass('sds-popup')).toBe(true);
  });
  xit('hovering over input', () => {
    directiveEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(directiveEl.nativeElement.style.backgroundColor).toBe('blue');

    directiveEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(directiveEl.nativeElement.style.backgroundColor).toBe('inherit');
});

  // it('should be able to test directive for popup', async(() => {
  //   TestBed.overrideComponent(PopupSampleComponent, {
  //     set: {
  //       template: '<div sdsPopup></div>'
  //     }
  //   });
  // }));

  // it('should create an instance of Popup', () => {
  //   const directive = new SdsPopupDirective();
  //   expect(directive).toBeTruthy();
  // });
});
