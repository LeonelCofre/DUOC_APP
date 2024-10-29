import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasajeroViajePage } from './pasajero-viaje.page';

describe('PasajeroViajePage', () => {
  let component: PasajeroViajePage;
  let fixture: ComponentFixture<PasajeroViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajeroViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
