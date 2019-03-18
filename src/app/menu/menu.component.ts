import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  slideBar = false;
  constructor() { 
  }

  ngOnInit() {
  }
  triggerSlideBar(){
    this.slideBar = !this.slideBar;
  }

}
