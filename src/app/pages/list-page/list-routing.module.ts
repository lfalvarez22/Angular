import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from './components/list-container/list-container.component';

const routes: Routes = [{
  path: '',
  component: ListContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
