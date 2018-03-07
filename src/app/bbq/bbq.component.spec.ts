import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbqComponent } from './bbq.component';

describe('BbqComponent', () => {
  let component: BbqComponent;
  let fixture: ComponentFixture<BbqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
