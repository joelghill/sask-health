import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { DisruptionsPageComponent } from './components/disruptions-page/disruptions-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisruptionDetailsComponent } from './components/disruption-details/disruption-details.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    MapComponent,
    DisruptionsPageComponent,
    DisruptionDetailsComponent,
  ],
  exports: [MapComponent, DisruptionsPageComponent],
  imports: [
    CommonModule,
    CoreModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FlexLayoutModule,
    MessagesModule,
    MessageModule,
  ],
})
export class ServiceDisruptionsModule {}
