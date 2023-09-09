import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationeComponent } from './informatione.component';

describe('InformationeComponent', () => {
  let component: InformationeComponent;
  let fixture: ComponentFixture<InformationeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationeComponent]
    });
    fixture = TestBed.createComponent(InformationeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
