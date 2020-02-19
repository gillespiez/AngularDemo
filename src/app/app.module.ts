import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

// import { HomeComponent } from './home';
// import { MainPageComponent } from './main-page/main-page.component';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  declarations: [
    AppComponent,
    // HomeComponent,
    // MainPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
