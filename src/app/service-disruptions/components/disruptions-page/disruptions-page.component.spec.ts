import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptionsPageComponent } from './disruptions-page.component';

describe('DisruptionsPageComponent', () => {
  let component: DisruptionsPageComponent;
  let fixture: ComponentFixture<DisruptionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisruptionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisruptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
