import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNivelDetalleComponent } from './editar-nivel-detalle.component';

describe('EditarNivelDetalleComponent', () => {
  let component: EditarNivelDetalleComponent;
  let fixture: ComponentFixture<EditarNivelDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNivelDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarNivelDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
