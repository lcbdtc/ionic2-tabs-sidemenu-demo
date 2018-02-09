import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from "@ionic-native/camera";
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Page1Page} from "../pages/page1/page1";
import {Page2Page} from "../pages/page2/page2";
import {PersonPage} from "../pages/person/person";
import {HttpService} from "../providers/HttpService";
import {NativeService} from "../providers/NativeService";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PersonPage,
    HomePage,
    TabsPage,
    Page1Page,
    Page2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PersonPage,
    HomePage,
    TabsPage,
    Page1Page,
    Page2Page
  ],
  providers: [
    Camera,
    StatusBar,
    HttpService,
    NativeService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
