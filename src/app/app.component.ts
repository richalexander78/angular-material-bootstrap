import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
// import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-io';

  // constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  //     this.matIconRegistry.addSvgIcon("chat",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/chat.svg"));
  //     this.matIconRegistry.addSvgIcon("chevron-left",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/chevron-left.svg"));
  //   }

}