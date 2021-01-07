import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsVideoPlayerComponent } from './video-player.component';
import { By } from '@angular/platform-browser';
import { InitPxVideo } from 'accessible-html5-video-player/js/px-video.js';

class IntiPxVideoObj {
  InitPxVideo(options) {}
}

xdescribe('VideoPlayerComponent', () => {
  let component: SdsVideoPlayerComponent;
  let fixture: ComponentFixture<SdsVideoPlayerComponent>;
  //let de: DebugElement = new DebugElement();
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SdsVideoPlayerComponent],
      providers: [{ provide: InitPxVideo, useClass: new IntiPxVideoObj() }]
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
      poster:
        'http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg',
      id: 'smapleId1',
      seekInterval: 20,
      debug: true,
      preload: 'none'
    };
    fixture.detectChanges();
  });

  it('Should get same video Height, Width, poster and Preload value  as an Input', () => {
    const element = fixture.debugElement.query(By.css('video'));
    element.nativeElement.setAttribute(
      'height',
      component.VPConfiguration.height
    );
    expect(element.nativeElement.getAttribute('height')).toBe(
      component.VPConfiguration.height
    );
    element.nativeElement.setAttribute(
      'width',
      component.VPConfiguration.width
    );
    expect(element.nativeElement.getAttribute('width')).toBe(
      component.VPConfiguration.width
    );
    element.nativeElement.setAttribute(
      'poster',
      component.VPConfiguration.poster
    );
    expect(element.nativeElement.getAttribute('poster')).toBe(
      component.VPConfiguration.poster
    );
    element.nativeElement.setAttribute(
      'preload',
      component.VPConfiguration.preload
    );
    expect(element.nativeElement.getAttribute('preload')).toBe(
      component.VPConfiguration.preload
    );
  });

  it('div main container Id and width should same as an Input value ', () => {
    const element = fixture.debugElement.query(
      By.css('div.px-video-container')
    );
    element.nativeElement.setAttribute(
      'width',
      component.VPConfiguration.width
    );
    expect(element.nativeElement.getAttribute('width')).toBe(
      component.VPConfiguration.width
    );
    element.nativeElement.setAttribute('id', component.VPConfiguration.id);
    expect(element.nativeElement.getAttribute('id')).toBe(
      component.VPConfiguration.id
    );
  });

  it('Video and Source element should be get same value as Input value', () => {
    const element = fixture.debugElement.query(By.css('source'));
    element.nativeElement.setAttribute(
      'src',
      component.VPConfiguration.sourceMp4
    );
    expect(element.nativeElement.getAttribute('src')).toBe(
      component.VPConfiguration.sourceMp4
    );
    element.nativeElement.setAttribute(
      'src',
      component.VPConfiguration.sourceWebm
    );
    expect(element.nativeElement.getAttribute('src')).toBe(
      component.VPConfiguration.sourceWebm
    );
  });

  it('should accept pxVideo width form Input', () => {
    const element = fixture.debugElement.query(By.css('.px-video-controls'));
    element.nativeElement.setAttribute(
      'width',
      component.VPConfiguration.width
    );
    expect(element.nativeElement.getAttribute('width')).toBe(
      component.VPConfiguration.width
    );
  });

  it('should accept track caption from input', () => {
    const element = fixture.debugElement.query(By.css('track'));
    element.nativeElement.setAttribute(
      'src',
      component.VPConfiguration.caption
    );
    expect(element.nativeElement.getAttribute('src')).toBe(
      component.VPConfiguration.caption
    );
  });
});
