import {Component} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  public navLinks = [{
    name: 'Dashboard', link: 'dashboard', icon: 'speedometer', isSvg: true
  }, {
    name: 'Wallet Balance', link: 'wallet-balance', icon: 'weigh', isSvg: true
  }, {
    name: 'Transactions', link: 'transactions', icon: 'turing', isSvg: true
  }, {
    name: 'Data Bank', link: 'data-bank', icon: 'data-bank', isSvg: true
  }, {
    name: 'Chat Support', link: 'chat-support', icon: 'chat-support', isSvg: true
  }, {
    name: 'Settings', link: 'settings', icon: 'settings', isSvg: true
  }];

}
