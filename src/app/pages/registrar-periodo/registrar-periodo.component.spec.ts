import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPeriodoComponent } from './registrar-periodo.component';

describe('RegistrarPeriodoComponent', () => {
  let component: RegistrarPeriodoComponent;
  let fixture: ComponentFixture<RegistrarPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
