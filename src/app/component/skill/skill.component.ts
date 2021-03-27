import { Component, OnInit } from '@angular/core';
import { Qualification } from 'src/app/models/qualification';
import { Skill } from 'src/app/models/skill';
import { QualificationsService } from 'src/app/service/qualifications.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skillsList: Skill[];
  qualificationsList: Qualification[];

  constructor(
    private skillsService: SkillsService,
    private qualificationsService: QualificationsService
  ) { }

  ngOnInit(): void {
    this.getSkills();
    this.getQualifications();
  }

  getSkills() {
    this.skillsService.getSkills().subscribe(
      (skills) => {
        console.log("SUCCESS: " + JSON.stringify(skills));
        this.skillsList = skills;
      }
    );
  }

  getQualifications() {
    this.qualificationsService.getQualifications().subscribe(
      (qualifications) => {
        console.log("SUCCESS: " + JSON.stringify(qualifications));
        this.qualificationsList = qualifications;
      }
    );
  }

}
