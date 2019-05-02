import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() {
    
    window.onscroll = function () { changueColorNav() };
    function changueColorNav() {
      let nav = document.getElementById("sideNav");
      let logo = document.getElementById("logo");
      if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
        nav.style.transition = "background-color 500ms linear";
        nav.style.backgroundColor = "rgba(0,0,0,0.6)";

        logo.style.transition = "500ms linear";
        logo.style.top = ".5rem";
        logo.style.width = "9vw";
        logo.style.height = "4vh";

      } else {
        nav.style.backgroundColor = "rgba(0,0,0,0)";
        
        logo.style.transition = "500ms linear";
        logo.style.top = "1rem";
        logo.style.width = "15vw";
        logo.style.height = "6vh";
        // nav.removeAttribute("style")
      }
    }
  }

  ngOnInit() {
  }

  
}
