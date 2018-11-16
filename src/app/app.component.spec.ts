import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeDefined();
  })

  it('should have the router outlet', () => {
   let variable =  fixture.debugElement.query(By.directive(RouterOutlet));
   expect(variable).not.toBeNull();
  })

  /*it('should have a route that points to weatherMap page', () => {
    let elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = elements.findIndex(i => i.properties['href'] === '/weather-map');
    expect(index).toBe(0);
    // expect(index).toBeGreaterThan(0);
  })*/
});
