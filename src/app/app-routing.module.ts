import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'cards', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CardComponent, TypographyComponent]
