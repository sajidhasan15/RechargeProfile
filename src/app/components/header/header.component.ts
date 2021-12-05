import { Component, OnInit } from '@angular/core';
import { Header } from './enums/headers.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public header = Header;

  constructor() { }

  ngOnInit(): void {
  }

}
