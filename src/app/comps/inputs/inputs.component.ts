import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Output() fName:EventEmitter<string> = new EventEmitter<string>()
  @Output() lName:EventEmitter<string> = new EventEmitter<string>()
  @Output() Id:EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

}