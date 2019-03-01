import { Leistung } from './leistung';
import { LeistungRaw } from './leistung-raw';

export class LeistungFactory {
    static empty(): Leistung {
        return new Leistung('', '', '', '', 0, '', false);
    }

    static fromObject(rawLeistung: LeistungRaw | any): Leistung {
        return new Leistung(
            rawLeistung.id,
            rawLeistung.name,
            rawLeistung.description,
            rawLeistung.descriptionFull,
            rawLeistung.price,
            rawLeistung.img,
            rawLeistung.featured,

        );
    }
}

