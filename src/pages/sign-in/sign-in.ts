

import { Component } from "@angular/core";
import { NavController, NavParams, ModalController, MenuController, LoadingController, AlertController } from "ionic-angular";
import { AuthService } from "../../services/auth";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor( 

 public navCtrl: NavController, public navParams: NavParams,
private modalCtrl:ModalController,
  private menuCtrl:MenuController,

  private authService:AuthService,
  private loadingCtrl:LoadingController,
 private alertctrl:AlertController
  ) {
  }

onSignIn(form:NgForm){
const loading=this.loadingCtrl.create({content:"Signing in ..."});
loading.present();
this.authService.signin(form.value.email,form.value.password)
.then(data =>loading.dismiss())  
.catch(error=>{loading.dismiss();
 const alert=this.alertctrl.create ({ 
   title:"Sign in Failed !!",
   message:error.message,
   buttons:['ok']
 }) 
alert.present()
} ) }


 
 onOpenMenu(){
  this.menuCtrl.open()
  }

}
