import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Space, SpacesService } from './shared';

import { AppComponent } from './app.component';
import { SpacesListComponent } from './spaces-list/spaces-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SpacesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
