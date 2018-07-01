import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddQuestaoPage } from './add-questao';

@NgModule({
  declarations: [
    AddQuestaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddQuestaoPage),
  ],
})
export class AddQuestaoPageModule {}
