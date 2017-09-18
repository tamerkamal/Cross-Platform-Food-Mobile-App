export class SettingsService {

private altBackground=false;

setBackground(isAlt:boolean){

    this.altBackground=isAlt;

}

isaAltBackground(){

return this.altBackground;

}

}