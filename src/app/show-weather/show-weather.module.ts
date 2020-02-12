import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowWeatherComponent } from './show-weather.component';



@NgModule({
  declarations: [ShowWeatherComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [ShowWeatherComponent],
  bootstrap: []
})
export class ShowWeatherModule { }
