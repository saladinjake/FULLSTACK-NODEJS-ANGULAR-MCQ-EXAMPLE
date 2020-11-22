import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    const style ={
       height: 300,
       backgroundColor: 'red'
   }
  }

  ngOnInit(): void {
  }

}
