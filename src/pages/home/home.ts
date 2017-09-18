import { SettingsService } from './../../services/settings.service';
import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
import { ShoppingListPage } from "../shopping-list/shopping-list";
import { SignInPage } from "../sign-in/sign-in";
import { SignUpPage } from "../sign-up/sign-up";


import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userProfile = null;

  constructor(public navCtrl: NavController,
  private modalCtrl:ModalController,
  private menuCtrl:MenuController,
  private splashScreen:SplashScreen,
  private settingsService:SettingsService

  ) {
    
  }

  



onGoToLogIn(){
   this.navCtrl.push(SignInPage)
}

onGoToSignUp(){
  this.navCtrl.push(SignUpPage)
}

onCreateShoppingList(){
  this.navCtrl.push(ShoppingListPage)
}

onOpenMenu(){
this.menuCtrl.open()
}

getBackground(){

return this.settingsService.isaAltBackground() ? 'background': 'altBackground'

}

  
}



