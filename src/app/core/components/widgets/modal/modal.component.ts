import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalTypes: [{
    default:string,
  }] = [{default:''}] //,'bs-example-modal-lg','bs-example-modal-lg'
  constructor() { }

  ngOnInit(): void {
  }

}
