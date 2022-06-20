import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'dreampulze';
  matIcons = [
    'search', 'speedometer', 'weigh', 'turing', 'data-bank',
    'chat-support', 'settings', 'bell', 'send', 'max-speed',
    'dial', 'bread', 'house', 'brick-wall', 'salary'
  ];

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    this.matIcons.forEach(icon => {
      this._matIconRegistry.addSvgIcon(
        icon,
        this._domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
      );
    });
  }
}
