import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})

export class FormFieldComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Please provide email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  
  constructor() { }

  ngOnInit() { }

}
