import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navegar(navegar: string){
      let div = document.getElementById(navegar);
      div.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
