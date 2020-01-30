import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModel, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightService } from './services/admin/flight.service';
import { FlightComponent } from './components/admin/flight/flight.component';
import { FlightResolverService } from './services/admin/flight-resolver.service';
import { CreateFlightComponent } from './components/admin/create-flight/create-flight.component';
import { AirlinesService } from './services/admin/airlines.service';
import { AirportService } from './services/admin/airport.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './components/user/home/home.component';
import {NgxLoadingModule,ngxLoadingAnimationTypes} from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    CreateFlightComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DataTablesModule,
    MatFormFieldModule,
    FormsModule,
    NgbModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.rotatingPlane ,
        backdropBackgroundColour: 'rgba(0,0,0,0.8)', 
        backdropBorderRadius: '4px',
        primaryColour: 'rebeccapurple', 
        secondaryColour: 'orange', 
        tertiaryColour: 'white'
    })
  ],
  providers: [FlightService,FlightResolverService,AirlinesService,AirportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
