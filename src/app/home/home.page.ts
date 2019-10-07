import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule} from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { map} from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userList: AngularFireList<any>;
  users: any[];

  itemRef: AngularFireList<any>;
  items: Observable<any[]>;

  img = 'https://www.img.in.th/images/20e0ca7323c07afb46bf872c610cc8eb.jpg';
  key: string;
  user: string;
  pass: string;

  constructor(private db: AngularFireDatabase,
              private navCtrl: NavController,
              ) {
    this.user = '';
    this.pass = '';
    this.userList = db.list('/rigister');
   }


  ngOnInit() {

  }

  /*gotoLogin() {
    if (this.user === '101' && this.pass === '1111') {
      this.navCtrl.navigateForward('/receipt-check');
    } else {
        alert('Try again');
        return;

    }
  }*/


  onLogin(user, pass) {
     firebase.auth().signInWithEmailAndPassword(user, pass).then( db => {
        if (db.user === user) {
          this.navCtrl.navigateRoot('/receipt-check');
        } else {
          alert('01');
        }
      }).catch(error => {
        alert('try again');
        return;

      });
}

}

