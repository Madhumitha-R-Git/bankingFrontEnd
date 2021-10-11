import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinchangeComponent } from './pinchange.component';

describe('PinchangeComponent', () => {
  let component: PinchangeComponent;
  let fixture: ComponentFixture<PinchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
