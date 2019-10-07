import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor( private navctrl: NavController,
               public alertCtrl: AlertController ) { }

  ngOnInit() {
  }


  async sendto() {
    const alert = await this.alertCtrl.create({
      message: 'ส่งข้อมูลเรียบร้อย',
      buttons: [{text: 'OK' , handler: () => {
        this.navctrl.navigateForward('/receipt-check');
      }}]
    });

    await alert.present();

  }


}
