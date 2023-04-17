import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMobileMenu = false;

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





  // scrollToHome() {
  //   const targetElement = document.getElementById('home');

  //   if(targetElement) {
  //     targetElement.scrollIntoView({behavior:'smooth'})
  //   }
  // }

  // scrollToAbout() {
  //   const targetElement = document.getElementById('about');

  //   if(targetElement) {
  //     targetElement.scrollIntoView({behavior:'smooth'})
  //   }
  // }

  // scrollToPortfolio() {
  //   const targetElement = document.getElementById('portfolio');

  //   if(targetElement) {
  //     targetElement.scrollIntoView({behavior:'smooth'})
  //   }
  // }
// }