import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public chatHasMessage = true;
  public hasNotification = true;
  @Output() navToggle = new EventEmitter();

  public toggleNav(): void {
    this.navToggle.emit();
  }
}
