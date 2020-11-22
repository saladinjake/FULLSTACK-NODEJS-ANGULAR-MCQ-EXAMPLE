import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  public slides: [{
    image:string,
    title:string,
    description: string
  }] = [{
    image:"assets/images/big/img2.jpg",
    title: "Title",
    description: "description"

  }]
  constructor() { }

  ngOnInit(): void {
  }

}
