import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";


// https://github.com/weihungchin/angular-material-custom-svg


@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
    this.matIconRegistry.addSvgIcon(
      "chevron-left",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/chevron-left.svg")
    );
  }
}
