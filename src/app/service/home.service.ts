import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService{

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getParsonal(): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + '/myweb/get-home-contents','')
    .pipe(catchError(this.handleError));
  }
}