import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenclawComponent } from './revenclaw.component';

describe('RevenclawComponent', () => {
  let component: RevenclawComponent;
  let fixture: ComponentFixture<RevenclawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenclawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenclawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
