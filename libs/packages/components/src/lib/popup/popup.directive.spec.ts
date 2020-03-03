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
@Component({
  template: '<div sdsPopup position="bottom-center" place="out" aria-label="Div that displays a tooltip that hides when scrolled out of the container" className="tooltip,tooltip-left" (click)="onPopupClick()"></div>'
})
class TestPopupSampleComponent {
  onPopupClick(){}
}


describe('PopupDirective', () => {
  let component: TestPopupSampleComponent;
  let fixture: ComponentFixture<TestPopupSampleComponent>;
  let de: DebugElement;

  beforeEach(async()=>{
    component = new TestPopupSampleComponent();
    TestBed.configureTestingModule({
      declarations:[SdsPopupDirective,
        TestPopupSampleComponent
      ],imports : [
        IconSampleModule, FontAwesomeModule
      ]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(TestPopupSampleComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
  })

  it('should must has sds popup content class', () => {
    console.log(de.nativeElement.query(By.css('.tooltipContent')));
     const sdsPopupDire = de.injector.get(SdsPopupDirective);
     console.log(sdsPopupDire.sdsPopupDiv);
    debugger;
    expect(de.classes['sds-popup']).toBe(true);
  });

  it('should must has sds popup content class', () => {
    expect(de.classes['sds-popup']).toBe(true);
  });

  it('Should check Click event on popup Content', ()=>{
    de.triggerEventHandler('click', null);
    expect(component.onPopupClick).toBeTruthy();
  });

  it('Should check sds popup Content for class', ()=>{
    const placeValueEl = de.nativeElement.attributes[1].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(placeValueEl).toBe(sdsPopupDire.attributes.className);
  });

  it('Should check sds popup Content class for place', ()=>{
    const placeValueEl = de.nativeElement.attributes[2].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(placeValueEl).toBe(sdsPopupDire.attributes.place);
  });

  it('Should check sds popup Content class for position', ()=>{
    const placeValueEl = de.nativeElement.attributes[3].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(placeValueEl).toBe(sdsPopupDire.attributes.position);
  });




});
