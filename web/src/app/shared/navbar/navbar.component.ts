import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggleClass = 'ft-maximize';
  
  constructor() { }

  ngOnInit() {
  }

  ToggleClass() {
    if (this.toggleClass === 'ft-maximize') {
        this.toggleClass = 'ft-minimize';
    }
    else
        this.toggleClass = 'ft-maximize'
}

}
