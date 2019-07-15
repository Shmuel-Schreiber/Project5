import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  fName:string;
  lName:string;
  Id:string;
  constructor() { }

  ngOnInit() {
  }

}
