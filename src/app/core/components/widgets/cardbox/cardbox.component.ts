import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardbox',
  templateUrl: './cardbox.component.html',
  styleUrls: ['./cardbox.component.css']
})
export class CardboxComponent implements OnInit {
  title:string ="Hello";
  content : string = "content here"
  constructor() { }

  ngOnInit(): void {
  }

}
