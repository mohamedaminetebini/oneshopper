import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCatComponent } from './popular-cat.component';

describe('PopularCatComponent', () => {
  let component: PopularCatComponent;
  let fixture: ComponentFixture<PopularCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCatComponent]
    });
    fixture = TestBed.createComponent(PopularCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
