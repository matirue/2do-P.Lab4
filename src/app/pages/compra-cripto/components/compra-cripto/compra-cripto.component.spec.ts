import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCriptoComponent } from './compra-cripto.component';

describe('CompraCriptoComponent', () => {
  let component: CompraCriptoComponent;
  let fixture: ComponentFixture<CompraCriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraCriptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraCriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
