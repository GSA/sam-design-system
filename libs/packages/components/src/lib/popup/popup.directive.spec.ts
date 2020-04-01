import { SdsPopupDirective } from './popup.directive';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'sdsPopup',
  template: `
    <div
    id="popupDesc"
    sdsPopup="tooltip content"
    class="sds-popup"
    position="bottom-center"
    placement="out"
    >
    <div class="sds-popup__content">
      <div class="tooltip">Add Description</div>
    </div>
  </div>
  <div>
  <div #tooltipoutTopLeft>
      <button class="usa-button usa-button--base">
        Out top left
      </button>
    </div>

    <div id="popupDire" [sdsPopup]='tooltipoutTopLeft' position="bottom-center" placement="out">
      <div class="tooltip tooltip-left">
        <div>Outside top left</div>
      </div>
    </div>
</div>
  `
})


class TestPopupSampleComponent {

}


describe('PopupDirective', () => {
  let component: TestPopupSampleComponent;
  let fixture: any;
  let directive: SdsPopupDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdsPopupDirective,
        TestPopupSampleComponent],
    });

    fixture = TestBed.createComponent(TestPopupSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    directive = fixture.debugElement
      .query(
        By.directive(SdsPopupDirective)
      )
      .injector.get(SdsPopupDirective);
  });

  it('Should check the placement and position for popup Description', ()=>{
    const divDesc = fixture.debugElement.query(By.css('#popupDesc'));
    expect(divDesc.attributes.placement).toBe(directive.placement);
    expect(divDesc.attributes.position).toBe(directive.position);
  });
  it('Should check the placement and position for popup Directive', ()=>{
    const divDire = fixture.debugElement.query(By.css('#popupDire'));
    expect(divDire.attributes.position).toBe(directive.position);
    expect(divDire.attributes.placement).toBe(directive.placement);
  });

});

