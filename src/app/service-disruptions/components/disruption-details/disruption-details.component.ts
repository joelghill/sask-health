import { Component, Input, OnInit } from '@angular/core';
import { ServiceDisruption } from 'src/app/core/models/service-disruption';

@Component({
  selector: 'app-disruption-details',
  templateUrl: './disruption-details.component.html',
  styleUrls: ['./disruption-details.component.scss'],
})
export class DisruptionDetailsComponent implements OnInit {
  @Input() details?: ServiceDisruption;
  constructor() {}

  ngOnInit(): void {}
}
