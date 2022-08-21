import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let routChildren = this.activeRoute?.routeConfig?.children?.filter(
      (r) => r.data?.['navLabel']
    );

    if (routChildren) {
      this.items = routChildren?.map((r) => {
        return {
          label: r.data?.['navLabel'],
          icon: r.data?.['icon'],
          routerLink: r.data?.['link'],
          routerLinkActiveOptions: { exact: true },
        } as MenuItem;
      });
    }
  }
}
