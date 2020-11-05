import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadRolComponent } from './aad-rol.component';

describe('AadRolComponent', () => {
  let component: AadRolComponent;
  let fixture: ComponentFixture<AadRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
