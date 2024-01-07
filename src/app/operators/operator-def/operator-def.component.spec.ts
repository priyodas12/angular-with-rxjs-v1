import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDefComponent } from './operator-def.component';

describe('OperatorDefComponent', () => {
  let component: OperatorDefComponent;
  let fixture: ComponentFixture<OperatorDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorDefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
