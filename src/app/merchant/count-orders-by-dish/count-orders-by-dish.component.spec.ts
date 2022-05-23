import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountOrdersByDishComponent } from './count-orders-by-dish.component';

describe('CountOrdersByDishComponent', () => {
  let component: CountOrdersByDishComponent;
  let fixture: ComponentFixture<CountOrdersByDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountOrdersByDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountOrdersByDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
