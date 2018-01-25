///<reference path="../../../node_modules/@types/jasmine/index.d.ts"/>
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WallIconsComponent} from "./wall-icons";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('WallIconsComponent (inline template)', () => {

  let comp: WallIconsComponent;
  let fixture: ComponentFixture<WallIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WallIconsComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(WallIconsComponent);

    comp = fixture.componentInstance;

    comp.items = [
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
    expect(comp instanceof WallIconsComponent).toBe(true);
  });

  it('should have 8 pages', () => {
    expect(comp.items.length).toBe(8);
  });

});
