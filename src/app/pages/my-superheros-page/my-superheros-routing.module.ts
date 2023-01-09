import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySuperHerosContainerComponent } from './components/my-super-heros-container/my-super-heros-container.component';

const routes: Routes = [{
  path: '',
  component: MySuperHerosContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySuperHerosRoutingModule { }
