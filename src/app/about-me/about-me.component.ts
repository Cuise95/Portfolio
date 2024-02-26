import { Component, ElementRef, HostListener, OnInit} from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [

  ]
})
export class AboutMeComponent implements OnInit{

isVisible: boolean = false;

constructor(private el:ElementRef) {}

@HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= componentPosition) {
      this.isVisible = true;
    }
  }

ngOnInit(): void {
  AOS.init();
}


}
