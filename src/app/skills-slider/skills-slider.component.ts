import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills-slider',
  templateUrl: './skills-slider.component.html',
  styleUrls: ['./skills-slider.component.scss']
})
export class SkillsSliderComponent implements OnInit{

  ngOnInit() {
    AOS.init({
      duration: 2000
    });
  }
  
}