import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsComponent } from './proyects.component';
import { ProyectsService } from './proyects.service';
import { Proyect } from './proyect';

describe('ProyectsComponent', () => {
  let component: ProyectsComponent;
  let fixture: ComponentFixture<ProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ProyectsServiceService', () => {
  let service: ProyectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Proyect', () => {
  it('should create an instance', () => {
    expect(new Proyect()).toBeTruthy();
  });
});
