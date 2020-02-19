import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})

export class RadioButtonComponent implements OnInit {
  question = 'Are you presently delinquent or in default on any Federal debt or any other loan, mortgage, financial obligation, bond, or loan guarantee?';

  possibleAnswers: string;
  answers = ['No', 'Yes'];
  
  answerControl = new FormControl('', [Validators.required]);

  message = "Please make a selection";
  errorMessage: string;
  getErrorMessage() {
    this.errorMessage = this.message;
  }

  constructor() { }

  ngOnInit() { }

}
