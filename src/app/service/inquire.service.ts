import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InquireService extends BaseService{

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { 
    super();
  }

  sendMessage(contact: object): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + '/myweb/send-message', contact)
    .pipe(catchError(this.handleError));
  }
}
