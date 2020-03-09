import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsVideoPlayerComponent } from './video-player.component';
import { By } from '@angular/platform-browser';
import { InitPxVideo } from './js/px-video';

class IntiPxVideoObj {
  InitPxVideo(options){
  }
};



describe('VideoPlayerComponent', () => {
  let component: SdsVideoPlayerComponent;
  let fixture: ComponentFixture<SdsVideoPlayerComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ SdsVideoPlayerComponent ],
      providers: [
        {provide: InitPxVideo, useClass: IntiPxVideoObj}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsVideoPlayerComponent);
    component = fixture.componentInstance;
    component.VPConfigration = {
      'sourceWebm': '',
      'sourceMp4': 'https://media.w3.org/2010/05/sintel/trailer.mp4',
      'height': '345',
      'width': '550',
      'caption':'',
      'poster':'http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg',
      'controls':'',
      'id': 'smapleId1',
      'seekInterval': 20,
      'debug': true,
      'preload': 'none'
    }
    fixture.detectChanges();
  });

  it('Should get same video Height, Width, poster and Preload value  as an Input', ()=>{
    const element = fixture.debugElement.query(By.css('video'));
    element.nativeElement.setAttribute('height', component.videoHeightEl);
    expect(element.nativeElement.getAttribute("height")).toBe(component.VPConfigration.height);
    element.nativeElement.setAttribute('width', component.videoWidthEl);
    expect(element.nativeElement.getAttribute("width")).toBe(component.VPConfigration.width);
    element.nativeElement.setAttribute('poster', component.videoPosterEl);
    expect(element.nativeElement.getAttribute("poster")).toBe(component.VPConfigration.poster);
    element.nativeElement.setAttribute('preload', component.videoPreloadEl);
    expect(element.nativeElement.getAttribute("preload")).toBe(component.VPConfigration.preload);
  });

  it('div main container Id and width should same as an Input value ', ()=>{
    const element = fixture.debugElement.query(By.css('div.px-video-container'));
    element.nativeElement.setAttribute('width', component.videoWidthEl);
    expect(element.nativeElement.getAttribute("width")).toBe(component.VPConfigration.width);
    element.nativeElement.setAttribute('id', component.videoPlayerId);
    expect(element.nativeElement.getAttribute("id")).toBe(component.VPConfigration.id);
  });

  it('Video and Source element should be get same value as Input value', ()=> {
    const element = fixture.debugElement.query(By.css('source'));
    element.nativeElement.setAttribute('src', component.videoSourceMp4El);
    expect(element.nativeElement.getAttribute('src')).toBe(component.VPConfigration.sourceMp4);
    element.nativeElement.setAttribute('src', component.videoSourceWebmEl);
    expect(element.nativeElement.getAttribute('src')).toBe(component.VPConfigration.sourceWebm);
  });

  it('should accept pxVideo width form Input', ()=>{
    const element = fixture.debugElement.query(By.css('.px-video-controls'));
    element.nativeElement.setAttribute('width', component.videoWidthEl);
    expect(element.nativeElement.getAttribute('width')).toBe(component.VPConfigration.width);
  });

  it('should accept track caption from input', ()=>{
    const element = fixture.debugElement.query(By.css('track'));
    element.nativeElement.setAttribute('src', component.videoCaptionEl);
    expect(element.nativeElement.getAttribute('src')).toBe(component.VPConfigration.caption);
  });
});
