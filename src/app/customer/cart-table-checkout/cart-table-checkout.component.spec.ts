import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableCheckoutComponent } from './cart-table-checkout.component';

describe('CartTableCheckoutComponent', () => {
  let component: CartTableCheckoutComponent;
  let fixture: ComponentFixture<CartTableCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTableCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTableCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
