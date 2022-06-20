import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SendMoneyComponent} from "src/app/modules/dashboard/components/send-money/send-money.component";
import {switchMap} from "rxjs";
import {NotificationComponent} from "src/app/modules/dashboard/components/notification/notification.component";

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent {
  public categories = [{
    icon: 'bread', title: 'Bakery Staff', name: '11 people'
  }, {
    icon: 'house', title: 'Home Staff', name: '3 people'
  }, {
    icon: 'brick-wall', title: 'Site workers', name: '25 people'
  }];

  constructor(public dialog: MatDialog) {
  }

  public openSendDialog(): void {
    this.dialog.open(SendMoneyComponent, {
      data: {balance: null}, panelClass: 'send-money-dialog'
    })
      .afterClosed()
      .pipe(switchMap((val: number | null) => {
        if (val) {
          return this.dialog.open(NotificationComponent, {
            data: {variant: 'success'}
          }).afterClosed();
        }
        return this.dialog.open(NotificationComponent, {
          data: {variant: 'failure'}
        }).afterClosed();
      }))
      .subscribe();
  }
}
