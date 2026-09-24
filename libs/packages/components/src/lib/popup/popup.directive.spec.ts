import { SdsPopupDirective } from './popup.directive';
import { SdsPopupModule } from './popup.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, ViewChild, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div #popupEl class="custom-popup-content">Popup Content Text</div>
    <div [sdsPopup]="popupEl" position="bottom-center" placement="out"></div>
  `,
  standalone: false,
})
class TestPopupSampleComponent {
  @ViewChild('popupEl', { static: true }) popupEl: ElementRef<HTMLElement>;
}

describe('PopupDirective', () => {
  let component: TestPopupSampleComponent;
  let fixture: ComponentFixture<TestPopupSampleComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdsPopupModule],
      declarations: [TestPopupSampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPopupSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.directive(SdsPopupDirective));
  });

  // Check the class for sds-popup
  it('should must has sds popup class', () => {
    expect(de.classes['sds-popup']).toBe(true);
  });

  // Check the placement value
  it('Should check placement on popup', () => {
    const sdsPopupDire = de.injector.get(SdsPopupDirective);
    expect(de.attributes['placement']).toBe('out');
    expect(sdsPopupDire.placement).toBe('out');
  });

  // Check the value of position
  it('Should check position for popup', () => {
    const sdsPopupDire = de.injector.get(SdsPopupDirective);
    expect(de.attributes['position']).toBe('bottom-center');
    expect(sdsPopupDire.position).toBe('bottom-center');
  });

  // Check ngAfterViewInit behavior and DOM restructuring
  it('should restructure DOM on AfterViewInit by appending popup content into content wrapper', () => {
    fixture.detectChanges(); // triggers ngAfterViewInit

    const sdsPopupDire = de.injector.get(SdsPopupDirective);
    const contentDiv = sdsPopupDire.sdsPopupDiv;

    expect(contentDiv).toBeTruthy();
    expect(contentDiv.classList.contains('sds-popup__content')).toBe(true);
    expect(contentDiv.classList.contains('out')).toBe(true);
    expect(contentDiv.classList.contains('bottom-center')).toBe(true);

    // Verify sdsPopup element is appended into sdsPopupDiv
    expect(contentDiv.contains(component.popupEl.nativeElement)).toBe(true);
    // Verify sdsPopupDiv is appended into the host element
    expect(de.nativeElement.contains(contentDiv)).toBe(true);
  });
});
