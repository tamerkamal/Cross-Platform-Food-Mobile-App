import { AuthService } from './../services/auth';
import { RecipePage } from './../pages/recipe/recipe';
import { Component,ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';

import firebase from "firebase";


import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { SignInPage } from "../pages/sign-in/sign-in";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { RecipesPage } from "../pages/recipes/recipes";
import { HomePage } from "../pages/home/home";
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from "../pages/settings/settings";


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  settingsService: any;

 rootPage:any = HomePage;
  homePage=HomePage;
 
shoppingListPage=ShoppingListPage;
signInPage=SignInPage;
signUpPage=SignUpPage;
recipePage=RecipePage;
recipesPage=RecipesPage;
settingsPage=SettingsPage

isAuthenticated=false;
@ViewChild('nav') nav:NavController

  constructor(platform: Platform,private menuCtrl:MenuController, private authService:AuthService,splashScreen: SplashScreen ) {

  firebase.initializeApp({
    apiKey: "AIzaSyClfLR-oj1lYJOKmA1fU0p325PAZn29gt4",
    authDomain: "ma2adirk.firebaseapp.com",
     databaseURL: "https://ma2adirk.firebaseio.com",
    projectId: "ma2adirk",
    storageBucket: "ma2adirk.appspot.com",
    messagingSenderId: "208925703544"

   });

   firebase.auth().onAuthStateChanged(user =>{

   if(user){
this.isAuthenticated=true;
this.rootPage=HomePage}    
  
  else{

this.isAuthenticated=false;
this.rootPage=HomePage
  }

   }

   )

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     // statusBar.styleDefault();
     // splashScreen.hide();
    });
  }
  onLoad(page:any){

this.nav.setRoot(page);
this.menuCtrl.close();
  }

  onLogout(){
this.authService.logout()
this.menuCtrl.close() 
this.nav.setRoot(this.homePage)




    
  }
}

