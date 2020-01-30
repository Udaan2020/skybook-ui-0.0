import { Component, OnInit, Input } from '@angular/core';
import { FlightService } from 'src/app/services/admin/flight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AirportService } from 'src/app/services/admin/airport.service';
import { NgModule }      from '@angular/core';
import {NgModel} from '@angular/forms';
import {Airport} from '../../../models/airport.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  public flights;
  public airports ;
  query: Airport;


  constructor(private airportService : AirportService,
    private router: Router, private route : ActivatedRoute) { 
      this.airportService.getAllAirports().subscribe(
        data=>{this.airports =  data}
      );
    }

  ngOnInit() {
    
    this.flights= this.route.snapshot.data['flightList'];
    
  }

  getAllFlights()
  {
     this.flights.subscribe(
       data => {this.flights = data},
       err => console.error(err),
       () => console.log('flights loaded')
     );
  }

}
