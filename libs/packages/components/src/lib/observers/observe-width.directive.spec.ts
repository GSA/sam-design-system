import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ViewportRuler } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

import { SdsObserveWidthDirective } from './observe-width.directive';

@Component({
  template: ` <div sdsObserveWidth (sdsObserveWidth)="onWidthChange($event)">Target Element</div> `,
  standalone: false,
})
class TestHostComponent {
  width: number | null = null;
  widthChangeCount = 0;

  onWidthChange(width: number) {
    this.width = width;
    this.widthChangeCount++;
  }
}

describe('SdsObserveWidthDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let directive: SdsObserveWidthDirective;
  let changeSubject: Subject<Event>;
  let mockViewportRuler: { change: (throttleTime?: number) => Subject<Event> };

  beforeEach(() => {
    changeSubject = new Subject<Event>();
    mockViewportRuler = {
      change: vi.fn().mockReturnValue(changeSubject.asObservable()),
    };

    TestBed.configureTestingModule({
      declarations: [SdsObserveWidthDirective, TestHostComponent],
      providers: [{ provide: ViewportRuler, useValue: mockViewportRuler }],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should initialize and emit width on startWith', () => {
    fixture.detectChanges();
    directive = fixture.debugElement
      .query(By.directive(SdsObserveWidthDirective))
      .injector.get(SdsObserveWidthDirective);

    expect(directive).toBeTruthy();
    expect(mockViewportRuler.change).toHaveBeenCalledWith(0);
    expect(hostComponent.widthChangeCount).toBe(1);
    expect(typeof hostComponent.width).toBe('number');
  });

  it('should emit on subsequent viewport ruler resize events', () => {
    fixture.detectChanges();
    directive = fixture.debugElement
      .query(By.directive(SdsObserveWidthDirective))
      .injector.get(SdsObserveWidthDirective);

    const initialCount = hostComponent.widthChangeCount;
    changeSubject.next(new Event('resize'));

    expect(hostComponent.widthChangeCount).toBe(initialCount + 1);
  });

  it('should unsubscribe on destroy', () => {
    fixture.detectChanges();
    directive = fixture.debugElement
      .query(By.directive(SdsObserveWidthDirective))
      .injector.get(SdsObserveWidthDirective);

    expect(directive.windowResize$.closed).toBe(false);

    fixture.destroy();

    expect(directive.windowResize$.closed).toBe(true);
  });
});
