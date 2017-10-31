import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorDataComponent } from './monitor-data.component';

describe('MonitorDataComponent', () => {
  let component: MonitorDataComponent;
  let fixture: ComponentFixture<MonitorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
