import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFoodComponent } from './detail-food.component';

describe('DetailFoodComponent', () => {
  let component: DetailFoodComponent;
  let fixture: ComponentFixture<DetailFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
