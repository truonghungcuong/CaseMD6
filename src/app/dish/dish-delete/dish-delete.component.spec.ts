import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDeleteComponent } from './dish-delete.component';

describe('DishDeleteComponent', () => {
  let component: DishDeleteComponent;
  let fixture: ComponentFixture<DishDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
