import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DadosPage } from '../pages/dados/dados';
import { ConfigPage } from '../pages/config/config';
import { HistoricoPage } from '../pages/historico/historico';
import { InfoPage } from '../pages/info/info';
import { LoginPage } from '../pages/login/login';
import { ProximaPage } from '../pages/proxima/proxima';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { HomeAgentePage } from '../pages/home-agente/home-agente';
import { VacinaPage } from '../pages/vacina/vacina';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DadosPage,
    ConfigPage,
    HistoricoPage,
    InfoPage,
    LoginPage,
    ProximaPage,
    QrcodePage,
    HomeAgentePage,
    VacinaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DadosPage,
    ConfigPage,
    HistoricoPage,
    InfoPage,
    LoginPage,
    ProximaPage,
    QrcodePage,
    HomeAgentePage,
    VacinaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
