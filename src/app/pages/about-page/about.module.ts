import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AboutContainerComponent } from './components/about-container/about-container.component';
import { SuperHeroAboutComponent } from './components/about-container/super-hero-about/super-hero-about.component';

@NgModule({
  declarations: [AboutContainerComponent, SuperHeroAboutComponent],
  imports: [CommonModule, AboutRoutingModule, MatCardModule],
  exports: [AboutContainerComponent, SuperHeroAboutComponent],
})
export class AboutModule {}
