import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  possibleAnswers: string;
  answers: string[] = ['No', 'Yes'];
  answerControl = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.answerControl.invalid) {
      this.answerControl.markAsTouched();
      return;
    }
  }

  constructor() { }

  ngOnInit() { }

}
