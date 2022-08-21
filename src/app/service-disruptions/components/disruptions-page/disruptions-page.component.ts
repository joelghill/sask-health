import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-disruptions-page',
  templateUrl: './disruptions-page.component.html',
  styleUrls: ['./disruptions-page.component.scss'],
})
export class DisruptionsPageComponent implements OnInit {
  messages?: Message[];
  constructor() {}

  ngOnInit(): void {
    this.messages = [
      {
        severity: 'warn',
        summary: 'Warning',
        detail:
          'The Saskatchewan Health Authority only reports service disruptions longer than 7 days. Data provided here may be incomplete.',
      },
    ];
  }
}
