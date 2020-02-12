import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'weather', component: ShowWeatherComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
