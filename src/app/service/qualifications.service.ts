import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QualificationsService extends BaseService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getQualifications(): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + '/myweb/get-qualifications','')
    .pipe(catchError(this.handleError));
  }
}
