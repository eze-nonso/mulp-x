import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "src/app/container/main/main.component";

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: 'dashboard',
    loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
