import { SettingsService } from './../services/settings.service';
import { AuthService } from './../services/auth';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { SignInPage } from './../pages/sign-in/sign-in';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EditRecipePage } from "../pages/edit-recipe/edit-recipe";
import { RecipePage } from "../pages/recipe/recipe";
import { RecipesPage } from "../pages/recipes/recipes";
import { TabsPage } from "../pages/tabs/tabs";
import { ShoppingListService } from "../services/shopping-list";
import { RecipesService } from "../services/recipes";
import { HomePage } from "../pages/home/home";
import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { DatabaseOptionsPage } from "../pages/database-options/database-options";

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SettingsPage } from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditRecipePage,
    RecipePage,
    RecipesPage,
    ShoppingListPage,
    SignInPage,
    SignUpPage,
    DatabaseOptionsPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditRecipePage,
    RecipePage,
    RecipesPage,
    ShoppingListPage,
        SignInPage,
    SignUpPage,
    DatabaseOptionsPage,
    SettingsPage,
        TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    RecipesService,
    AuthService,
    SplashScreen, StatusBar, 
    SettingsService
  ]
})
export class AppModule {
}
