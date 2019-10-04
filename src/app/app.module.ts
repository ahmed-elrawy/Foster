import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from "@angular/material";
import { ProjectsComponent } from './projects/projects.component'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectsComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
