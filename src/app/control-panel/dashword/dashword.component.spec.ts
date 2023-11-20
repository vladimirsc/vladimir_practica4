import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashwordComponent } from './dashword.component';

describe('DashwordComponent', () => {
  let component: DashwordComponent;
  let fixture: ComponentFixture<DashwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
