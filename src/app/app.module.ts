import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';


const firebaseConfig = {
  apiKey: `AIzaSyC3xoUYBxZjXBxfkINDEQoNHqrR5DK8PPQ`,
  authDomain: `receiptcheck-e734c.firebaseapp.com`,
  databaseURL: `https://receiptcheck-e734c.firebaseio.com`,
  projectId: `receiptcheck-e734c`,
  storageBucket: `receiptcheck-e734c.appspot.com`,
  messagingSenderId: `14382616660`,
  appId: `1:14382616660:web:55aadff7b856335c899dc1`
};



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

