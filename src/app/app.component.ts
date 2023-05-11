import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  isLegalNoticePage: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isLegalNoticePage = this.router.url === '/legal-notice';
      }
    });
  }
}
