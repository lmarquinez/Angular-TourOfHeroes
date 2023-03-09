import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';

@NgModule({
  declarations: [AppComponent, HeroFormComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
