import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InquireService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { 
  }

  sendMessage(contact: object): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + '/myweb/send-message', contact);
  }
}
