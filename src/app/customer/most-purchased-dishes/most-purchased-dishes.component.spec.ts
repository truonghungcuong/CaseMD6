import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPurchasedDishesComponent } from './most-purchased-dishes.component';

describe('MostPurchasedDishesComponent', () => {
  let component: MostPurchasedDishesComponent;
  let fixture: ComponentFixture<MostPurchasedDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPurchasedDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPurchasedDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
