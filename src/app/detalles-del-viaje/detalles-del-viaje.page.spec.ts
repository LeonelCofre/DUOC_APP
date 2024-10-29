import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesDelViajePage } from './detalles-del-viaje.page';

describe('DetallesDelViajePage', () => {
  let component: DetallesDelViajePage;
  let fixture: ComponentFixture<DetallesDelViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesDelViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
