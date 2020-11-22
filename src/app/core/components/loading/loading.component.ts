import { Component, OnInit } from '@angular/core';
// import { LoadingEffect } from '../../js/loading';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading:boolean = true;
  constructor() { }


  ngOnInit(): void {
    setTimeout(()=>{
      this.loading = false
    },800)
     // new LoadingEffect().attachEvents();
  }


}
