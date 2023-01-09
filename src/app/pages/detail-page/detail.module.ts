import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailContainerComponent } from './components/detail-container/detail-container.component';
import { MatCardModule } from '@angular/material/card';
import { SuperHeroDetailGlobalComponent } from './components/detail-container/super-hero-detail-global/super-hero-detail-global.component';
import { SuperHeroDetailComicsComponent } from './components/detail-container/super-hero-detail-comics/super-hero-detail-comics.component';
import { SuperHeroDetailSeriesComponent } from './components/detail-container/super-hero-detail-series/super-hero-detail-series.component';
import { SuperHeroDetailStoriesComponent } from './components/detail-container/super-hero-detail-stories/super-hero-detail-stories.component';

@NgModule({
  declarations: [DetailContainerComponent, SuperHeroDetailGlobalComponent, SuperHeroDetailComicsComponent, SuperHeroDetailSeriesComponent, SuperHeroDetailStoriesComponent],
  imports: [CommonModule, DetailRoutingModule, MatCardModule],
  exports: [DetailContainerComponent, SuperHeroDetailGlobalComponent, SuperHeroDetailComicsComponent, SuperHeroDetailSeriesComponent, SuperHeroDetailStoriesComponent],
})
export class DetailModule {}
