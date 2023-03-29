import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTiposComponent } from './form-tipos.component';

describe('FormTiposComponent', () => {
  let component: FormTiposComponent;
  let fixture: ComponentFixture<FormTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
