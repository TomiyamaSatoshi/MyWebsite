export class Parsonal {

    parsonalName: String;
	birthday: Date;
	birthdayConvert: String;
	nativePlace: String;
	currentLocation: String;
	hobby: String;

    constructor( parsonal: any ){
        this.parsonalName = parsonal.parsonalName;
        this.birthday = parsonal.birthday;
        this.birthdayConvert = parsonal.birthdayConvert
        this.nativePlace = parsonal.nativePlace;
        this.currentLocation = parsonal.currentLocation;
        this.hobby = parsonal.hobby;
    }
}