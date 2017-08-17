import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnthedayComponent } from './ontheday.component';

describe('OnthedayComponent', () => {
  let component: OnthedayComponent;
  let fixture: ComponentFixture<OnthedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnthedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
