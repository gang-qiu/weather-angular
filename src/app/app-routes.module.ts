import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: WeatherDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutesModule { }
