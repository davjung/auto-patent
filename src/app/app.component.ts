import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { PatentDetailsPage } from '../pages/patent-details/patent-details';
import { PaymentPage } from '../pages/payment/payment';
import { AuthProvider } from '../providers/auth/auth';
import { BasicPatentDetailPage } from '../pages/basic-patent-detail/basic-patent-detail';
import { Unsubscribe } from '@firebase/util';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild('content') _NAV: NavController
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyAkymEgRb0qwVk8REHi3ypnoPmkD6q8eOM",
      authDomain: "determinator-29910.firebaseapp.com",
      databaseURL: "https://determinator-29910.firebaseio.com",
      projectId: "determinator-29910",
      storageBucket: "determinator-29910.appspot.com",
      messagingSenderId: "942290296826"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else { 
        this.rootPage = HomePage;
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    })
  };

 }


