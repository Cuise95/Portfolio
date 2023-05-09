import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-email-pop-up',
  templateUrl: './email-pop-up.component.html',
  styleUrls: ['./email-pop-up.component.scss']
})
export class EmailPopUpComponent implements OnInit{
  showPopup: boolean = false;
  isClosing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
      this.isClosing = true;
      setTimeout(() => {
        this.showPopup = false;
        this.isClosing = false;
      }, 500);
  }
}
