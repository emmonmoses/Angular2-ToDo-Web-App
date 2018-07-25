import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPopulateComponent } from './checkbox-populate.component';

describe('CheckboxPopulateComponent', () => {
  let component: CheckboxPopulateComponent;
  let fixture: ComponentFixture<CheckboxPopulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxPopulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxPopulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
