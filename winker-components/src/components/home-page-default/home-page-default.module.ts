import {NgModule} from '@angular/core';
import {HomePageDefaultComponent} from './home-page-default';
import {IonicModule} from 'ionic-angular';
import {WallIconsModule} from '../wall-icons';

@NgModule({
  declarations: [
    HomePageDefaultComponent,
  ],
  imports: [
    WallIconsModule,
    IonicModule.forRoot(HomePageDefaultComponent),
  ],
  exports: [
    HomePageDefaultComponent
  ]
})
export class HomePageDefaultModule {
}
