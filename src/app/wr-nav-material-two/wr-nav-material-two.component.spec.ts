
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WrNavMaterialTwoComponent } from './wr-nav-material-two.component';

describe('WrNavMaterialTwoComponent', () => {
  let component: WrNavMaterialTwoComponent;
  let fixture: ComponentFixture<WrNavMaterialTwoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [WrNavMaterialTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrNavMaterialTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
