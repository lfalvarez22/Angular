import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailContainerComponent } from './components/detail-container/detail-container.component';

const routes: Routes = [{
  path: '',
  component: DetailContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
