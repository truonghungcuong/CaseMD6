import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivelyForYouComponent } from './exclusively-for-you.component';

describe('ExclusivelyForYouComponent', () => {
  let component: ExclusivelyForYouComponent;
  let fixture: ComponentFixture<ExclusivelyForYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusivelyForYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusivelyForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
