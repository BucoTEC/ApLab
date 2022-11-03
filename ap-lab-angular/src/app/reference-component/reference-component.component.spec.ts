import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceComponentComponent } from './reference-component.component';

describe('ReferenceComponentComponent', () => {
  let component: ReferenceComponentComponent;
  let fixture: ComponentFixture<ReferenceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
