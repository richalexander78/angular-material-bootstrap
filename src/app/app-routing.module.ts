import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import {  RadioButtonComponent } from './radio-button/radio-button.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'question-list', component: QuestionListComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'form-field', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TypographyComponent,
  RadioButtonComponent,
  QuestionListComponent,
  FormFieldComponent,
  GridComponent
];
