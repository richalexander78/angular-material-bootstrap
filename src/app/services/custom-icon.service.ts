import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
    // this.matIconRegistry.addSvgIcon(
    //   "cool_face",
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/cool2.svg")
    // );


      this.matIconRegistry.addSvgIcon("chat",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/chat.svg"));
      this.matIconRegistry.addSvgIcon("chevron-left",this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/chevron-left.svg"));

  }
}
