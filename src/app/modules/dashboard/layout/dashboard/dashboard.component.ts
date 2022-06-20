import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public options = [{
    label: 'Option 1',
    value: 'Option 1'
  }, {
    label: 'Option 2',
    value: 'Option 2'
  }, {
    label: 'Option 3',
    value: 'Option 3'
  }];

  public mainDetails = [{
    label: 'Available balance', balance: 980768, currency: true
  }, {
    label: 'Total sent payment', balance: 55986, currency: true
  }, {
    label: 'Total received payment', balance: 44346, currency: true
  }, {
    label: 'Data bank balance', balance: 8600, currency: true
  }, {
    label: 'Total no. of transactions', balance: 983, currency: false
  }];
}
