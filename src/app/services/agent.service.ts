import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientJsonpModule,
} from '@angular/common/http';
import { Advert } from '../models/advert';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  path = 'https://localhost:44393/api/agent';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAdverts(): Observable<Advert[]> {
    return this.httpClient.get<Advert[]>(
      this.path + '?id=' + this.authService.getCurrentUserId()
    );
  }

  getAdvertById(advertId): Observable<Advert> {
    return this.httpClient.get<Advert>(
      this.path + '/advertDetail/?id=' + advertId
    );
  }

  addAdvert(advert: Advert) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };
    console.log(advert);
    this.httpClient
      .post(this.path + '/advertAdd', advert, httpOptions)
      .subscribe();
  }

  updateAdvert(advert: Advert) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };
    this.httpClient
      .post(this.path + '/advertUpdate/' + advert.id, advert, httpOptions)
      .subscribe();
  }

  deleteAdvert(id: number) {
    console.log(id);
    this.httpClient.delete(this.path + '/advertDelete/' + id).subscribe();
  }
}
