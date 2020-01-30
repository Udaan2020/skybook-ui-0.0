import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './components/admin/flight/flight.component';
import { FlightResolverService } from './services/admin/flight-resolver.service';
import { CreateFlightComponent } from './components/admin/create-flight/create-flight.component';
import { HomeComponent } from './components/user/home/home.component';



const routes: Routes = [
  {
    path: 'admin/flight/all',
    component : FlightComponent,
    resolve : {flightList : FlightResolverService}
  },
  {
    path: 'admin/flight/create',
    component : CreateFlightComponent
  },

  {
    path : '',
    component : HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
