import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  title:string ="Hello";
  description : string = "content here";
  carousels : [{name:string,image:string}] = [{
    name:'first carousel',
    image: "assets/images/gallery/6.jpg"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
