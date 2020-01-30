import { Component, OnInit } from '@angular/core';
import { AirportService } from 'src/app/services/admin/airport.service';
import { AirlinesService } from 'src/app/services/admin/airlines.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FlightService } from 'src/app/services/admin/flight.service';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';
import { Router } from '@angular/router';
import { Airport } from 'src/app/models/airport.model';
import { Airlines } from 'src/app/models/airlines.model';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  public airports ;
  public airlines ;
  public validMessage : string = '';
  flight: Flight = new Flight();
  submitted = false;
  models: string[] =[
    'Airbus A220','Airbus A300', 'Airbus A350', 'Boeing 737',
    'Boeing 727', 'Boeing 787', 'Boeing Model 221', 'IAR-821',
    'RotorWay Exec', 'Ruschmeyer R 90'

  ]

  flightform : FormGroup;

  constructor(private airportService : AirportService,
    private airlineService : AirlinesService,
    private flightService : FlightService,private router : Router) { }


  ngOnInit() {

    this.airportService.getAllAirports().subscribe(
      data=> {this.airports = data}
    );

    this.airlineService.getAllAirlines().subscribe(
      data=> {this.airlines = data}
    );
  }

  newFlight(): void {
    this.submitted = false;
    this.flight = new Flight();
  }

  gotoList() {
    this.router.navigate(['/admin/flight/all']);
  }

  onSubmit() {
    this.submitted = true;
    this.createFlight();    
  }

  createFlight()
  {
    this.flightService.createFlight(this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight = new Flight();
    this.gotoList();
  }

}
