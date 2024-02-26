import { Component } from '@angular/core';

@Component({
  selector: 'app-email-pop-up',
  templateUrl: './email-pop-up.component.html',
  styleUrls: ['./email-pop-up.component.scss']
})
export class EmailPopUpComponent {
  showPopup: boolean = false;
  isClosing: boolean = false;

  constructor() { }

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
