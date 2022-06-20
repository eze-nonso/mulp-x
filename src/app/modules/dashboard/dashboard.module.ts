import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {AngularMaterialModule} from "src/app/shared/angular-material/angular-material.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {FlexLayoutModule} from "@angular/flex-layout";
import {QuickLinksComponent} from './components/quick-links/quick-links.component';
import {RecentActivitiesComponent} from './components/recent-activities/recent-activities.component';
import {OverviewComponent} from './components/overview/overview.component';
import {MatDividerModule} from "@angular/material/divider";
import {HighchartsChartModule} from "highcharts-angular";
import {FormsModule} from "@angular/forms";
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { NotificationComponent } from './components/notification/notification.component';


@NgModule({
  declarations: [
    DashboardComponent,
    QuickLinksComponent,
    RecentActivitiesComponent,
    OverviewComponent,
    SendMoneyComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    NgSelectModule,
    FlexLayoutModule,
    MatDividerModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [DatePipe]
})
export class DashboardModule {
}
