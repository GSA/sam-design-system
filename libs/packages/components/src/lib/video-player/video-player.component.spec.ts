import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsVideoPlayerComponent } from './video-player.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { VideoPlayerModule } from './video-player.module';

describe('VideoPlayerComponent', () => {
  let component: SdsVideoPlayerComponent;
  let fixture: ComponentFixture<SdsVideoPlayerComponent>;
  let sourceMp4El: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsVideoPlayerComponent ],
      imports: [VideoPlayerModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsVideoPlayerComponent);
    component = fixture.componentInstance;
    sourceMp4El = fixture.debugElement.query(By.css('input[type=videoSourceMp4]'));
    fixture.detectChanges();
  });

  it('should create app for title', () =>{
    fixture = TestBed.createComponent(SdsVideoPlayerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Video Player');
  });

  // fit('check the Mp4 video file', () => {
  //   component.videoSourceMp4 = 'videoSourceMp4';
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.querySelector('source').textContent).toBe('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4');
  // });

  // fit('check the Webm video file', () => {
  //   component.videoSourceMp4 = 'videoSourceWebm';
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.querySelector('source').textContent).toBe('http://techslides.com/demos/sample-videos/small.webm');
  // });

  // fit('check the video Width', () => {
  //   component.videoSourceMp4 = 'videoWidth';
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.querySelector('Video').textContent).toBe('6401');
  // });
});
