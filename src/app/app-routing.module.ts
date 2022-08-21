import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PrimeIcons } from 'primeng/api';
import { DisruptionsPageComponent } from './service-disruptions/components/disruptions-page/disruptions-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/map',
        pathMatch: 'full',
      },
      {
        path: 'map',
        component: DisruptionsPageComponent,
        data: {
          navLabel: 'Map',
          icon: PrimeIcons.MAP,
          link: './map',
        },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          navLabel: 'About',
          icon: PrimeIcons.INFO_CIRCLE,
          link: './about',
        },
      },
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
