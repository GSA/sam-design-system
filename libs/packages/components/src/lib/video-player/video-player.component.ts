import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class SdsVideoPlayerComponent implements OnInit {


  @Input('videoSource') vidioSource: string;

  constructor() { }

  ngOnInit() {

  }





// Initialize

}
