import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailPopUpComponent } from './email-pop-up/email-pop-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { SkillsSliderComponent } from './skills-slider/skills-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponentComponent,
    PortfolioComponent,
    AboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    EmailPopUpComponent,
    LegalNoticeComponent,
    ScrollToTopComponent,
    ScrollDownComponent,
    SkillsSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
