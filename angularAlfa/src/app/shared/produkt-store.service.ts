import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Produkt } from './produkt';
import { ProduktRaw } from './produkt-raw';
import { ProduktFactory } from './produkt-factory';

import { Leistung } from './leistung';
import { LeistungRaw } from './leistung-raw';
import { LeistungFactory } from './leistung-factory';

import { Person } from '../ueber-uns/person';
import { PersonRaw } from '../ueber-uns/person-raw';
import { PersonFactory } from '../ueber-uns/person-factory';

import { NewsItem } from '../sidebar/news-item';
import { NewsItemRaw } from '../sidebar/news-item-raw';
import { NewsItemFactory } from '../sidebar/news-item-factory';

@Injectable()

export class ProduktStoreService {

  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Produkt>> {
    return this.http
      .get<ProduktRaw[]>(`${this.api}/produkte`)
      .pipe(
        retry(3),
        map(rawProdukte => rawProdukte
          .map(rawProdukt => ProduktFactory.fromObject(rawProdukt)),
        ),
        catchError(this.errorHandler)
      );
  }

  getAllLeistungen(): Observable<Array<Leistung>> {
    return this.http
      .get<LeistungRaw[]>(`${this.api}/leistungen`)
      .pipe(
        retry(3),
        map(rawLeistungen => rawLeistungen
          .map(rawLeistung => LeistungFactory.fromObject(rawLeistung)),
        ),
        catchError(this.errorHandler)
      );
  }

  getSingle(id: string): Observable<Produkt> {
    return this.http
      .get<ProduktRaw>(`${this.api}/produkte/${id}`)
      .pipe(
        retry(3),
        map(rawProdukt => ProduktFactory.fromObject(rawProdukt)),
        catchError(this.errorHandler)
      );
  }

  getSingleLeistung(id: string): Observable<Leistung> {
    return this.http
      .get<LeistungRaw>(`${this.api}/leistungen/${id}`)
      .pipe(
        retry(3),
        map(rawLeistung => LeistungFactory.fromObject(rawLeistung)),
        catchError(this.errorHandler)
      );
  }

  create(produkt: Produkt): Observable<any> {
    return this.http
      .post(`${this.api}/produkte`, produkt, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createLeistung(leistung: Leistung): Observable<any> {
    return this.http
      .post(`${this.api}/leistungen`, leistung, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }


  update(produkt: Produkt): Observable<any> {
    return this.http
      .put(`${this.api}/produkte/${produkt.id}`, produkt, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  remove(id: string): Observable<any> {
    return this.http
      .delete(`${this.api}/produkte/${id}`, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  removeLeistung(id: string): Observable<any> {
    return this.http
      .delete(`${this.api}/leistungen/${id}`, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateLeistung(leistung: Leistung): Observable<any> {
    return this.http
      .put(`${this.api}/leistungen/${leistung.id}`, leistung, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

  getAllPersonen(): Observable<Array<Person>> {
    return this.http
      .get<PersonRaw[]>(`${this.api}/personen`)
      .pipe(
        retry(3),
        map(rawPersonen => rawPersonen
          .map(rawPerson => PersonFactory.fromObject(rawPerson)),
        ),
        catchError(this.errorHandler)
      );
  }

  getAllNews(): Observable<Array<NewsItem>> {
    return this.http
      .get<NewsItemRaw[]>(`${this.api}/news`)
      .pipe(
        retry(3),
        map(rawNews => rawNews
          .map(rawNewsItem => NewsItemFactory.fromObject(rawNewsItem)),
        ),
        catchError(this.errorHandler)
      );
  }

}
