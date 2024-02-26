import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  isLegalNoticePage: boolean = false;
  isLoading = true;
  backgroundImage = 'assets/img/backgroundPortfolio.png';

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isLegalNoticePage = this.router.url === '/legal-notice';
      }
    });
  }

  ngOnInit() {
    const img = new Image();
    img.src = this.backgroundImage;
    img.onload = () => {
      this.isLoading = false;
      this.cdRef.detectChanges();
    };
  }
}
