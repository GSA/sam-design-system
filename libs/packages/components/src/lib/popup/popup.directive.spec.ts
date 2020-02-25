import { SdsPopupDirective } from './popup.directive';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PopupSampleComponent } from '../../../../../component-sample/src/lib/feature/popup-sample/popup-sample.component';
import { ElementRef, Renderer, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { element } from '@angular/core/src/render3';

@Component({
  template: '<div class="sds-popup"></div>'
})

class DirectiveHostComponent {

}


describe('PopupDirective', () => {

  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(()=>{
    // component = new PopupSampleComponent();
    TestBed.configureTestingModule({
      declarations:[SdsPopupDirective, DirectiveHostComponent]
    })
    .compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should detect pop class', ()=> {
    const de = fixture.debugElement.query(By.css('div'));
    const directiveEl = fixture.debugElement.query(By.directive(SdsPopupDirective));
    console.log(directiveEl);
    console.log(de.injector.get(SdsPopupDirective));
    // expect(de.nativeElement).toHaveClass('sds-popup');
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
