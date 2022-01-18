import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JokeComponent } from '../joke/joke.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, JokeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
