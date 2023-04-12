import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
  showComponent = false; 

  selectedCategory = 'All';
  isActive = false;

  projects = [
    {
    title: 'JOIN',
    technology: 'Angular'
  },
  {
    title: 'El Pollo Loco',
    technology: 'JavaScript'
  }
  ]   


  constructor() {}

  ngOnInit() {
    this.showComponent = true;
    AOS.init({
      duration: 2000
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

 // shows only selected projects
 showSelectedProjects(project: any) { { 
  return this.selectedCategory === 'All' || this.selectedCategory === project.technology
  }
 }
}
