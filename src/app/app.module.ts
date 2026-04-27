import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'card', component: CardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [AppComponent, MainComponent, CardComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppModule {}
