import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: 'mulpx',
  loadChildren: () => import('src/app/container/main/main.module').then(m => m.MainModule)
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'mulpx'
}];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
