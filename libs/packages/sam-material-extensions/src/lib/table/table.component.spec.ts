import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsTableComponent } from './table.component';
import { MatTableDataSource, MatTableModule, MatSortModule, MatSort } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SdsTableComponent', () => {
  let component: SdsTableComponent;
  let fixture: ComponentFixture<SdsTableComponent>;
  let data: any[] = [{
    id: 1,
    firstName: "Abagail",
    lastName: "Podd",
    email: "apodd0@uol.com.br",
    gender: "Female",
    ipAddress: "118.2.75.197"
  }, {
    id: 2,
    firstName: "Ave",
    lastName: "Stileman",
    email: "astileman1@linkedin.com",
    gender: "Male",
    ipAddress: "160.87.118.244"
  }, {
    id: 3,
    firstName: "Tymothy",
    lastName: "Huff",
    email: "thuff2@yelp.com",
    gender: "Male",
    ipAddress: "59.14.252.45"
  }, {
    id: 4,
    firstName: "Mahala",
    lastName: "Scroggie",
    email: "mscroggie3@artisteer.com",
    gender: "Female",
    ipAddress: "86.218.233.126"
  }, {
    id: 5,
    firstName: "Kermie",
    lastName: "Favell",
    email: "kfavell4@bigcartel.com",
    gender: "Male",
    ipAddress: "46.212.152.92"
  }, {
    id: 6,
    firstName: "Jaymie",
    lastName: "Runnicles",
    email: "jrunnicles5@forbes.com",
    gender: "Male",
    ipAddress: "103.9.203.130"
  }, {
    id: 7,
    firstName: "Jessamine",
    lastName: "Mordey",
    email: "jmordey6@sitemeter.com",
    gender: "Female",
    ipAddress: "170.185.216.142"
  }, {
    id: 8,
    firstName: "Wayland",
    lastName: "Canto",
    email: "wcanto7@weibo.com",
    gender: "Male",
    ipAddress: "87.230.185.148"
  }, {
    id: 9,
    firstName: "Irvin",
    lastName: "Jocelyn",
    email: "ijocelyn8@nytimes.com",
    gender: "Male",
    ipAddress: "165.166.209.58"
  }, {
    id: 10,
    firstName: "Viviene",
    lastName: "Smiley",
    email: "vsmiley9@arizona.edu",
    gender: "Female",
    ipAddress: "255.136.64.110"
  }];

  let columns = [
    {
      primaryKey: 'id'
    },
    {
      primaryKey: 'firstName'
    },
    {
      primaryKey: 'lastName'
    },
    {
      primaryKey: 'email'
    },
    {
      primaryKey: 'gender'
    },
    {
      primaryKey: 'ipAddress'
    },
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsTableComponent ],
      imports: [
        MatTableModule,
        FontAwesomeModule,
        MatSortModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsTableComponent);
    component = fixture.componentInstance;
    component.columns = columns;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate columnIds onInit', () => {
    expect(component.columnIds.length).toEqual(columns.length)
  });

  it('should populate dataSource with MatTableDataSource objects onInit', () => {
    expect(component.dataSource).toBeDefined();
    expect(component.dataSource instanceof MatTableDataSource).toBeTruthy();
  });

  it('should disable sort if settings are undefined or settingss.sort is false', () => {
    expect(component.sort.disabled).toEqual(true);
  });
});
