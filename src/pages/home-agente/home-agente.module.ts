import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAgentePage } from './home-agente';

@NgModule({
  declarations: [
    HomeAgentePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAgentePage),
  ],
})
export class HomeAgentePageModule {}
