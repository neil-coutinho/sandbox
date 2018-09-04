import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QComponent } from './q.component';
import { QService } from './q.service';

xdescribe('QComponent', () => {
  let component: QComponent;
  let fixture: ComponentFixture<QComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default status level of 200', () => {
    expect(component.status).toBe(200);
  });

  it('should toggle the value of flag', () => {
    expect(component.flag).toBeFalsy();
    component.toggleFlag();
    expect(component.flag).toBeTruthy();
  });

  it('should contain a function sum', () => {
    expect(component.sum).toBeDefined();
  });

  it('should return 11 when 5 and 6 are passed', () => {
    let result = component.sum(5, 6);
    expect(result).toEqual(11);
  });

  it('should return ALPHA when alpha is passed', () => {
      spyOn(component, 'capitalize').and.callThrough(); //and.callThrough is needed else spyied on function returns undefined;
      let result = component.log('alpha');

      expect(component.capitalize).toHaveBeenCalled();
      expect(component.capitalize).toHaveBeenCalledWith('alpha');
      expect(component.capitalize).toHaveBeenCalledTimes(1);
      expect(result).toEqual('ALPHA');

  });

  it('show throw a value', () => {
    expect(component.throwsError).toThrow('Hello World')
  });

  it('user.name should be equal to q service name', () => {
    let qservice = fixture.debugElement.injector.get(QService);
    console.log(component.user);
    console.log(qservice.user)
    expect(component.user.name).toEqual(qservice.user.name)
  })

  it('heading should say Hello if flag is true', () => {
    let template = fixture.debugElement.nativeElement;
    component.toggleFlag();
    fixture.detectChanges();
    expect(template.querySelector('#heading').textContent).toContain('Hello');
  })

  it('heading should say World if flag is false', () => {
    let template = fixture.debugElement.nativeElement;
    component.flag = false;
    fixture.detectChanges();
    expect(template.querySelector('#heading').textContent).toContain('World');
  })

  it('async test', () => {
    let qservice = fixture.debugElement.injector.get(QService);
    let spy = spyOn(qservice, 'getAsyc').and.returnValue('ABCD');
    component.getAsync();
    fixture.detectChanges();
    console.log(component.data);
    expect(component.data).toBe('A');
  })

});
