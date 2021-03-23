export class Skill {

    skillId: number;
	skillType: number;
	skillName: string;

    constructor(skill: any = {}) {
        this.skillId = skill.skillId || 0;
        this.skillType = skill.skillType || 0;
        this.skillName = skill.skillName || '';
    }
}