import { Component, OnInit } from '@angular/core';
import uuidv4 from 'uuid/dist/v4';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './roomindex.component.html',
  styleUrls: ['./roomindex.component.scss']
})
export class  RoomIndexComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createRoom() {
    console.log('createRoom');
    this.router.navigate([`chat/${uuidv4()}`]);
  }

}
