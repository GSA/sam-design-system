import { SdsPopupDirective } from './popup.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div [sdsPopup] position="bottom-center" placement="out"></div>',
})
class TestPopupSampleComponent {}

describe('PopupDirective', () => {
  let component: TestPopupSampleComponent;
  let fixture: ComponentFixture<TestPopupSampleComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    component = new TestPopupSampleComponent();
    TestBed.configureTestingModule({
      declarations: [SdsPopupDirective, TestPopupSampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPopupSampleComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
  });

  // Check the class for sds-popup
  it('should must has sds popup class', () => {
    expect(de.classes['sds-popup']).toBe(true);
  });

  //Check the placement value
  it('Should check placement on popup', () => {
    const placeValueEl = de.nativeElement.attributes[0].value;
    const sdsPopupDire = fixture.debugElement.query(
      By.directive(SdsPopupDirective)
    );
    expect(placeValueEl).toBe(sdsPopupDire.attributes.position);
  });

  // Check the value of position
  it('Should check position for popup', () => {
    const placeValueEl = de.nativeElement.attributes[1].value;
    const sdsPopupDire = fixture.debugElement.query(
      By.directive(SdsPopupDirective)
    );
    expect(placeValueEl).toBe(sdsPopupDire.attributes.placement);
  });
});
