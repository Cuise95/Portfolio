import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedTechnology = 'All';

  technologies = ['All', 'Angular', 'JavaScript'];

  projects = [
    {
      title: 'Galaxy Odyssey',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      description: 'Galaxy Odyssey is my own version of a jump and run game developed in object-oriented JavaScript. It includes a competetive Firebase leaderboard. Collect enough diamonds to unlock a unique flight mode to gain some extra points and rank as high as possible!',
      githubUrl: 'https://github.com/paul-block/Galaxy-Odyssey',
      liveTestUrl: 'https://paul-block.de/Galaxy-Odyssey/index.html',
      imageUrl: 'assets/img/GalaxyOdysseyMac2.png',
    },
    {
      title: 'Join',
      technologies: ['Angular', 'HTML', 'CSS', 'Firebase'],
      description: 'Experience the simplicity of task management with this Kanban-inspired app. Effortlessly create and sort tasks through drag-and-drop, assign to team members, and categorize for seamless organization.',
      githubUrl: 'https://github.com/paul-block/Join-Angular',
      liveTestUrl: 'https://paul-block.de/Join',
      imageUrl: 'assets/img/JOINMac2.png',
    },
    {
      title: 'DABubble',
      technologies: ['Angular', 'HTML', 'CSS', 'Firebase'],
      description: 'A dynamic web-based communication platform inspired by Slack. DABubble offers real-time messaging and file sharing, designed with a modern and intuitive user interface.',
      githubUrl: 'https://github.com/paul-block/DABubble',
      liveTestUrl: 'https://paul-block.de/DABubble',
      imageUrl: 'assets/img/DABubble_mac.png',
    }
  ];

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 2000
    });
  }

  selectCategory(technology: string) {
    this.selectedTechnology = technology;
  }

  showSelectedProjects(project: any) {
    return this.selectedTechnology === 'All' || project.technologies.includes(this.selectedTechnology);
  }
}
