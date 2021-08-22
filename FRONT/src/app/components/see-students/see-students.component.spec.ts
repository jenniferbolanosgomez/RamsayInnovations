import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeStudentsComponent } from './see-students.component';

describe('SeeStudentsComponent', () => {
  let component: SeeStudentsComponent;
  let fixture: ComponentFixture<SeeStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
