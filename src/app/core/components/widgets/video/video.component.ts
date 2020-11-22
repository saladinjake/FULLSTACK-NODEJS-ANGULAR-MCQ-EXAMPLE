import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  title:string ="Video Title";
  description:string = "Video story";
  source:string = "http://player.vimeo.com/video/69988283?color=5fbeaa&amp;title=0&amp;byline=0&amp;portrait=0"
  constructor() { }

  ngOnInit(): void {
  }

}
