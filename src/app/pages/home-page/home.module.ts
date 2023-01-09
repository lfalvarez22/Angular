import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SuperHeroHomeComponent } from './components/home-container/super-hero-home/super-hero-home.component';
import { SuperHeroRequisitesHomeComponent } from './components/home-container/super-hero-requisites-home/super-hero-requisites-home.component';
import { SuperHeroFunctionalityHomeComponent } from './components/home-container/super-hero-functionality-home/super-hero-functionality-home.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    SuperHeroHomeComponent,
    SuperHeroRequisitesHomeComponent,
    SuperHeroFunctionalityHomeComponent
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [
    HomeContainerComponent,
    SuperHeroHomeComponent,
    SuperHeroRequisitesHomeComponent,
    SuperHeroFunctionalityHomeComponent
  ],
})
export class HomeModule {}
