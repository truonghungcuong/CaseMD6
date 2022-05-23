import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountOrdersByUserComponent } from './count-orders-by-user.component';

describe('CountOrdersByUserComponent', () => {
  let component: CountOrdersByUserComponent;
  let fixture: ComponentFixture<CountOrdersByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountOrdersByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountOrdersByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
