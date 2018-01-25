import {NgModule} from '@angular/core';
import {WallIconsComponent} from './wall-icons';
import {IonicModule} from 'ionic-angular';

@NgModule({
  declarations: [
    WallIconsComponent,
  ],
  imports: [
    IonicModule.forRoot(WallIconsComponent)
  ],
  exports: [
    WallIconsComponent
  ]
})
export class WallIconsModule {

}
