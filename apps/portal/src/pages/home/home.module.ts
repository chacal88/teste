import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {HomePageDefaultModule} from '@winker/components/home-page-default';
import {MenuListModule} from "../../components/menu-list/menu-list.module";

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        HomePageDefaultModule,
        MenuListModule
    ],
    exports: [
        HomePage
    ]
})
export class HomePageModule {
}
