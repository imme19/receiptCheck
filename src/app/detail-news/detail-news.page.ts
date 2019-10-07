import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.page.html',
  styleUrls: ['./detail-news.page.scss'],
})
export class DetailNewsPage implements OnInit {

  details = {img: '', name: '' , detail: '', date: ''};

  constructor(private route: ActivatedRoute) {
    this.details.img = this.route.snapshot.paramMap.get('img');
    this.details.name = this.route.snapshot.paramMap.get('name');
    this.details.detail = this.route.snapshot.paramMap.get('detail');
    this.details.date = this.route.snapshot.paramMap.get('date');
   }

  ngOnInit() {
  }

}
