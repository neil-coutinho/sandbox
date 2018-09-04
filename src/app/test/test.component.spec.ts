import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestService } from './test.service';
describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testService: TestService;
  let collab: TestService;
  let comp: TestComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      providers: [ TestService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    testService = fixture.debugElement.injector.get(TestService);

    collab = new TestService();
    comp = new TestComponent(collab);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set message to hello from test on init', () => {
    component.ngOnInit()
    expect(component.message).toContain('hello from test');
  });

  it('should make message = to stub message', () => {
    collab.get = () => { return 'neil'}
    comp.ngOnInit()
    expect(comp.message).toContain('neil');
  });
});
