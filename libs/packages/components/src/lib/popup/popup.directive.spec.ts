import { SdsPopupDirective } from './popup.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div id="tooltipID"></div><div [Popup]="tooltipID" position="bottom-center" placement="out"></div>'
})

class TestPopupSampleComponent {

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
      ]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(TestPopupSampleComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
  })


  it('should must has sds popup class', () => {
    expect(de.classes['sds-popup']).toBe(true);
  });

  it('Should check placement on popup', ()=>{
    const placeValueEl = de.nativeElement.attributes[0].value;
    console.log(placeValueEl);
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    console.log(sdsPopupDire.nativeElement);
    expect(placeValueEl).toBe(sdsPopupDire.attributes.tooltipID);
  });

  it('Should check placement on popup', ()=>{
    const placeValueEl = de.nativeElement.attributes[1].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(placeValueEl).toBe(sdsPopupDire.attributes.placement);
  });

  it('Should check position for popup', ()=>{
    const placeValueEl = de.nativeElement.attributes[2].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(placeValueEl).toBe(sdsPopupDire.attributes.position);
  });

});
