import { DatabaseOptionsPage } from './../database-options/database-options';
import { AuthService } from './../../services/auth';
//import { SLOptionsPage } from './sl-options/sl-options';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ShoppingListService } from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";
import { ModalController, MenuController, PopoverController, LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  listItems: Ingredient[];

  constructor(private slService: ShoppingListService,
   private modalCtrl:ModalController,
  private menuCtrl:MenuController,
  private popoverCtrl:PopoverController ,
  private authService:AuthService,
  private loadingCtrl:LoadingController,
  private alecrtCtrl:AlertController
  ) {}

  ionViewWillEnter() {
    this.loadItems();
  }

 onOpenMenu(){
 this.menuCtrl.open()
 }

  onAddItem(form: NgForm) {
    this.slService.addItem(form.value.ingredientName, form.value.quantity);
    form.reset();
    this.loadItems();
  }

  onRemove(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }

onShowOptions(event:MouseEvent){
const loading=this.loadingCtrl.create({

content:'Please wait ...'

})
const popover=this.popoverCtrl.create(DatabaseOptionsPage);
popover.present({ev:event});
popover.onDidDismiss( data =>{
if(!data){return}
if(data.action=='store'){
  loading.present();
     this.authService.getActiveUser().getToken()
.then(( token:string)=>{
  this.slService.storeList(token)
  .subscribe(
()=>loading.dismiss(),
error =>{
loading.dismiss()
this.handleError(error.message)

}

  )
})

}
else if(data.action=='load'){
 loading.present()
    this.authService.getActiveUser().getToken()
.then(( token:string)=>{
  this.slService.fetchList(token)
  .subscribe(
(list:Ingredient[])=>{
  loading.dismiss()
  if(list){
this.listItems=list
  }  else{

this.listItems=[]

  }
},
error =>{
loading.dismiss()
this.handleError(error.message)

}

  )
})
  
}


 });
}
  private loadItems() {
    this.listItems = this.slService.getItems();
  }

private handleError(errorMessage:string){

const alert=this.alecrtCtrl.create({

title:"Error!",
message:errorMessage,
buttons:['ok']

});

alert.present()
  
}

}








