import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddConteudoPage } from './add-conteudo';

@NgModule({
  declarations: [
    AddConteudoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddConteudoPage),
  ],
})
export class AddConteudoPageModule {}
