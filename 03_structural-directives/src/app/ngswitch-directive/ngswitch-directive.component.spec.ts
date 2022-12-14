import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchDirectiveComponent } from './ngswitch-directive.component';

describe('NgswitchDirectiveComponent', () => {
  let component: NgswitchDirectiveComponent;
  let fixture: ComponentFixture<NgswitchDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
