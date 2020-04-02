import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ToDoCardComponent } from './components/to-do-card/to-do-card.component';
import { CardFieldComponent } from './components/card-field/card-field.component';
import { HeaderComponent } from './components/header/header.component';
import {FadeOutDirective} from './directives/fade-out.directive';
import { InputToDoCardComponent } from './components/input-to-do-card/input-to-do-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoCardComponent,
    CardFieldComponent,
    HeaderComponent,
    FadeOutDirective,
    InputToDoCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
