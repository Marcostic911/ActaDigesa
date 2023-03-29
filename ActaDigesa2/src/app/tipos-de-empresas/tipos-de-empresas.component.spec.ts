import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDeEmpresasComponent } from './tipos-de-empresas.component';

describe('TiposDeEmpresasComponent', () => {
  let component: TiposDeEmpresasComponent;
  let fixture: ComponentFixture<TiposDeEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposDeEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDeEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
