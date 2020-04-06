import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ToDoCardComponent } from './components/to-do-card/to-do-card.component';
import { CardFieldComponent } from './components/card-field/card-field.component';
import { HeaderComponent } from './components/header/header.component';
import { InputToDoCardComponent } from './components/input-to-do-card/input-to-do-card.component';
import { ChangeBackColorDirective } from './directives/change-back-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    ToDoCardComponent,
    CardFieldComponent,
    HeaderComponent,
    InputToDoCardComponent,
    ChangeBackColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
