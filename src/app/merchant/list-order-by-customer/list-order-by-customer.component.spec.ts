import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderByCustomerComponent } from './list-order-by-customer.component';

describe('ListOrderByCustomerComponent', () => {
  let component: ListOrderByCustomerComponent;
  let fixture: ComponentFixture<ListOrderByCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderByCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
