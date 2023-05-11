import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { EmailPopUpComponent } from '../email-pop-up/email-pop-up.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  showPopUp = false;

  @ViewChild('myForm')
  myForm!: ElementRef;
  @ViewChild('nameField')
  nameField!: ElementRef;
  @ViewChild('messageField')
  messageField!: ElementRef;
  @ViewChild('emailField')
  emailField!: ElementRef;
  @ViewChild('sendButton')
  sendButton!: ElementRef;
  @ViewChild(EmailPopUpComponent)
  popup!: EmailPopUpComponent;

  show() {
    this.showPopUp = true;
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
  }
 
  closePopUp() {
    this.showPopUp = false;
  }

  ngOnInit() {
    AOS.init();
  }

  async sendMail() {
    if (this.myForm.nativeElement.checkValidity()) {
      let nameField = this.nameField.nativeElement;
      let messageField = this.messageField.nativeElement;
      let emailField = this.emailField.nativeElement;
      let sendButton = this.sendButton.nativeElement;
      nameField.disabled = true;
      emailField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;

      let formData = new FormData();
      formData.append('name', nameField.value);
      formData.append('email', emailField.value);
      formData.append('message', messageField.value);

      await fetch('https://paul-block.developerakademie.net/send_mail/send_mail.php',
      {
        method:'POST',
        body: formData
      })

      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;

      nameField.value = "";
      emailField.value = "";
      messageField.value = "";

      this.popup.openPopup();

  
      setTimeout(() => {
        this.popup.closePopup();
      }, 3500);
    }
  }

}
