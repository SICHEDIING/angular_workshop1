import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidenceComponenetComponent } from './add-residence-componenet.component';

describe('AddResidenceComponenetComponent', () => {
  let component: AddResidenceComponenetComponent;
  let fixture: ComponentFixture<AddResidenceComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddResidenceComponenetComponent]
    });
    fixture = TestBed.createComponent(AddResidenceComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
