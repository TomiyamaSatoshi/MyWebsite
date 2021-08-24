export class CareerHistory {

    careerHistoryId: number;
	career: String;
	careerFromDate: Date;
	careerToDate: Date;
	careerFromDateConvert: String;
	careerToDateConvert: String;

    constructor( careerHistory: any ){
        this.careerHistoryId = careerHistory.careerHistoryId;
        this.career = careerHistory.career;
        this.careerFromDate = careerHistory.careerFromDate;
        this.careerFromDateConvert = careerHistory.careerFromDateConvert;
        this.careerToDate = careerHistory.careerToDate;
        this.careerToDateConvert = careerHistory.careerToDateConvert;
    }
}