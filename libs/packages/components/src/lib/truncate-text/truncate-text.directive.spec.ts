import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OverlayContainer, OverlayModule, ViewportRuler } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';
import { SdsTruncateTextByLineDirective } from './truncate-text.directive';
import { SdsTruncatedTextContainerComponent } from './truncate-text-container.component';
import { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';
import { SdsTruncateModule } from './truncate.text.module';

@Component({
  template: `
    <div id="wrapper" style="width: 200px;">
      <p [sdsTruncateTextByLine]="lines" id="target">
        This is a long piece of sample text used for verifying the truncation directive behavior.
      </p>
      <p [sdsTruncateTextByLine]="5" id="short-target">Short text</p>
    </div>
  `,
  standalone: false,
})
class TestHostComponent {
  @ViewChild(SdsTruncateTextByLineDirective) directive: SdsTruncateTextByLineDirective;
  lines: any = 2;
  text = 'This is a long piece of sample text used for verifying the truncation directive behavior.';
}

describe('TruncateText', () => {
  describe('SdsTruncatedTextContainerComponent', () => {
    let containerFixture: ComponentFixture<SdsTruncatedTextContainerComponent>;
    let containerComponent: SdsTruncatedTextContainerComponent;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule],
        declarations: [SdsTruncatedTextContainerComponent],
        providers: [{ provide: SDS_TRUNCATED_TEXT_DATA, useValue: { text: 'Full untruncated content' } }],
      }).compileComponents();
    }));

    beforeEach(() => {
      containerFixture = TestBed.createComponent(SdsTruncatedTextContainerComponent);
      containerComponent = containerFixture.componentInstance;
      containerFixture.detectChanges();
    });

    it('should create and display provided text data', () => {
      expect(containerComponent).toBeTruthy();
      expect(containerFixture.nativeElement.textContent).toContain('Full untruncated content');
    });

    it('should manage animation states and respond to animation done', () => {
      expect(containerComponent._animationState).toBe('void');

      containerComponent.startAnimation();
      expect(containerComponent._animationState).toBe('enter');

      containerComponent.resetAnimation();
      expect(containerComponent._animationState).toBe('void');

      expect(() => containerComponent._onAnimationDone()).not.toThrow();
    });
  });

  describe('SdsTruncateTextByLineDirective', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let directive: SdsTruncateTextByLineDirective;
    let overlayContainer: OverlayContainer;
    let overlayContainerElement: HTMLElement;
    let viewportRulerChange$: Subject<Event>;

    beforeEach(waitForAsync(() => {
      viewportRulerChange$ = new Subject<Event>();
      const mockViewportRuler = {
        change: () => viewportRulerChange$.asObservable(),
      };

      TestBed.configureTestingModule({
        imports: [SdsTruncateModule, OverlayModule, NoopAnimationsModule],
        declarations: [TestHostComponent],
        providers: [{ provide: ViewportRuler, useValue: mockViewportRuler }],
      }).compileComponents();
    }));

    beforeEach(() => {
      overlayContainer = TestBed.inject(OverlayContainer);
      overlayContainerElement = overlayContainer.getContainerElement();
      fixture = TestBed.createComponent(TestHostComponent);
      hostComponent = fixture.componentInstance;
    });

    afterEach(() => {
      overlayContainer.ngOnDestroy();
    });

    it('should coerce string line limits to numbers via input setter', () => {
      fixture.detectChanges();
      directive = hostComponent.directive;

      directive.textLinesLimit = '3';
      expect(directive.textLinesLimit).toBe(3);

      // Re-assigning same value should not alter state
      directive.textLinesLimit = 3;
      expect(directive.textLinesLimit).toBe(3);
    });

    it('should truncate text with ellipsis when text exceeds visible limit', () => {
      fixture.detectChanges();
      directive = hostComponent.directive;

      // Mock character measurements so text is longer than visible limit
      (directive as any).approximatedCharacterWidth = 10;
      vi.spyOn(directive as any, '_getHostWidth').mockReturnValue(100);
      directive.textLinesLimit = 2; // visible characters = (100 / 10) * 2 = 20

      directive.updateUI();

      const el = fixture.debugElement.query(By.css('#target')).nativeElement;
      expect(el.innerText).toContain('...');
      expect(el.innerText.length).toBeLessThan(hostComponent.text.length);
    });

    it('should not truncate text when text is not long enough', () => {
      fixture.detectChanges();
      const shortElDebug = fixture.debugElement.query(By.css('#short-target'));
      const shortDirective = shortElDebug.injector.get(SdsTruncateTextByLineDirective);

      (shortDirective as any).approximatedCharacterWidth = 10;
      vi.spyOn(shortDirective as any, '_getHostWidth').mockReturnValue(500);
      shortDirective.textLinesLimit = 5;

      expect((shortDirective as any)._isNotLongEnough()).toBe(true);

      shortElDebug.nativeElement.innerText = 'Short text';
      shortDirective.updateUI();

      const el = shortElDebug.nativeElement;
      expect(el.innerText).toBe('Short text');
    });

    it('should open overlay on host click when text is truncated and close on backdrop click', fakeAsync(() => {
      fixture.detectChanges();
      directive = hostComponent.directive;

      (directive as any).approximatedCharacterWidth = 10;
      vi.spyOn(directive as any, '_getHostWidth').mockReturnValue(100);
      directive.textLinesLimit = 2;
      directive.updateUI();

      const targetEl = fixture.debugElement.query(By.css('#target')).nativeElement;
      targetEl.click();
      fixture.detectChanges();
      tick();

      const overlayPanel = overlayContainerElement.querySelector('.sds-overlay');
      expect(overlayPanel).toBeTruthy();
      expect(overlayPanel.textContent.trim()).toContain('This is a long piece of sample text');

      // Backdrop click closes overlay
      const backdrop = overlayContainerElement.querySelector('.cdk-overlay-backdrop') as HTMLElement;
      expect(backdrop).toBeTruthy();
      backdrop.click();
      fixture.detectChanges();
      tick();

      expect(overlayContainerElement.querySelector('.sds-overlay')).toBeNull();
    }));

    it('should not open overlay when text is not long enough', () => {
      fixture.detectChanges();
      const shortElDebug = fixture.debugElement.query(By.css('#short-target'));
      const shortDirective = shortElDebug.injector.get(SdsTruncateTextByLineDirective);

      (shortDirective as any).approximatedCharacterWidth = 10;
      vi.spyOn(shortDirective as any, '_getHostWidth').mockReturnValue(500);
      shortDirective.textLinesLimit = 5;

      const targetEl = shortElDebug.nativeElement;
      targetEl.click();
      fixture.detectChanges();

      const overlayPanel = overlayContainerElement.querySelector('.sds-overlay');
      expect(overlayPanel).toBeNull();
    });

    it('should update UI on window resize events', () => {
      fixture.detectChanges();
      directive = hostComponent.directive;

      const updateSpy = vi.spyOn(directive, 'updateUI');
      viewportRulerChange$.next(new Event('resize'));

      expect(updateSpy).toHaveBeenCalled();
    });

    it('should clean up subscriptions and dispose overlay on destroy', fakeAsync(() => {
      fixture.detectChanges();
      directive = hostComponent.directive;

      (directive as any).approximatedCharacterWidth = 10;
      vi.spyOn(directive as any, '_getHostWidth').mockReturnValue(100);
      directive.textLinesLimit = 2;
      directive.openOverlay();
      tick();

      const overlayRef = (directive as any)._overlayRef;
      expect(overlayRef).toBeTruthy();
      const disposeSpy = vi.spyOn(overlayRef, 'dispose');

      directive.ngOnDestroy();
      expect(disposeSpy).toHaveBeenCalled();
    }));
  });
});
