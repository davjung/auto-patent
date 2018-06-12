var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            PatentDetailsPage,
            BasicPatentDetailPage,
            PaymentPage
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            PatentDetailsPage,
            BasicPatentDetailPage,
            PaymentPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            AuthProvider,
            File,
            FileOpener
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map