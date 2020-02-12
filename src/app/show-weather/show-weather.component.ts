import { ApiResponse } from './../interface/api-response';
import { ServerService } from '../Service/server.service';
import { LocalStorageService } from '../Service/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {

  time: any = new Date();
  hours = this.time.getHours();
  result: ApiResponse;
  loading = true;

  constructor(public nameFromLocal: LocalStorageService, private information: ServerService, private router: Router) {
  }


  ngOnInit() {
    this.startSearch();
  }

  startSearch() {
    this.information.getCondition();
    this.information.getData()
      .subscribe(data => { this.result = data; console.log(this.result); },
        error => {
          this.router.navigate(['/notFound']);
        });
    setTimeout(() => this.loading = false, 3000);

  }

  getExactNumber() {
    return Math.floor(this.result.current.temperature);
  }

  getIconOfTemp() {
    return this.result.current.temperature > 18;
  }

  deleteData() {
    localStorage.clear();
    this.router.navigate(['/user']);
  }

}

