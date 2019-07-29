import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineLoginFormComponent } from './inline-login-form.component';

describe('InlineLoginFormComponent', () => {
  let component: InlineLoginFormComponent;
  let fixture: ComponentFixture<InlineLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
