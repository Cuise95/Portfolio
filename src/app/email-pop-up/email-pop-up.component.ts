import { Component } from '@angular/core';

@Component({
  selector: 'app-email-pop-up',
  templateUrl: './email-pop-up.component.html',
  styleUrls: ['./email-pop-up.component.scss']
})
export class EmailPopUpComponent {
  showPopup: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
