import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public imageType : string = 'thumbnail';
  public image:string ="assets/images/small/img4.jpg";
  public imageInfo: string ="description"
  constructor() { }

  ngOnInit(): void {
  }

  changeViewType(type="rounded"):void{
    this.imageType = type ;
  }

}
