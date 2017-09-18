import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(          public navCtrl: NavController, public navParams: NavParams,

private modalCtrl:ModalController,
  private menuCtrl:MenuController,

  private authService:AuthService,
  private loadingCtrl:LoadingController,
 private alertctrl:AlertController
  ) {
  }

onSignUp(form:NgForm){
const loading=this.loadingCtrl.create({content:"Signing you up ..."});
loading.present();
this.authService.signup(form.value.email,form.value.password)
.then(data =>{loading.dismiss()})
.catch(error=>{loading.dismiss();
 const alert=this.alertctrl.create ({ 
   title:"Sign up Failed !!",
   message:error.message,
   buttons:['ok']
 }) 
alert.present()
} ) }


 
 onOpenMenu(){
  this.menuCtrl.open()
  }

}
