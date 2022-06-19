import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MainComponent} from "src/app/container/main/main.component";
import {SideBarComponent} from "src/app/container/main/components/side-bar/side-bar.component";
import {MainRoutingModule} from "src/app/container/main/main-routing.module";
import {HeaderComponent} from "src/app/container/main/components/header/header.component";

@NgModule({
  declarations: [
    MainComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
