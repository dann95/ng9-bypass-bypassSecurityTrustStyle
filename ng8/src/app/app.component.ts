import { Component } from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  style: SafeStyle;
  constructor(
    private sanitizer: DomSanitizer
  ) {
    const style = `width: 50px; height: 50px; border:1px solid purple;`;
    this.style = this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
