
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrTableMaterialComponent } from './wr-table-material.component';

describe('WrTableMaterialComponent', () => {
  let component: WrTableMaterialComponent;
  let fixture: ComponentFixture<WrTableMaterialComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WrTableMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrTableMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
