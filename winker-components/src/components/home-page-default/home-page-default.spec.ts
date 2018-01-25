///<reference path="../../../node_modules/@types/jasmine/index.d.ts"/>
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HomePageDefaultComponent} from "./home-page-default";

describe('WallIconsComponent (inline template)', () => {

  let comp: HomePageDefaultComponent;
  let fixture: ComponentFixture<HomePageDefaultComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageDefaultComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageDefaultComponent);

    comp = fixture.componentInstance;

    comp.pages = [
      {title: 'Mensagens', icon: 'chatbubbles', color: 'cornflowerblue'},
      {title: 'Reservas', icon: 'calendar', color: 'darkmagenta'},
      {title: 'Contratos', icon: 'document', color: 'coral'},
      {title: 'Manutenções', icon: 'barcode', color: 'darkslateblue'},
      {title: 'Album de fotos', icon: 'images', color: 'green'},
      {title: 'Boletos', icon: 'barcode', color: 'darkslateblue'},
      {title: 'Câmeras de segurança', icon: 'videocam', color: 'rgb(83, 104, 114)'},
      {title: 'Condôminos', icon: 'people', color: 'rgb(178, 21, 86)'},
    ];

  });

  it('should be created', () => {
    expect(comp instanceof HomePageDefaultComponent).toBe(true);
  });

  it('should have 8 pages', () => {
    expect(comp.pages.length).toBe(8);
  });

});
