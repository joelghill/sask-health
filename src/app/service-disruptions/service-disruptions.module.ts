import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { DisruptionsPageComponent } from './components/disruptions-page/disruptions-page.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MapComponent,
    DisruptionsPageComponent
  ],
  exports: [
    MapComponent,
    DisruptionsPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FlexLayoutModule
  ]
})
export class ServiceDisruptionsModule { }
