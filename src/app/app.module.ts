import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ServiceDisruptionsModule } from './service-disruptions/service-disruptions.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'primeng/api';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceDisruptionsModule,
    FlexLayoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
