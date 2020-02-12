import { Router } from '@angular/router';
import { LocalStorageService } from '../Service/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private local: LocalStorageService, private router: Router) { }

  name = '';
  location = '';

  ngOnInit() {
    if (localStorage.length > 0) {
      this.router.navigate(['/weather']);
    }
  }

  getInput() {
    if (this.name.length > 0 && this.location.length > 0) {
      this.local.createLocalStorage(this.name, this.location);
      this.router.navigate(['/weather']);
    } else {
      alert('You need to enter Name and your Location');
    }
  }
}
