import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LandRoverComponent } from './land-rover.component';
import { LandRoverService } from '../../services/land-rover.service';
import { of } from 'rxjs';
import LandRoverData from '../../models/landrover.model';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

const landRoverDataMock: LandRoverData = {
  photos: [
    {
      id: 111,
      sol: 1000,
      camera: {
        id: 11,
        name: '',
        rover_id: 1,
        full_name: '',
      },
      img_src: '',
      earth_date: '',
      rover: {
        id: 1,
        name: '',
        landing_date: '',
        launch_date: '',
        status: '',
      },
    },
    {
      id: 111,
      sol: 1000,
      camera: {
        id: 11,
        name: '',
        rover_id: 1,
        full_name: '',
      },
      img_src: '',
      earth_date: '',
      rover: {
        id: 1,
        name: '',
        landing_date: '',
        launch_date: '',
        status: '',
      },
    },
    {
      id: 111,
      sol: 1000,
      camera: {
        id: 11,
        name: '',
        rover_id: 1,
        full_name: '',
      },
      img_src: '',
      earth_date: '',
      rover: {
        id: 1,
        name: '',
        landing_date: '',
        launch_date: '',
        status: '',
      },
    },
  ],
};

const landRoverServiceMock = {
  getLandRoverImageByName: () => of(landRoverDataMock),
};

describe('landRover Component', () => {
  let component: LandRoverComponent;
  let fixture: ComponentFixture<LandRoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [LandRoverComponent],
      providers: [
        {
          provide: LandRoverService,
          useValue: landRoverServiceMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandRoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTestList retrieves a TestPlanData', () => {
    component.getRoverPictures();
    expect(component.rovers.length).toBe(3);
  });
});
