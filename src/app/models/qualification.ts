export class Qualification {

    qualificationId: number;
	qualificationName: string;
	qualificationGetDate: Date;

    constructor(qualification: any = {}) {
        this.qualificationId = qualification.qualificationId || 0;
        this.qualificationName = qualification.qualificationName || '';
        this.qualificationGetDate = qualification || new Date(2000, 1, 1);
    }
}