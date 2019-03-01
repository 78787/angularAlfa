import { Component, OnInit } from '@angular/core';
import { NewsItem } from './news-item';
import { Produkt } from '../shared/produkt';
import { Leistung } from '../shared/leistung';
import { ProduktStoreService } from '../shared/produkt-store.service';


@Component({
  selector: 'ab-news',
  templateUrl: './news.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  news: NewsItem[];
  produkte: Produkt[];
  leistungen: Leistung[];

  constructor(private ps: ProduktStoreService) { }

  ngOnInit() {
    this.ps.getAllNews().subscribe(res => this.news = res);

    this.ps.getAll().subscribe(res => this.produkte = res);

    this.ps.getAllLeistungen().subscribe(res => this.leistungen = res);
  }

}
