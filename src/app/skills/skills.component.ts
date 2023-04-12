import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public imgPaths = ['AngularLogo', 'TSLogo', 'JSLogo', 'HTMLLogo', 'FirebaseLogo','GitLogo', 'CSSLogo','RestAPILogo','ScrumLogo','MaterialDesignLogo'];

  ngOnInit() {
    AOS.init({
      duration: 2000
    });
  }
}
