import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SkillsSliderComponent } from './skills-slider/skills-slider.component';

const routes: Routes = [
  {path: 'skills', component: SkillsSliderComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'home', component: HomeComponentComponent},
  {path: 'contact', component: ContactMeComponent},
  {path: 'legal-notice', component: LegalNoticeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', 
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
