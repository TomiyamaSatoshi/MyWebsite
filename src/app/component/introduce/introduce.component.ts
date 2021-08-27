import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { CareerHistory } from 'src/app/models/career_history';
import { Parsonal } from 'src/app/models/parsonal';
import { IntroduceService } from 'src/app/service/introduce.service';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  parsonal: Parsonal;
  careerHistoryList: CareerHistory[];

  constructor(
    private introduceService: IntroduceService,
  ) { }

  ngOnInit(): void {
    this.getIntroduction();
  }

  // 経験スキル,保有資格の取得
  getIntroduction() {
    this.introduceService.getIntroduction().subscribe(
      (introduce) => {
        console.log("SUCCESS: " + JSON.stringify(introduce));
        this.parsonal = introduce.parsonalEntity;
        this.careerHistoryList = introduce.careerHistoryEntity;
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
