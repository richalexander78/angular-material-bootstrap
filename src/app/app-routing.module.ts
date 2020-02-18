import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import {  RadioButtonComponent } from './radio-button/radio-button.component';

const routes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'radio-button', component: RadioButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TypographyComponent,RadioButtonComponent]
