import { Component } from '@angular/core';
import { ScrollService } from 'src/service/scroll.service';
import { animate, style, transition, trigger } from '@angular/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {

  constructor(public scrollService: ScrollService) {}
  
  scrollToForm() {
    const targetElement = document.getElementById('formComponent');

    if(targetElement) {
      targetElement.scrollIntoView({behavior:'smooth'})
    }
  }
}
