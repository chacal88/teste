import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    pages: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.pages = [
            {title: 'Mensagens', icon: 'chatbubbles', color: 'cornflowerblue'},
            {title: 'Reservas', icon: 'calendar', color: 'darkmagenta'},
            {title: 'Contratos', icon: 'document', color: 'coral'},
            {title: 'Manutenções', icon: 'barcode', color: 'darkslateblue'},
            {title: 'Album de fotos', icon: 'images', color: 'green'},
            {title: 'Boletos', icon: 'barcode', color: 'darkslateblue'},
            {title: 'Câmeras de segurança', icon: 'videocam', color: 'rgb(83, 104, 114)'},
            {title: 'Condôminos', icon: 'people', color: 'rgb(178, 21, 86)'},
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad homepage')
    }

    navigateAboutPage() {
        this.navCtrl.push('AboutPage')
    }

}
