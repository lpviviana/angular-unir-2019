import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CounterComponent } from './counter/counter.component';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { ListCityComponent } from './list-city/list-city.component';
import { CityService } from './services/city.service';
import { CityComponent } from './city/city.component';
import { WeatherService } from './services/weather.service';
import { CurrencyPipe } from './pipe/currency.pipe';
import { StartWithPipe } from './pipe/start-with.pipe';
import { ResaltaDirective } from './directives/resalta.directive';
import { UnlessDirective } from './directives/unless.directive';
import { HttpClientModule } from '@angular/common/http';
import { PlaceComponent } from './places/place/place.component';
import { PlaceListComponent } from './places/place-list/place-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CounterComponent,
    CityComponent,
    ListCityComponent,
    CurrencyPipe,
    StartWithPipe,
    ResaltaDirective,
    UnlessDirective,
    PlaceComponent,
    PlaceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 
     //LoggerService
      {provide:LoggerService,useClass:Logger2Service} ,
      CityService,
      WeatherService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
