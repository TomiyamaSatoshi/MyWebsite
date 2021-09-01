export class Parsonal {

    parsonalName: String;
	birthday: Date;
	birthdayConvert: String;
	nativePlace: String;
	currentLocation: String;
	hobby: String;
    wellcomeMessageMain: String;
    wellcomeMessageSub: String;
    wellcomeMessageName: String;

    constructor( parsonal: any ){
        this.parsonalName = parsonal.parsonalName;
        this.birthday = parsonal.birthday;
        this.birthdayConvert = parsonal.birthdayConvert
        this.nativePlace = parsonal.nativePlace;
        this.currentLocation = parsonal.currentLocation;
        this.hobby = parsonal.hobby;
        this.wellcomeMessageMain = parsonal.wellcomeMessageMain;
        this.wellcomeMessageSub = parsonal.wellcomeMessageSub;
        this.wellcomeMessageName = parsonal.wellcomeMessageName;
    }
}