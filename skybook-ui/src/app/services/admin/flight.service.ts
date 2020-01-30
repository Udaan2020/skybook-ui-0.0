import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' :  'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = 'http://localhost:8080/server/api/flight';

  constructor(private http:HttpClient) { }

  getAllFlights()
  {

      return this.http.get('/server/api/flight/list');
  }

  getAllFlight(src:string, dest : string)
  {
      return this.http.get('/server/api/flight/src/dest')
  }
  
  getFlightById(id : string)
  {
    return this.http.get('server/api/flight/' + id);
  }

  createFlight(flight : Object):Observable<Object>
  {
     return this.http.post('/server/api/flight/create', flight, httpOptions);
  }
  
}
