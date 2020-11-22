import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() {
    const style ={
       height: 300,
       backgroundColor: 'red'
   }
  }

  ngOnInit(): void {
  }

}
