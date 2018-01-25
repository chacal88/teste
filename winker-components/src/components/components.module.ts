import {NgModule} from '@angular/core';
import {WallIconsModule} from "./wall-icons";
import {HomePageDefaultModule} from "./home-page-default";
import {AuthComponent} from './auth/auth';

@NgModule({
  declarations: [
    WallIconsModule,
    HomePageDefaultModule,
    AuthComponent
  ],
  imports: [],
  exports: [
    WallIconsModule,
    HomePageDefaultModule,
    AuthComponent
  ]
})
export class ComponentsModule {
}
