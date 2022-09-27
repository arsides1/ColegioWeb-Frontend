import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoNivelComponent } from './grado-nivel.component';

describe('GradoNivelComponent', () => {
  let component: GradoNivelComponent;
  let fixture: ComponentFixture<GradoNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoNivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradoNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
