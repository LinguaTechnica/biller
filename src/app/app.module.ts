import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { InlineLoginFormComponent } from './inline-login-form/inline-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {Browser} from 'selenium-webdriver';

/**
 * Root Module
 *
 * Every angular app has at least 1 module: AppModule.
 */
@NgModule({
  /**
   * All components created for this app must be declared. That means after you
   * create a new component, you'll need to import it above and declare it below.
   */
  declarations: [
    AppComponent,
    NavigationComponent,
    NotificationsComponent,
    InlineLoginFormComponent,
    HomeComponent
  ],
  /**
   * Provision the app. If your Angular client will use any additional modules
   * those need to be imported here. Examples self-described below.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
