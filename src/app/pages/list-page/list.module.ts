import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { SuperHeroCardListComponent } from './components/list-container/super-hero-card-list/super-hero-card-list.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { MatCardModule } from '@angular/material/card';
import { FilterSuperherosPipe } from './pipes/superheros.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListContainerComponent, SuperHeroCardListComponent, FilterSuperherosPipe],
  imports: [CommonModule, ListRoutingModule, MatCardModule, NgxPaginationModule, FormsModule],
  exports: [ListContainerComponent, SuperHeroCardListComponent, FilterSuperherosPipe],
})
export class ListModule {}
