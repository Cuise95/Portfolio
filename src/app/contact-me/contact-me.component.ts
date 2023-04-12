import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

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
  @ViewChild('sendButton')
  sendButton!: ElementRef;


  show() {
    this.showPopUp = true;
  }

  onFormSubmit(event: Event): void {
    // Verhindert das Standardverhalten (Seiteneffekt) beim Absenden des Formulars
    event.preventDefault();

    // Fügen Sie hier Ihren Code hinzu, um die Formulardaten zu verarbeiten
  }
 
  closePopUp() {
    this.showPopUp = false;
  }

  ngOnInit() {
    AOS.init();
  }

  async sendMail() {
    
    console.log('sending mail', this.myForm)
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;


    // animation anzeigen das grad gesendet wird

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);

    //  senden

    await fetch('https://paul-block.developerakademie.net/send_mail/send_mail.php',
    {
      method:'POST',
      body: formData
    })


    // Text anzeigen, nachricht gesendet.

    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

    // Felder leeren

    nameField.value = "";
    messageField.value = "";

  }

}
