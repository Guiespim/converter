import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterCardComponent } from './converter-card.component';

describe('ConverterCardComponent', () => {
  let component: ConverterCardComponent;
  let fixture: ComponentFixture<ConverterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
