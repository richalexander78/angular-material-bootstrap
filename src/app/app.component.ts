import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-io';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("number-circle",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/number-circle.svg"));
      this.matIconRegistry.addSvgIcon("chat",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/chat.svg"));
      this.matIconRegistry.addSvgIcon("chevron-left",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/chevron-left.svg"));
      this.matIconRegistry.addSvgIcon("chevron-right",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/chevron-right.svg"));
      this.matIconRegistry.addSvgIcon("angle-left",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/angle-left.svg"));
      this.matIconRegistry.addSvgIcon("angle-right",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/angle-right.svg"));
      this.matIconRegistry.addSvgIcon("info-circle",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/info-circle.svg"));
      this.matIconRegistry.addSvgIcon("bars",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/bars.svg"));
      this.matIconRegistry.addSvgIcon("plus",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/plus.svg"));
      this.matIconRegistry.addSvgIcon("money-check-alt-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/money-check-alt-light.svg"));
      this.matIconRegistry.addSvgIcon("home-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/home-light.svg"));
      this.matIconRegistry.addSvgIcon("hand-holding-usd-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/hand-holding-usd-light.svg"));
      this.matIconRegistry.addSvgIcon("keyboard-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/keyboard-light.svg"));
      this.matIconRegistry.addSvgIcon("sitemap-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/sitemap-light.svg"));
      this.matIconRegistry.addSvgIcon("books-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/books-light.svg"));
      this.matIconRegistry.addSvgIcon("comments-alt-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/comments-alt-light.svg"));
      this.matIconRegistry.addSvgIcon("calculator-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/calculator-light.svg"));
      this.matIconRegistry.addSvgIcon("percent-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/percent-light.svg"));
      this.matIconRegistry.addSvgIcon("tools-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tools-light.svg"));
      this.matIconRegistry.addSvgIcon("adjust",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/adjust.svg"));
      this.matIconRegistry.addSvgIcon("exclamation-triangle",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/exclamation-triangle.svg"));
      this.matIconRegistry.addSvgIcon("file-signature",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/file-signature.svg"));
    }

}