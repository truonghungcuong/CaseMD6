import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderByDishComponent } from './list-order-by-dish.component';

describe('ListOrderByDishComponent', () => {
  let component: ListOrderByDishComponent;
  let fixture: ComponentFixture<ListOrderByDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderByDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderByDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
