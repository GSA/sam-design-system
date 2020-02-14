import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsVideoPlayerComponent } from './video-player.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
// import { VideoPlayerSampleComponent } from '../../../../../component-sample/src/lib/feature/video-player-sample/video-player-sample.component';
// import { InitPxVideo } from './js/px-video.js';
// import { GLOBAL_STRINGS } from './js/strings.js'

// export function InitPxVide() {
//     InitPxVideo({
//       videoId: "sampleVid1",
//       captionsOnDefault: true,
//       seekInterval: 20,
//       videoTitle: 'clips of stand-up comedy',
//       debug: true,
//       width: '640',
//       height: '200',
//       src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
//       poster: ''
//     });
// }


describe('VideoPlayerComponent', () => {
  let component: SdsVideoPlayerComponent;
  let fixture: ComponentFixture<SdsVideoPlayerComponent>;
  // let videoSampComponent: VideoPlayerSampleComponent;
  // let videoSampfixture: ComponentFixture<VideoPlayerSampleComponent>;
  let sourceMp4El: DebugElement;
  let InitPxVideFun: Object;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsVideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsVideoPlayerComponent);
    component = fixture.componentInstance;

    // console.log(component)
    // sourceMp4El = fixture.debugElement.query(By.css('input[type=videoSourceMp4]'));
    fixture.detectChanges();

  });

  // xit('should check the video height', () => {
  //   const videoHeight = spyOn(videoSampComponent, 'videoHeightFun');
  //   // fixture.detectChanges();
  //   // const elementVideo = fixture.debugElement.query(By.css('video'));
  //   const elementVideo = fixture.debugElement.nativeElement.querySelector("video");
  //   expect(elementVideo.getAttribute("height")).toBe(videoHeight);
  // });


  // xit('should VP source Web value ', () => {
  //   component.videoSourceWebm = "http://techslides.com/demos/sample-videos/small.webm";
  //   fixture.detectChanges();
  //   const elementWeb = fixture.debugElement.nativeElement.querySelector("source");
  //   expect(elementWeb.getAttribute("src")).toBe(component.videoSourceWebm);
  // });

  // xit('should VP poster value must be same', () => {
  //   component.videoPoster = "http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg";
  //   fixture.detectChanges();
  //   const elementPoster = fixture.debugElement.nativeElement.querySelector("video");
  //   expect(elementPoster.getAttribute("poster")).toEqual("http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg");
  // });

  // it('Should VP getting same MP4 Source', () => {

  //   component.videoSourceMp4 = "https://media.w3.org/2010/05/sintel/trailer.mp4";
  //   component.ngAfterViewInit();
  //   fixture.detectChanges();
  //   const elementMp4 = fixture.debugElement.nativeElement.querySelector("source");
  //   console.log(elementMp4.getAttribute("src"));
  //   expect(elementMp4.getAttribute("src")).toEqual("https://media.w3.org/2010/05/sintel/trailer.mp4");
  // });

  // it('Check the input value for Height', () => {
  //   component.videoHeight = '360';
  //   fixture.detectChanges();
  //   const element = fixture.debugElement.nativeElement.querySelector("video");
  //   // fixture.detectChanges();
  //   console.log(typeof element.getAttribute("height").toBe('360'));
  //   // console.log(element.getAttribute("height").toEqual('360'));
  //   expect(element.getAttribute("height")).toBe('360');
  // });

  xit('should VP width value must be same', () => {
    // InitPxVideo({
    //   videoId: "sampleVid1",
    //   captionsOnDefault: true,
    //   seekInterval: 20,
    //   videoTitle: 'clips of stand-up comedy',
    //   debug: true,
    //   width: '640',
    //   height: '200'
    // });

    // fixture.detectChanges();
    component.ngAfterViewInit();
    fixture.detectChanges();
    const elementVideo = fixture.debugElement.nativeElement.querySelector("video");
    expect(elementVideo.getAttribute("width")).toEqual(component.videoWidth);
  });

  // xit('should VP Caption value must be same', () => {
  //   component.videoCaption = "";
  //   fixture.detectChanges();
  //   const elementWidth = fixture.debugElement.nativeElement.querySelector("track");
  //   expect(elementWidth.getAttribute("src")).toBe(null);
  // });

  xit('should VP PlayerID is getting same Id', () => {
    component.videoPlayerId = "sampleVid1";
    component.ngAfterViewInit();
    fixture.detectChanges();
    const elementID = fixture.debugElement.query(By.css(".px-video-container"));
    expect(elementID.nativeElement.getAttribute("id")).toEqual(component.videoPlayerId);
  });

  // xit('Check VP Image SRC', () => {
  //   component.imageSrc = "http://images.crestock.com/150000-159999/151031-xs.jpg";
  //   fixture.detectChanges();
  //   const elementID = fixture.debugElement.query(By.css("img"));
  //   expect(elementID.nativeElement.getAttribute("src")).toEqual(component.imageSrc);
  // });

});
