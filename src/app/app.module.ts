import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyC-R20FLP6Vb7EMRyXuIJcAO26Ulip2HSs',
  authDomain: 'camtalkio-31a0b.firebaseapp.com',
  databaseURL: 'https://camtalkio-31a0b.firebaseio.com',
  storageBucket: 'camtalkio-31a0b.appspot.com',
  messagingSenderId: '1084415867346'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
