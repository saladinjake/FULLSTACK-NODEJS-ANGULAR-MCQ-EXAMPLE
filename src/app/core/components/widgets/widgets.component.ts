import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widget: string = 'nil';
  constructor() { }

  ngOnInit(): void {
  }

  setWidgetView( widgetView: string){
     this.widget = widgetView
  }



}
