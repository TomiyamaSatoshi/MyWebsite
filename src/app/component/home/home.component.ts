import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { Parsonal } from 'src/app/models/parsonal';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parsonal: Parsonal;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHome();
  }

  // 経験スキル,保有資格の取得
  getHome() {
    this.homeService.getParsonal().subscribe(
      (parsonal) => {
        console.log("SUCCESS: " + JSON.stringify(parsonal));
        this.parsonal = parsonal;
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
