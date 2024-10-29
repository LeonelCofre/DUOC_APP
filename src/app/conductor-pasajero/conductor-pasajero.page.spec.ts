import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConductorPasajeroPage } from './conductor-pasajero.page';

describe('ConductorPasajeroPage', () => {
  let component: ConductorPasajeroPage;
  let fixture: ComponentFixture<ConductorPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
