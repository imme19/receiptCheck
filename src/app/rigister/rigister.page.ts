import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { NavController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.page.html',
  styleUrls: ['./rigister.page.scss'],
})
export class RigisterPage implements OnInit {

  itemRef: AngularFireList<any>;
  items: Observable<any[]>;

  key: string;
  user: string;
  pass: string;
  isToggle: boolean;
  isAdd: boolean;

  constructor(private db: AngularFireDatabase,
              private NavCtrl: NavController ) { }

  ngOnInit() {
    this.isToggle = false;
    this.isAdd = true;
    this.user = '';
    this.pass = '';
    this.showData();
  }

  /*display all data from database (firebase)*/
  showData() {
    this.itemRef = this.db.list('/');
    this.items = this.itemRef.snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      ) /*ทุกข้อมูลใน firebase*/
    );
  }

  select(item: any) {
    this.user = item.note.user;
    this.pass = item.note.pass;
    this.key = item.key;
    this.isAdd = false;
  }

  /*ใช้ลบข้อมูลในแต่ละรายการตาม key ที่เลือก*/
  delete(item: any) {
    this.itemRef.remove(item.key);
    this.isToggle = false;
  }

  /*method for display or hide form*/
  openForm() {
    this.isToggle = !this.isToggle;
    this.isAdd = true;
  }

  /*method for save data into database(firebase) เป็นmethodที่ใช้สำหรับบันทึกหรือแก้ไขข้อมูล*/
  save(note: any, data: string) {
    if (this.isAdd === true) {
      this.itemRef.push({note});
      this.isToggle = false;
      this.db.list('/home').push(data);
    } else {
      if (this.key) {
        this.itemRef.update(this.key, {note});
      }
      this.isAdd = false;
      /*this.isToggle = false*/
    }



  }
}
