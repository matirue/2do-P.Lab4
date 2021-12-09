import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnableVendedorComponent } from './anable-vendedor.component';

describe('AnableVendedorComponent', () => {
  let component: AnableVendedorComponent;
  let fixture: ComponentFixture<AnableVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnableVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnableVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
