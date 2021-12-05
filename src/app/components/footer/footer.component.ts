import { Component, OnInit } from '@angular/core';
import { Footer } from './enums/footer.enums';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footer = Footer;

  constructor() { }

  ngOnInit(): void {
  }

}
