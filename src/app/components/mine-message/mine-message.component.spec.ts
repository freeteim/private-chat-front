import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineMessageComponent } from './mine-message.component';

describe('MineMessageComponent', () => {
  let component: MineMessageComponent;
  let fixture: ComponentFixture<MineMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
