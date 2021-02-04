import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import {  RadioButtonComponent } from './radio-button/radio-button.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridComponent } from './grid/grid.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ApiComponent } from './api/api.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';


const routes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'question-list', component: QuestionListComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'grid', component: GridComponent },
  { path: 'info-block', component: InfoBlockComponent  },
  { path: 'contact-card', component: ContactCardComponent  },
  { path: 'api', component: ApiComponent  },
  { path: 'expansion-panel', component: ExpansionPanelComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TypographyComponent,
  RadioButtonComponent,
  QuestionListComponent,
  FormFieldComponent,
  GridComponent,
  InfoBlockComponent,
  ContactCardComponent,
  ApiComponent,
  ExpansionPanelComponent
];
