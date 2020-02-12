import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  createLocalStorage(nome: string, city: string) {
    localStorage.setItem('name', nome);
    localStorage.setItem('location', city);
    // sa bag aia cu server sa caute locatia
  }

  verifyItemInLocal() {
    return localStorage.length > 0;
  }

  getLocalStorage() {
    return localStorage.getItem('location');
  }

  getName() {
    return localStorage.getItem('name');
  }
}
