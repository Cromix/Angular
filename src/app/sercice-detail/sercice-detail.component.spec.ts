import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerciceDetailComponent } from './sercice-detail.component';

describe('SerciceDetailComponent', () => {
  let component: SerciceDetailComponent;
  let fixture: ComponentFixture<SerciceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerciceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerciceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
