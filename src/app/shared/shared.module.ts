import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule, MenubarModule],
})
export class SharedModule {}
