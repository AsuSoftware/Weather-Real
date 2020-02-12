import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  location: Array<string> = [];

  constructor(private http: HttpClient, private getLocation: LocalStorageService) {
    this.getCondition();
  }

  getCondition() {
    this.location = [];
    if (this.getLocation.getLocalStorage() === 'Roma') {
      this.location.push('Rome');
    } else {
      this.location.push(this.getLocation.getLocalStorage()); // get item location from local
    }
  }

  getData(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`http://api.weatherstack.com/current?access_key=db167e30dc36a85bf02caee7e8dd3e5f&query=${this.location[0]}`);
  }
}
