import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListComponent } from './gift-list.component';

describe('GiftListComponent', () => {
  let component: GiftListComponent;
  let fixture: ComponentFixture<GiftListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
