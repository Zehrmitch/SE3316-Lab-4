import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DisplayAllSubjectsComponent } from './display-all-subjects/display-all-subjects.component';
import { FormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search/course-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAllSubjectsComponent,
    CourseSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
