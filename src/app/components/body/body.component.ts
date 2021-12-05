import { Component, OnInit } from '@angular/core';
import { Body } from './enums/body.enums';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public body = Body;

  constructor() { }

  ngOnInit(): void {
  }

}
