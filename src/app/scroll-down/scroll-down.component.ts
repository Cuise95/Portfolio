import { Component, HostListener } from '@angular/core';
import { ScrollService } from 'src/service/scroll.service';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss']
})
export class ScrollDownComponent {

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

  scrollDown() {
    const targetElement = document.getElementById('about');
    if(targetElement) {
      targetElement.scrollIntoView({behavior:'smooth'})
    }
  }
}
