import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {
    AOS.init( {
      duration: 1000
    });
  }

  scrollToSkills() {
    const targetElement = document.getElementById('skillComponent');

    if(targetElement) {
      targetElement.scrollIntoView({behavior:'smooth'})
    }
  }

  scrollToForm() {
    const targetElement = document.getElementById('formComponent');

    if(targetElement) {
      targetElement.scrollIntoView({behavior:'smooth'})
    }
  }
}
