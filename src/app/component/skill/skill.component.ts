import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
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

  isSkills: Boolean = false;
  isQualifications: Boolean = false;

  constructor(
    private skillsService: SkillsService,
    private qualificationsService: QualificationsService
  ) { }

  ngOnInit(): void {
    this.getSkills();
    this.getQualifications();
  }

  // 経験スキルのクリック
  onClickSkills(isSkills) {
    this.isSkills = !isSkills;
    this.isQualifications = false;
  }
  // 保有資格クリック
  onClickQualifications(isQualifications) {
    this.isQualifications = !isQualifications;
    this.isSkills = false;
  }

  // 経験スキルのマウスオーバー
  mouseOverSkills() {
    this.isSkills = true;
    this.isQualifications = false;
  }
  // 保有資格のマウスオーバー
  mouseOverQualifications() {
    this.isQualifications = true;
    this.isSkills = false;
  }

  // 経験スキルの取得
  getSkills() {
    this.skillsService.getSkills().subscribe(
      (skills) => {
        console.log("SUCCESS: " + JSON.stringify(skills));
        this.skillsList = skills;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('ERROR: Not Found.');
        } else if (error instanceof BadRequestError) {
          console.log('ERROR: Bad Request.');
        } else {
          throw error;
        }
      }
    );
  }

  // 保有資格の取得
  getQualifications() {
    this.qualificationsService.getQualifications().subscribe(
      (qualifications) => {
        console.log("SUCCESS: " + JSON.stringify(qualifications));
        this.qualificationsList = qualifications;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('ERROR: Not Found.');
        } else if (error instanceof BadRequestError) {
          console.log('ERROR: Bad Request.');
        } else {
          throw error;
        }
      }
    );
  }
}
