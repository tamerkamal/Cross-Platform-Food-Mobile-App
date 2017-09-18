import { SettingsService } from './../../services/settings.service';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController, Toggle } from 'ionic-angular';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private modalCtrl:ModalController,
  private menuCtrl:MenuController,
  private settingsService:SettingsService,
  
  ) {}


onOpenMenu(){
 this.menuCtrl.open()
 }

onToggle(toggle:Toggle){
this.settingsService.setBackground(toggle.checked)

}

checkAltBackground(){

return this.settingsService.isaAltBackground()

}

}
