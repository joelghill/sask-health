import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptionDetailsComponent } from './disruption-details.component';

describe('DisruptionDetailsComponent', () => {
  let component: DisruptionDetailsComponent;
  let fixture: ComponentFixture<DisruptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisruptionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisruptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
