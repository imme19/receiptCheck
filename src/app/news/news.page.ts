import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsArray = [
{img: 'https://www.img.in.th/images/71ca2ce72ee7fc477db7b5118c02f95e.jpg?fbclid=IwAR3M14PTo4FVuY-DWHytOehQDhKHhJMMWd_8jtNw0a3lx1djlm3DBVE80vU',
  name: 'แจ้งตัดไฟชั่วคราว',
  topic: 'ในวันที่ 20 สิงหาคม ช่วงเวลา 9.00-15.30 น. จะทำการตัดไฟฟ้า',
detail: 'เนื่องจากจะมีการตรวจเช็คเสาไฟต่างๆในหมู่บ้านจึงขอแจ้งมาเพื่ออทราบ ในวันที่ 20 สิงหาคม เวลา 9.00-15.30 น. จะทำการตัดไฟในแต่ละบ้าน ',
  date: '13/08/62'},
{ img: 'https://www.img.in.th/images/8e78c252d55cde517f29b712d2c41ce8.jpg',
name: 'โปรดระมัดระวังสุขภาพ', topic: 'ช่วงนี้สภาพอากาศแปรปรวนโปรดดูเเลสุขภาพของตนเองให้ดี',
detail: 'ในเวลาหนึ่งอาทิตย์นี้จะมีพายุเข้าหมู่บ้าน จะเกิดเหตุการณ์ฝนตกหนักและสภาพอากาศเปลี่ยน โปรดเตรียมตัวและดูแลสุขภาพของท่านให้ดี',
date: '11/08/62'},
{ img: 'https://www.img.in.th/images/7ed58a0a4af947fab7da53f64e691092.jpg',
name: 'แจ้งข่าววันหยุดของสำนักงาน',
topic: 'ในวันที่ 18 สิงหาคม สำนักงานหลักของหมู่บ้านจะปิดในบริการชั่วคราว ขออภับในความไม่สะดวก',
detail: 'เนื่องจากจะมีการทำความสะอาดใหญ่ของสำนักงานหลักประจำหมู่บ้าน จึงต้องขอแจ้งมาเพื่อทราบว่าสำนักงานจะหยุดในบริการชั่วคราว 1 วัน คือวันที่ 18 สิงหาคม หากใครมีธุระเร่งด่วนโปรดมาทำธุระของท่านก่อนวันปิดทำการ แจ้งมาเพื่อทราบ',
date: '10/08/62'}
  ];

  constructor(private NavCtrl: NavController) { }

  ngOnInit() {
  }

  view(item) {
    this.NavCtrl.navigateForward(['/detail-news', {
      img: item.img,
      name: item.name,
      detail: item.detail,
      date: item.date
    }]);
  }

}
