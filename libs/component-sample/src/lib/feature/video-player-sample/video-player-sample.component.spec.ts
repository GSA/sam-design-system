import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerSampleComponent } from './video-player-sample.component';

describe('VideoPlayerSampleComponent', () => {
  let component: VideoPlayerSampleComponent;
  let fixture: ComponentFixture<VideoPlayerSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
