
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrDashboardMaterialComponent } from './wr-dashboard-material.component';

describe('WrDashboardMaterialComponent', () => {
  let component: WrDashboardMaterialComponent;
  let fixture: ComponentFixture<WrDashboardMaterialComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WrDashboardMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrDashboardMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
