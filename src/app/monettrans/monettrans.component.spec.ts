import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonettransComponent } from './monettrans.component';

describe('MonettransComponent', () => {
  let component: MonettransComponent;
  let fixture: ComponentFixture<MonettransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonettransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonettransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
