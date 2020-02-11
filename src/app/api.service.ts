import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Talk } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) {

  }

  getTranscript(id: string) {
    return this.http.get<Talk[]>(`${environment.apiUrl}${id}.json`);
  }


}
