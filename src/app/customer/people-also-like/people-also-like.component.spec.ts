import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAlsoLikeComponent } from './people-also-like.component';

describe('PeopleAlsoLikeComponent', () => {
  let component: PeopleAlsoLikeComponent;
  let fixture: ComponentFixture<PeopleAlsoLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleAlsoLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAlsoLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
