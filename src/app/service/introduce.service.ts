import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IntroduceService extends BaseService{

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getIntroduction(): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + '/myweb/get-introduction','')
    .pipe(catchError(this.handleError));
  }
}
