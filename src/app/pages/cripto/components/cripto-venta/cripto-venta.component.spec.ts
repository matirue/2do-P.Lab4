import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoVentaComponent } from './cripto-venta.component';

describe('CriptoVentaComponent', () => {
  let component: CriptoVentaComponent;
  let fixture: ComponentFixture<CriptoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptoVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
