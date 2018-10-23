import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo_image : string = "../assets/img/favicon.png";
  constructor() {
  }

  ngOnInit() {
  }

}
