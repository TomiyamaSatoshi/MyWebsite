import { Component, OnInit } from '@angular/core';
import { Qualification } from 'src/app/models/qualification';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skillsList: Skill[];
  qualificationsList: Qualification[];

  constructor() { }

  ngOnInit(): void {
    this.getSkills();
    this.getQualifications();
  }

  getSkills() {
    this.skillsService.getSkills().subscribe(
      (skills) => {
        console.log(JSON.stringify(skills));
        this.skillsList = skills;
      }
    );
  }

  getQualifications() {
    this.qualificationsService.getSkills().subscribe(
      (qualifications) => {
        console.log(JSON.stringify(qualifications));
        this.qualificationsList = qualifications;
      }
    );
  }

}
