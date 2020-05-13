import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMessageComponent } from './other-message.component';

describe('OtherMessageComponent', () => {
  let component: OtherMessageComponent;
  let fixture: ComponentFixture<OtherMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
