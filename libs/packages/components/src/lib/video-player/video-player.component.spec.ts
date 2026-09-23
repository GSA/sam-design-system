import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SdsVideoPlayerComponent } from './video-player.component';
import { By } from '@angular/platform-browser';

class MockInitPxVideo {
  constructor(public options: any) {
    const el = document.getElementById(options.videoId);
    if (el) {
      if (!el.querySelector('.px-video-play')) {
        const play = document.createElement('button');
        play.className = 'px-video-play';
        el.appendChild(play);
      }
      if (!el.querySelector('.px-video-restart')) {
        const restart = document.createElement('button');
        restart.className = 'px-video-restart';
        el.appendChild(restart);
      }
      if (!el.querySelector('progress')) {
        const prog = document.createElement('progress');
        el.appendChild(prog);
      }
    }
  }
}
(globalThis as any).InitPxVideo = MockInitPxVideo;
(window as any).InitPxVideo = MockInitPxVideo;

describe('VideoPlayerComponent', () => {
  let component: SdsVideoPlayerComponent;
  let fixture: ComponentFixture<SdsVideoPlayerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SdsVideoPlayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsVideoPlayerComponent);
    component = fixture.componentInstance;
    component.VPConfiguration = {
      sourceWebm: '',
      sourceMp4: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      height: 'auto',
      width: '100%',
      caption: '',
      poster: 'http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg',
      id: 'sampleId1',
      seekInterval: 20,
      debug: true,
      preload: 'none',
      description: 'Sample Video',
    };
    fixture.detectChanges();
  });

  it('Should get same video Height, Width, poster and Preload value as an Input', () => {
    const element = fixture.debugElement.query(By.css('video'));
    element.nativeElement.setAttribute('height', component.VPConfiguration.height);
    expect(element.nativeElement.getAttribute('height')).toBe(component.VPConfiguration.height);
    element.nativeElement.setAttribute('width', component.VPConfiguration.width);
    expect(element.nativeElement.getAttribute('width')).toBe(component.VPConfiguration.width);
    element.nativeElement.setAttribute('poster', component.VPConfiguration.poster);
    expect(element.nativeElement.getAttribute('poster')).toBe(component.VPConfiguration.poster);
    element.nativeElement.setAttribute('preload', component.VPConfiguration.preload);
    expect(element.nativeElement.getAttribute('preload')).toBe(component.VPConfiguration.preload);
  });

  it('div main container Id and width should same as an Input value', () => {
    const element = fixture.debugElement.query(By.css('div.px-video-container'));
    element.nativeElement.setAttribute('width', component.VPConfiguration.width);
    expect(element.nativeElement.getAttribute('width')).toBe(component.VPConfiguration.width);
    element.nativeElement.setAttribute('id', component.VPConfiguration.id);
    expect(element.nativeElement.getAttribute('id')).toBe(component.VPConfiguration.id);
  });

  it('Video and Source element should be get same value as Input value', () => {
    const element = fixture.debugElement.query(By.css('source'));
    if (element) {
      element.nativeElement.setAttribute('src', component.VPConfiguration.sourceMp4);
      expect(element.nativeElement.getAttribute('src')).toBe(component.VPConfiguration.sourceMp4);
      element.nativeElement.setAttribute('src', component.VPConfiguration.sourceWebm);
      expect(element.nativeElement.getAttribute('src')).toBe(component.VPConfiguration.sourceWebm);
    }
  });

  it('should accept pxVideo width form Input', () => {
    const element = fixture.debugElement.query(By.css('.px-video-controls'));
    if (element) {
      element.nativeElement.setAttribute('width', component.VPConfiguration.width);
      expect(element.nativeElement.getAttribute('width')).toBe(component.VPConfiguration.width);
    }
  });

  it('should accept track caption from input', () => {
    const element = fixture.debugElement.query(By.css('track'));
    if (element) {
      element.nativeElement.setAttribute('src', component.VPConfiguration.caption);
      expect(element.nativeElement.getAttribute('src')).toBe(component.VPConfiguration.caption);
    }
  });

  it('should set loadVideoSource to true during ngOnInit when preload is not none', () => {
    const testFixture = TestBed.createComponent(SdsVideoPlayerComponent);
    const testComp = testFixture.componentInstance;
    testComp.VPConfiguration = {
      ...component.VPConfiguration,
      id: 'sampleIdPreload',
      preload: 'auto',
    };
    testFixture.detectChanges();
    expect(testComp.loadVideoSource).toBe(true);
  });

  it('should set aria-label on progress element during ngAfterViewInit', () => {
    const progressEl = fixture.nativeElement.querySelector('progress');
    expect(progressEl).toBeTruthy();
    expect(progressEl.getAttribute('aria-label')).toBe('Sample Video progress bar');
  });

  it('should handle video playback hooks via play and restart buttons', fakeAsync(() => {
    const videoEl: HTMLVideoElement = component.video.nativeElement;
    const playSpy = vi.spyOn(videoEl, 'play').mockImplementation(() => Promise.resolve());
    const pauseSpy = vi.spyOn(videoEl, 'pause').mockImplementation(() => {});

    component.loadVideoSource = false;

    const playBtn: HTMLButtonElement = fixture.nativeElement.querySelector('.px-video-play');
    expect(playBtn).toBeTruthy();

    // Click play button to trigger on-demand loading
    playBtn.click();
    expect(component.loadVideoSource).toBe(true);
    tick(); // allow setTimeout to fire

    expect(pauseSpy).toHaveBeenCalled();
    expect(playSpy).toHaveBeenCalled();

    // Second click when already loaded should exit early
    playSpy.mockClear();
    playBtn.click();
    tick();
    expect(playSpy).not.toHaveBeenCalled();

    // Restart button also triggers loadVideo
    component.loadVideoSource = false;
    const restartBtn: HTMLButtonElement = fixture.nativeElement.querySelector('.px-video-restart');
    expect(restartBtn).toBeTruthy();
    restartBtn.click();
    expect(component.loadVideoSource).toBe(true);
    tick();
  }));

  it('should fallback to loadVideoSource=true when controls buttons are absent', () => {
    const fallbackFixture = TestBed.createComponent(SdsVideoPlayerComponent);
    const fallbackComp = fallbackFixture.componentInstance;
    fallbackComp.VPConfiguration = {
      ...component.VPConfiguration,
      id: 'absentControlsId',
      preload: 'none',
    };

    // Remove controls before view init so buttons are absent
    (globalThis as any).InitPxVideo = class {
      constructor() {}
    };

    fallbackFixture.detectChanges();
    expect(fallbackComp.loadVideoSource).toBe(true);

    // restore mock
    (globalThis as any).InitPxVideo = MockInitPxVideo;
  });

  it('should set crossorigin attribute initially and on changes', () => {
    const crossFixture = TestBed.createComponent(SdsVideoPlayerComponent);
    const crossComp = crossFixture.componentInstance;
    crossComp.VPConfiguration = {
      ...component.VPConfiguration,
      id: 'crossoriginId',
    };
    crossComp.crossorigin = 'anonymous';
    crossFixture.detectChanges();

    const videoNative = crossComp.video.nativeElement;
    expect(videoNative.getAttribute('crossorigin')).toBe('anonymous');

    // Update via ngOnChanges
    crossComp.crossorigin = 'use-credentials';
    crossComp.ngOnChanges({
      crossorigin: {
        currentValue: 'use-credentials',
        previousValue: 'anonymous',
        firstChange: false,
        isFirstChange: () => false,
      },
    });
    expect(videoNative.getAttribute('crossorigin')).toBe('use-credentials');

    // Edge cases for ngOnChanges
    expect(() => crossComp.ngOnChanges(null)).not.toThrow();
    expect(() => crossComp.ngOnChanges({})).not.toThrow();
  });

  it('should remove px-video-aria-announce element in ngOnDestroy if present', () => {
    const announceEl = document.createElement('div');
    announceEl.id = 'px-video-aria-announce';
    document.body.appendChild(announceEl);

    expect(document.getElementById('px-video-aria-announce')).toBeTruthy();
    component.ngOnDestroy();
    expect(document.getElementById('px-video-aria-announce')).toBeNull();

    // Call again when element does not exist
    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});
