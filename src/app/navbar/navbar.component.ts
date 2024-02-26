import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMobileMenu = false;
  isLegalNoticePage: boolean;
  isHomePage: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isLegalNoticePage = this.router.url === '/legal-notice';
        this.isHomePage = this.router.url === '/' || this.router.url === '' || this.router.url === '/portfolio';
      }
    });
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  scrollToElement(elementId: string, event: MouseEvent): void {
    event.preventDefault();
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      targetElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  scrollToElementMobile(elementId: string, event: MouseEvent): void {
    this.scrollToElement(elementId, event);
    this.toggleMobileMenu();
  }
}





