import { Component, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { EmailPopUpComponent } from '../email-pop-up/email-pop-up.component';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  emailField: string;
  emailFieldError: boolean = false;
  nameField: string;
  nameFieldError: boolean = false;
  messageField: string;
  messageFieldError: boolean = false;
  @ViewChild(EmailPopUpComponent)
  popup: EmailPopUpComponent;

  ngOnInit() {
    AOS.init();
  }

  sendMail(event){﻿
    event.preventDefault();
    this.validateForm()
    if (this.checkForError()) {
    fetch("https://formspree.io/f/xnqklqbk", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
      if (response.ok) console.log(response.status)
    }).then(() => {
        this.popup.openPopup();
        setTimeout(() => {
          this.popup.closePopup();
        }, 3500);
        this.clearInputs();
      })
      .catch(error => {
        console.error("Es gab einen Fehler beim Senden der E-Mail:", error);
      });
    } else console.log("Es gab einen Fehler beim Senden, überprüfe die Eingabefelder");
  }

  validateForm() {
    this.nameFieldError = (!this.nameField || this.nameField.length === 0) ? true : false;
    this.emailFieldError = (!this.emailField || this.emailField.length != 0 && !this.isValidEmail(this.emailField)) ? true : false;
    this.messageFieldError = (!this.messageField || this.messageField.length === 0) ? true : false;
}

  checkForError() {
    if (!this.nameFieldError && !this.emailFieldError && !this.messageFieldError) return true;
    else return false;
  }

  clearInputs() {
    this.nameField = "";
    this.emailField = "";
    this.messageField = "";
  }

  isValidEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
}




