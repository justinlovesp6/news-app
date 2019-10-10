import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderNavbarComponent } from '../../sharedUIComponents/header-navbar/header-navbar.component';
import { AllArticlesComponent } from './all-articles.component';

describe('AllArticlesComponent', () => {
  let component: AllArticlesComponent;
  let fixture: ComponentFixture<AllArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllArticlesComponent, HeaderNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
