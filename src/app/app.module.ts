import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PatentDetailsPage } from '../pages/patent-details/patent-details';
import { HomePage } from '../pages/home/home';
import { PaymentPage } from '../pages/payment/payment';
import { AuthProvider } from '../providers/auth/auth';
import { BasicPatentDetailPage } from '../pages/basic-patent-detail/basic-patent-detail';
import { PastPatentSearchesPage } from '../pages/past-patent-searches/past-patent-searches';
import { CalculationsPage } from '../pages/calculations/calculations';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { PatentService } from '../providers/patent-service';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from './../providers/firebase/firebase';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PatentDetailsPage,
    BasicPatentDetailPage,
    PaymentPage,
    PastPatentSearchesPage,
    CalculationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PatentDetailsPage,
    BasicPatentDetailPage,
    PaymentPage,
    PastPatentSearchesPage,
    CalculationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    File,
    FileOpener,
    // FirebaseProvider
    PatentService
  ]
})
export class AppModule {}
