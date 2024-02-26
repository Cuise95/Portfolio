import { Component, HostListener } from '@angular/core';
import { ScrollService } from 'src/service/scroll.service';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  constructor(public scrollService: ScrollService) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollPosition > 250) {
        this.scrollService.toggleScroll = true;
      } else if (scrollPosition < 10) {
        this.scrollService.toggleScroll = false;
      }
  }

  scrollToTop() { 
    (function smoothscroll(){
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
      }
    })();
  }
}
  

