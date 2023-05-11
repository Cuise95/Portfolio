import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedCategory = 'All';

  categories = ['All', 'Angular', 'JavaScript'];

  projects = [
    {
      title: 'JOIN',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: 'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      githubUrl: 'https://github.com/paul-block/Join',
      liveTestUrl: 'https://gruppenarbeit-join-455.developerakademie.net/index/index.html',
      imageUrl: 'assets/img/JOINMac2.png',
    },
    {
      title: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco bottles to fight against the killer chicken.',
      githubUrl: 'https://github.com/paul-block/El-Pollo-Loco',
      liveTestUrl: 'https://paul-block.developerakademie.net/El%20Pollo%20Loco/index.html',
      imageUrl: 'assets/img/ElPolloLocoMac2.png',
    }
  ]

  constructor() {}

  ngOnInit() {
    AOS.init({
      duration: 2000
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  showSelectedProjects(project: any) {
    return this.selectedCategory === 'All' || project.technologies.includes(this.selectedCategory);
  }
}
