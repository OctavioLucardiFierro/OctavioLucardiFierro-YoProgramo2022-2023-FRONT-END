import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaAptitudesComponent } from './experiencia-aptitudes.component';

describe('ExperienciaAptitudesComponent', () => {
  let component: ExperienciaAptitudesComponent;
  let fixture: ComponentFixture<ExperienciaAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaAptitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
