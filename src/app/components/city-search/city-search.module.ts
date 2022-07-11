import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySearchComponent } from './city-search.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    CitySearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    CitySearchComponent
  ]
})
export class CitySearchModule { }
