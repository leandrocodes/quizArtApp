import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { GameViewPage } from '../pages/game-view/game-view';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ResultsPage } from '../pages/results/results';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuizProvider } from '../providers/quiz/quiz';
import { DataProvider } from '../providers/data/data';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service';
import {  AngularFireDatabaseModule } from 'angularfire2/database';
import { RegisterPage } from '../pages/register/register';
import { AddConteudoPage } from '../pages/add-conteudo/add-conteudo';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    GameViewPage,
    FeedbackPage,
    ResultsPage,
    LoginPage,
    RegisterPage,
    AddConteudoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      scrollPadding: false,
      scrollAssist: false
    }),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxErrorsModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    GameViewPage,
    ResultsPage,
    LoginPage,
    RegisterPage,
    FeedbackPage,
    AddConteudoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuizProvider,
    DataProvider,
    AuthService
  ]
})
export class AppModule {}
