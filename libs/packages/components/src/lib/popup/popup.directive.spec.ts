import { SdsPopupDirective } from './popup.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div id="popupDesc" sdsPopup="Add Description" position="bottom-center" placement="out"><div class="sds-popup__content"><div class="tooltip">Add Description</div></div></div><div id="sdsPopupDir" [sdsPopup] position="bottom-center" placement="out"></div>'
})

class TestPopupSampleComponent {

}


describe('PopupDirective', () => {
  let component: TestPopupSampleComponent;
  let fixture: ComponentFixture<TestPopupSampleComponent>;
  let de: DebugElement;
  let popupDesc: DebugElement;

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
    popupDesc = fixture.debugElement.query(By.css('#popupDesc'));
    de = fixture.debugElement.query(By.css('#sdsPopupDir'));
  })

// Check the class for tooltip class
  it('should check for the tooltip class as innerText', () => {
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    const tooltipClass = fixture.debugElement.query(By.css('.tooltip'));
    expect(tooltipClass.nativeElement.innerText).toContain(sdsPopupDire.attributes.sdsPopup);
  });
// Check the Description position
  it('should check the tooltip description for placement', () => {
    const popupPlacement = popupDesc.nativeElement.attributes[1].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(popupPlacement).toContain(sdsPopupDire.attributes.placement);
  });

// Check the Description placement
  it('should check the tooltip description for position', () => {
    const popupPostion = popupDesc.nativeElement.attributes[2].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(popupPostion).toContain(sdsPopupDire.attributes.position);
  });
// Check the class for sds-popup
it('should must has sds popup class', () => {
  expect(de.classes['sds-popup']).toBe(true);
});

  //Check the placement value
  it('Should check placement on popup', ()=>{
    const placeValueEl = de.nativeElement.attributes[1].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(placeValueEl).toBe(sdsPopupDire.attributes.placement);
  });

  // Check the value of position
  it('Should check position for popup', ()=>{
    const placeValueEl = de.nativeElement.attributes[2].value;
    const sdsPopupDire = fixture.debugElement.query(By.directive(SdsPopupDirective));
    expect(placeValueEl).toBe(sdsPopupDire.attributes.position);
  });

});
