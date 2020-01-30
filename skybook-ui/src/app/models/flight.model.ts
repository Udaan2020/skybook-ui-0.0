import { Airport } from './airport.model';
import { Airlines } from './airlines.model';

export class Flight
{
    flightNo : string;
    model:string;
    economySeat:string;
    businessSeat:string;
    cabinLuggage:string;
    checkInLuggage:string;
    sourceAirport : Airport;
    destinationAirport : Airport;
    airlines: Airlines;
}